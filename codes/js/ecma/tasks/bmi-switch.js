let height = 1.5
let weight = 60.0
let bmiValue
let bmiStatus

bmiValue = weight/height**2
bmiValue = bmiValue.toFixed(1)

switch (bmiValue) {
  case bmiValue < 18.5:
    bmiStatus = 'Underweight'
    break
  case bmiValue >= 18.5 && bmiValue <= 24.9:
    bmiStatus = 'Normal weight'
    break
  case bmiValue >= 25 && bmiValue <= 29.9:
    bmiStatus = 'Overweight'
    break
  default:
    bmiStatus = 'Obesity'
}

console.log(`BMI - value: ${bmiValue} status: ${bmiStatus}`)
