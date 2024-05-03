Feature: Automatizacion ghost pruebas E2E

@user1 @web
Scenario: Como admin de mi pagina quiero agregar miembros a mi lista
  Given I navigate to page "https://ghost-waki.onrender.com/ghost/#/signin"
  When the Customer is logged into the ghost
  And the customer clicks on members and new members
  And the customer enters the new member
  And the customer saves the members
  Then the members is register succesful

