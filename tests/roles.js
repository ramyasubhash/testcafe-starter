import { Role, Selector } from 'testcafe'

export const registeredUser = Role(
    'https://www.saucedemo.com/',
    async (t) => {
        await t
            .typeText('#user-name', 'standard_user')
            .pressKey('tab')
            .typeText('#password', 'secret_sauce')
            .click('#login-button')
    },

    {
        preserveUrl: true,
    }
)
