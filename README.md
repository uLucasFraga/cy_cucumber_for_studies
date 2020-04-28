# CYPRESS-CUCUMBER

> Repository with examples of automation using cypress + cucumber

> Cypress is the new standard in front-end testing that every developer and QA engineer needs.

---

## Installation

> Clone
- Clone this repo to your local machine using `https://github.com/uLucasFraga/cy-dojo.git`

- Install all dependencies (package.json)
`npm install`

### Run tests

> run test headless (electron)

```shell
$ npm run cypress:run
```

> run test interactive mode.

```shell
$ npm run cypress:open
```

> run test tags for cucumber.

```shell
$ npm run cypress:tags
```

---

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

## Report

> run test report

```shell
$ npm run cypress:report
```

---

## Support

- Twitter at <a href="https://twitter.com/uLucasFraga" target="_blank">`@ulucasfraga`</a>
- Facebook at <a href="https://www.facebook.com/lucass.fragaa" target="_blank">`Facebook: Lucas Fraga`</a>
- Linkedin at <a href="https://www.linkedin.com/in/ulucasfraga" target="_blank">`Linkedin: Lucas Fraga`</a>

- E-mail: `lucass.fragaa@gmail.com`
- Skype: `live:lucass.fragaa`

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2018 © <a href="https://www.linkedin.com/in/ulucasfraga" target="_blank">Lucas Fraga</a>.
