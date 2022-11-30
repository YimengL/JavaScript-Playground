var customer = "Joe";

(function () {
    console.log("The name of the customer inside the function is " + customer);
    if (true) {
        var customer = "Mary";
    }
})();
console.log("The name of the customer ourside the function is " + customer);
