Feature: Specify number of Events

Scenario: When user hasn’t specified a number, 32 is the default number
  Given no number is specified
  When the user is looking at a list of events
  Then the user sees 32 events

Scenario: User can change the number of events they want to see
  Given the event list page is open
  When the user types into the "specify number of events visible" textbox
  When the user types into the textbox
  Then the user will see the specified number of events