const customer = "Joe";

(function() {
    console.log("1. Inside the function " + customer);
    if (true) {
        const customer = "Mary";
        console.log("2. Inside the block " + customer);
    }
})();

console.log("3. In the global scope " + customer);
