//uc3
//If in or loose 50% of stack the gambler will resign
function gamblingSimulator()
{
    const stack=100;
    const bet=1;
    const WIN_CASH=stack+stack/2;
    const LOST_CASH=stack-stack/2;
    console.log("stack is : " + stack +" and bet is : "+ bet +" for every game");
    let isWin=1;
    let cash=stack;
    let ran=Math.floor(Math.random()*10)%2;
    while(cash != WIN_CASH && cash != LOST_CASH){
    if(ran==isWin)
    
       cash++;
    else
        cash--;
  }
  console.log("cash is : "+cash);
}
module.exports={gamblingSimulator};