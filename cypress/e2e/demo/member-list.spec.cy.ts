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

            cy.wrap($element).within(() => {
                //wrap $element bc มันไม่ใช่คำสั่งของ cypress มันเลยไม่เข้าใจ
                //within ใช้สำหรับจำกัดขอเขตการค้นหา elements
                cy.wrap($element).within(() => {
                    cy.get('[data-testid="member-name"]').should('have.text', member);
                    cy.get('[data-testid="member-name"]')
                        .should('have.attr', 'alt, member')
                        .and('have.attr', 'src')
                        .and('include', member.toLowerCase())
                        //เปลี่ยนจาก should เป็น and ได้ แค่จะอ่านรู้เรื่องมากขึ้น
                })
            })
        }) 
    })
})

//
//invoke เข้าถึง prop
