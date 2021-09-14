var initialPrice = document.getElementById("initial-price");
var stocksQuantity = document.getElementById("stocks-quantity");
var currentPrice = document.getElementById("current-price");
var submitBtn = document.getElementById("submit-btn");
var outputBox = document.getElementById("output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip,qty,curr);

}

function calculateProfitAndLoss(initial,quantity,current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/(initial*quantity))*100;
        outputBox.innerText= "Loss is "+loss+ " Loss Percentage is "+ lossPercentage+ "%";
    }
    else if(current > initial){
        var gain = (current - initial) * quantity;
        var gainPercentage = (gain/(initial*quantity))*100;
        outputBox.innerText= "Gain is "+gain+" Gain Percentage is "+gainPercentage + "%";
    }
    else{
        outputBox.innerText= "No pain No gain";
    }

}

