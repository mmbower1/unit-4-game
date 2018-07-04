var player1;
var player1_hp;
var player_attack;
var attacker = false;
var defender = false;
var defender_hp;
var defenderName;
var defenderObj;
var defender_attack;
var wins = 0;
var losses = 0;

//each character has three attributes: healthPoints, attackPower, counterAttackPower

$(document).ready(function() {

    //create onClick event for each character, remaining players move to enemies section
    $('.character').on('click', function() {

        //alert($(this).attr('data'));
        if(!attacker) {
            $(this).attr('attacker', true);
            $('.character').each(function() {
                console.log(this);
                $(this).appendTo('#waiting-room');

            });

            $('#yourCharacterRow').append($(this));
            attacker = true;
            player1 = $(this).data('name');
            player1_hp = $(this).data('hp');
            player_attack = $(this).data('attack');
            console.log(player1_hp);

        } // if statement ends 
        else if (!defender) {
            if($(this).attr('attacker') === 'false') {
                console.log($(this).attr('attacker'));
                $('#defenderRow').append($(this));
                defender = true;
                defenderName = $(this).data('name');
                defender_hp = $(this).data('hp');
                defenderObj = $(this);
                defender_attack = $(this).data('counterAttack');
                console.log(defender);
            } // end of this.attr false

        }; //else ends
        
    }); //character click ends

    //player now is able to click 'attack' button. Defender loses hp. Points are displayed at bottom 
    //each time the player attacks, their character's Attack Power increases by its base Attack Power.
    //EX: base = (6) + 6 = 12 + 6 = 18 + 6 = 24 + 6 = 30
    //defender is attacked and instantly counter-attacks, player loses hp, points displayed at players section
    $('.button').on('click', function() {
        defender_hp = defender_hp - player_attack;
        player1_hp = player1_hp - defender_attack;
        player_attack = player_attack + $("#" + player1).data('attack');
        console.log(player_attack);
        $("." + player1).text(player1_hp); //changes player1 hp text
        console.log(typeof defender_attack);
        $("." + defenderName).text(defender_hp); //changes defender hp text
        console.log('attack');
        
        if (defender_hp < 0) {
            alert('You win. Pick next defender.');
            wins++;
            $('#Wins').text(wins);
            defenderObj.hide();
        }
        else if(player1_hp < 0) {
            alert('You lose.');
            wins++;
            $('#Losses').text(losses);
        }
    }); // button.click ends

    //if defender is defeated, alert user and choose to click on next defender

    //base attack continues from past defenders 

});// document.ready ends



