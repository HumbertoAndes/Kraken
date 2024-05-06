Feature: Test E2E schedules ghost

@user1 @web
Scenario: Crear Schedules
  Given I navigate to page "https://ghost-waki.onrender.com/ghost/#/signin"
  And the admin is logged into the ghost
  And the admin select the schedules option
  When the admin create a scheduled publication
  Then the admin validates the scheduled publication