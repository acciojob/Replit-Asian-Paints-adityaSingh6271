document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('grid-container');
    const blockIdInput = document.getElementById('block_id');
    const colorInput = document.getElementById('colour_id');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');

    changeButton.addEventListener('click', function () {
        const blockId = blockIdInput.value;
        const selectedBlock = document.getElementById(blockId);

        if (selectedBlock) {
            selectedBlock.style.backgroundColor = colorInput.value;
        }
    });

    resetButton.addEventListener('click', function () {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    });
});

// Ensure that the grid container is ready before running the Cypress test
document.addEventListener('DOMContentLoaded', function () {
    // Inform Cypress that the grid container is ready
    cy.log('Grid container is ready');
});
