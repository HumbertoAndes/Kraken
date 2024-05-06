Feature: Test E2E draft Ghost

@user1 @web
Scenario: Editar drafts
  Given I navigate to page "https://ghost-waki.onrender.com/ghost/#/signin"
  And the admin is logged into the ghost
  And the admin select the drafs option
  When the admin edit a post
  Then the admin validates the deletion of the post