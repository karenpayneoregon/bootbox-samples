$(document).ready(function () {

    $OedStepOperations.init('groupSteps');

    /**
     * Get current selected radio button being checked
     */
    const select = document.getElementById('stepsContainer');
    select.addEventListener('click', ({ target }) => {
        if (target.getAttribute('name') === $OedStepOperations.radioGroupName()) {
            $OedStepOperations.changeSelection(target.value, target.getAttribute('id'))
        }
    });
 
    $OedStepOperations.unCheckRadioButtons();


    $OedStepOperations.InitializeSteps();


    $('#alert1').click(function () {
        $OedStepOperations.removeAlerts();
        $('#alertPlaceHolder').append('<div id="A1" class="alert  alert-warning alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Warning!</strong> Your claim will expire in two weeks</div>')
    });
    $('#alert2').click(function () {
        $OedStepOperations.removeAlerts();
        $('#alertPlaceHolder').append('<div id="A2" class="alert  alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Warning!</strong> Your claim will expire in one weeks</div>')
    });
    $('#alert3').click(function () {
        $OedStepOperations.removeAlerts();
        $('#alertPlaceHolder').append('<div id="A3" class="alert  alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Important!</strong> Your claim has expired</div>')
    });
});
