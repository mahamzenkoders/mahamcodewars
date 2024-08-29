// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for

// m (integer > 2) which gives the start of the search (m inclusive)

// n (integer >= m) which gives the end of the search (n inclusive)

// In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

// So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).

// In such a case (no pair of prime numbers with a gap of `g`)

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function gap(g, m, n) {
    let prevPrime = null;

    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            if (prevPrime !== null && i - prevPrime === g) {
                return [prevPrime, i];
            }
            prevPrime = i;
        }
    }

    return null;
}


console.log(gap(2, 3, 50)); 
