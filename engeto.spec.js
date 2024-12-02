const { test, expect } = require ('@playwright/test');

test('engeto test', async ({ page }) => {
    await page.goto('https://engeto.cz/');
    
    // Ověření viditelnosti loga a obrázku na stránce
    await expect(page.locator('#logo')).toBeVisible();
    await expect(page.locator('.logo-link img')).toBeVisible();

    // Ověření nadpisu
    await expect(page).toHaveTitle(/Kurzy programování a dalších IT technologií | ENGETO/);

    // Ověření viditelnosti textu
    await expect(page.getByText('Děláme IT vzdělávání dostupným. Pomůžeme ti získat nové znalosti, nastartovat kariéru a uplatnit se.')).toBeVisible();
});