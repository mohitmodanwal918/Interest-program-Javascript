function calculater(){
    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const yearsInput = document.getElementById("years");
    const rateInput = document.getElementById ("rate");
    
    let principal = Number(principalInput.value) ;
    let rate = Number(rateInput.value /100);
    let years= Number(yearsInput.value);

    const result = principal * Math.pow((1+ rate/1), 1* years)
    
    totalAmount.textContent = result;
    

}