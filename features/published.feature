Feature: Automatizacion ghost pruebas E2E

@user1 @web
Scenario: Como admin de mi pagina quiero agregar post
  Given I navigate to page "https://ghost-waki.onrender.com/ghost/#/signin"
  When the Customer is logged into the ghost
  And the customer clicks on published and new post
  And the customer enters the new post
  And the customer saves the post
  Then the post is register succesful