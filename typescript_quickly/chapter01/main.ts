function getFinalPrice(price: number, discount: number) {
    // function arguments have types
    return price - price / discount;
}

console.log(getFinalPrice(100, 10));
// console.log(getFinalPrice(100, "10%")); // Wrong function invocation