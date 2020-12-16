$(document).ready(function () {

    /*
    * Show center dialog if ALT+C is pressed
    */
    window.addEventListener("keydown", e => {
        if (e.keyCode === 67 && e.altKey)
        {
            bootbox.alert({ message: "<kbd>alt</kbd><strong>+</strong><kbd>c</kbd> was pressed", centerVertical: true });
        }
    });

    $('#simpleBootBox').click(function (event) {

        var msg =
            '<p>Your claim has a $0 balance or you have less than one week of benefits ' +
            'remaining on your claim. You may be eligible to receive benefits under a new ' +
            'extension program, Extended Benefits (EB).</p> <p>After submitting your weekly ' +
            'claim, please visit the departmentâ€™s CARES Act page for more information on ' +
            'the extension programs available, including how to apply. Please note it may ' +
            'take several weeks to process your next extension, so continue to claim each week ' +
            'to request these benefits</p><p><strong>Please visit our COVID-19 page for ' +
            'more information about the Extended Benefits (EB) program.</strong></p>';


        bootbox.dialog({
            title: 'OED Message',
            message: msg,
            buttons: {
                ok: {
                    label: 'Close',
                    className: 'btn-primary',
                }
            },
            onShow: function (e) {
                $('.modal-body').css('scrollable', true);
                $('.modal-body').css('overflow-y', 'scroll');
                $('.modal-body').css('height', '150px');
            },
            onHide: function (e) {
                $('.modal-body').css('scrollable', false);
            }
        });
    });


    $('#simpleBootBox1').click(function (event) {
        bootbox.alert("Hello, this is a very simple test");
    });


    $('#simpleBootBox2').click(function (event) {
        bootbox.confirm(
            {
                size: "small",
                message: "Are you sure?",
                callback: function (result) {
                    if (result === true) {
                        bootbox.alert("Proceed");
                    } else {
                        bootbox.alert("Cancelled operation");
                    }
                }
            });
    })

    $('#simpleBootBox3').click(function (event) {
        bootbox.prompt("What is your name?", function (result) {
            if (isEmptyOrSpaces(result) === true) {
                bootbox.alert('please try again');
            } else {
                bootbox.alert('Hello "' + result + '"');
            }

        })
    });

    $('#simpleBootBox4').click(function (event) {
        bootbox.prompt({
            title: "This is a prompt with a number input!",
            inputType: 'number',
            callback: function (result) {
                console.log(result);
            }
        });
    });

    $('#simpleBootBox5').click(function (event) {
        bootbox.prompt({
            title: "This is a prompt with a password input!",
            inputType: 'password',
            callback: function (result) {
                console.log(result);
            }
        });
    });

    $('#simpleBootBox6').click(function (event) {
        bootbox.prompt({
            title: "This is a prompt with select!",
            inputType: 'select',
            inputOptions: [
                {
                    text: 'Choose one...',
                    value: '',
                },
                {
                    text: 'Choice One',
                    value: '1',
                },
                {
                    text: 'Choice Two',
                    value: '2',
                },
                {
                    text: 'Choice Three',
                    value: '3',
                }
            ],
            callback: function (result) {
                switch (Number(result)) {
                    case 1:
                        console.log('First');
                        break;
                    case 2:
                        console.log('second');
                        break;
                    case 3:
                        console.log('third');
                        break;
                    default:
                        console.log(isEmptyOrSpaces(result));
                }
            }
        });
    });

    $('#simpleBootBox7').click(function (event) {
        bootbox.prompt({
            title: "Enter a date",
            inputType: 'date',
            closeButton: false,
            callback: function (result) {
                console.log(result);
            }
        });
    });

    $('#simpleBootBox8').click(function (event) {
        bootbox.confirm({
            message: "<p>This is a confirm with custom button text and color!</p><p>Click Yes for large demo, no for small demo</p>",
            buttons: {
                confirm: {
                    label: 'Yes',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result === true) {
                    bootbox.alert({ message: "Large", size: "large" });
                } else {
                    bootbox.alert({ message: "Small", size: "small" });
                }
            }
        });
    });

    /*
     * Change locale using selector, display in that language
     * when done reset to English
     **/
    $('#simpleBootBox9').click(function (event) {
        var locale = $('#locales').val();
        bootbox.setDefaults({ 'locale': locale });
        bootbox.confirm('Hello World!', function (result) {
            bootbox.alert({ message: "Example for positioning", centerVertical: true });
            bootbox.setDefaults({ 'locale': 'en' });
        }
        );

    })

    $('#simpleBootBox10').click(function (event) {
        bootbox.alert({ message: "Example for positioning", centerVertical: true });
    });


    function isEmptyOrSpaces(sender) {
        return sender === null || sender.match(/^ *$/) !== null;
    }

    function isUndefined(value) { return typeof value === 'undefined'; }



});
