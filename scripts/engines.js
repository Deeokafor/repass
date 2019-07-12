'use strict'

window.onload = engines;

function engines(){
    var output = document.getElementById('output');
    var generateButton = document.getElementById('gen-btn');
    var message = document.getElementById('message-display');
    var copy = document.getElementById('copy');
    //var genPass = '';

    generateButton.addEventListener('click', randomizer1);
    copy.addEventListener('click', getContent);

    //this function handles password generation
    function randomizer1(){
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
        genPass = password;
        return genPass;
    }

    /*
    if (genPass.includes(undefined)){
        randomizer1();
    }
    */

    //this function gets password genertated and copies to virtual clipboard
    function getContent(){
        if(output === ''){
            message.innerHTML = 'you have no password generated yet, click the \' generate button';
        } else {
            message.innerHTML = 'password copied successfully!';
            message.style.color = 'rgb(56, 128, 56)';
        }
    }
}