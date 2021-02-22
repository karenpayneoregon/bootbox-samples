'use strict';
var $OedProgressHelper = $OedProgressHelper || {};
$OedProgressHelper = function () {

    // what to display to the right of the numeric progress value
    var progressWord = "Progress";
    var progressDoneWord = "done";
    var spokenLanguageArray;

    // this is the identifier for the progress-bar
    var progressbarIdentifier = "";

    /*
        language: language code e.g. E, S 
        identifier: progress bar identifier with or without pound symbol
    */



    /**
     * 
     * @param {string} language - language id
     * @param {string} identifier  - element id
     */
    var init = function (language, identifier) {

        configLanuages();
        if (language !== null) {
            setLanguage(language);
        }

        progressbarIdentifier = identifier;

        InitializeValueToZero();
        
    };

    /**
     * Create language array of SpokenLanguage class
     */
    var configLanuages = function () {
       

        spokenLanguageArray = 
        [
            new SpokenLanguage('E', 'progress', 'done'), 
            new SpokenLanguage('EN', 'progress', 'done'), 
            new SpokenLanguage('S', 'Progreso', 'hecho'), 
            new SpokenLanguage('SP', 'Progreso', 'hecho')
        ];

    }

    /**
     * 
     * @param {string} language identifer
     */
    var setLanguage = function name(language) {

        language = language.toUpperCase();

        if (typeof language !== 'undefined') {

            for (let index = 0; index < spokenLanguageArray.length; index++) {
                
                const currentElement = spokenLanguageArray[index];

                if (currentElement.keyIdentifier === language) {
                    progressWord = currentElement.progressWord;
                    progressDoneWord = currentElement.progressDoneWord;
                }

            }

        } else {
            // progressWord and progressDoneWord, English by default which are set in the declaration of each property
        };        
    }

    /*
        Append # to incoming value to ensure it's an identifier
     */
    var assertPoundSymbol = function () {

        if (progressbarIdentifier.charAt(0) !== "#") {
            progressbarIdentifier = "#" + progressbarIdentifier;
        }

        return progressbarIdentifier;
    };

    /*
        private method to strip unwanted bar colors rather than appending.
        There are regular expressions to deal with this but messy.
     */
    var removeForeColor = function () {
        
        var colorArray = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark', 'bg-white'];

        for (let index = 0; index < colorArray.length; index++) {
            const element = colorArray[index];
            $(assertPoundSymbol(progressbarIdentifier)).removeClass(element);
            
        }
    }

        /*
            Set background color using Bootstrap 4 colors e.g. bg-success
        */
    var setBarcolor = function (colorSelector) {
        removeForeColor();
        $(assertPoundSymbol(progressbarIdentifier)).addClass(colorSelector);
    };    

    var setBarcolorPrimary = function () {
        removeForeColor();
        $(assertPoundSymbol(progressbarIdentifier)).addClass("bg-primary");
    };    

    var setBarcolorDanger = function () {
        removeForeColor();
        $(assertPoundSymbol(progressbarIdentifier)).addClass("bg-danger");
    };        

    var setBarcolorOedGreen = function () { 
        removeForeColor();
        $(assertPoundSymbol(progressbarIdentifier)).addClass("bg-success");
    };        

    /*
        Set progress value to 0
    */
    var InitializeValueToZero = function () {

        var currentValue = 0;
 
        $(assertPoundSymbol(progressbarIdentifier)).css("width", currentValue + "%").attr("aria-valuenow", currentValue).text(currentValue + "% " + progressWord);

        return currentValue;

    };    
    // Increments or deincrements the progress bar on all pages

    /*
        Increments or deincrements the progress bar on all pages
    */
    var Increment = function (newValue) {

        var currentValue = parseInt(newValue);

        if (currentValue === 100) {
            progressWord = '';
        }

        $(assertPoundSymbol(progressbarIdentifier)).css("width", currentValue + "%").attr("aria-valuenow", currentValue).text(currentValue + "% " + progressWord);

        return currentValue;

    };

    /*
        Increments progress value by 10 percent
    */
    var StepByQuarters = function () {
        var progressValue = CurrentValue(progressbarIdentifier);

        if (progressValue === 100) {
            progressWord = progressDoneWord;
        } else {
            if (progressValue + 25 < 100) {
                progressValue += 25;
            } else {
                progressValue = 100;
                progressWord = progressDoneWord;
            }
        }

        $(assertPoundSymbol(progressbarIdentifier))
            .css("width", progressValue + "%")
            .attr("aria-valuenow", progressValue)
            .text(progressValue + "% " + progressWord);

        return progressValue;

    };

    /*
        Increments progress value by 10 percent
    */
    var StepBy10 = function () {
        var progressValue = CurrentValue(progressbarIdentifier);

        if (progressValue === 100) {
            progressWord = '';
        }else{
            if(progressValue + 10 < 100)
            {
                progressValue += 10;
            }else{
                progressValue = 100;
            }
        }

        $(assertPoundSymbol(progressbarIdentifier))
            .css("width", progressValue + "%")
            .attr("aria-valuenow", progressValue)
            .text(progressValue + "% " + progressWord);

        return progressValue;

    };
    
    /*
        Increments progress value by 5 percent
    */
    var StepBy5 = function () {
        var progressValue = CurrentValue(progressbarIdentifier);

        if (progressValue === 100) {
            progressWord = '';
        } else {
            if (progressValue + 5 < 100) {
                progressValue += 5;
            } else {
                progressValue = 100;
            }
        }

        $(assertPoundSymbol(progressbarIdentifier))
            .css("width", progressValue + "%")
            .attr("aria-valuenow", progressValue)
            .text(progressValue + "% " + progressWord);

        return progressValue;

    };        

    /*
        Get current progress value/percent
    */
    var CurrentValue = function (identifier) {
        return parseInt($(assertPoundSymbol(identifier)).attr("aria-valuenow"));
    };

    /*
        Display the progress bar
    */
    var Show = function () {
        $(assertPoundSymbol(progressbarIdentifier)).show();
    };

    /*
        Hide the progress bar
    */
    var Hide = function () {
        $(assertPoundSymbol(progressbarIdentifier)).hide();
    };

    return {
        init: init,
        setLanguage: setLanguage,
        InitializeValueToZero: InitializeValueToZero,
        StepByQuarters: StepByQuarters,
        StepBy10: StepBy10,
        StepBy5: StepBy5,
        CurrentValue: CurrentValue,
        Increment: Increment,
        setBarcolorPrimary: setBarcolorPrimary,
        setBarcolorOedGreen, setBarcolorOedGreen,
        setBarcolorDanger: setBarcolorDanger,
        setBarcolor: setBarcolor,
        Show: Show,
        Hide: Hide

    };
}();