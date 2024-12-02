const { test, expect } = require ('@playwright/test');

// Použití proměnných prostředí pro citlivé údaje
const USERNAME = process.env.TEST_USERNAME || 'r-Filip.Smetana';
const PASSWORD = process.env.TEST_PASSWORD || 'filip2017';

test('bakalari', async ({ page }) => {
    // Přejděte na přihlašovací stránku
    await page.goto('https://bakalari.skoladablice.cz/login');

    // Ověření viditelnosti loga
    await expect(page.locator('#loginLogo img')).toBeVisible();

    // Ověření textu školy
    await expect(page.locator('.bk-login-schoolName')).toHaveText('Základní škola a mateřská škola, Praha 8 - Ďáblice, U Parkánu 17');
    
    // Vyplnění přihlašovacích údajů
    await page.locator('#username').fill(USERNAME);
    await page.locator('#password').fill(PASSWORD);

    // Kliknutí na tlačítko "Přihlásit" 
    await page.locator('button[type=submit]').click();

    await expect(page.locator('.mobile-app')).toBeVisible();
})