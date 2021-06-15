import { Role, Selector } from 'testcafe'
import { registeredUser } from './roles'

const url = 'https://www.saucedemo.com/'

fixture`My Fixture`.page`${url}`

test('My Test', async (t) => {
    await t.useRole(registeredUser).click('#add-to-cart-sauce-labs-backpack')
})
