let sum: number = 0;
let count: number = 0;
for (let i = 1; count < 30; i++) {
    let count1: number = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j) {
            count1++;
        }

    }
    if (count1 == 2) {
        sum += i;
        count++
    }
}
console.log(sum);