var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var inputE1 = $('input[name="shopping-input"]')


var addItem = $('.btn btn-info');
var listItems = [];
// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function updateList(event) {
    event.preventDefault();
    var newItem = $('<li>');
    newItem.text(inputE1.val());
    shoppingListEl.append(newItem);
    $('input[type="text"]').val('');
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', updateList);

