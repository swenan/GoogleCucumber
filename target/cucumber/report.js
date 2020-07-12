$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/nik/runner/GoogleSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Searching Keyword (Cheese / Bread in data table) in Google",
  "description": "As a site user\r\nIf I search for keyword\r\nThe page title should contains the keyword",
  "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@focus"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "",
  "description": "",
  "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "The web site is opened as \"\u003cScreenSize\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"q\" by name \"\u003cKeyword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I wait for \"2\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I submit form by form name \"q\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The page title should contains \"\u003cKeyword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;;",
  "rows": [
    {
      "cells": [
        "ScreenSize",
        "Keyword"
      ],
      "line": 14,
      "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;;;1"
    },
    {
      "cells": [
        "desktop",
        "cheese"
      ],
      "line": 15,
      "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;;;2"
    },
    {
      "cells": [
        "mobile",
        "bread"
      ],
      "line": 16,
      "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@focus"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "The web site is opened as \"desktop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"q\" by name \"cheese\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I wait for \"2\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I submit form by form name \"q\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The page title should contains \"cheese\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "desktop",
      "offset": 27
    }
  ],
  "location": "CommonStepDef.the_web_site_is_opened(String)"
});
formatter.result({
  "duration": 13902185806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 11
    },
    {
      "val": "cheese",
      "offset": 23
    }
  ],
  "location": "CommonStepDef.i_fill_in_by_name(String,String)"
});
formatter.result({
  "duration": 693761736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(Long)"
});
formatter.result({
  "duration": 2000912575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 28
    }
  ],
  "location": "CommonStepDef.i_submit_form_by_form_name(String)"
});
formatter.result({
  "duration": 5544969637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cheese",
      "offset": 32
    }
  ],
  "location": "CommonStepDef.the_page_title_should_contains(String)"
});
formatter.result({
  "duration": 29014526,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "searching-keyword-(cheese-/-bread-in-data-table)-in-google;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@focus"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "The web site is opened as \"mobile\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"q\" by name \"bread\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I wait for \"2\" seconds",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I submit form by form name \"q\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The page title should contains \"bread\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 27
    }
  ],
  "location": "CommonStepDef.the_web_site_is_opened(String)"
});
formatter.result({
  "duration": 919703227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 11
    },
    {
      "val": "bread",
      "offset": 23
    }
  ],
  "location": "CommonStepDef.i_fill_in_by_name(String,String)"
});
formatter.result({
  "duration": 397277090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDef.i_wait_for_seconds(Long)"
});
formatter.result({
  "duration": 1998933024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 28
    }
  ],
  "location": "CommonStepDef.i_submit_form_by_form_name(String)"
});
formatter.result({
  "duration": 4462210029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bread",
      "offset": 32
    }
  ],
  "location": "CommonStepDef.the_page_title_should_contains(String)"
});
formatter.result({
  "duration": 20559487,
  "status": "passed"
});
});