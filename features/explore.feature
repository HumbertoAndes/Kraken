Feature: Test E2E Explore Ghost

@user1 @web
Scenario: Explorar blogs
  Given I navigate to page "https://ghost-waki.onrender.com/ghost/#/signin"
  And the admin is logged into the ghost
  And the admin select the explore option
  When the admin looking for developers  
  Then the admin view all blogs related to developers