$(document).ready(function () {

    var listArray = ['Methods', 'Properties'];

    $('#propertiesMethods li').each(function () {

        var listItem = $(this);

        if (jQuery.inArray(listItem.text().split(' ')[0], listArray) === -1) {
            // not in array
            listItem.html(listItem.text().replace(/(^\w+)/, '<span class = "text-success">$1</span>'));
        } else {
            // in array
            listItem.html(listItem.text().replace(/(^\w+)/, '<span class = "text-primary font-weight-bold">$1</span>'));
        }

    });

    /*
        Initialize progress-bar with language if ?lang= is passed else default to English
    */
    $OedProgressHelper.init($.urlParam('lang'), "#pageProgress");

    $('#updateButton2').click(function (event) {

        $OedProgressHelper.StepByQuarters();

        //if ($('#progressValue2').val() % 1 === 0) {   }

    });

    $('#resetButton').click(function (event) {

        $OedProgressHelper.InitializeValueToZero();

    });

    // handle radio button group selection changed
    const select = document.getElementById('backColor-selection');
    select.addEventListener('click', ({ target }) => { // handler fires on root container click
        if (target.getAttribute('name') === 'option_backColor') { // check if user clicks right element
            $OedProgressHelper.setBarcolor(target.value);
        }
    });


});
