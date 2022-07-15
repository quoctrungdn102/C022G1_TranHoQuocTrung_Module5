function totalFibonacci(number) {
    var a = 0;
    var b = 1;
    var total = 0;
    for (var i = 0; i < number; i++) {
        var fibonacci = a;
        a = b + fibonacci;
        b = fibonacci;
        console.log(fibonacci);
        total += fibonacci;
    }
    console.log("---------------------------------------------------------")
    return total;
}
console.log("tổng các số fibonacci là " + totalFibonacci(5));
