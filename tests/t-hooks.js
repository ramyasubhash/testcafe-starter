import { Role, Selector, t } from 'testcafe'

const url = 'https://www.saucedemo.com/'

const loginUser = async () => {
    await t
        .typeText('#user-name', 'standard_user')
        .pressKey('tab')
        .typeText('#password', 'secret_sauce')
        .click('#login-button')
}

const logoutUser = async () => {
    await t.click('#react-burger-menu-btn').click('#logout_sidebar_link')
}

fixture`test Hooks implementation`.page`${url}`
    .beforeEach(async () => {
        await loginUser()
    })
    .afterEach(async (t) => {
        await logoutUser()
    })

test('Expect containter', async (t) => {
    await t
        .expect(Selector('.header_secondary_container'))
        .ok()
        .click('#add-to-cart-sauce-labs-backpack')
        .click('#shopping_cart_container a span')
        .expect(Selector('.cart_list').withText(/sauce labs backpack/i))
        .ok()
        .click('#remove-sauce-labs-backpack')
        .click('#continue-shopping')
        .expect(Selector('.inventory_list').withText(/sauce labs backpack/i))
        .ok()
        .click('#add-to-cart-sauce-labs-backpack')
        .click('#shopping_cart_container a span')
        .click('#checkout')
})

// test('Expect products', async (t) => {
//     await t.expect(Selector('.title').withText(/products/i).visible).ok()
// })
