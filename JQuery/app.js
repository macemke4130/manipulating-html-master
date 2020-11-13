$myBtn = $('<button></button>');
$myBtn.attr('id', 'myBtn');
$myBtn.text('Nice Message');
$(document.body).append($myBtn);

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

$(document.body).append($nameButton);
$(document.body).append($myNameDiv);

$('#nameButton').click(function () {
    const myNameSpan = $('<span></span>');
    myNameSpan.attr("id", "myNameSpan");
    myNameSpan.text('Lucas Mace ');
    $myNameDiv.append(myNameSpan);
});

const colors = ["red", "blue", "orange", "brown", "green", "gold"];