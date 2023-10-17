let form = document.getElementById('form');
let inputElem = document.getElementById('dob');
let submitBtn = document.getElementById('submit');
let output = document.getElementById('output');

let today = new Date();
let maxDate;
if (today.getDate() < 10) {
    maxDate = `${today.getFullYear()}-${today.getMonth() + 1}-0${today.getDate() - 1}`;
}
else {
    maxDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 1}`;
}
// maxDate = `2023-02-02`;
inputElem.max = maxDate;

submitBtn.addEventListener('click', submitClickFunc);
function submitClickFunc(elem) {
    if (inputElem.value == '') {
        elem.preventDefault();
    }
    else {
        elem.target.setAttribute('style', 'box-shadow: none;')
        elem.target.style.top = '6px';
        elem.target.style.left = '6px';
        setTimeout(() => {
            elem.target.setAttribute('style', 'box-shadow: 4px 4px #rgb(150,150,150);')
            elem.target.style.top = '0px';
            elem.target.style.left = '0px';
        }, 100);
        setTimeout(() => {
            form.style.display = 'none';
            logic();
            output.style.display = 'flex';
        }, 500);
    }
}
function logic() {
    let yearNum = document.getElementById('yearNum');
    let monthNum = document.getElementById('monthNum');
    let dayNum = document.getElementById('dayNum');
    let today = new Date(`2024-01-01`);
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
    if(currentMonth>dobMonth){
        years = currentYear - dobYear;
        if(currentDate>=dobDate){
            months = currentMonth - dobMonth;
            days = currentDate-dobDate;
        }
        else{
            months = currentMonth - dobMonth - 1;
            days = 30 - (dobDate-currentDate);
        }
    }
    else if (currentMonth<dobMonth){
        years = currentYear - dobYear - 1;
        if(currentDate>=dobDate){
            months = 12 - (dobMonth-currentMonth);
            days = currentDate-dobDate;
        }
        else{
            months = 12 - (dobMonth-currentMonth) - 1;
            days = 30 - (dobDate-currentDate);
        }
    }
    else{
        if(currentDate>=dobDate){
            years = currentYear-dobYear;
            months = 0;
            days = currentDate-dobDate;
        }
        else{
            years = currentYear - dobYear -1;
            months = 11;
            days = 30 - (dobDate-currentDate);
        }
    }
    console.log(currentMonth);
    let arr = [0,1,3,5,7,8,10]
    if(arr.includes(currentMonth)){
        dayNum.innerHTML = days+1;
    }
    else{
        if(currentMonth==2){
            if(currentYear%4==0){
                dayNum.innerHTML = days-1;
            }
            else{
                dayNum.innerHTML = days-2;
            }
        }
        else{
            dayNum.innerHTML = days;
        }
    }
    yearNum.innerHTML = years;
    monthNum.innerHTML = months;
}