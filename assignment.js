//feet to mile conversion 
function feetToMile(feet){
   if(feet<0)
   {
       return "Error! distance cannot be negative.try again with positive value.";
   }
   let mile=(feet/5280).toFixed(3);
   return mile+" mile.";
}

let feet=4322;
let result=feetToMile(feet);
console.log(result);

//woodcalculator
function woodCalculator(chair,table,bed){
    if(chair<0 || table<0 || bed<0)
    {
        return "Error! feet cannot be negative.try again with positive value.";
    }
    let totalWood=chair*1+table*3+bed*5;
    return totalWood+" cube-feet wood need.";
}


let result=woodCalculator(-2,5,4);
console.log(result);


 //brickCalculation
 function brickCalculator(stageOfBuilding){
    if(stageOfBuilding<0){
        return "Error! stage of building cannot be negative.try again with positive value.";
    }
    var totalBrick=0;

   if(stageOfBuilding>20)
   {
       stageOfBuilding=stageOfBuilding-20;
      totalBrick=10*1000*stageOfBuilding;
      totalBrick=totalBrick+(10*1000*12)+(10*1000*15);
      return totalBrick;
   }

   if(stageOfBuilding>=11 && stageOfBuilding<=20){
       stageOfBuilding=stageOfBuilding-10;
       totalBrick=12*1000*stageOfBuilding;
       totalBrick=totalBrick+15*1000*10;

       return totalBrick;
   }
   if(stageOfBuilding<=10){
       totalBrick=15*1000*stageOfBuilding;
       return totalBrick;
   }
}

let stageOfBuilding=255;
 let totalBrick=brickCalculator(stageOfBuilding);
console.log(totalBrick);

//tinyFriend
function tinyFriend(friends){
    totalFriend=friends.length;
    var smallestFriend="";
    var nameLenght=100000;
    for(i=0; i<totalFriend; i++)
    {
        var name=friends[i];
        if(nameLenght>name.length)
        {
          smallestFriend=name;
          nameLenght=name.length;
        }
    }
    if(nameLenght==0)
    {
        return "Error! name cannot be empty."
    }
     return smallestFriend;
}

let friends=["golam","mostafa","mohammad",""];
 var smallFriendName= tinyFriend(friends);
 console.log(smallFriendName);



