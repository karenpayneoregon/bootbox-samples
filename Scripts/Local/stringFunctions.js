var $stringfunctions = $stringfunctions || {};
$stringfunctions = function () {
    /* Take into account escaped apostrophes to determine if string can be stored in a database table field.
     *
     * @param {string} sender - string to check if length is acceptable
     * @param {double} maxAllowedLength - allowed max length of sender
     *
     */
    var lengthIsAcceptableWithApostrophes = function (sender, maxAllowedLength) {

        var doubleApostropheCount = (sender.match(/'/g) || []).length * 2;
        var totalCharacterCount = doubleApostropheCount + sender.length;

        return totalCharacterCount <= maxAllowedLength ? true : false;
    };

    return {
        lengthIsAcceptableWithApostrophes: lengthIsAcceptableWithApostrophes        
    };
}();

