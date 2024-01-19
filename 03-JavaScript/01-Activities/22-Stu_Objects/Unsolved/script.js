//WRITE YOUR CODE BELOW
var Drink = {
    name:"mocha latte",
    sugars: 5,
    order: false,
    drinkready: function () {
        if (this.order) {
            console.log("order is ready")
        }
        else {
            console.log("order not ready")
        }
        return;
    }
};

console.log(Drink)
Drink.drinkready ();
Drink.order = true;
Drink.drinkready ();