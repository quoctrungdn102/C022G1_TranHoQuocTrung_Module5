function totalFibonacci(number: number): number {
    let a: number = 0;
    let b: number = 1;
    let total: number = 0;
    for (let i = 0; i < number; i++) {
        let fibonacci: number = a
        a = b + fibonacci
        b = fibonacci
        console.log(fibonacci);
        total += fibonacci
    }
    console.log("---------------------------------------------------------");
    return total;
}

console.log("tổng các số fibonacci là "+ totalFibonacci(5))
