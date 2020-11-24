//uc4
//Each month would like to know the days won and lost and by how much
function gamblingSimulator()
{   let arr=[];
    const stack=100;
    const bet=1;
    const isWin=1;
    const daysInMonth=30;
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
  arr[index]=totalcash;
  if(cash > 0)
  console.log("win : "+ cash);
  else
  console.log("lose : "+cash);
 }
console.log("total cash : "+totalcash);
}
module.exports={gamblingSimulator};