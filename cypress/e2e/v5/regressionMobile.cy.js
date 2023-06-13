describe('The Home Page', () => {
    beforeEach(() => {
      cy.viewport(375, 667) // Set the mobile viewport width and height https://docs.cypress.io/api/commands/viewport
    })
  
      it('Successfully Books', () => {
        cy.visit('https://onepagebooking.com/hnsautotest5') // change URL to match your dev URL
        cy.get('app-masthead-room-options .btn-mobile-next-step-wrap .btn').click() 
        // cy.get('#guests-config-wrap ul li:first-child .row div:last-child .person-number-config-button:first-child button', {timeout: 300}).click() // parents count +1
    
        // cy.get('app-masthead-room-options #guests-config-toggle .icons-wrap').click() 
  
        cy.get('#opb-calendar .first-month + .calendar-month-wrap .day:contains("12")', {timeout: 1000}).should('be.visible')
        cy.get('#opb-calendar .first-month + .calendar-month-wrap .day:contains("14")', {timeout: 1000}).should('be.visible')
        cy.get('#opb-calendar .first-month + .calendar-month-wrap .day:contains("12")', {timeout: 1000}).click() 
        cy.get('#opb-calendar .first-month + .calendar-month-wrap .day:contains("14")', {timeout: 1000}).click()
        // cy.get('app-rm-chat .bubble.bubble-close').then(($element) => {
        //   if ($element.length > 0) {
        //     // The element is present, perform assertions or actions
        //     cy.wrap($element).click();
  
        //   } else {
        //     // The element is not present, handle the condition accordingly
        //     cy.log('The element is not found');
        //     // Continue with other test steps
        //   }
        // });
                 //  cy.get('app-rm-chat .bubble.bubble-close', {timeout: 3000}).should('be.visible')
            //  cy.get('app-rm-chat .bubble.bubble-close', {timeout: 300}).click()
        cy.get('body').find('app-rm-chat .bubble.bubble-close').should('not.exist');

        cy.get('#rooms-grid .grid-item:first-child .room-details-btn-wrap').click()
        cy.wait(300);
        cy.get('modal-overlay #available-rates .rate-plan-container-0 .rate-plan-row button').click()
        cy.get('#section-4 .btn-mobile-next-step-wrap button', {timeout: 2000}).click()
        
      
        cy.get('opb-address-form form > #address-form-fields-wrap', {timeout: 1000}).should('be.visible') //lazy loaded
        cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row:first-child .dropdown.open .form-control.ui-select-toggle ', {timeout: 100}).click() 
        cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row:first-child .dropdown.open ul.dropdown-menu li:first-child a').click() 
        cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#prename').type('Test')
        cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#name').type('Test') 
        cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#email').type('testing@hotelnetsolutions.com')
       
        cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#telnumber').type('0305555555') 
        cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#street').type('Genthiner Str.') 
        cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#street_number').type('8') 
        cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#postal_code').type('10875') 
        cy.get('opb-address-form form > #address-form-fields-wrap .form-field-row input#locality').type('Berlin') 
  
        //Final booking action
        // cy.get('#booking-wrap .optin-wrap input[name="cb-red-carpet"] + label[for="cb-acceptAgbs-1"]').click({ force: true })
  
        cy.get('#booking-wrap #booking-btn-wrap #submit-btn-wrap button').click()
  
        cy.location('href').should('include', 'https://onepagebooking.com/hnsautotest5/confirmation');
    
      })

      
    })
  
  
  
  