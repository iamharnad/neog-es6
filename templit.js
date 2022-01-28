let name = 'Tanay'
let line = 'Helloo ' + name + ' !'
console.log(line)

const helloTemp = `Hello ${name} !`
console.log(helloTemp)

const giveMeFive = () => 5
const line2 = `Hey, my roll is ${giveMeFive()}`
console.log(line2)

// Question: variable 5 // "odd" ->> write this function, using arrow
// Question: use this function in a sentence using template literal

// Shivam's answer
const oddOrEven = (num) => (num % 2 === 0 ? 'even' : 'odd')
const res = `The number 5 is ${oddOrEven(5)} ${name}`