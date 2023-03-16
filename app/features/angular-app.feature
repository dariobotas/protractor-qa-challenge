Feature: Protractor and cucumber angularjs ryanair search flight
  Scenario: Flight search
    Given I search for a flight from "DUB" to "STN" on 17/03/2023 for 2 adults and 1 childs
    When I proceed to pay with selected seats and 20kg bags added
