
function factorial(n)
{
    let fact = 1;

    for(let i=1;i<=n;i++)
    {
        fact = fact * i;
    }

    return fact;
}

let number = 5;

let result = factorial(number);

console.log("Factorial of",number,"=",result);