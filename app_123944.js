// *****1ST ASSIGNMENT*****
// let x = parseInt(prompt("enter any numer"));
// let y = parseInt(prompt("enter any numer"));
// let plus = x+y;
// let minus = x-y;
// let multiply = x*y
// let divide = x/y
// alert(plus);
// alert(minus);
// alert(multiply);
// alert(divide);

// *****2ND ASSIGNMENT*****
// let x = (prompt("enter first four numer"));
// let firstDigit = Math.floor(x/1000);
// let remainder = (x%1000);
// let secondDigit = Math.floor(remainder/100)
// let remainder1 = (/10)
// let mul1 = math.floor(multiply/10)
// // let divide = x-10;
// alert(plus);
// alert(minus1);
// alert(multiply);
// alert(mul1);
// alert(divide);

//******* 3RD ASSIGNMENT***********
// let x=prompt("write the name of friends group")
// let x1=prompt("write the name of 1st friend")
// let x2=prompt("write the name of 2nd friend")
// let x3=prompt("write the name of 3rd friend")
// let x4=prompt("write the name of 4thfriend")
// alert(`${x}: ${x1},${x2},${x3},${x4}`)

// *****4TH ASSIGNMENT*******
// let x=prompt("write the name of friends group")
// let x1=prompt("write the name of 1st friend")
// let x2=prompt("write the name of 2nd friend")
// let x3=prompt("write the name of 3rd friend")
// let x4=prompt("write the name of 4thfriend")
// alert(  x + ":" + x1 + x2 + x3 + x4);

// *****5TH ASSIGNMENT*****
// >>>>uper Case>>>>
// let x="Hello Ahsan! I hope that you will be @@@'safe and sound'. I heared about you. You are illness from yesterday."
// alert(x.toUpperCase())

// >>>>lower case>>>>>
// let x="Hello Ahsan! I hope that you will be @@@@ 'safe and sound'. I heared about you. You are illness from yesterday."
// alert(x.toLowerCase())

// >>>>Trim<<<<<
// let x="                                                                          Hello Ahsan! I hope that you will be 'safe and sound'. I heared about you. You are illness from yesterday.                "
// alert(x.trim())

// >>>>INDEX<<<<
// let x="Hello Ahsan! I hope that you will be @@@@ 'safe and sound'. I heared about you. You are illness from yesterday."
// alert(x.indexOf("o"))
// alert(x.indexOf("A"))

// / >>>>>SLICE<<<<<<
// let x="Hello Ahsan! I hope that you will be @@@@ 'safe and sound'. I heared about you. You are illness from yesterday."
// alert(x.slice(13,112))

// >>>>>REPLACE<<<<<
// let x="Hello Ahsan! I hope that you will be @@@@ 'safe and sound'. I heared about you. You are illness from yesterday."
// alert(x.replace("you", "she"))

// >>>>>REPALACEALL<<<<<
// let x="Hello Ahsan! I hope that you will be @@@@ 'safe and sound'. I heared about you. You are illness from yesterday."
// alert(x.replaceAll("you" , "she"))

// *****6TH ASSIGNMENT*****
// >>>>>KEYLESS CAR<<<<
// let x=Math.abs(Math.floor(prompt("enter your age ")))
// if(x>18){
//     alert("Powering On.Enjoy the ride!")
// }
// else if(x===18){
//     alert("Congratulation on your first year of driving.Enjoy the ride!")
// }
// else{
//     alert("Sorry.you are too young to drive this car.Powering off")
// }

// *****7TH ASSIGNMENT*****
// >>>>>SHOPPING CART <<<<<
// let x=("Welcome Users To Our Shop")
// alert(x)
// let y=prompt("Please, write the name of your item")
// let z=Math.abs(Math.floor(prompt("please,write the price of your item")))
// if(z>=100){
//     alert("yes! this item is availabel in this price")
// }
// else{
//     alert("Sorry! the product is not availabel in this range")
// }
// let a=Math.abs(Math.floor(prompt("please,write the quantity of your item")))
// if(a>=1){

// }
// else{
//     alert("Sorry! you did't write the quantity of item")
// }
// let c=z*a
// alert(`Your total bill is\n ${c}`)
//  {"\n" is used for next line in java script}

// *****8TH ASSIGNMENT*****
// >>>>>TWEET CHECKER<<<<<
// let x=prompt("Write your tweet less than 140 characters")
// let y=x.length
// alert(`you write the ${y} characters.`)

// *****9TH ASSIGNMENT*****
// >>>>>AND OPERATOR<<<<<
// let x=prompt("write your color")
// let y=prompt("Have you any card?")
// if (x==("red") && y==("yes") ) {
//     alert( "please ! you can enter." )
// }
// else{
//     alert("sorry! you did not fulfil the requirements.")
// }

// *****10TH ASSIGNMENT*****
// >>>>OR OPERATOR<<<<<
// let x=prompt("Which colour you are wearing")
// let y=prompt("Have you any Card in your hand?")

//  if(x==("red") && y==("yes")){
//     alert("Thank you! you fulfil the all requirements\n" + "WellCome!You can enter and enjoy your party")
// }
// else if (x==("red") || y==("yes")){
//     alert("Thank you! You Can Enter")
// }
// else{
//     alert("Sorry!you did not fill any requirement")
// }

// *****11TH ASSIGNMENT*****
// >>>>>BMI<<<<
// let x=("Welcome to here!\n You can check your BMI.\n\n \"Please press the Ok button\"");
// alert(x)
// let wgh=parseFloat(prompt("Please!Enter your weight in pounds"));
// let hgh=parseFloat(prompt("Please!Enter your height in inches"))
// alert(`Your total BMI is\n${(wgh*703)/(hgh**2)}`)
// alert("If you want to check the range of your BMI.\n\n\"Please press the Ok button\"" )
// alert("<16.0 Severely Underweight\n16.0-18.4 Underweight\n18.5-24.9 Normal\n25.0-29.9 Overweight\n30.0-34.9 Moderately Obese\n35.0-39.9 Severely Obese\n>39.9 Morbidly Obese")

// *****12TH ASSIGNMENT*****
// >>>>>ARRAY<<<<
// let x=["Banana","Apples","Oranges","Blueberries"]
// alert(x)
// x.shift("Banana")
// alert(x)
// x.sort()
// alert(x)
// x.push("kiwi")
// alert(x)
// x.shift("Apples")
// alert(x)
// x.reverse()
// alert(x)
// let y=["Banana",["Apples",["Orange"],"Blueberries"]]
// alert(y)

// *****13TH ASSIGNMENT*****
// >>>>>Function1<<<<<
// function y(x){
//    alert(`${3+x+2*x+x**2}`)
// }
// y(2)
// y(3)

// *****14TH ASSIGNMENT*****
// >>>>FUNCTION2<<<<<
// function y(x){
//    if(x%2===0){
//       alert("TRUE")
//    }
//    else{
//       alert("FALSE")
//    }
//   **** alert(x%2===0)***** second method
// }
// y(5)

// *****15TH ASSIGNMENT*****
// function colorMessage(favoriteColor,shirtColor){
//     if(favoriteColor===shirtColor){
//         alert("Your favorite color and shirt color are same")
//     }
//     else{
//         alert("Your favorite color and shirt color are not same")
//     }
// }

// *****16TH ASSIGNMENT*****
// function iseven(x){
//     if(x%2===0){
//         alert("EVEN")
//     }
//     else{
//         alert("ODD")
//     }
// }
