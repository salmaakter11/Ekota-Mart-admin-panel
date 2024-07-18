$(document).ready(function () {
    $('#complex_header').DataTable();

    // Select/Deselect all checkboxes
    $('#select-all').on('click', function () {
        var rows = $('#complex_header').DataTable().rows({ 'search': 'applied' }).nodes();
        $('input[type="checkbox"]', rows).prop('checked', this.checked);
    });

    // Handle form submission
    $('#category-form').on('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        var formData = $(this).serializeArray(); // Get form data

        var output = '<h4>The following data would have been submitted to the server:</h4><ul>';
        formData.forEach(function (item) {
            output += '<li>' + item.name + ': ' + item.value + '</li>';
        });
        output += '</ul>';

        // Show the form data (replace this with actual form submission if needed)
        $('.modal-body').html(output);
    });
});
