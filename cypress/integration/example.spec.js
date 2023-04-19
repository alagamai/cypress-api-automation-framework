const expectedPlaces =  require('../fixtures/expectedPlaces.json')

describe.only('api testing', () => {
    it('GET - api.zippopotam.us/country/postal-code', () => {
        cy.request({
            method: 'GET',
            url:  "/us/90210",
            failOnStatusCode : true,
        }).as('resp')
        cy.get('@resp').its('status').should('eq', 200)
        cy.get('@resp').then(response => {
            cy.task("log", JSON.stringify(response.body))
            cy.task("log", response.body.country)
            expect(response.body.places[0]['state']).to.equal('California')
            expect(response.body).to.deep.equal(expectedPlaces)
        })

    })

    it('GET - api.zippopotam.us/country/state/city ', () => {
        cy.request({
            method: 'GET',
            url:  "/us/ma/belmont",
            failOnStatusCode : true,
        }).as('response')

        cy.get('@response').its('status').should('eq', 200)
        cy.get('@response').then(response => {
            cy.task("log", JSON.stringify(response.body))
            expect(response.body.places[0]['place name']).to.equal('Belmont')
        })
    })
})

