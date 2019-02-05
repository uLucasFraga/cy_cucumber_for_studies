#language: en

@e2e
Feature: access concrete website

Scenario: Opening concrete page
    Given I open page
    Then I see "Concrete" in the title

Scenario: Search in concrete page
    Given I open page
    When I search for "Lucas Fraga"
    Then I see the survey completed "Como anexar ao report o screenshot com o Protractor"
