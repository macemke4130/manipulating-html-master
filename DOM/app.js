
let myBtn = document.createElement('button');
myBtn.textContent = "Nice Message";
document.body.prepend(myBtn);

myBtn.addEventListener('click', function(){
    alert("Your smile looks nice today");
});

let step1 = document.createElement('h3');
step1.textContent = "Step One";
document.body.prepend(step1);

let mySubmit = document.getElementById('mySubmit');
mySubmit.addEventListener('click', function(){
    let myTxt = document.getElementById('myTxt');
    alert(myTxt.value);
});

let mySquare = document.getElementById('square');
mySquare.addEventListener('mouseover', function(){
    mySquare.style.backgroundColor = "red";
});
mySquare.addEventListener('mouseout', function(){
    mySquare.style.backgroundColor = "blue";
});

let myP = document.getElementById('myP');
myP.addEventListener('click', function(){
    let x = Math.floor(Math.random() * colors.length);
    myP.style.color = colors[x];
})
const colors = ["red", "blue", "orange", "brown", "green", "gold"];