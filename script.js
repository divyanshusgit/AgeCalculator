let form = document.getElementById('form');
setTimeout(() => {
    form.style.opacity = '1'
}, 1000);
let inputElem = document.getElementById('dob');
let submitBtn = document.getElementById('submit');
let outputBox = document.getElementById('outputBox');
let instructions = document.getElementById('instructions');
let tryAgain = document.getElementById('tryAgain');
tryAgain.addEventListener('click',reloadFunc);
function reloadFunc(){
    outputBox.style.opacity = 0;
    setTimeout(() => {
        location.reload();
    }, 500);
}

let today = new Date();
if (today.getDate() < 10) {
    inputElem.max = `${today.getFullYear()}-${today.getMonth() + 1}-0${today.getDate()}`;
}
else {
    inputElem.max = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

submitBtn.addEventListener('click', submitClickFunc);
function submitClickFunc(elem) {
    elem.target.setAttribute('style', 'outline: 1px solid white;')
    setTimeout(() => {
        elem.target.setAttribute('style', 'outline: 1px solid black;')
    }, 100);
    if (new Date(inputElem.value) <= new Date(inputElem.max)) {
        if (inputElem.value == '') {
            elem.preventDefault();
        }
        else {
            setTimeout(() => {
                form.style.opacity = '0';
                setTimeout(() => {
                    form.style.display = 'none';
                    logic();
                    outputBox.setAttribute('style', 'display:flex; flex-direction: column;')
                    setTimeout(() => {
                        outputBox.style.opacity = '1';
                    }, 400);
                }, 900);
            }, 200);
        }
    }
    else{
        instructions.style.opacity = '0'
        setTimeout(() => {
            instructions.innerHTML = 'Enter a valid DOB'
            instructions.style.opacity = '1'
        }, 700);
    }
}
function logic() {
    let yearNum = document.getElementById('yearNum');
    let monthNum = document.getElementById('monthNum');
    let dayNum = document.getElementById('dayNum');
    let today = new Date();
    let dob = new Date(inputElem.value);
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDate = today.getDate();
    let dobYear = dob.getFullYear();
    let dobMonth = dob.getMonth();
    let dobDate = dob.getDate();
    let years;
    let months;
    let days;
    if (currentMonth > dobMonth) {
        years = currentYear - dobYear;
        if (currentDate >= dobDate) {
            months = currentMonth - dobMonth;
            days = currentDate - dobDate;
        }
        else {
            months = currentMonth - dobMonth - 1;
            days = 30 - (dobDate - currentDate);
        }
    }
    else if (currentMonth < dobMonth) {
        years = currentYear - dobYear - 1;
        if (currentDate >= dobDate) {
            months = 12 - (dobMonth - currentMonth);
            days = currentDate - dobDate;
        }
        else {
            months = 12 - (dobMonth - currentMonth) - 1;
            days = 30 - (dobDate - currentDate);
        }
    }
    else {
        if (currentDate >= dobDate) {
            years = currentYear - dobYear;
            months = 0;
            days = currentDate - dobDate;
        }
        else {
            years = currentYear - dobYear - 1;
            months = 11;
            days = 30 - (dobDate - currentDate);
        }
    }
    let arr = [0, 1, 3, 5, 7, 8, 10]
    if (arr.includes(currentMonth)) {
        dayNum.innerHTML = days + 1;
    }
    else {
        if (currentMonth == 2) {
            if (currentYear % 4 == 0) {
                dayNum.innerHTML = days - 1;
            }
            else {
                dayNum.innerHTML = days - 2;
            }
        }
        else {
            dayNum.innerHTML = days;
        }
    }
    yearNum.innerHTML = years;
    monthNum.innerHTML = months;
}
