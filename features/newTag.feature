Feature: Automatizacion ghost pruebas E2E

@user1 @web
Scenario: Como admin de mi pagina quiero agregar tags nuevos
  Given I navigate to page "https://ghost-waki.onrender.com/ghost/#/signin"
  And the Customer is logged into the ghost
  And the customer clicks on tags and new tags
  And the customer enters the new tag
  Then the customer saves the tag
