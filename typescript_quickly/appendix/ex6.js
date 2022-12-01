function StockQuoteGenerator(symbol) {
    this.symbol = symbol; // this.symbol is a property of StockQuoteGenerator().
    console.log(`this.symbol=${this.symbol}`);

    setInterval(function() {
        console.log(`The price of ${this.symbol}
                    is ${Math.random()}`);
    }, 1000);
}

const stockQuoteGenerator = new StockQuoteGenerator("IBM");
