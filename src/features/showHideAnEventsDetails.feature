Feature: Show/Hide an Event's Details

Scenario: An event element is collapsed by default
  Given the user is looking at a list of events
  When the user accesses the event list
  Then no event element should be opened

Scenario: User can expand an event to see its details
  Given the user is looking at a list of events
  When the user clicks the event list
  Then the selected event should expand to show details about the event


Scenario: User can collapse an event to hide its details
  Given the user is looking at an events expanded details
  And the details are showing
  When the user clicks a button to collapse the event
  Then the details box is collapsed