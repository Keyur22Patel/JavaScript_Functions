

// Exercise 1 Section
function printOdds(count){
    for (let x = 0; x <= count; x++){
    
   if(x % 2 == 0) {
    console.log("The number is even.");
     }
    else {
    console.log("The number is odd.");
   }
   }
}
printOdds(10);
printOdds(100);
// Exercise 2 Section

/*function checkAge(userName, age){
    let oldEnough = `Congrats ${userName}, you can drive!`;
    let tooYoung = `Sorry ${userName}, but you need to wait until you're 16.!`;
}


    if (x < 16){
    console.log("let oldEnough");
    }
     else {
    console.log("tooYoung");
     
}
 checkAge("keyur",29);*/
 // Exercise 3 Section
 function checkQuadrant(x, y){
     
    if (x > 0 && y > 0){
         return "Quadran 1";
    }
    else if (x < 0 && y > 0){
        return "Quadran 2";
    }
    else if (x < 0 && y < 0){
        return "Quadran 3";
    }
    else if (x > 0 && y < 0){
        return "Quadran 4";
    }
    else if (x == 0 && y != 0){
        return "x Axis";
    }
    else if (x != 0 && y == 0){
        return "x Axis";
    }
    else if (x > 0 && y < 0){
        return "origin";
    }
 }
console.log(checkQuadrant(11,1));
console.log(checkQuadrant(-11,1));
console.log(checkQuadrant(-1,11));
console.log(checkQuadrant(1,11));
console.log(checkQuadrant(11,11));
console.log(checkQuadrant(-1,11));

// Exercise 4 Section
function checkTriangle (a, b, c){
  return a + b > c || a + c > b || b + c > a 
}

function checkTriangle (a, b, c){
    let isVaild = isVaildTriangle(a, b, c);
    if (isVaild){
        if (a == b || b == c ){
            return `Equilateral`;

        }else if (a == b || b == c || a == c ){
            return `Isosceles`;

    }else {
        return `not a valid tringale.`;
    }
    }

}
console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));

// Exercise 5 Section 
/*15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.*/

function data(planLimit , day, usage) {
    let periodLength = 30;
    let cruuentAvg = usage / day;
    let projectedAvg = planLimit /periodLength;
    let remainingData = planLimit - usage;
    let statuMsg;
    console.log(`${day} day(s) used,${periodLength - day} days remaining`);
    console.log(`Average daily use :${planLimit / periodLength} GB/day`);
     
    if (cruuentAvg > projectedAvg){
        statuMsg = "EXCEEDING";
     } else if (cruuentAvg < projectedAvg){
         statuMsg = "UNDER";
     }else
{
    statuMsg = "AT";
}
console.log(`You are ${statuMsg} your average daily use ${cruuentAvg} GB/day),
continuing this  usage, you'll end up using ${planLimit - (usage + projectedUsage)} GB from your data limit.`);


    
}
data(50, 15, 25);