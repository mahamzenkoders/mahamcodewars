function zeros(n) {
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}

console.log(zeros(6)); 
console.log(zeros(10)); 
console.log(zeros(30));
