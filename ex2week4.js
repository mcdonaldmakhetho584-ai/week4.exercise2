function sum(n) {
  if (n % 1 !== 0) {
    return "The value passed is not a number"
  }

  let total = 0
  for (let i = 0; i <= n; i++) {
    total += i
  }

  return total
}

console.log(sum(5))
console.log(sum(3.5))


function factorial(num) {
  let total = 1
  for (let i = num; i > 0; i--) {
    total *= i
  }

  return total
}

console.log(factorial(4))


function funkyMath(a, b, c, d) {
  if (arguments.length === 2) {
    return b - a
  } else if (arguments.length === 3) {
    return a + b + c
  } else if (arguments.length === 4) {
    let x = a + b
    let y = c + d
    return x / y
  }
}

console.log(funkyMath(5, 10))
console.log(funkyMath(2, 3, 4))
console.log(funkyMath(8, 2, 3, 5))


let arr = [1, 2, 33, 45, 6, 44]
let oddArr = []

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    oddArr.push(arr[i])
  }
}

oddArr.sort(function(a, b) {
  return a - b
})

console.log("Odd numbers sorted:", oddArr)


let me = {
  firstName: "Mc", 

 lastName: "Makhetho",
 age: 19,
  favouriteColour: " My favourite colour is black because is looks good with anything you wear ",
  dreamCar: "I would love to have BMW one day"
}
me.favouriteFood = " i love eating Burgers especially from Burger  king"
delete me.age

for (const key in me){console.log(key + " : " + me[key])}

