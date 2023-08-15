// step-1
document.getElementById("btn-deposit").addEventListener("click",function(){

    // step-2
    const depositField=document.getElementById("deposit-field");
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);

    depositField.value="";

    if(isNaN(newDepositAmount)){
        alert("please provide a number")
        return;
    }
    
    // step-3
    const depositTotalElement=document.getElementById("deposit-total");
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    
    // step-4
    const currentAmount=previousDepositTotal +newDepositAmount;
    depositTotalElement.innerText=currentAmount;

    // step-5
    const balanceTotal=document.getElementById("balance-total");
    const balanceTotalString=balanceTotal.innerText;
    const balanceTotalAmount=parseFloat(balanceTotalString);

    // step-6
    const mainBalanceTotal= newDepositAmount +balanceTotalAmount;
    balanceTotal.innerText=mainBalanceTotal;
    

    

})