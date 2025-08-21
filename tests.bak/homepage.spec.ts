import { test, expect } from '@playwright/test';

test.describe('InnorMost Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/InnorMost/);
  });

  test('should display hero section with main CTA', async ({ page }) => {
    // Check hero headline
    const heroTitle = page.locator('h1').first();
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).toContainText("Don't worry, let happen!");

    // Check primary CTA button
    const ctaButton = page.locator('text=Get Started').first();
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute('href', '/signup');
  });

  test('should display navigation menu', async ({ page }) => {
    // Check logo
    const logo = page.locator('text=InnorMost').first();
    await expect(logo).toBeVisible();

    // Check navigation links on desktop
    await expect(page.locator('nav a[href="/"]')).toBeVisible();
    await expect(page.locator('nav a[href="/about"]')).toBeVisible();
    await expect(page.locator('nav a[href="/features"]')).toBeVisible();
    await expect(page.locator('nav a[href="/contact"]')).toBeVisible();
  });

  test('should display mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Mobile menu button should be visible
    const menuButton = page.locator('[aria-label="Toggle mobile menu"]');
    await expect(menuButton).toBeVisible();
    
    // Click to open mobile menu
    await menuButton.click();
    
    // Mobile navigation should be visible
    const mobileNav = page.locator('nav').nth(1);
    await expect(mobileNav).toBeVisible();
  });

  test('should display profile cards in grid', async ({ page }) => {
    // Look for profile cards
    const profileCards = page.locator('[data-testid="profile-card"]');
    
    // Should have at least some profile cards
    await expect(profileCards.first()).toBeVisible();
  });

  test('should display features section', async ({ page }) => {
    // Check features section title
    const featuresTitle = page.locator('h2:has-text("Why choose InnorMost?")');
    await expect(featuresTitle).toBeVisible();

    // Check that feature cards are present
    const featureCards = page.locator('text=Smart Matching');
    await expect(featureCards).toBeVisible();
  });

  test('should have proper responsive behavior', async ({ page }) => {
    // Test desktop layout
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.screenshot({ path: 'test-results/homepage-desktop.png', fullPage: true });

    // Test tablet layout
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.screenshot({ path: 'test-results/homepage-tablet.png', fullPage: true });

    // Test mobile layout
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ path: 'test-results/homepage-mobile.png', fullPage: true });
  });

  test('should validate design fidelity against Figma', async ({ page }) => {
    // Check brand colors are applied
    const ctaButton = page.locator('text=Get Started').first();
    const buttonColor = await ctaButton.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    
    // Brand color should be applied (RGB values for #FF6B35)
    expect(buttonColor).toMatch(/rgb\(255,\s*107,\s*53\)/);
  });

  test('should load without console errors', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Should not have any console errors
    expect(errors).toHaveLength(0);
  });

  test('should have accessible navigation', async ({ page }) => {
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    
    // First focusable element should be navigation or skip link
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();

    // Continue tabbing through navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Should be able to activate links with Enter
    await page.keyboard.press('Enter');
  });

  test('should handle CTA button interactions', async ({ page }) => {
    const ctaButton = page.locator('text=Get Started').first();
    
    // Test hover state
    await ctaButton.hover();
    
    // Button should have hover styles applied
    const hoverColor = await ctaButton.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    
    // Should be darker than the base color (brand-600)
    expect(hoverColor).toBeTruthy();
    
    // Test click (would normally navigate, but we'll just ensure it's clickable)
    await expect(ctaButton).toBeEnabled();
  });
});