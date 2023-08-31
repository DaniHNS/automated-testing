describe('The Home Page', () => {
    beforeEach(() => {
      cy.viewport(375, 667) // Set the mobile viewport width and height https://docs.cypress.io/api/commands/viewport
      cy.on('window:before:load', (win) => {
        Object.defineProperty(win.navigator, 'userAgent', {
           value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
          });
      })
    })
    it('Successfully Books on Opb-V6 Mobile', () => {

      let year = new Date().getFullYear();
      let month = new Date().getMonth() % 12 + 2; // Next month always

      // Edge case end of the year handling
      year = month == 13 ? (year + 1) : year;
      month = month == 13 ? 1 : month;

      cy.visit('https://onepagebooking.com/hnsautotest6?arrival=24.' + month + '.' + year + '&departure=26.' + month + '.' + year + '&rooms=1&adults=1') // change URL to match your dev URL

      // uncaught:exception handler 
      cy.on('uncaught:exception', (err, runnable) => {
        // Check if the error is a SyntaxError due to cache after deployment
        if (err.message.includes('SyntaxError')) {
          Cypress.log({
            name: 'Caught SyntaxError',
            message: err.message,
            consoleProps: () => ({
              SyntaxErrorMessage: err.message,
            }),
          });
          // Return false to prevent the error from failing the test
          return false;
        }
        return false;
      });

      cy.get('body.is-mobile', { timeout: 1000 }).should('be.visible');
      cy.wait(4000);
      cy.get('opb6-rooms-mobile .rooms-grid .rooms-grid-item:first-child .price-options .price-wrap > div:last-child .btn-select', {timeout: 4000}).click({force: true})
      cy.wait(1000);
      cy.get('.modal-content .fixed-bottom .btn-select ', {timeout: 4000}).click({force: true})
      cy.get('opb6-room-details-mobile .rates .rate-row-1 opb6-rate-details .btn-select', {timeout: 4000}).click({force: true})
      cy.wait(1000);
      cy.get('opb6-optional-booking-sections-mobile .booking-sections-mobile .container:last-child opb6-optional-booking-sections-mobile-item .booking-section-mobile-item', {timeout: 4000}).as('btnMobItem')
      cy.get('@btnMobItem').click({force: true});
      cy.wait(1000);
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #firstName', {timeout: 4000}).should('be.visible') //lazy loaded
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #firstName', {timeout: 4000}).type("Daniel")
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #lastName', {timeout: 4000}).should('be.visible') //lazy loaded
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #lastName', {timeout: 4000}).type("Plotkin")
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap input#email', {timeout: 4000}).should('be.visible') //lazy loaded
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap input#email', {timeout: 4000}).type('testing@hotelnetsolutions.com')

      //Final booking action
      cy.scrollTo('bottom')
      cy.get('#booking-button-wrap .booking-button button', {timeout: 2000}).should('be.visible')
      // cy.get('#booking-button-wrap .booking-button button', {timeout: 4000}).trigger('mouseover').click({force: true});
      cy.get('#booking-button-wrap .booking-button button .booking-button-content-text', { timeout: 4000 }).as('bookingButton');
      cy.get('@bookingButton').trigger('mouseover').click();
      cy.wait(1000);
      cy.location('href', { timeout: 10000 }).should('include', 'https://onepagebooking.com/hnsautotest6/confirmation');
  
    }) 
    })
  
  
  
  