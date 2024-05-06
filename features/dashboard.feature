Feature: Test E2E Dashboard Ghost

@user1 @web
Scenario: Navegar en el dashboard ver los post  y publicar un post
  Given I navigate to page "https://ghost-waki.onrender.com/ghost/#/signin"
  When the admin is logged into the ghost
  And the admin from the main panel select draft postings
  Then publish the post
  And validates that the post has been published