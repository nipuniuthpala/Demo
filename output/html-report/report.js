$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/TestSite.feature");
formatter.feature({
  "name": "Test the APIs and check the data is correctly displayed",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "name": "Validate user can be created",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "user invoke the api for users",
  "keyword": "Given "
});
formatter.match({
  "location": "APITest.getUsers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user will get 201 response",
  "keyword": "When "
});
formatter.match({
  "location": "APITest.validate201()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see all the users",
  "keyword": "Then "
});
formatter.match({
  "location": "APITest.validateUserDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate all users get retrieved",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user invoke the api for \"\u003cpage\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user will get 200 response for users \"\u003cpage\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user will see all the users \"\u003cpage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "page"
      ]
    },
    {
      "cells": [
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate all users get retrieved",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "user invoke the api for \"1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "APITest.getSingleUsers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user will get 200 response for users \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "APITest.validate200ForUsers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see all the users \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "APITest.validateUserDetails(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate user can be updated",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user invoke the api for update \"\u003cuser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user will get update 200 response \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user will see the updated \"\u003cuser\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user"
      ]
    },
    {
      "cells": [
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate user can be updated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "user invoke the api for update \"2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "APITest.updateUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user will get update 200 response \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "APITest.validate200ForUpdateUsers(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see the updated \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "APITest.validateUpdatedUserDetails(String)"
});
formatter.result({
  "status": "passed"
});
});