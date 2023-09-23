document.getElementById('btn-widrow').addEventListener('click', function(){

    const inputField=document.getElementById('widrow-field');
    const addInputField=parseFloat(inputField.value);

    
    const  balance = document.getElementById('Withdraw');
    const balanceValue = parseFloat(balance.innerText);

    const  totalBalance = document.getElementById('balanceId');
    const totalBalanceValue = parseFloat(totalBalance.innerText);
   
    const newtotalBalanceValue = totalBalanceValue-addInputField;
    totalBalance.innerText=newtotalBalanceValue;


 

    const newDeposit=balanceValue+addInputField;
   
    balance.innerText=newDeposit


    inputField.value=''
})




