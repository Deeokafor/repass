'use strict'

window.onload = engines;

function engines(){
    var output = document.getElementById('output');
    var generateButton = document.getElementById('gen-btn');
    var message = document.getElementById('message-display');

    generateButton.addEventListener('click', randomizer1);
    
    function randomizer1(genPass){

        //data initialization
        var lettersOfAlpha = [
            'a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v',
            'w', 'x','y', 'z'
        ];
        
        //generated string will be passed into this variable
        var password = '';
        
        for (var i = 0; i < 12; i++) {
            //findout why undefined is returned as part of string
            password += lettersOfAlpha[Math.round(Math.random(lettersOfAlpha) * lettersOfAlpha.length)];
        }
        console.log(password)
        output.value = password;
        //return password;
    }
}