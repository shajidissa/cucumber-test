$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("github_login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "github login",
  "description": "",
  "id": "github-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "login without username and password",
  "description": "",
  "id": "github-login;login-without-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user is on github homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.match({
  "location": "GithubLoginSD.user_is_on_github_homepage()"
});
formatter.result({
  "duration": 9961803266,
  "status": "passed"
});
formatter.match({
  "location": "GithubLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 711219298,
  "status": "passed"
});
formatter.match({
  "location": "GithubLoginSD.user_is_displayed_login_screen()"
});
formatter.result({
  "duration": 230849394,
  "status": "passed"
});
});