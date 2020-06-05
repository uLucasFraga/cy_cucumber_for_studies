#language: en

@e2e
Feature: access google website

Scenario: Opening google page
    Given I open page
    Then I see "Google" in the title

Scenario: Search in google page
    Given I open page
    When I search for "github lucas fraga"
    Then I see the survey completed "uLucasFraga (lucas.fraga) · GitHub"
