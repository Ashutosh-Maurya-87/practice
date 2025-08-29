const Fibonacci = (n) => {
    let a = 0, b = 1
    // if (n === 0) {
    //     return n
    // }
    // if (n === 1) {
    //     return n
    // }
    // let fib
    // for (let i = 2; i <= n; i++) {
    //     fib = a + b
    //     a = b
    //     b = fib
    // }
    // console.log(fib)
    // return fib

    // using recursion
    if (n < 2) return n
    let fib

    fib = Fibonacci(n - 1) + Fibonacci(n - 2)

    return fib
}
9 + 8
8 + 7
7 + 6
6 + 5
5 + 4
4 + 3
3 + 2
2 + 1
1 + 0

console.log(Fibonacci(10))
console.log(Fibonacci(0))
console.log(Fibonacci(1))
console.log(Fibonacci(2))
console.log(Fibonacci(3))
console.log(Fibonacci(4))