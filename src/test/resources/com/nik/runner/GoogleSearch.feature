@focus
Feature: Searching Keyword (Cheese / Bread in data table) in Google
As a site user
If I search for keyword
The page title should contains the keyword

Scenario Outline:
  Given The web site is opened as "<ScreenSize>"
  Then I fill in "q" by name "<Keyword>"
  Then I wait for "2" seconds
  Then I submit form by form name "q"
  Then The page title should contains "<Keyword>"
Examples:
    | ScreenSize | Keyword|
    | desktop | cheese|
    | mobile | bread|
