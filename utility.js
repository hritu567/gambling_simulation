//uc2
//Gambler make $1 bet so win or loose
function gamblingSimulator()
{
    let stack=100;
    let bet=1;
    console.log("stack is : " + stack +" and bet is : "+ bet +" for every game");
    let win=0;
    let loose=0;
    let ran=Math.floor(Math.random()*10)%2;
    if(ran==1)
    {
        win=bet;
        console.log("Gambler won : $" +win);
    }else
    {
        loose=bet;
        console.log("Gambler lost : $" +loose);
    }
}
module.exports={gamblingSimulator};