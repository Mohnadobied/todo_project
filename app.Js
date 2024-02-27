function dataList(e,f,g,h){
let  userName = prompt("Please Enter Your Name");
console.log(`${userName}`);

let  gender = prompt("Please Enter Your Gender (male/female)");
if (gender == "male" || gender  == "Male")
{
    console.log(gender)
}
else if (gender == "female" || gender  == "Female")
{
    console.log(gender) 
}
else
{
    console.log("null");
}

let  age = prompt("Please Enter Your Age");

if (age <= 0)
{
    console.log("Less than or equal to zero") 
}

console.log(age);  
}
function VerifyYourData(j){
let Verify = confirm("You wanna skip Welcoming message")
if (Verify == true)
{
   console.log(Verify);
} 
else if (Verify == false)
{
    alert(`Welcome ${userName} ${age} ${gender}`)
}
}

function yesNoQuestions(a,b,c){
let qusetion1 = prompt("Do you like to rate us?  yes/no")
if (qusetion1 == "yes" || qusetion1 == "Yes")
{
    console.log(qusetion1);
}
else if (qusetion1 == "no" || qusetion1 == "No")
{
console.log("Invalid");
}
else
console.log("Invalid");

let qusetion2 = prompt("Did you find this blog post helpful?  yes/no")
if (qusetion2 == "yes" || qusetion2 == "Yes")
{
    console.log(qusetion2);
}
else if (qusetion2 == "no" || qusetion2 == "No")
{
console.log("Invalid");
}
else
console.log("Invalid");

let qusetion3 = prompt("Is this website help you to find what you need?  yes/no")
if (qusetion3 == "yes" || qusetion3 == "Yes")
{
    console.log(qusetion3);
}
else if (qusetion3 == "no" || qusetion3 == "No")
{
console.log("Invalid");
}
else
console.log("Invalid");
}

function saveInArr(i){
let questions = [qusetion1,qusetion2,qusetion3];
console.log(questions)
}

dataList()
VerifyYourData()
yesNoQuestions()
saveInArr()
