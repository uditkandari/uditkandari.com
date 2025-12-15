import { expect, test } from '@playwright/test';

test.describe('Home page', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Udit Kandari/);
  });

  test('shows correct title', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title).toContain('Udit Kandari');
  });

  test('has GitHub and LinkedIn links', async ({ page }) => {
    await page.goto('/');

    const github = page.getByRole('link', { name: 'GitHub', exact: true }).first();
    const githubHref = await github.getAttribute('href');
    expect(githubHref).toBeTruthy();
    expect(new URL(githubHref || '').hostname).toContain('github.com');

    const linkedin = page.getByRole('link', { name: 'LinkedIn', exact: true }).first();
    const linkedinHref = await linkedin.getAttribute('href');
    expect(linkedinHref).toBeTruthy();
    expect(new URL(linkedinHref || '').hostname).toContain('linkedin.com');
  });

  test('shows About and Projects sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  });

  test('has canonical link for production domain', async ({ page }) => {
    await page.goto('/');
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', 'https://uditkandari.com/');
  });
});
