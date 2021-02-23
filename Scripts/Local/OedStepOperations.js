'use strict';

var $OedStepOperations = $OedStepOperations || {};
$OedStepOperations = function () {

    var radioGroupName = "";

    /**
     * Constructor
     * 
     * @param {string} gbName group name for radio buttons
     */
    var init = function (gbName) {

        radioGroupName = gbName;

    };

    /**
     * Uncheck current selected radio button in group
     */
    var unCheckRadioButtons = function () {

        $(`input[name=${radioGroupName}]:checked`).removeAttr('checked');

    };

    /**
     * Return radio button group name
     */
    var radioGroupName = function () {
        return radioGroupName;
    }

    /**
     * Perform work on selected radio button on selection change
     * @param {string} name name of radio button
     * @param {string} identifier identifier of radio button
     */
    var changeSelection = function (name, identifier) {
        console.log(`${identifier} ${name}`);
    }

    /**
     * Declare publicly scoped methods and properties
     */
    return {
        init: init,
        unCheckRadioButtons: unCheckRadioButtons,
        radioGroupName: radioGroupName,
        changeSelection: changeSelection
    };   
}();