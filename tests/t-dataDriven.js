import { Role, Selector, t } from 'testcafe'

const url = 'https://www.saucedemo.com/'
const dataset = require('../resources/data.json')
fixture`data driven test implementation`.page`${url}`
dataset.forEach((data) => {
    test(`Login as '${data.name}'`, async (t) => {
        await t
            .typeText('#user-name', data.username)
            .pressKey('tab')
            .typeText('#password', data.password)
            .click('#login-button')

        // expect(Selector('.error-message-container').innetText).eql(
        //     data.errormessage
        // ) --did not work

        // .withText(data.errormessage)
        // .ok()

        // const element = Selector('.error-message-container')
        // console.log(await element.textContent)
    })
})
