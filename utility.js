//uc4
//After 20 days of playing total amount win or loss
function gamblingSimulator()
{
    const stack=100;
    const bet=1;
    const isWin=1;
    const daysInMonth=20;
    let maxWin=stack+stack/2;
    let maxLoose=stack-stack/2;
    let cash=stack;
    let totalcash=0;
    for(index=1;index<=daysInMonth;index++)
    {
    cash=stack;
    while(cash != maxWin && cash != maxLoose){
    let ran=Math.floor(Math.random()*10)%2;
    if(ran==isWin)
    
       cash++;
    else
        cash--;
  }
  cash=cash-stack;
  totalcash=totalcash+cash;
  console.log("cash is : "+(cash-stack));
 }
console.log("total cash : "+totalcash);
}
module.exports={gamblingSimulator};