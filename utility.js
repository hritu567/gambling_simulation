//uc7
//If Won would like to continue to play for next month
var arr=[];
var totalCashMonth=[];
const stack=100;
const bet=1;
const isWin=1;
const daysInMonth=30;
var maxWin=stack+stack/2;
var maxLoose=stack-stack/2;
var monthInYear=1;
var cash=0;
var limit=0;
var min=0;
var max=0;
var dayWin=0;
var dayloose=0;
var totalcash=0;
var flag=0;
//function to get daily cash win or lose
function gamble()
{
let ran=Math.floor(Math.random()*10)%2;
cash=stack;
while(cash != maxWin && cash != maxLoose){
if(ran==isWin)
    { cash=cash+bet;}
else
    {cash=cash-bet;}
}
return cash;
}
//Check if win or loose until condition
while(flag != 1)
{
for(month=0;month<=monthInYear;month++)
{
  for(day=0;day<=daysInMonth;day++)
  {
      let cashPerDay=gamble();
      if(cashPerDay > stack)
      dayWin++;
      else
      dayloose++;
      cashPerDay=cashPerDay-stack;
      arr[day]=cashPerDay;
      totalcash=totalcash+cashPerDay;
      totalCashMonth[day]=totalcash;
  }
  console.log("Total days won "+dayWin+ " days by "+ dayWin*50);
  console.log("Total days Loose " +dayloose+ " Loose days by " +dayloose*50);
  console.log("Total Cash for a month : "+totalcash );
  min=totalCashMonth[0];
  max=totalCashMonth[0];
  var maxday=0;
  var minday=0;
  for(j=0;j<totalCashMonth.length;j++)
  {
      if(totalCashMonth[j] > max)
      {
          max=totalCashMonth[j];
          maxday=j;
      }
      if(totalCashMonth[j]<min)
      {
          min=totalCashMonth[j];
          minday=j;
      }
  }
  console.log("total cash for month : "+totalCashMonth.length);
  console.log("Most luckiest day is "+maxday+" cash is "+max);
  console.log("most unluckiest day is : "+minday+" cash is "+min);
}
if(totalcash > 0)
console.log("You can play for next month " +monthInYear + " month");
else
flag=1;
console.log("Total cash : "+totalcash);
totalcash=0;
console.log("You donn'y have cash to play");
}



module.exports={gamble};