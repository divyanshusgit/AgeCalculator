let form = document.getElementById('form');
let date = document.getElementById('dateVal');
let month = document.getElementById('monthVal');
let year = document.getElementById('yearVal');
let today = new Date();
if(parseInt(date.value)<9){
    date.value = `0${today.getDate()}`;
}
else{
    date.value = today.getDate();
}
if(parseInt(month.value)<9){
    month.value = `0${today.getMonth()+1}`;
}
else{
    month.value = today.getMonth()+1;
}
year.value = today.getFullYear();
setTimeout(() => {
    form.style.opacity = '1'
}, 1000);
let inputElem = document.getElementById('dob');
let submitBtn = document.getElementById('submit');
let outputBox = document.getElementById('outputBox');
let instructions = document.getElementById('instructions');
let tryAgain = document.getElementById('tryAgain');
tryAgain.addEventListener('click', reloadFunc);

date.addEventListener('keydown', dateValidation);
month.addEventListener('keydown', monthValidation);
year.addEventListener('keydown', yearValidation);
function dateValidation(button) {
    let keyString = button.key;
    let integer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (date.value.length >= 2 && keyString != 'Backspace' && keyString != 'ArrowLeft' && keyString != 'ArrowRight') {
        button.preventDefault();
    }
    else {
        if (keyString != 'Backspace' && keyString != 'ArrowLeft' && keyString != 'ArrowRight' && !(integer.includes(parseInt(keyString)))) {
            button.preventDefault();
        };
    }
}
function monthValidation(button) {
    let keyString = button.key;
    let integer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (month.value.length >= 2 && keyString != 'Backspace' && keyString != 'ArrowLeft' && keyString != 'ArrowRight') {
        button.preventDefault();
    }
    else {
        if (keyString != 'Backspace' && keyString != 'ArrowLeft' && keyString != 'ArrowRight' && !(integer.includes(parseInt(keyString)))) {
            button.preventDefault();
        };
    }
}
function yearValidation(button) {
    let keyString = button.key;
    let integer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (year.value.length >= 4 && keyString != 'Backspace' && keyString != 'ArrowLeft' && keyString != 'ArrowRight') {
        button.preventDefault();
    }
    else {
        if (keyString != 'Backspace' && keyString != 'ArrowLeft' && keyString != 'ArrowRight' && !(integer.includes(parseInt(keyString)))) {
            button.preventDefault();
        };
    }
}

function reloadFunc(elem) {
    elem.target.style.outline = 'none';
    setTimeout(() => {
        elem.target.style.outline = '1px solid black';
    }, 100);
    setTimeout(() => {
        outputBox.style.opacity = 0;
        setTimeout(() => {
            location.reload();
        }, 500);
    }, 200);
}

function invalidInput() {
    instructions.style.opacity = '0'
    setTimeout(() => {
        instructions.innerHTML = 'Enter a valid DOB'
        instructions.style.opacity = '1'
    }, 700);
}

submitBtn.addEventListener('click', submitClickFunc);
function submitClickFunc(elem) {
    elem.target.setAttribute('style', 'outline: 1px solid white;')
    setTimeout(() => {
        elem.target.setAttribute('style', 'outline: 1px solid black;')
    }, 100);
    if (!(parseInt(date.value)) || !(parseInt(month.value)) || !(parseInt(year.value))) {
        invalidInput();
    }
    else {

        let shortMonths = [2, 4, 6, 9, 11];
        let notLeapYear = year.value % 4;
        if (date.value > 31 || month.value > 12) {
            invalidInput();
        }
        else if (shortMonths.includes(parseInt(month.value)) && date.value == 31) {
            invalidInput();
        }
        else if (month.value == 2 && notLeapYear && date.value > 28) {
            invalidInput();
        }
        else if (month.value == 2 && !notLeapYear && date.value > 29) {
            invalidInput();
        }
        else {
            if (parseInt(month.value) < 10) {
                month.value = `0${parseInt(month.value)}`;
            };
            if (parseInt(date.value) < 10) {
                date.value = `0${parseInt(date.value)}`;
            };
            let inputElem = new Date(year.value, month.value - 1, date.value);
            let today = new Date();
            if (inputElem <= today) {
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
            else {
                invalidInput();
            }
        }
    }
}
function logic() {
    let yearNum = document.getElementById('yearNum');
    let monthNum = document.getElementById('monthNum');
    let dayNum = document.getElementById('dayNum');
    let today = new Date();
    if (parseInt(month.value) < 10) {
        month.value = `0${parseInt(month.value)}`;
    }
    if (parseInt(date.value) < 10) {
        date.value = `0${parseInt(date.value)}`;
    }
    let dob = new Date(year.value, month.value - 1, date.value);
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDate = today.getDate();
    let dobYear = dob.getFullYear();
    let dobMonth = dob.getMonth();
    let dobDate = dob.getDate();
    let years;
    let months;
    let days;
    let maxDays = 30;
    let dobArr = [0, 2, 4, 6, 7, 9, 11];
    if (dobArr.includes(dobMonth)) {
        maxDays = 31;
    }
    if (currentMonth > dobMonth) {
        years = currentYear - dobYear;
        if (currentDate >= dobDate) {
            months = currentMonth - dobMonth;
            days = currentDate - dobDate;
        }
        else {
            months = currentMonth - dobMonth - 1;
            days = maxDays - (dobDate - currentDate);
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
            days = maxDays - (dobDate - currentDate);
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
            days = maxDays - (dobDate - currentDate);
        }
    }
    let arr = [0, 1, 3, 5, 7, 8, 10]
    if ((arr.includes(currentMonth)) && (currentMonth != dobMonth)) {
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
