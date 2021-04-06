context('Google', () => {
    describe('Vist the paystack home page', () => {
        beforeEach(() => {
            cy.visit('https://google.com');
            cy.viewport(1440, 900);
        })

        it('Should login a user successfully', () => {
            cy.get('input.gLFyf').type('Celestine Omin{enter}');
        })
    });
});