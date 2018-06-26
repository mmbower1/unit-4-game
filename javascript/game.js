var player1;
var attacker;
var defender = false;

//each character has three attributes: healthPoints, attackPower, counterAttackPower

$(document).ready(function() {

//create onClick event for each character
$('.character').on('click', function() {
    alert($(this).attr('data'));
    $('#yourCharacterRow').append($(this));
})

//enemies move to defender area when clicked
$('.character').on('click', function() {
    alert($(this).attr('data'));
    $('#defender-row').append($(this));
})

//player now is able to click 'attack' button. Defender loses hp. Points are displayed at bottom 

//defender is attacked and instantly counter-attacks, player loses hp, points displayed at players section

//after each defender is defeated click on next one to attack next

//player wins by defeating all defenders hp, player loses if hp goes to 0 or below

//game restart 

//each time the player attacks, their character's Attack Power increases by its base Attack Power.
//EX: base = (6) + 6 = 12 + 6 = 18 + 6 = 24 + 6 = 30

//the defender only has one constant counter attack power

//the Health Points, Attack Power and Counter Attack Power of each character must differ.

});



