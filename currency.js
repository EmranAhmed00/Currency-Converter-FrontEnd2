import * as webCurrency from './api.js'

document.getElementById("convert").addEventListener("click", function(){

    let fromSelectEl = document.querySelector('#from')
    let toSelectEl = document.querySelector('#to')
    let amount = document.querySelector('#amount')
    webCurrency.getData(fromSelectEl.value, toSelectEl.value, amount.value)
});




