describe('The Home Page', () => {
    beforeEach(() => {
      cy.viewport(375, 667) // Set the mobile viewport width and height https://docs.cypress.io/api/commands/viewport
      cy.on('window:before:load', (win) => {
        Object.defineProperty(win.navigator, 'userAgent', {
           value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
          });
      })
    })
    it('Successfully Books on Mobile', () => {
      const time = new Date().getTime();
      cy.visit('https://onepagebooking.com/hnsautotest6?t='+time) // change URL to match your dev URL
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
      // cy.get('a.nav-element-link[href="/hotelns5/location"]', {timeout: 4000}).click() // change URL to match your dev URL
      cy.get('opb6-booking-config-mobile ul li:nth-child(2) button').click() 
      // cy.get('#guests-config-wrap ul li:first-child .row div:last-child .person-number-config-button:first-child button', {timeout: 300}).click() // parents count +1
      // cy.get('#guests-config-wrap ul li.children-amount-config .row div:last-child .person-number-config-button:first-child button', {timeout: 300}).click() 
      // cy.get('app-child-config .child-config-row .child-age-item .dropdown.open', {timeout: 300}).click() 
      // cy.get('app-child-config .child-config-row .child-age-item ul.dropdown-menu li:nth-child(3)', {timeout: 300}).click() 
      // cy.get('app-masthead-room-options #guests-config-toggle .icons-wrap').click() 
      cy.wait(1000);
      //cy.get('opb6-calendar-mobile-modal opb6-calendar-mobile .months-wrap.table-wrap > div:nth-child(2) opb6-month-table .more-than-two-months.is-mobile p.day:contains("25")', {timeout: 1000}).should('be.visible')
      //cy.get('opb6-calendar-mobile-modal opb6-calendar-mobile .months-wrap.table-wrap > div:nth-child(2) opb6-month-table .more-than-two-months.is-mobile p.day:contains("26")', {timeout: 1000}).should('be.visible')
      cy.get('opb6-calendar-mobile-modal opb6-calendar-mobile .months-wrap.table-wrap > div:nth-child(2) opb6-month-table .more-than-two-months.is-mobile p.day:contains("25")', {timeout: 1000}).click() 
      cy.get('opb6-calendar-mobile-modal opb6-calendar-mobile .months-wrap.table-wrap > div:nth-child(2) opb6-month-table .more-than-two-months.is-mobile p.day:contains("26")', {timeout: 1000}).click()

      cy.get('.modal-content .fixed-bottom .btn-select.btn-config-ready ', {timeout: 300}).click()
      cy.wait(1000);
      cy.get('opb6-rooms-mobile .rooms-grid .rooms-grid-item:first-child .price-options .price-wrap > div:last-child .btn-select').click()
      cy.wait(1000);
      cy.get('.modal-content .fixed-bottom .btn-select ', {timeout: 300}).click()
      cy.get('opb6-room-details-mobile .rates .rate-row:first-child opb6-rate-details .btn-select', {timeout: 2000}).click()
      cy.wait(1000);
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #firstName', {timeout: 1000}).should('be.visible') //lazy loaded
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #firstName', {timeout: 1000}).type("Daniel")
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #lastName', {timeout: 1000}).should('be.visible') //lazy loaded
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #lastName', {timeout: 1000}).type("Plotkin")
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap input#email', {timeout: 1000}).should('be.visible') //lazy loaded
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap input#email', {timeout: 1000}).type('testing@hotelnetsolutions.com')
      // cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #firstName', {timeout: 1000}).should('be.visible') //lazy loaded
      // cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #firstName', {timeout: 1000}).type("Daniel")



      // cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#prename').type('Test')
      // cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#name').type('Test') 
      // cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#email').type('plotkin@hotelnetsolutions.de')
     
      // cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#telnumber').type('0305555555') 
      // cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#street').type('Genthiner Str.') 
      // cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#street_number').type('8') 
      // cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#postal_code').type('10875') 
      // cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#locality').type('Berlin') 

      //Final booking action
      // cy.get('#booking-wrap .optin-wrap input[name="cb-red-carpet"] + label[for="cb-acceptAgbs-1"]').click({ force: true })
      cy.scrollTo('bottom')
      cy.get('#booking-button-wrap .booking-button button', {timeout: 1000}).should('be.visible')
      cy.get('#booking-button-wrap .booking-button button', {timeout: 1000}).trigger('mouseover').click();
      // cy.get('#booking-button-wrap .booking-button button').trigger('click')
      cy.wait(2000);
      cy.location('href').should('include', 'https://onepagebooking.com/hnsautotest6/confirmation');
  
    }) 
    })
  
  
  
  