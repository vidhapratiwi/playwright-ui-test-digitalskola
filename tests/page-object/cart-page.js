const { expect } = require("@playwright/test");

export class CartPage {
    constructor(page) {
        this.cartPageTitle = page.locator('[data-test="title"]')
        this.item1Title = page.getByText('Sauce Labs Backpack')
        this.item2Title = page.getByText('Sauce Labs Fleece Jacket')
    }
    
    async validateCartPage() {
        await expect(this.cartPageTitle).toBeVisible()
    }

    async validateItemCart() {
        await expect(this.item1Title).toBeVisible()
        await expect(this.item2Title).toBeVisible()
    }

}