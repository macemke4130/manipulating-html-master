
$myBtn = $('<button></button>');
$myBtn.attr('id', 'myBtn');
$myBtn.text('Nice Message');
$(document.body).prepend($myBtn);
$(document.body).prepend('<h3>Step One</h3>');

$('#myBtn').click(function () {
    alert("You have a nice smile today.");
});

$('#mySubmit').click(function () {
    $myAlert = $('#myTxt').val();
    alert($myAlert);
});

$('#square').mouseover(function () {
    $(this).css({
        "background-color": "red"
    })
});

$('#square').mouseout(function () {
    $(this).css({
        "background-color": "blue"
    });
});

$('#myP').click(function () {
    let x = Math.floor(Math.random() * colors.length);
    $(this).css({
        "color": colors[x]
    });
});

const $myNameDiv = $('<div></div>');
$myNameDiv.attr("id", "$myNameDiv");

const $nameButton = $('<button></button>');
$nameButton.attr('id', 'nameButton');
$nameButton.text('What is my name?');

$('#myP').after($myNameDiv);
$('#myP').after($nameButton);
$('#myP').after('<h3>Step Five</h3>');



$('#nameButton').click(function () {
    const myNameSpan = $('<span></span>');
    myNameSpan.attr("id", "myNameSpan");
    myNameSpan.text('Lucas Mace ');
    $myNameDiv.append(myNameSpan);
});

const colors = ["red", "blue", "orange", "brown", "green", "gold"];
const friends = ["Sarah", "Lilah", "Dan", "Eric", "Alex", "Dave", "Maggie", "Anna", "Laura", "Nick", "Emily", "Keight", "Alan"];
let friendCount = 0;

$('#addFriend').click(function () {
    if (friendCount < friends.length) {
        $('#friendList').append('<li id="li' + friendCount + '"></li>');
        $('#li' + friendCount).text(friends[friendCount]);
        friendCount++;
    } else {
        alert("I don't have any more friends!");
    }

});