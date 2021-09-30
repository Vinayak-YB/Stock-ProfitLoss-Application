var initialPrice = document.getElementById("initial-price");
var stocksQuantity = document.getElementById("stocks-quantity");
var currentPrice = document.getElementById("current-price");
var submitBtn = document.getElementById("submit-btn");
var outputBox = document.getElementById("output-box");

if (initialPrice.value > 0 && stocksQuantity.value > 0 && currentPrice.value>0){

    
}
submitBtn.addEventListener("click", submitHandler);

function submitHandler(){
    if (initialPrice.value > 0 && stocksQuantity.value > 0 && currentPrice.value>0){

    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip,qty,curr);
    }
    else{
        outputBox.innerText="Enter only input greater than 0!";
    }

}

function calculateProfitAndLoss(initial,quantity,current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/(initial*quantity))*100;
        lossPercentage = lossPercentage.toFixed(2);
        outputBox.style.color = "red"
        outputBox.innerText= "Loss is "+loss+ " Loss Percentage is "+ lossPercentage+ "%";
    }
    else if(current > initial){
        var gain = (current - initial) * quantity;
        var gainPercentage = (gain/(initial*quantity))*100;
        gainPercentage = gainPercentage.toFixed(2);
        outputBox.style.color = "green"
        outputBox.innerText= "Gain is "+gain+" Gain Percentage is "+gainPercentage + "%";
    }
    else{
        outputBox.innerText= "No pain No gain";
    }

}

