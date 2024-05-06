Feature: Test E2E Posts Ghost

@user1 @web
Scenario: Crear posts
  Given I navigate to page "http://localhost:2368/ghost"
  And the admin is logged into the ghost
  And the admin select the posts option
  When the admin create a post
  Then the admin validates the creation of the post