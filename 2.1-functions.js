function describeCountry(country,population,capitalCity){

    let sentence= `${country} has ${population} people and its capital city is ${capitalCity}`;
    return sentence;
}

const israel=describeCountry("Israel", 9300000, "Jerusalem");
const finland=describeCountry("Finland", "six million", "Helsinki");
const ecuador=describeCountry("Ecuador", 2011000, "Quito");

console.log(israel);
console.log(finland);
console.log(ecuador);