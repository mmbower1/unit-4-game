var player1;
var player1_hp;
var attacker = false;
var defender = false;
var defender_hp;

//each character has three attributes: healthPoints, attackPower, counterAttackPower

$(document).ready(function() {

    //create onClick event for each character, remaining players move to enemies section
    $('.character').on('click', function() {

        //alert($(this).attr('data'));
        if(!attacker) {

            $('.character').each(function() {
                console.log(this);
                $(this).appendTo('#waiting-room');
            });

            $('#yourCharacterRow').append($(this));
            attacker = true;
            player1 = $(this).data('name');
            player1_hp = $(this).data('hp');
            console.log(player1_hp);

        } // if statement ends 
        else {
            $('#defenderRow').append($(this));
            attacker = true;
            defender = $(this).data('name');
            defender_hp = $(this).data('hp');
            console.log(defender)





        } // else
        
    }); // character click ends

    //player now is able to click 'attack' button. Defender loses hp. Points are displayed at bottom 
    $('.button').on('click', function() {
        console.log('attack');
    }); // button.click ends

    //each time the player attacks, their character's Attack Power increases by its base Attack Power.
    //EX: base = (6) + 6 = 12 + 6 = 18 + 6 = 24 + 6 = 30

    //defender is attacked and instantly counter-attacks, player loses hp, points displayed at players section

    //after defender is defeated click on next defender

    //player wins by defeating all defenders hp, player loses if hp goes to 0 or below

    //restart button only available when game is over 

    //the defender only has one constant counter attack power

    //the Health Points, Attack Power and Counter Attack Power of each character must differ.

}); // document.ready ends



