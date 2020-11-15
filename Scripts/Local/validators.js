var $validators = $validators || {};
$validators = function () {


    //
    // Validate SSN from input
    //
    var isValidSsn = function (ssnValue) {
        var expression = /^([0-6]\d{2}|7[0-6]\d|77[0-2])([ \-]?)(\d{2})\2(\d{4})$/;

        ssnValue = ssnValue.replace(/\s/g, '');
        ssnValue = ssnValue.split(' ').join('');

        if (!expression.test(ssnValue)) {
            return [false, null];
        }

        var tempSsn = ssnValue;

        if (ssnValue.indexOf("-") !== -1) {
            tempSsn = (ssnValue.split("-")).join("");
        }

        if (ssnValue.indexOf(" ") !== -1) {
            tempSsn = (ssnValue.split(" ")).join("");
        }

        if (tempSsn.substring(0, 3) === "000") {
            return [false, null];
        }

        if (tempSsn.substring(3, 5) === "00") {
            return [false, null];
        }

        if (tempSsn.substring(5, 9) === "0000") {
            return [false, null];
        }

        return [true, tempSsn];
    };

    return { isValidSsn: isValidSsn };
}();