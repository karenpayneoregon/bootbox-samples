var $OedProgressHelper = $OedProgressHelper || {};
$OedProgressHelper = function () {

    // what to display to the right of the numeric progress value
    var progressWord = "Progress";

    // this is the identifier for the progress-bar
    var progressbarIdentifier = "";

    /*
        language: language code e.g. E, S 
        identifier: progress bar identifier with or without pound symbol
    */
    var init = function (language, identifier) {

        if (typeof language !== 'undefined') {

            if (language === "SP" || language === "S") {
                progressWord = "Progreso";
            };
            
        } else {
            // progressWord is English by default
        };

        progressbarIdentifier = identifier;
        
    };

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
        var colorArray = [
            'bg-primary', 
            'bg-secondary', 
            'bg-success', 
            'bg-danger', 
            'bg-warning', 
            'bg-info', 
            'bg-light', 
            'bg-dark',
            'bg-white'
        ];

        for (let index = 0; index < colorArray.length; index++) {
            const element = colorArray[index];
            $(assertPoundSymbol(progressbarIdentifier)).removeClass(element);
            
        }
    }
    
    var setBackcolorPrimary = function () {
        removeForeColor();
        $(assertPoundSymbol(progressbarIdentifier)).addClass("bg-primary");
    };    

    var setBackcolorDanger = function () {
        removeForeColor();
        $(assertPoundSymbol(progressbarIdentifier)).addClass("bg-danger");
    };        

    var setBackcolorOedGreen = function () { 
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
        InitializeValueToZero: InitializeValueToZero,
        StepBy10: StepBy10,
        StepBy5: StepBy5,
        CurrentValue: CurrentValue,
        Increment: Increment,
        setBackcolorPrimary: setBackcolorPrimary,
        setBackcolorOedGreen, setBackcolorOedGreen,
        setBackcolorDanger: setBackcolorDanger,
        Show: Show,
        Hide: Hide

    };
}();