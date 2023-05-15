/* grab HTML elements */ 
const output1        = document.getElementById("output-part1");
const output2        = document.getElementById("output-part2");
const output3        = document.getElementById("output-part3");

/*
Variables for Part One
---------------------
const students      = ["Jane","Joe","Jack","Jill","Jerome"];
    we will be searching this array to see if
    a specified name is in it 
*/
const students      = ["Jane","Joe","Jack","Jill","Jerome", "Janet"];
/*
const targetName    = "Jill";
    we are going to search the students array and see if this 
    targetName appears as data anywhere

    change this value during testing
    so that sometimes it matches array data,
    and sometimes does not
*/
const targetName    = "Jerome";  //change "Jerome" to your first name

/*
Variable for Parts Two and Three
--------------------------------
const arrayOfNumbers = [4, 0, -4, 13, -2];
    for each of these numbers, we
    need to count from that number to zero,
    displaying the value each time as we count up or down
    unless the number is zero    

    eg: if the number is 5, display the sequence
    5 4 3 2 1 0

    eg: if the number is -3, display the sequence
    -3 -2 -1 0
*/
const arrayOfNumbers = [4, 0, -4, 13, -2, 4, 5, 6, 7];















/*
--------------------------------
PART 1
--------------------------------
Process array of string names
*/
//one way to track if we find a match 
//is to use a boolean 'flag'


let html1 ='';
let html2 ='';
let html3 ='';

html1+= `<p>Target name: ${targetName}</p> <h2>List of Students:</h2> 
         <p> There are ${students.length} student(s) in this list.</p>
         <p> Performing a case sensitive search in the list.</p>`;

let target = '';
students.forEach(element=>{
    if (element == targetName){target = 'yes'}
    html1+= `<li>${element}`+ ((element == targetName)? ` <---- Target name found` : ``) + `</li><p></p>`
})

html1+= `<h1>Final Report On Target Name...</h1>` + ((target == 'yes')? 'yes target name was found in the list' : 'no target name found in the list')
//console.log(html1);

/*
--------------------------------
PART 2
--------------------------------
Tally and sum array values
*/
//use additional variables to track important factors...
//track how many even numbers encountered
let odd = 0;
let even = 0;
let sum = 0;

html2+= '<p>This is the array of numbers we will work with:</p>'
arrayOfNumbers.forEach(element=>{
    html2+= `<li>${element}</li>`;
    ((element%2 ==0)? even++ : odd++);
    sum += element;
})

html2+= `<p>There are ${even} even numbers in this array</li>`;
html2+= `<p>${odd} odd numbers in this array</p>`;
html2+= `<p>Sum of the numbers in the array is ${sum} </p>`;

arrayOfNumbers.forEach(number=>{
    html3+= `<hr/><h1>Number: ${number}</h1> <p>Countdown:</p>`;
    if(number>0){
        while(number>=0){
            html3+= `<li>${number}</li>`;
            number--;
        }
    }else if(number<0){
        while(number<=0){
            html3+= `<li>${number}</li>`;
            number++;
        }    
    }else if(number==0){
        html3+= `<p>There is no counting to be down</p>`;
    }
})

const partOne = document.getElementById('output-part1');
const parttwo = document.getElementById('output-part2');
const partthree = document.getElementById('output-part3');
partOne.innerHTML = html1;
parttwo.innerHTML = html2;
partthree.innerHTML = html3;