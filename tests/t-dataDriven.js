import { Role, Selector, t } from 'testcafe'
//import * as constants from '../resources/constants'
import { getSauceUrl } from '../resources/constants'

const dataset = require('../resources/data.json')
fixture`data driven test implementation`.page(getSauceUrl())
dataset.forEach((data) => {
    test(`Login as '${data.role}' should '${
        data.success ? 'succeed' : 'fail'
    }'`, async (t) => {
        await t
            .typeText('#user-name', data.username)
            .pressKey('tab')
            .typeText('#password', data.password)
            .click('#login-button')

        if (data.success) {
            await t
                .expect(
                    Selector('.header_secondary_container').withText(
                        /products/i
                    ).exists
                )
                .ok()
        } else {
            await t
                .expect(
                    Selector('.error-message-container').withText(
                        data.errormessage
                    ).exists
                )
                .ok()
        }

        // expect(Selector('.error-message-container').innetText).eql(
        //     data.errormessage
        // ) --did not work

        // .withText(data.errormessage)
        // .ok()

        // const element = Selector('.error-message-container')
        // console.log(await element.textContent)
    })
})
