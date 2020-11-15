$(document).ready(function () {

    //
    // Increment counter
    //
    $("#btnNotifications").click(function () {
        var value = parseInt($('#lblIncrement').text());
        $("#lblIncrement").text(value + 1);
    });

    //
    // Simple toggling of a data attribute 
    //
    $('#btnPrimary').click(function (event) {

        if ($('#btnPrimary').data("karen") === "Karen Payne") {            
            $('#btnPrimary').data("karen", "Mary Jones");
            bootbox.alert("Is Karen Payne but now changing to 'Mary Jones'");

        } else {
            $('#btnPrimary').data("karen", "Karen Payne");
            bootbox.alert("Was Mary Jones but now changing to 'Karen Payne'");
        }

    });

    //
    // get count from #lblIncrement
    //
    $('#btnGetNotificationCount').click(function (event) {

        var value = parseInt($('#lblIncrement').text());

        bootbox.alert("Notification count is " + value);

    });


    //
    // Thank them for liking us
    //
    $('#badgeLikeUs').click(function (event) {

        $('#btnPrimary').focus();
        bootbox.confirm({
            message: "Thanks for liking us, go to our Facebook page?<br>(This has a delay)",
            buttons: {
                confirm: {
                    label: 'Oh yes',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'Not now',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                console.log('This was logged in the callback: ' + result);
            }
        });        

    });
});