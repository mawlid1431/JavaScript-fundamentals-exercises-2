// Good Luck! You got this 💪🏾
// Write your code here.


//question 5

const describeCountry = (country, population, capital) => {
    return `${country} has ${population} million people and its capital city is ${capital}`
}
//question6
console.log(describeCountry("somaliland", 4.5, "Hargeisa"))
console.log(describeCountry("somalia", 6.6, "Mogadisho"))
console.log(describeCountry("turkey", 83, "Ankara"))

//question7
const percentageOftheWorld1 = (country, population, populationValue) => {
    populationValue = populationValue / 7900 * 100
    return `${country} has ${population} million people, so its about ${populationValue} of the world population `
}

console.log(percentageOftheWorld1("China", 1441, 1441))
console.log(percentageOftheWorld1("Turkey", 83, 83))
console.log(percentageOftheWorld1("Somaliland", 4.5, 4.5))

//question13

let population = ["Turkey 83 million people", "Somaliland 4.5 million people", "Somalia 6.6 million people "]
console.log(population)
//question 14
let neighpoors = ["ethopia", "kenya", "Djabouti", "yemen"]
console.log(neighpoors)
//question15
console.log(neighpoors == 4)

for (let i = 0; i < 4; i++) {
    console.log(neighpoors[i])
}
//question17
for (let i = 4; i > -1; i--) {
    console.log(neighpoors[i])
}



