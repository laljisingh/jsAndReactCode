const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    const amount = document.getElementById("fee");
    const percent = document.getElementById("service");
    const partner = document.getElementById("partner");
    
    const amt = ((amount.value*percent.value)/100)/partner.value;

    const result = document.getElementById("result");
    const p = document.getElementById("paragraph");
    p.innerText = "Tip Amount!";

    const resultAmt = document.getElementById("resultAmount");
    resultAmt.style.border = "1px solid black";
    resultAmt.innerText = `Rs.${amt}`;
})