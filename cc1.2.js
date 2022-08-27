
/*
const markMass = 78, markHeight = 1.69;
const johnMass = 92, johnHeight = 1.95;
*/
const markMass = 95, markHeight = 1.88;
const johnMass = 85, johnHeight = 1.76;

const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / (johnHeight * johnHeight);

console.log("Mark BMI : "+bmiMark);
console.log("John BMI : "+bmiJohn);

//const markHigherBMI = bmiMark > bmiJohn;
//console.log(markHigherBMI)

if(bmiMark>bmiJohn){
    console.log(`Marks BMI (${bmiMark}) is higher than Johns BMI (${bmiJohn}) :(`)
}else{
    console.log(`Johns BMI (${bmiJohn}) is higher than Marks BMI (${bmiMark}) :(`)
}

