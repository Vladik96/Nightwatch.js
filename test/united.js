module.exports = {
  // will be executed in the end of test
  after: function (browser) {
    console.log("That's all");
    browser.end();
  },

  "Open united.com"(browser) {

    browser
      .url("https://www.united.com", () => {
      })
      .waitForElementVisible("body")
      .assert.titleContains("United");
  },

  "One-way flight"(browser) {
    const originInput = browser.globals.originInput;
    const oneWayChoose = browser.globals.oneWayChoose;

    browser.click(oneWayChoose).assert.visible(originInput);
  },

  "From - to city"(browser) {
    const originInput = browser.globals.originInput;
    const airportFirstChoiceFromList = browser.globals.airportFirstChoiceFromList;
    const newYorkJfk = browser.globals.newYorkJfk;
    const miamiMIA = browser.globals.miamiMIA;
    const destinationInput = browser.globals.destinationInput;

    browser
      .click(originInput)
      .assert.visible(airportFirstChoiceFromList)
      .click(airportFirstChoiceFromList)
      .setValue(originInput, "New York JFK")
      .assert.visible(newYorkJfk)
      .click(newYorkJfk)
      .click(destinationInput)
      .assert.visible(airportFirstChoiceFromList)
      .click(airportFirstChoiceFromList)
      .setValue(destinationInput, "Miami")
      .assert.visible(miamiMIA)
      .click(miamiMIA);
  },

  "Depart date"(browser) {
    const backspace = browser.globals.backspace;

    // remove current date
    for (var i = 0; i < 6; i += 1) {
      browser.setValue("#DepartDate", backspace);
    }
    browser.setValue("#DepartDate", "Aug 20");
  },

  "Economy class"(browser) {
    const firstChoiceFromList = browser.globals.firstChoiceFromList;

    browser
      .assert.visible("ul.app-components-BookFlightForm-bookFlightForm__optionFields--1vOdX")
      .click("ul.app-components-BookFlightForm-bookFlightForm__optionFields--1vOdX")
      .assert.visible("#cabinType")
      .click("#cabinType")
      .assert.visible(firstChoiceFromList)
      .click(firstChoiceFromList);
  },

  "Find flight"(browser) {
    const findFlights = browser.globals.findFlights;
    browser
      .click(findFlights)
      .assert.titleContains("Flight Search Results | United Airlines");
  },

  "Sort by Economy"(browser) {
    browser

      .click("#column-ECO-BASIC")
      .pause(4000)
      .assert.visible("#column-ECO-BASIC");
  },

  "Collect Depart and other"(browser) {
    const { JSDOM } = require( "jsdom" );
    const { window } = new JSDOM( "" );
    const $ = require( "jquery" )( window );

    $(window.document).on('.//*[@id="flight-result-list-revised"]/li[1]/div[2]/div[1]/div[1]/div[1]/text()'),
    function () {
    var result =  $(this).text();
    console.log(result)
    }
  },

};