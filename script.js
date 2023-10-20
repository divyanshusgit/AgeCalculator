* {
    font-family: sans-serif;
}

#container {
    margin: auto;
    width: 95vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

#form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    opacity: 0;
    transition: 1s all;
}

#dob {
    text-align: center;
    font-size: 40px;
    border-radius: 2px;
    padding: 10px;
    width: 290px;
    border: none;
    display: inline-block;
    margin: 10px 0px;
    border-top: 30px solid rgb(255, 0, 0, 0.7);
    background: linear-gradient(90deg, rgb(255, 255, 220) 0%, rgb(252, 251, 188) 100%);
    outline: 1px solid black;
    font-weight: 700;
}

#instructions {
    margin: 10px 0px;
    padding: 10px;
    font-size: 20px;
    color: rgb(130, 130, 130);
    text-align: center;
    transition: 0.5s all;
}

.buttons {
    font-size: 20px;
    border-radius: 2px;
    padding: 10px;
    border: none;
    outline: 1px solid black;
    background: linear-gradient(90deg, rgb(255, 255, 220) 0%, rgb(252, 251, 188) 100%);
}

#tryAgain {
    text-align: center;
    width: 155px;
    margin: 10px auto;
}

.buttons:hover{
    cursor: pointer;
}

#outputBox {
    display: none;
    opacity: 0;
    transition: 1s all;
}

#outputData {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    transition: 1s all;
}

.output-elems {
    padding: 10px 10px;
}

.innerOnes {
    border-radius: 1px;
    text-align: center;
    margin: 10px;
    padding: 10px;
    color: black;
    width: 70px;
}

.nums {
    border-top: 20px solid red;
    font-size: 50px;
    background: linear-gradient(90deg, rgb(255, 255, 220) 0%, rgb(252, 251, 188) 100%);
    outline: 1px solid black;
    font-weight: 700;
}

.texts {
    text-align: center;
    color: rgb(130, 130, 130);
}

input[type="date"]::-webkit-calendar-picker-indicator {
    background-image: url('calendar.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 26px;
    position: relative;
    right: 13px;
    bottom: 2px;
}

input[type="date"]::-date-picker-indicator {
    background-image: url('calendar.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 26px;
    position: relative;
    right: 13px;
    bottom: 2px;
}

@media(max-width:630px) {
    #dob {
        font-size: 30px;
        width: 220px;
        border-top-width: 25px;
    }

    #instructions {
        font-size: 20px;
    }

    .buttons {
        font-size: 16px;
        padding: 4px 8px;
    }

    .nums {
        border-top-width: 18px;
        font-size: 35px;
    }

    #tryAgain {
        width: 125px;
    }

    .texts {
        font-size: 16px;
    }

    .output-elems {
        padding: 0px;
    }

    .innerOnes {
        width: 55px;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
        background-size: 20px;
        right: 10px;
    }
}

@media(max-width:530px) {
    #dob {
        font-size: 20px;
        width: 150px;
        border-top-width: 18px;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
        background-size: 15px;
        right: 7px;
        bottom: 1px;
    }
}

@media (max-width:340px) {
    .nums {
        border-top-width: 15px;
        font-size: 30px;
    }

    .texts {
        font-weight: normal;
        text-align: center;
    }

    .innerOnes {
        padding: 5px;
        width: 50px;
    }

}

@media(max-width:260px) {
    .innerOnes {
        margin: 5px 0px;
    }

    #month {
        margin: 5px 7px;
    }
}
