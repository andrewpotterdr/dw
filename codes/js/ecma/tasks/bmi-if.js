let height = 1.5
let weight = 60.0
let bmiValue
let bmiStatus

bmiValue = weight/height**2
bmiValue = bmiValue.toFixed(1)

if(bmiValue < 18.5)
  bmiStatus = 'Underweight'
else if(bmiValue >= 18.5 && bmiValue <= 24.9)
  bmiStatus = 'Normal weight'
else if(bmiValue >= 25 && bmiValue <= 29.9)
  bmiStatus = 'Overweight'
else
  bmiStatus = 'Obesity'

// console.log("BMI - value: "+bmiValue+" status: "+bmiStatus)
console.log(`BMI - value: ${bmiValue} status: ${bmiStatus}`)
