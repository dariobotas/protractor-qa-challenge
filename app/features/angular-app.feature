Feature: Protractor and cucumber angularjs ryanair search flight
  Scenario: Flight search
    Given I search for a flight from "DUB" to "STN" on 18/04/2023 for 2 adults and 1 childs
    When I choose "Value Fare"
    And I fill the passenger fields with the names "Mr" "Dário" "Botas", "Mr" "Alexandre" "Botas", "Timóteo" "Botas"
    And I choose the seats for the 3 passengers with "no fast track"
    And I choose 1 "small bag only", 20kg bags added for all passengers with "no extras"
    Then login popup shows up