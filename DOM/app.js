
let myBtn = document.createElement('button');
myBtn.textContent = "Nice Message";
document.body.prepend(myBtn);

myBtn.addEventListener('click', function () {
    alert("Your smile looks nice today");
});

let step1 = document.createElement('h3');
step1.textContent = "Step One";
document.body.prepend(step1);

let mySubmit = document.getElementById('mySubmit');
mySubmit.addEventListener('click', function () {
    let myTxt = document.getElementById('myTxt');
    alert(myTxt.value);
});

let mySquare = document.getElementById('square');
mySquare.addEventListener('mouseover', function () {
    mySquare.style.backgroundColor = "red";
});
mySquare.addEventListener('mouseout', function () {
    mySquare.style.backgroundColor = "blue";
});

let myP = document.getElementById('myP');
myP.addEventListener('click', function () {
    let x = Math.floor(Math.random() * colors.length);
    myP.style.color = colors[x];
})
const colors = ["red", "blue", "orange", "brown", "green", "gold"];

let step5 = document.createElement('h3');
step5.textContent = "Step 5";
document.body.appendChild(step5);

let divBtn = document.createElement('button');
divBtn.textContent = "What's my Name?";
document.body.appendChild(divBtn);

let nameDiv = document.createElement('div');
nameDiv.id = "nameDiv"
document.body.appendChild(nameDiv);

divBtn.addEventListener('click', function () {
    let nameSpan = document.createElement('span');
    document.getElementById('nameDiv').appendChild(nameSpan);
    nameSpan.textContent = "Lucas Mace ";
});

const friends = ["Sarah", "Lilah", "Dan", "Eric", "Alex", "Dave", "Maggie", "Anna", "Laura", "Nick", "Emily", "Keight", "Alan"];
let friendCount = 0;

let addFriend = document.getElementById('addFriend');
addFriend.addEventListener('click', function () {
    if (friendCount < friends.length) {
        let newLi = document.createElement('li');
        newLi.textContent = friends[friendCount];
        document.getElementById('friendList').appendChild(newLi);
        friendCount++;
    } else {
        alert("I don't have any more friends!");
    }
})