describe('The Home Page', () => {
  beforeEach(() => {
    cy.viewport(1960, 1400) // Set the viewport width and height
  })

    it('Successfully Books Opb V5', () => {

      let year = new Date().getFullYear();
      let month = new Date().getMonth() % 12 + 2; // Next month always

      // Edge case end of the year handling
      year = month == 13 ? (year + 1) : year;
      month = month == 13 ? 1 : month;
    
      cy.visit('https://onepagebooking.com/hnsautotest5?arrival=24.' + month + '.' + year + '&departure=26.' + month + '.' + year + '&rooms=1&adults=1') // change URL to match your dev URL
      // cy.visit('https://onepagebooking.com/_hnsautotest5?arrival=24.09.23&departure=26.09.23&rooms=1&adults=2') 
      // cy.get('a.nav-element-link[href="/hotelns5/location"]', {timeout: 4000}).click() // change URL to match your dev URL

      //Test url parameters

      // cy.get('app-masthead-room-options #guests-config-toggle .icons-wrap').click() 
      // cy.get('#guests-config-wrap ul li:first-child .row div:last-child .person-number-config-button:first-child button', {timeout: 300}).click() // parents count +1
      // // cy.get('#guests-config-wrap ul li.children-amount-config .row div:last-child .person-number-config-button:first-child button', {timeout: 300}).click() 
      // // cy.get('app-child-config .child-config-row .child-age-item .dropdown.open', {timeout: 300}).click() 
      // // cy.get('app-child-config .child-config-row .child-age-item ul.dropdown-menu li:nth-child(3)', {timeout: 300}).click() 
      // cy.get('app-masthead-room-options #guests-config-toggle .icons-wrap', {timeout: 1000}).click() 
      // // cy.get('#calendar-and-sticky-wrap #opb-calendar + button.btn', {timeout: 1000}).should('be.visible')
      // cy.get('#calendar-and-sticky-wrap #opb-calendar + button.btn', {timeout: 1000}).click() 
      // cy.get('#opb-calendar .first-month + .calendar-month-wrap .day:contains("24")').should('be.visible')
      // cy.get('#opb-calendar .first-month + .calendar-month-wrap .day:contains("26")').should('be.visible')
      // cy.get('#opb-calendar .first-month + .calendar-month-wrap .day:contains("24")', {timeout: 300}).click() 
      // cy.get('#opb-calendar .first-month + .calendar-month-wrap .day:contains("26")', {timeout: 300}).click()

      // end of TEST

      cy.wait(2000);

      // cy.get('#rooms-grid .grid-item:first-child .room-details-btn-wrap', {timeout: 1000}).click()
      cy.get('#rooms-grid .grid-item:first-child .room-details-btn-wrap', {timeout: 1000}).click()
  
      cy.wait(2000);
      cy.get('opb-room-details #available-rates > div > div:first-child .select-button-wrap > button', {timeout: 5000}).should('not.be.disabled')
      
      cy.get('opb-room-details #available-rates > div > div:first-child .select-button-wrap > button', {timeout: 4000}).click()
      // cy.get('app-next-step-button #next-step-overscroll', {timeout: 2000}).click()
      
    
      cy.get('opb-address-form form > #address-form-fields-wrap', {timeout: 1000}).should('be.visible') //lazy loaded
      cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row:first-child .dropdown.open .form-control.ui-select-toggle ', {timeout: 4000}).click() 
      cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row:first-child .dropdown.open ul.dropdown-menu li:first-child a', {timeout: 4000}).click() 
      cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#prename').type('Test')
      cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#name').type('Test') 
      cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#email').type('testing@hotelnetsolutions.com')
     
      cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#telnumber').type('0305555555') 
      cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#street').type('Genthiner Str.') 
      cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#street_number').type('8') 
      cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#postal_code').type('10875') 
      cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#locality').type('Berlin') 

      //Final booking action
      cy.scrollTo('bottom')
      // cy.get('#booking-wrap .optin-wrap input[name="cb-red-carpet"] + label[for="cb-acceptAgbs-1"]').click({ force: true })
      cy.get('#booking-wrap #booking-btn-wrap #submit-btn-wrap button', {timeout: 100}).should('be.visible')
      cy.get('#booking-wrap #booking-btn-wrap #submit-btn-wrap button').click()
      cy.wait(2000);
      cy.location('href', { timeout: 10000 }).should('include', 'https://onepagebooking.com/hnsautotest5/confirmation');
  
    })
    // it('successfully selected calendar days', () => {
    //   cy.visit('https://onepagebooking.com/hotelns5')
    //   cy.get('#opb-calendar .day:contains("22")', {timeout: 3000}).click() 
    //   cy.get('#opb-calendar .day:contains("24")', {timeout: 300}).click()
      
    // })
    
  })



