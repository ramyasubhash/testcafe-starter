import { Selector, t } from 'testcafe'
import * as constants from '../resources/constants'

fixture`Webtable fixture`.page(getfakeaddUrl())
//Note the definition of a value attribute
test('web table test', async (t) => {
    await t
        .typeText('#session_email', 'ramya@gmail.com')
        .typeText('#session_password', 'pwd')
        .click('[value="Sign in"]')
        .click('[href="/addresses"]')
})
