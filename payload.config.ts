import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';

export default buildConfig({
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- InnorMost CMS',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  
  editor: slateEditor({}),
  
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/innermost',
  }),

  collections: [
    // User Profiles Collection
    {
      slug: 'profiles',
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'age', 'location', 'status', 'createdAt'],
        group: 'Users',
      },
      access: {
        read: () => true,
        create: ({ req: { user } }) => Boolean(user),
        update: ({ req: { user } }) => Boolean(user),
        delete: ({ req: { user } }) => Boolean(user?.role === 'admin'),
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: {
            description: 'User\'s display name',
          },
        },
        {
          name: 'age',
          type: 'number',
          required: true,
          min: 18,
          max: 100,
        },
        {
          name: 'profileImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Main profile photo',
          },
        },
        {
          name: 'images',
          type: 'array',
          maxRows: 6,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
          admin: {
            description: 'Additional profile photos (max 6)',
          },
        },
        {
          name: 'bio',
          type: 'textarea',
          maxLength: 500,
          admin: {
            description: 'Short bio/description (max 500 characters)',
          },
        },
        {
          name: 'location',
          type: 'text',
          admin: {
            description: 'City, State/Country',
          },
        },
        {
          name: 'interests',
          type: 'array',
          maxRows: 10,
          fields: [
            {
              name: 'interest',
              type: 'text',
              required: true,
            },
          ],
          admin: {
            description: 'User interests and hobbies',
          },
        },
        {
          name: 'lookingFor',
          type: 'select',
          options: [
            { label: 'Long-term relationship', value: 'long-term' },
            { label: 'Dating', value: 'dating' },
            { label: 'Friends', value: 'friends' },
            { label: 'Networking', value: 'networking' },
          ],
          admin: {
            description: 'What they\'re looking for',
          },
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
            { label: 'Suspended', value: 'suspended' },
          ],
          defaultValue: 'active',
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'verified',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            position: 'sidebar',
            description: 'Profile verification status',
          },
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            position: 'sidebar',
            description: 'Show on homepage',
          },
        },
      ],
    },

    // Pages Collection
    {
      slug: 'pages',
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
        group: 'Content',
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          admin: {
            position: 'sidebar',
          },
          hooks: {
            beforeValidate: [
              ({ value, originalDoc, data }) => {
                if (data.title && !value) {
                  return data.title
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '');
                }
                return value;
              },
            ],
          },
        },
        {
          name: 'content',
          type: 'blocks',
          blocks: [
            {
              slug: 'hero',
              labels: {
                singular: 'Hero Section',
                plural: 'Hero Sections',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'subtitle',
                  type: 'textarea',
                },
                {
                  name: 'ctaText',
                  type: 'text',
                  defaultValue: 'Get Started',
                },
                {
                  name: 'ctaHref',
                  type: 'text',
                  defaultValue: '/signup',
                },
                {
                  name: 'backgroundGradient',
                  type: 'checkbox',
                  defaultValue: true,
                },
              ],
            },
            {
              slug: 'profileGrid',
              labels: {
                singular: 'Profile Grid',
                plural: 'Profile Grids',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                },
                {
                  name: 'subtitle',
                  type: 'textarea',
                },
                {
                  name: 'profiles',
                  type: 'relationship',
                  relationTo: 'profiles',
                  hasMany: true,
                  filterOptions: {
                    status: { equals: 'active' },
                    featured: { equals: true },
                  },
                },
                {
                  name: 'columns',
                  type: 'group',
                  fields: [
                    {
                      name: 'mobile',
                      type: 'number',
                      defaultValue: 2,
                      min: 1,
                      max: 2,
                    },
                    {
                      name: 'tablet',
                      type: 'number',
                      defaultValue: 3,
                      min: 2,
                      max: 4,
                    },
                    {
                      name: 'desktop',
                      type: 'number',
                      defaultValue: 4,
                      min: 3,
                      max: 6,
                    },
                  ],
                },
              ],
            },
            {
              slug: 'features',
              labels: {
                singular: 'Features Section',
                plural: 'Features Sections',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'subtitle',
                  type: 'textarea',
                },
                {
                  name: 'features',
                  type: 'array',
                  fields: [
                    {
                      name: 'icon',
                      type: 'text',
                      required: true,
                      admin: {
                        description: 'Emoji or icon identifier',
                      },
                    },
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      required: true,
                    },
                  ],
                  minRows: 1,
                  maxRows: 6,
                },
              ],
            },
            {
              slug: 'cta',
              labels: {
                singular: 'Call to Action',
                plural: 'Call to Actions',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'subtitle',
                  type: 'textarea',
                },
                {
                  name: 'primaryCTA',
                  type: 'group',
                  fields: [
                    {
                      name: 'text',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'href',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
                {
                  name: 'secondaryCTA',
                  type: 'group',
                  fields: [
                    {
                      name: 'text',
                      type: 'text',
                    },
                    {
                      name: 'href',
                      type: 'text',
                    },
                  ],
                },
                {
                  name: 'style',
                  type: 'select',
                  options: [
                    { label: 'Gradient Background', value: 'gradient' },
                    { label: 'Brand Background', value: 'brand' },
                    { label: 'White Background', value: 'white' },
                  ],
                  defaultValue: 'gradient',
                },
              ],
            },
          ],
        },
        {
          name: 'seo',
          type: 'group',
          label: 'SEO',
          fields: [
            {
              name: 'title',
              type: 'text',
              maxLength: 60,
              admin: {
                description: 'Page title for search engines (max 60 characters)',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              maxLength: 160,
              admin: {
                description: 'Meta description for search engines (max 160 characters)',
              },
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Social share image',
              },
            },
          ],
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'draft',
          admin: {
            position: 'sidebar',
          },
        },
      ],
    },

    // Blog Posts Collection
    {
      slug: 'posts',
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'author', 'status', 'publishedDate'],
        group: 'Content',
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'excerpt',
          type: 'textarea',
          maxLength: 200,
          admin: {
            description: 'Brief excerpt for blog listing (max 200 characters)',
          },
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'author',
          type: 'relationship',
          relationTo: 'users',
          required: true,
        },
        {
          name: 'categories',
          type: 'relationship',
          relationTo: 'categories',
          hasMany: true,
        },
        {
          name: 'tags',
          type: 'array',
          fields: [
            {
              name: 'tag',
              type: 'text',
            },
          ],
          maxRows: 5,
        },
        {
          name: 'publishedDate',
          type: 'date',
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'draft',
          admin: {
            position: 'sidebar',
          },
        },
      ],
    },

    // Media Collection
    {
      slug: 'media',
      upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
          {
            name: 'thumbnail',
            width: 400,
            height: 300,
            crop: 'centre',
          },
          {
            name: 'card',
            width: 768,
            height: 1024,
            crop: 'centre',
          },
          {
            name: 'tablet',
            width: 1024,
            height: null,
            crop: 'centre',
          },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
      access: {
        read: () => true,
      },
    },

    // Categories Collection
    {
      slug: 'categories',
      admin: {
        useAsTitle: 'name',
        group: 'Content',
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },

    // Users Collection (Admin)
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
        group: 'Admin',
      },
      access: {
        create: () => true,
        read: () => true,
        update: ({ req: { user } }) => Boolean(user),
        delete: ({ req: { user } }) => Boolean(user?.role === 'admin'),
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'select',
          options: [
            { label: 'Admin', value: 'admin' },
            { label: 'Editor', value: 'editor' },
            { label: 'User', value: 'user' },
          ],
          defaultValue: 'user',
          required: true,
        },
      ],
    },
  ],

  // Global Settings
  globals: [
    {
      slug: 'settings',
      admin: {
        group: 'Settings',
      },
      fields: [
        {
          name: 'siteName',
          type: 'text',
          required: true,
          defaultValue: 'InnorMost',
        },
        {
          name: 'siteDescription',
          type: 'textarea',
          defaultValue: 'Find your perfect match through meaningful connections',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'favicon',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'socialMedia',
          type: 'group',
          fields: [
            {
              name: 'twitter',
              type: 'text',
            },
            {
              name: 'instagram',
              type: 'text',
            },
            {
              name: 'facebook',
              type: 'text',
            },
          ],
        },
        {
          name: 'contact',
          type: 'group',
          fields: [
            {
              name: 'email',
              type: 'email',
            },
            {
              name: 'phone',
              type: 'text',
            },
            {
              name: 'address',
              type: 'textarea',
            },
          ],
        },
      ],
      access: {
        read: () => true,
        update: ({ req: { user } }) => Boolean(user?.role === 'admin'),
      },
    },
  ],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});

import path from 'path';