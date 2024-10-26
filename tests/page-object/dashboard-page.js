const { expect } = require("@playwright/test");

export class DashboardPage {
    
    constructor(page) {
        this.pageTitle = page.getByText('Swag Labs')
        this.menuButton = page.getByRole('button', { name:'Open Menu'})
        this.item1Button = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.item2Button = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
        this.item1Title = page.getByText('Sauce Labs Backpack')
        this.item2Title = page.getByText('Sauce Labs Fleece Jacket')
        this.cartButton = page.locator('[data-test="shopping-cart-link"]')
    }

    async validateOnPage() {
        expect(this.pageTitle).toBeVisible()
        expect(this.menuButton).toBeVisible()
    }

    async addItem() {
        await this.item1Button.click()
        await this.item2Button.click()
    }

    async validateSelectedItem() {
        await expect(this.item1Title).toBeVisible()
        await expect(this.item2Title).toBeVisible()
    }

    async clickCartButton() {
        await this.cartButton.click()
    }

}