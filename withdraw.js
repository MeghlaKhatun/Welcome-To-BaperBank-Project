//step-1
document.getElementById("btn-withdraw").addEventListener("click",function(){
    // step-2
    const withdrawField=document.getElementById("withdraw-field")
    const newWithdrawFieldStringAmount=withdrawField.value;
    const newWithdrawFieldAmount=parseFloat(newWithdrawFieldStringAmount);

    
    // step-7
    withdrawField.value="";
    if(isNaN(newWithdrawFieldAmount)){
        alert("please provide a number")
        return;
    }
    

    // step-3
    const totalWithdraw=document.getElementById("total-withdraw");
    const previousTotalWithdrawAmountString=totalWithdraw.innerText;
    const previousTotalWithdrawAmount=parseFloat(previousTotalWithdrawAmountString);


    // step-4
    const totalWithdrawAmount=newWithdrawFieldAmount +previousTotalWithdrawAmount;
    totalWithdraw.innerText=totalWithdrawAmount;
    
    

    // step-5
    const balanceTotal=document.getElementById("balance-total");
    const balanceTotalString=balanceTotal.innerText;
    const balanceTotalAmount=parseFloat(balanceTotalString);

    
    

    // step-6
    const mainwithdrawBalance=balanceTotalAmount  - newWithdrawFieldAmount;
    balanceTotal.innerText=mainwithdrawBalance;

    
})