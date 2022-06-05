function addButtons(instructionsPage, submissionPage) {
    var submitButton = document.createElement('button');
    submitButton.id = 'custom_submit_solution_button';
    submitButton.className = 'button button-primary button-medium editor-container-intro-button custom-button-size';
    submitButton.innerHTML = 'Submit Solution';
    submitButton.addEventListener('click', toggleSubmitPage);
    instructionsPage.append(submitButton);

    var closeButton = document.createElement('button');
    closeButton.id = 'custom_close_solution_button';
    closeButton.className = 'button button-primary button-medium editor-container-intro-button custom-button-size';
    closeButton.innerHTML = 'Back to Instructions';
    closeButton.addEventListener('click', toggleSubmitPage);
    submissionPage.append(closeButton);
}


function toggleSubmitPage(e) {
    e.preventDefault();

    // Find the submission element
    const submission = $('#editor-container').parent();
    submission.toggleClass('hide');
    submission.toggleClass('fullwidth');

    // Now find the instructions
    const instructions = $('#instructions');
    instructions.toggleClass('hide');
    instructions.toggleClass('fullwidth');
}

$(function () {
    const isProblem = $('#instructions').find('div.problembody')[0];
    if (isProblem) {
        // Find the submission element
        const submission = $('#editor-container').parent();
        submission.toggleClass('hide');

        // Now find the instructions
        const instructions = $('#instructions');
        instructions.toggleClass('fullwidth');

        // Add our buttons
        addButtons(instructions.find(".problembody"), submission.find("#editor-container"));
    }
});