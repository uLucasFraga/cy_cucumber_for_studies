# CY-CUCUMBER-FOR-BEGINNERS

Repository with examples of automation using cypress and cucumber

> Cypress is the new standard in front-end testing that every developer and QA engineer needs.

---

## Table of Contents

> Índice `README`.

  - [Prerequisites](#prerequisites)
  - [Configuration](#configuration)
  - [Installation](#installation)
  - [Features](#features)
  - [How to tests](#how-to-tests)
  - [Report](#report)
  - [Support](#support)
  - [License](#license)

---

## Prerequisites

- [Install Node and NPM](https://nodejs.org/en/)
- [Install Chrome](https://www.google.com/chrome/)
- [Install Vscode or other IDE](https://code.visualstudio.com/download)
- [Install Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing)

## Configuration

- Create or to use package.json and get Cypress dependencies

## Installation

> Clone repository

- Clone this repo to your local machine using ssh or https, for example: `git clone hhttps://github.com/uLucasFraga/cy_cucumber_for_beginners.git`

- Install all dependencies (package.json)

`cd /your_project`

`npm run cypress:simple_build`

> Tips

- Use package.json to install the project dependencies

## Features

- file example `.feature`

```gherkin
#language: en

@e2e
Feature: access google website

Scenario: Opening google page
    Given I open page
    Then I see "Google" in the title

Scenario: Search in google page
    Given I open page
    When I search for "github lucas fraga"
    Then I see the survey completed "uLucasFraga (Lucas Fraga) · GitHub"
```

## How to tests

> clean and run test headless (electron)

`npm run cypress:simple_build_run`

> run test headless (electron)

`npm run cypress:run`

> run test interactive mode.

`npm run cypress:open`

> run test tags for cucumber.

`npm run cypress:tags`

## Report

> run test report

`npm run cypress:report`

## Support

  Twitter at: <a href="https://twitter.com/uLucasFraga" target="_blank">`@ulucasfraga`</a>
  
  Facebook at: <a href="https://www.facebook.com/lucass.fragaa" target="_blank">`ulucasfraga`</a>
  
  Linkedin at: <a href="https://www.linkedin.com/in/ulucasfraga" target="_blank">`ulucasfraga`</a>

E-mail: `lucass.fragaa@gmail.com`

Skype: `live:lucass.fragaa`

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="https://www.linkedin.com/in/ulucasfraga/" target="_blank">Lucas Fraga</a>.
