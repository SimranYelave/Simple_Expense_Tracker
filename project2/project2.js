var text_input = document.getElementById("text-input");
var amount_input = document.getElementById("amount-input");
var balancevalue = document.getElementById("balance-value");
//var historytext = document.getElementById("history-text");
//var historyamount = document.getElementById("history-amount");
var historycontent = document.getElementById("history-content");
var expensevalue = document.getElementById("expense-value");
var incomevalue = document.getElementById("income-value");
function balance(){

    currentbalance = parseInt(balancevalue.innerText)  ;
    var amount = parseInt(amount_input.value) ;
    currentexpense = parseInt(expensevalue.innerText) ;
    currentincome = parseInt(incomevalue.innerText) ;
    var final_expensevalue;
    

    if(text_input.value == '' || amount_input.value == ''){
        alert("Please fill the info.");
    }
    else{
        //balancevalue.innerText = amount;  
        if(amount > 0){
            balancevalue.innerText = currentbalance + amount;
            incomevalue.innerText = currentincome + amount;
        }
        else if(amount < 0){
            balancevalue.innerText = currentbalance + amount;
            expensevalue.innerText = currentexpense + amount;
            final_expensevalue = expensevalue.innerText.slice(1,expensevalue.innerText.length);
            expensevalue.innerText = final_expensevalue;
        }
    }
    
}
function historyinfo(a,b){
    a = text_input.value;
    b =  amount_input.value;
    historycontent.innerHTML += "<div>" + a + " : " + b + "</div>";
}

