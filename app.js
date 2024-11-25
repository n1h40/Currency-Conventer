
let rubl = document.querySelector(".td1");
let use = document.querySelector(".td2");
let euro = document.querySelector(".td3");
let tl = document.querySelector(".td4")

let rublSecond = document.querySelector(".td5");
let useSecond = document.querySelector(".td6");
let euroSecond = document.querySelector(".td7");
let tlSecond = document.querySelector(".td8");

let inputOne = document.querySelector(".inputOne");
let inputTwo = document.querySelector(".inputTwo");

let text11 = document.querySelector(".text11");
let text12 = document.querySelector(".text12");

let leftValue;
let rightValue;
let leftName = "RUB";
let rightName = "USD";

fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
    .then((res) => res.json())
    .then(a => {
        leftValue = a.data.USD / a.data.RUB
        rightValue = a.data.RUB / a.data.USD
        text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
        text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
    });

inputOne.addEventListener("keyup", (e) => {
    inputTwo.value = Math.round(e.target.value * leftValue)
});

inputTwo.addEventListener("keyup", (e) => {
    inputOne.value = Math.round(e.target.value * rightValue)
});

rubl.addEventListener("click", () => {

    rubl.style.backgroundColor = "#833cde"
    euro.style.backgroundColor = "white"
    tl.style.backgroundColor = "white"
    use.style.backgroundColor = "white"

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            leftName = "RUB";
            leftValue = a.data[rightName] / a.data.RUB;
            rightValue = a.data.RUB / a.data[rightName];
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });

    inputOne.addEventListener("keyup", (e) => {
        inputTwo.value = Math.round(e.target.value * leftValue)
    });

    inputTwo.addEventListener("keyup", (e) => {
        inputOne.value = Math.round(e.target.value * rightValue)
    });
});

rublSecond.addEventListener("click", (e) => {
    rublSecond.style.backgroundColor = "#833cde"
    euroSecond.style.backgroundColor = "white"
    tlSecond.style.backgroundColor = "white"
    useSecond.style.backgroundColor = "white"
    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            rightName = "RUB";
            leftValue = a.data.RUB / a.data[leftName];
            rightValue = a.data[leftName] / a.data.RUB;
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });

    inputOne.addEventListener("keyup", (e) => {
        inputTwo.value = Math.round(e.target.value * leftValue)
    });

    inputTwo.addEventListener("keyup", (e) => {
        inputOne.value = Math.round(e.target.value * rightValue)
    });
});

use.addEventListener("click", () => {

    use.style.backgroundColor = "#833cde"
    rubl.style.backgroundColor = "white"
    euro.style.backgroundColor = "white"
    tl.style.backgroundColor = "white"

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            leftName = "USD";
            leftValue = a.data[rightName] / a.data.USD;
            rightValue = a.data.USD / a.data[rightName];
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });

    inputOne.addEventListener("keyup", (e) => {
        inputTwo.value = Math.round(e.target.value * leftValue)
    });

    inputTwo.addEventListener("keyup", (e) => {
        inputOne.value = Math.round(e.target.value * rightValue)
    });
});

useSecond.addEventListener("click", (e) => {

    useSecond.style.backgroundColor = "#833cde"
    rublSecond.style.backgroundColor = "white"
    euroSecond.style.backgroundColor = "white"
    tlSecond.style.backgroundColor = "white"

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            rightName = "USD";
            leftValue = a.data.USD / a.data[leftName];
            rightValue = a.data[leftName] / a.data.USD;
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });

    inputOne.addEventListener("keyup", (e) => {
        inputTwo.value = Math.round(e.target.value * leftValue)
    });

    inputTwo.addEventListener("keyup", (e) => {
        inputOne.value = Math.round(e.target.value * rightValue)
    });
});

euro.addEventListener("click", (e) => {

    euro.style.backgroundColor = "#833cde"
    rubl.style.backgroundColor = "white"
    use.style.backgroundColor = "white"
    tl.style.backgroundColor = "white"

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            leftName = "EUR";
            leftValue = a.data[rightName] / a.data.EUR;
            rightValue = a.data.EUR / a.data[rightName];
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });

    inputOne.addEventListener("keyup", (e) => {
        inputTwo.value = Math.round(e.target.value * leftValue)
    });

    inputTwo.addEventListener("keyup", (e) => {
        inputOne.value = Math.round(e.target.value * rightValue)
    });
});

euroSecond.addEventListener("click", (e) => {
    
    euroSecond.style.backgroundColor = "#833cde"
    rublSecond.style.backgroundColor = "white"
    useSecond.style.backgroundColor = "white"
    tlSecond.style.backgroundColor = "white"

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            rightName = "EUR";
            leftValue = a.data.EUR / a.data[leftName];
            rightValue = a.data[leftName] / a.data.EUR;
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });

    inputOne.addEventListener("keyup", (e) => {
        inputTwo.value = Math.round(e.target.value * leftValue)
    });

    inputTwo.addEventListener("keyup", (e) => {
        inputOne.value = Math.round(e.target.value * rightValue)
    });
});

tl.addEventListener("click", (e) => {

    tl.style.backgroundColor = "#833cde"
    rubl.style.backgroundColor = "white"
    use.style.backgroundColor = "white"
    euro.style.backgroundColor = "white"

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            leftName = "TRY";
            leftValue = a.data[rightName] / a.data.TRY;
            rightValue = a.data.TRY / a.data[rightName];
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });

    inputOne.addEventListener("keyup", (e) => {
        inputTwo.value = Math.round(e.target.value * leftValue)
    });

    inputTwo.addEventListener("keyup", (e) => {
        inputOne.value = Math.round(e.target.value * rightValue)
    });
});

tlSecond.addEventListener("click", (e) => {

    tlSecond.style.backgroundColor = "#833cde";
    rublSecond.style.backgroundColor = "white";
    useSecond.style.backgroundColor = "white";
    euroSecond.style.backgroundColor = "white";

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            rightName = "TRY";
            leftValue = a.data.TRY / a.datxa[leftName];
            rightValue = a.data[leftName] / a.data.TRY;
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`;
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`;
        });

    inputOne.addEventListener("keyup", (e) => {
        inputTwo.value = Math.round(e.target.value * leftValue)
    });

    inputTwo.addEventListener("keyup", (e) => {
        inputOne.value = Math.round(e.target.value * rightValue)
    });
});