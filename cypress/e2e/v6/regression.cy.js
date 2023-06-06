describe('The Home Page', () => {
  beforeEach(() => {
    cy.viewport(1960, 1400) // Set the viewport width and height
  })

    it('Successfully Books', () => {
      cy.visit('https://onepagebooking.com/hnsautotest6') // change URL to match your dev URL
      // cy.get('a.nav-element-link[href="/hotelns5/location"]', {timeout: 4000}).click() // change URL to match your dev URL
      cy.get('opb6-duration .quick-book-section-wrap').click() 
      // cy.get('#guests-config-wrap ul li:first-child .row div:last-child .person-number-config-button:first-child button', {timeout: 300}).click() // parents count +1
      // cy.get('#guests-config-wrap ul li.children-amount-config .row div:last-child .person-number-config-button:first-child button', {timeout: 300}).click() 
      // cy.get('app-child-config .child-config-row .child-age-item .dropdown.open', {timeout: 300}).click() 
      // cy.get('app-child-config .child-config-row .child-age-item ul.dropdown-menu li:nth-child(3)', {timeout: 300}).click() 
      // cy.get('app-masthead-room-options #guests-config-toggle .icons-wrap').click() 

      cy.get('opb6-calendar .months-wrap > div:nth-child(2) opb6-month-table .day:contains("22")').should('be.visible')
      cy.get('opb6-calendar .months-wrap > div:nth-child(2) opb6-month-table .day:contains("24")').should('be.visible')
      cy.get('opb6-calendar .months-wrap > div:nth-child(2) opb6-month-table .day:contains("22")', {timeout: 300}).click() 
      cy.get('opb6-calendar .months-wrap > div:nth-child(2) opb6-month-table .day:contains("24")', {timeout: 300}).click()
      cy.wait(1000);
      cy.get('opb6-rooms-grid .rooms-grid .rooms-grid-item:first-child .btn-select').click()
      cy.wait(1000);
      cy.get('opb6-room-details .rates .rate-row:first-child opb6-rate-details .btn-select', {timeout: 2000}).should('be.visible') 
      cy.get('opb6-room-details .rates .rate-row:first-child opb6-rate-details .btn-select', {timeout: 2000}).click()
      cy.wait(1000);
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #firstName', {timeout: 1000}).should('be.visible') //lazy loaded
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #firstName', {timeout: 1000}).type("Daniel")
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #lastName', {timeout: 1000}).should('be.visible') //lazy loaded
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap #lastName', {timeout: 1000}).type("Plotkin")
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap input#email', {timeout: 1000}).should('be.visible') //lazy loaded
      cy.get('opb6-order-form form .form-section-wrap .group-main-wrap input#email', {timeout: 1000}).type('plotkin@hotelnetsolutions.de')
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
      cy.get('#booking-button-wrap .booking-button', {timeout: 1000}).click()
      cy.get('#booking-button-wrap .booking-button button').trigger('click')
      cy.wait(2000);
      cy.location('href').should('include', 'https://onepagebooking.com/hnsautotest6/confirmation');
  
    }) 
  })



