console.log("ej śpisz?")

let numberBase = document.getElementById('numberBase')
let numberPower = document.getElementById('numberPower')
let math = document.querySelector('.math')
let resultPower = document.querySelector('.resultPower')

let numberFactor = document.getElementById('numberFactor')
let resultFactor = document.querySelector('.resultFactor')

let frameX = document.getElementById('frameX')
let frameY = document.getElementById('frameY')
let frameS = document.getElementById('frameS')
let frameResult = document.querySelector('.resultFrame')

let resulData = document.querySelector('.resultData')

let resultLeapYear = document.querySelector('.resultLeapYear')

math.addEventListener('click', generate)


function generate() {

    resultPower.textContent = numberBase.value + "^" + numberPower.value + "= " + power(numberBase.value, numberPower.value)

    resultFactor.textContent = numberFactor.value + "!= " + factor(numberFactor.value)

    if (frameX.value != 0) {
        resultPower.textContent = frame(frameX.value, frameY.value, frameS.value)
    }


    resulData.textContent = date()

    resultLeapYear.textContent = leapYear()

}

function power(base, powerRaised) {
    if (powerRaised != 0)
        return (base * power(base, powerRaised - 1))
    else
        return 1
}

function factor(x) {
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factor(x - 1);
    }
}

function frame(x, y, s) {
    let frameResult = ""
    for (let i = 1; i <= x; i++) {
        document.write(s)
    }
    for (let i = 2; i <= y; i++) {
        document.write("<br>")
        document.write(s)

        for (let j = 1; j < x - 1; j++) {
            document.write("\xA0")
        }
        document.write(s)
    }
    document.write("<br>")
    for (let i = 1; i <= x; i++) {
        document.write(s)

    }


    return frameResult
    //return x + " " + y + " " + s
}

function date() {
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return (currentDate.getDate() - 7 + " " + cMonth + " " + cYear + " " + time + " " + "date next month + 12h= " + cDay + " " + (currentDate.getMonth() + 2) + " " + cYear + " " + (currentDate.getHours() + 12) + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds())
}

function leapYear() {
    let result = ""
    for (i = 1900; i <= 2100; i++) {
        if (i % 4 == 0 || i % 400 == 0) {
            result += i + " "
        }
    }
    return result
}