 
document.getElementById('withdraw-field').addEventListener('click', function(){
    const newWithdraw=document.getElementById('withdraw-input-field');
    const withdrawValue = parseFloat(newWithdraw.value);

    
 

    const withdrawContent=document.getElementById('balance');
    const totalWithdraw=parseFloat(withdrawContent.innerText);

    const addNewWithdraw=totalWithdraw-withdrawValue;
    console.log(addNewWithdraw);
    withdrawContent.innerText=addNewWithdraw;
    
})

