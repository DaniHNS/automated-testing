describe('The Home Page', () => {
  beforeEach(() => {
    cy.viewport(1960, 1400) // Set the viewport width and height
  })

    it('Successfully Books Opb-V6', () => {

      let year = new Date().getFullYear();
      let month = new Date().getMonth() % 12 + 2; // Next month always

      // Edge case end of the year handling
      year = month == 13 ? (year + 1) : year;
      month = month == 13 ? 1 : month;

      cy.visit('https://onepagebooking.com/hnsautotest6?arrival=24.' + month + '.' + year + '&departure=26.' + month + '.' + year + '&rooms=1&adults=1') // change URL to match your dev URL

      cy.on('uncaught:exception', (err, runnable) => {
        // Check if the error is a SyntaxError due to cache after deployment
        if (err.message.includes('SyntaxError')) {
          // Log the error without failing the test
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
      //Test url parameter
      // cy.get('opb6-duration .quick-book-section-wrap').click() 
      // cy.wait(1000);
        // cy.get('opb6-calendar .months-wrap > div:nth-child(2) opb6-month-table .day:contains("22")', {timeout: 1000}).should('be.visible')
        // cy.get('opb6-calendar .months-wrap > div:nth-child(2) opb6-month-table .day:contains("24")', {timeout: 1000}).should('be.visible')
        // cy.get('opb6-calendar .months-wrap > div:nth-child(2) opb6-month-table .day:contains("22")', {timeout: 1000}).click() 
        // cy.get('opb6-calendar .months-wrap > div:nth-child(2) opb6-month-table .day:contains("24")', {timeout: 1000}).click()
      // End of Test
      cy.wait(2000);
        
      // Cypress cannot continue the command chain sometimes
      // cy.get('opb6-rooms-grid .rooms-grid .rooms-grid-item:first-child .btn-select').trigger('mouseover').click();
      cy.get('opb6-rooms-grid .rooms-grid .rooms-grid-item:first-child .btn-select').as('btnSelect');
      cy.get('@btnSelect', {timeout: 4000}).trigger('mouseover').click();

      cy.wait(1000);
      cy.get('opb6-room-details .rates .rate-row:first-child opb6-rate-details .btn-select', {timeout: 4000}).should('be.visible') 
      cy.get('opb6-room-details .rates .rate-row:first-child opb6-rate-details .btn-select', {timeout: 4000}).click()
      cy.wait(1000);
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #firstName', {timeout: 1000}).should('be.visible') //lazy loaded
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #firstName', {timeout: 1000}).type("Daniel")
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #lastName', {timeout: 1000}).should('be.visible') 
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #lastName', {timeout: 1000}).type("Plotkin")
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap input#email', {timeout: 1000}).should('be.visible') 
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap input#email', {timeout: 1000}).type('testing@hotelnetsolutions.com')

      //Final booking action
      cy.scrollTo('bottom')
      cy.get('#booking-button-wrap .booking-button button', {timeout: 1000}).should('be.visible');

      //Cypress cannot continue the command chain sometimes
      // cy.get('#booking-button-wrap .booking-button button .booking-button-content-text', {timeout: 1000}).trigger('mouseover').click();
      cy.get('#booking-button-wrap .booking-button button .booking-button-content-text', { timeout: 1000 }).as('bookingButton');
      cy.get('@bookingButton').trigger('mouseover').click();

      cy.wait(1000);
      cy.location('href', { timeout: 10000 }).should('include', 'https://onepagebooking.com/hnsautotest6/confirmation');
  
    }) 
  })



