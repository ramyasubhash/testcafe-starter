import { configure, screen } from '@testing-library/testcafe'
import { getfakeaddUrl } from '../resources/constants'
import faker from 'faker'
import { Selector } from 'testcafe'

fixture`Webtable fixture`
    .clientScripts(configure({ testIdAttribute: 'data-test' }))
    .page(getfakeaddUrl())

const stateselect = Selector('#address_state')

//Note the definition of a value attribute
test('web table test', async (t) => {
    //kent api implementation
    //testcafe implmentation
    await t
        .typeText(screen.getByPlaceholderText(/email/i), 'ramya@gmail.com')
        .typeText(screen.getByPlaceholderText(/password/i), 'pwd')
        .click(screen.getByTestId('submit'))
        .click('[href="/addresses"]')
        .click(screen.getByTestId('create'))

        //faker implementation
        .typeText(screen.getByLabelText(/first name/i), faker.name.firstName())
        .typeText(screen.getByLabelText(/last name/i), faker.name.lastName())

        //date picker and color implementation
        .typeText(Selector('input[type="date"]'), '1990-10-10')
        .pressKey('tab')
        .expect(Selector('input[type="date"]').value)
        .eql('1990-10-10')
        .typeText('#address_color', '#FF8040')

        //dropdown action implementation
        .click(stateselect)
        .click(stateselect.find('option').withText('Arizona'))
        .expect(stateselect.value)
        .eql('AZ')

    //--this returns all the options
    // .expect(stateselect.innerText)
    // .eql('Arizona')
    // .expect(screen.getByDisplayValue('Arizona')
    // .eql('Arizona')
    //userEvent.selectOptions(screen.getByRole('option', { name: 'Alaska' }))
    //  .click('[type="date"]')
})
