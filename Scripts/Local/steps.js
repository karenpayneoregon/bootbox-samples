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

    var all = $(".stepMarker").map(function () {
        return this.id
    }).get();
    
    all.forEach(element => {
        $(`#${element}`).removeClass("btn-primary")
    });

    $("#step1").addClass("btn-primary")
    $("#option1").prop("checked", true);



});
