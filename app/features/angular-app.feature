Feature: Protractor and cucumber angularjs ryanair search flight
  Scenario: Flight search
    Given I search for a flight from "DUB" to "STN" on 12/01/2023 for 2 adults and 1 child
    When I proceed to pay with selected seats and 20kg bags added
    Then login popup shows up