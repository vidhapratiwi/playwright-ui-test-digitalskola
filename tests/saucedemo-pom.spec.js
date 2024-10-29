const { test } = require("./base/base-test");

//lebih simplae pake custom fixture
test('TC 3 - Successful login using page object', { tag: ['@page-object', '@smoke']}, async ({ loginPage, dashboardPage, cartPage }) => {
    //cara lebih singkat
    await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD)
    await dashboardPage.validateOnPage()

    await dashboardPage.addItem()
    await dashboardPage.validateSelectedItem()
    await dashboardPage.clickCartButton()

    await cartPage.validateCartPage()
    await cartPage.validateItemCart()
    
});

test('TC 4 - Successful login using page object - visual user', { tag: ['@mobile']}, async ({ loginPage, dashboardPage }) => { 
    await loginPage.login(process.env.VISUAL_USER, process.env.PASSWORD)
    await dashboardPage.validateOnPage()
    
});

test.beforeAll(async () => {
    console.log("diekesekusi dari before all - melakukan setup test env")
});

test.beforeEach(async () => {
    console.log("diekesekusi dari before each - melakukan clean up item di cart")
});

//screenshot
test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        console.log("Test failed, perform screenshot")
        const image = await page.screenshot({path: 'failed screenshot.png', fullPage:true})
        testInfo.attach('failed test', {
            body: image,
            contentType: 'image/png',
        })
    }

});



