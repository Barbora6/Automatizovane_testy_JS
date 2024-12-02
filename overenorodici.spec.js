const { test, expect } = require('@playwright/test');

test('Overeno rodici', async ({ page }) => {
    // Navigace na stránku
    await page.goto('https://overenorodici.cz/#');

    // Kliknutí na sekci "Mapa míst"
    await page.getByRole('heading',{ name: 'Mapa míst' }).click();

    // Ověření atributu "title" na nadpisu
    await page.locator('.clear h1').getByTitle(/Objevte místo pro vás a vaše děti/);
    
     // Ověření textového obsahu
     await expect(page.locator('.headline')).toContainText(
        'Nejlepší místa, kde si to s dětmi užít, najdete na doporučení dalších rodičů'
    );
    
    // Ověření tlačítka "Hledat" a kliknutí na něj
    await expect(page.getByRole('button', { name: 'Hledat' })).toBeVisible();
    await page.getByRole('button', { name: 'Hledat' }).click();

    // Ověření přítomnosti tlačítka "Přihlásit se"
    await expect(page.getByRole('button', { name: 'Přihlásit se' })).toBeVisible();

    // Vyplnění vyhledávacího pole "Hledat text"
    const searchInput = page.getByPlaceholder('Hledat text');
    await expect(searchInput).toBeVisible();
    await searchInput.fill('výlety');
});