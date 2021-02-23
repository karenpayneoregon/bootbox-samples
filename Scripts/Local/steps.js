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

    //$("#option1").prop("checked", true);

});
