const { test, expect } = require("@playwright/test");

test.describe('web UI Demo', () => {
    
    test('TC-1 Successful Login', async ({ page }) => {
        //navigation
        await page.goto('https://www.saucedemo.com/');

        //input username
        await page.locator('//*[@id="user-name"]').fill('standard_user')
        //input password
        await page.getByPlaceholder('Password').fill('secret_sauce')
        //click button
        await page.getByText('Login').click()

        //assert
        //validasi dashboard page
        await expect(page.getByText('Swag Labs')).toBeVisible()
        await expect(page.getByRole('button', { name:'Open Menu'})).toBeVisible()

        //bebas menggunakan elemen apa saja untuk di test
        //best practicenya menggunakan sesuatu yang tidak berubah
        //example: id 
        
        //add item to cart
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible()
        await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible()
        
        //click cart
        await page.locator('[data-test="shopping-cart-link"]').click()

        //validasi your cart page
        await expect(page.locator('[data-test="title"]')).toBeVisible()
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible()
        await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible()

    });

});