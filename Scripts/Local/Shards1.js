$(document).ready(function () {
    // initialize popper tips
    $("[data-toggle=\"popover\"]").popover();


    // setup delegates for incrementing progressbar
    $("#btnIncProgressBar").click(function (event) {

        var currentValue = parseInt($("#progressbar1").attr("aria-valuenow"));

        // if at 100% re-initialize
        if (currentValue === 100) {
            currentValue = 0;
            $("#progressbar1").css("width", currentValue + "%").attr("aria-valuenow", currentValue).text(currentValue + "% progress");
            return;
        }

        if (currentValue < 90) {
            currentValue = currentValue + 10;
            $("#progressbar1").css("width", currentValue + "%").attr("aria-valuenow", currentValue)
                .text(currentValue + "% progress");
        } else {
            currentValue = 100;
            $("#progressbar1").css("width", currentValue + "%").attr("aria-valuenow", currentValue)
                .text(currentValue + "% progress");
        }
    });

});





