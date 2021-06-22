import { Selector, t } from 'testcafe'
import { getfakeaddUrl } from '../resources/constants'

fixture`Webtable fixture`.page(getfakeaddUrl())
//Note the definition of a value attribute
test('web table test', async (t) => {
    await t
        .typeText('#session_email', 'ramya@gmail.com')
        .typeText('#session_password', 'pwd')
        .click('[value="Sign in"]')
        .click('[href="/addresses"]')

    const table = Selector('.table')
    const rows = table.find('tbody > tr')
    const rowscount = await rows.count
    //checking for the text row wise-> this is specifically used to click on the a element in a certain row
    for (let i = 0; i < rowscount; i++) {
        const currentrow = rows.nth(i)
        const columns = currentrow.child('td')
        const columnname = await columns.nth(0).innerText
        if (await columnname.match('abc')) {
            console.log(columnname)
            //using chain selector to click on an element in the web table
            await t.click(currentrow.child('td').nth(4).child('a'))
            await t.click('[data-test="list"]')
        }
    }

    //checking for the text in the web table
    await t.expect(table.textContent).contains('njks')
})
