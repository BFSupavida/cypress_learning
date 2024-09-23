describe('Member List', () => {
    it('render member list correctly', () => {
        const members = [
            'Sathit',
            'Sombut',
            'Somchai',
            'Somprasong',
            'Somthep'
        ]

        cy.visit('http://172.20.10.5:3000/cypress/member-list')
        //each = loop / each = function that need function inside
        cy.get('[data-testid="member-item"]').each(($element, index) => {
            const member = members[index];
        }) 
    })
})