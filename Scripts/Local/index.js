// test for svn
$(document).ready(function (e) {

    $("#next").click(function () {

        var currentSsn = $("#inputSSN").val();
        var result = $validators.isValidSsn(currentSsn);

        if (result[0]) {
            bootbox.alert({ message: "Valid Social Security number [" + result[1] + "]", centerVertical: true });
        } else {
            bootbox.alert({ message: "Invalid SSN", centerVertical: true });
        }
    });


    /*
     * Create div for Google translate
     */
    $(document.body).append("<div id='google_translate_element'><div class='skiptranslate goog-te-gadget'><div id=':1.targetLanguage'></div></div></div>");

    /*
     * OED footer
     */
    $(document.body).append("<div id='indexFooter' class='footer'><a href='https://www.oregon.gov/employ/pages/default.aspx' class='tomato'>Employment Department</a></div>");

});

