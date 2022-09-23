
var firstCustomer = {
    name: 'John Doe',
    gender: 'M',
    height: 1.80,
    weight: 90
}

var firstCustomerWeight = firstCustomer.weight
var firstCustomerHeight = firstCustomer.height
var firstCustomerBMI = firstCustomerWeight / (firstCustomerHeight * firstCustomerHeight)

function FirstCustomerBMIRange() {
    if (firstCustomerBMI < 18.5) {
        return 'underweight'
    }
    else if (firstCustomerBMI >= 18.5 && firstCustomerBMI < 25) {
        return 'normal weight'
    }
    else if (firstCustomerBMI >= 25.0 && firstCustomerBMI < 30) {
        return 'overweight'
    }
    else if (firstCustomerBMI >= 30) {
        return 'obese'
    }
}

var firstCustomerWeightType = FirstCustomerBMIRange()
console.log(firstCustomer.name + ' | ' + firstCustomer.gender + ' | ' + 'BMI:' + firstCustomerBMI + ' | ' + firstCustomerWeightType)



var secondCustomer = {
    name: 'Mary Anne',
    gender: 'F',
    height: 1.70,
    weight: 50
}

var secondCustomerWeight = secondCustomer.weight
var secondCustomerHeight = secondCustomer.height
var secondCustomerBMI = secondCustomerWeight / (secondCustomerHeight * secondCustomerHeight)

function SecondCustomerBMIRange() {
    if (secondCustomerBMI < 18.5) {
        return 'underweight'
    }
    else if (secondCustomerBMI >= 18.5 && secondCustomerBMI < 25) {
        return 'normal weight'
    }
    else if (secondCustomerBMI >= 25.0 && secondCustomerBMI < 30) {
        return 'overweight'
    }
    else if (secondCustomerBMI >= 30) {
        return 'obese'
    }
}

var secondCustomerWeightType = SecondCustomerBMIRange()
console.log(secondCustomer.name + ' | ' + secondCustomer.gender + ' | ' + 'BMI:' + secondCustomerBMI + ' | ' + secondCustomerWeightType)
