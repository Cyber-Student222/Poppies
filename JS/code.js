function toggleSound() {
    var aud = document.getElementById('chill-music');
    aud.volume = 0.05;
    if (aud.paused) {
        aud.play();
        document.getElementById('music-icon').style.backgroundColor = "rgba(69, 255, 103, 0.8)";
    } else {
        aud.pause();
        document.getElementById('music-icon').style.backgroundColor = "rgb(115, 155, 155)";
    }

}

function showProgress(cname) {
    var progressValFriendly = document.querySelector('.friendly-bar').value;
    var progressValRude = document.querySelector('.rude-bar').value;
    var progressValSolitude = document.querySelector('.solitude-bar').value;

    if (cname === 'solitude-bar'){
        document.getElementById("solitude-value").innerHTML = progressValSolitude;
        document.getElementById("solitude-value").classList.toggle("show");
    } else if (cname === 'friendly-bar') {
        document.getElementById("friendly-value").innerHTML = progressValFriendly;
        document.getElementById("friendly-value").classList.toggle("show");
    } else if (cname === 'rude-bar') {
        document.getElementById("rude-value").innerHTML = progressValRude;
        document.getElementById("rude-value").classList.toggle("show");
    }
}

function hideProgress(cname) {
    var progressValFriendly = document.querySelector('.friendly-bar').value;
    var progressValRude = document.querySelector('.rude-bar').value;
    var progressValSolitude = document.querySelector('.solitude-bar').value;

    if (cname === 'solitude-bar'){
        document.getElementById("solitude-value").innerHTML = progressValSolitude;
        document.getElementById("solitude-value").classList.remove("show");
    } else if (cname === 'friendly-bar') {
        document.getElementById("friendly-value").innerHTML = progressValFriendly;
        document.getElementById("friendly-value").classList.remove("show");
    } else if (cname === 'rude-bar') {
        document.getElementById("rude-value").innerHTML = progressValRude;
        document.getElementById("rude-value").classList.remove("show");
    }
}

function startGame(){
    localStorage.setItem('Dialogue Number', 0);
    localStorage.getItem('Name', null);
    localStorage.setItem('Friendly', 0);
    localStorage.setItem('Rude', 0);
    localStorage.setItem('Solitude', 0);
    localStorage.setItem('Inspect', 0);

    document.querySelector('.name-prompt').style.visibility="hidden";
    var charName = document.getElementById('input-area').value;
    if (charName === '') {
        charName = 'George';
        localStorage.setItem('Name', charName);
    } else {
        localStorage.setItem('Name', charName);
    }
    if (localStorage.getItem('Name') != 'null' || localStorage.getItem('Name') != 'undefined'){
        chooseDialogue();
        localStorage.setItem('Dialogue Number', 1);
    }
}

function chooseDialogue() {
    document.querySelector('.dialogue-btn').disabled = 'disabled';
    let inspectNum = localStorage.getItem('Inspect');

    var choices = document.querySelectorAll('.choice');
    for (let i = 0; i < choices.length; i++){
        choices[i].classList.remove('disabled');
    }
    document.querySelector('.special-choice').classList.remove('disabled');

    var diaNum = localStorage.getItem('Dialogue Number');
    var charName  = localStorage.getItem('Name');
    var dialogueZero = 
    ['Conscience: Where are you going?',
    `${charName}: To my hometown`,
    'Conscience: Are you sure you want to go?',
    `${charName}: ... `,
    `${charName}: What do you mean?`,
    'Conscience: Oh nothing.',
    `${charName}: Tsk. Then do not bring it up.`,
    'Conscience: ...alright','','*This Page acts as a short introduction to the gameplay.','Each of the choices (which are present below), affect the personality traits gauge above as well as the flow of each interaction with an individual.','Remember, every action has its consequences.', 'Click Next Chapter to Proceed.'];    
    var dialogueOne = [`Farmer Liam: Hiya ${charName}, Its been a long time since I have last seen ya.`,'Farmer Liam: Its been a few years and you have grown both in height and age.','Farmer Liam: What brings you back to the countryside anyway?'];
    var dialogueTwo = [`*As ${charName} was wandering about in the fields, he spots his Aunt taking a walk with her dog`,'They see him as well and start approaching.*',`Aunt Gill: Welcome back ${charName}, how have you been?`];
    var dialogueThree = [`*${charName} enters a familiar shop. A shoemaker shop with a nostalgic face greeting him*`,` John (the shoemaker): Oh ${charName} ! You’ve grown so much! Come look at this shoe I made especially for you.`,'John: I knew you’d come back one day. Aunt Gill was especially enthusiastic for the day you’d come back.... would you like to try it on?'];
    var dialogueFour = [`*${charName} passes by David (old family friend) as he walks the road leading to his home*.`, 'David: yo! Look who finally decided to show up. It has not been the same without you, man. I recently became a dad can you imagine that?'];
    var dialogueFive = [`*${charName} reaches his home, seeing his parents watering plants in the garden. His mother looks up to see the visitor then starts tearing up.*`, 'Mother (Hannah): My boy is finally home!' ,'*His mother then rushes to embrace him and says welcome home.'];
    var dialogueSix = [`*${charName}'s children peek from behind the door, and he hears his wife yell ‘‘lunchtime’’. She then comes out asking What’s going on while drying off her hands on the apron. She freezes, sees her husband, and rushes to embrace him.*`, 'Sarah: I’ve missed you so much!'];
    var dialogueSeven = [`*${charName} then kneels and waves his kids over.`, 'Attempting to get closer to them.', 'They shyly hide behind their mother.*'];
    var dialogueEight = [`*${charName} gets up and is heading towards the door.`,'He feels that it is not his time yet and that he is misplaced sitting there',`Kids ask ${charName} where he is headed to*`];

    var locationZero = 'Current Location: Train'
    var locationOne = 'Current Location: Farm';
    var locationTwo = 'Current Location: Shoemaker Shop';
    var locationThree = 'Current Location: Trail';
    var locationFour = 'Current Location: Home';

    if (diaNum == 0){
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueZero;
        addPlace(locationZero);
        document.querySelector('.dialogue-btn').removeAttribute('disabled');
    } else if (diaNum == 1){
        var choices = document.querySelectorAll('.choice');
            choices[0].innerHTML= '"I missed my family"';
            choices[1].innerHTML= '"Its none of your business"';
            choices[2].innerHTML= '...';
            document.querySelector('.special-choice').innerHTML= 'Inspect Surroundings';
        document.querySelector('.dialogue-btn').disabled = 'disabled';
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueOne;
        addPlace(locationOne);
    } else if (diaNum == 2){
        var choices = document.querySelectorAll('.choice');
        choices[0].innerHTML= '"I’m alright, how’ve you been?"';
        choices[1].innerHTML= '"Why do you ask you old hag!"';
        choices[2].innerHTML= '...';
        document.querySelector('.special-choice').innerHTML= 'Inspect Surroundings';
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueTwo;
        addPlace(locationOne);
    } else if (diaNum == 3){
        var choices = document.querySelectorAll('.choice');
        choices[0].innerHTML= '"Thank you"';
        choices[1].innerHTML= 'You keep the cheap leather to yourself!';
        choices[2].innerHTML= '...';
        document.querySelector('.special-choice').innerHTML= 'Inspect Surroundings';
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueThree;
        addPlace(locationTwo);
    } else if (diaNum == 4){
        var choices = document.querySelectorAll('.choice');
        choices[0].innerHTML= '"Oh my god, I am so happy for you!"';
        choices[1].innerHTML= '"I bet she looks as ugly as you."';
        choices[2].innerHTML= '...';
        document.querySelector('.special-choice').innerHTML= 'Inspect Surroundings';
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueFour;
        addPlace(locationThree);
    } else if (diaNum == 5){
        var choices = document.querySelectorAll('.choice');
        choices[0].innerHTML= '*Hugs back and says I am glad to be home.*';
        choices[1].innerHTML= '"Get off me, I cannot breathe!"';
        choices[2].innerHTML= '...';
        document.querySelector('.special-choice').innerHTML= 'Inspect Surroundings';
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueFive;
        addPlace(locationFour);
    } else if (diaNum == 6){
        var choices = document.querySelectorAll('.choice');
        choices[0].innerHTML= '*hugs back and says I have missed you more than you know*"';
        choices[1].innerHTML= '"That makes one of us."';
        choices[2].innerHTML= '...';
        document.querySelector('.special-choice').innerHTML= 'Inspect Surroundings';
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueSix;
        addPlace(locationFour);
    } else if (diaNum == 7){
        var choices = document.querySelectorAll('.choice');
        choices[0].innerHTML= '*Makes silly faces for kids to laugh.*';
        choices[1].innerHTML= '*Pulls hand forcefully and the children start crying*';
        choices[2].innerHTML= '...';
        document.querySelector('.special-choice').innerHTML= 'Inspect Surroundings';
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueSeven;
        addPlace(locationFour);
    } else if (diaNum == 8 && inspectNum < 5){
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueEight;
        addPlace(locationFour);
        chooseEnding()
    } else if (diaNum == 8 && inspectNum >= 5){
        var choices = document.querySelectorAll('.choice');
        for (let i = 0; i < choices.length; i++){
            choices[i].style.display = 'none';
        }
        document.querySelector('.special-choice').style.display = 'none';
        document.querySelector('.final-choiceA').style.display = 'inline';
        document.querySelector('.final-choiceB').style.display = 'inline';
        document.querySelector('.dialogue-btn').disabled = 'disabled';
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueEight;
        addPlace(locationFour);
    }

    typeDialogue(txtArr);
    
}

function dialogueVariation(letter){
    var charName  = localStorage.getItem('Name');

    dialogueVariationAOne = ['Liam: *Remark about how he was always a filial child*',`${charName}: *Laughs and makes small talk with Liam*`];
    dialogueVariationBOne = ['Liam: *Tells him there is no need to be so hostile and that it has been a long time*',`${charName}: *Scoffs and walks away*`];
    dialogueVariationCOne = [`Liam: *Asks ${charName} if he is alright*`,`${charName}: *Makes a pained expression before turning to leave*`];

    dialogueVariationATwo = ['Aunt Gill: *signs that She has been well, and that scrap been a helpful pup*',`${charName}: *Says he is glad to know that, *`,`*${charName} having a conversation with Aunt Gill about his parents *`];
    dialogueVariationBTwo = [`*Aunt Gill knew what ${charName} said, but decided to pretend that she could not make out what he said. `,`${charName} then sighs and decides to ignore Aunt Gill attempts to hold a conversation with him and resume his exploration of the town*`];
    dialogueVariationCTwo = [`*Not replying to Aunt Gill, ${charName} looks up to prevent his tears from falling before leaving Aunt Gill who was worried about him *`];

    dialogueVariationAThree = [`*${charName} tries out the shoe and notices it does not fit. John jokes that he has big feet and ${charName} nudges him saying that it was not as big as John's *`,`*They chat for a bit before ${charName} excuses himself and heads to see his family*`];
    dialogueVariationBThree = [`*John gets offended and has an argument with ${charName}*`];
    dialogueVariationCThree = [`*John asks ${charName}'s condition, as his face is contorted with distress.`,`${charName} then leaves the shop without speaking to John* `];

    dialogueVariationAFour = [`*David smiles brightly, sings praises about his child, then asks ${charName} about his now ten-year-old twins. `,`${charName} replies that he was on his way to see them and waves David Goodbye*`];
    dialogueVariationBFour = [`*David gets angry and berates ${charName} for his remark. ${charName} passes David, unwilling to listen or apologize*`];
    dialogueVariationCFour = [`*${charName} doesn't respond or even look at David's face before walking past him to his home.*`];

    dialogueVariationAFive = [`* ${charName} kisses his mother's forehead, then goes to his father, shakes his hand, and his father would say, welcome home, son.`, `Then they would start to have a conversation about what had happened in the time ${charName} was away*`];
    dialogueVariationBFive = [`*His mother freezes in shock, unable to accept his aggressive behaviour, while his father who was nearby reprimands him for his poor behaviour unbecoming of his age*`];
    dialogueVariationCFive = [`*${charName} falls to the ground sobbing, unable to keep himself together, then his mother and father go to his side and comfort him, albeit awkwardly, as they don't know the reason he is crying. *`];

    dialogueVariationASix = [`*${charName} and Sarah have a short conversation, before ${charName} asks her to reintroduce him to the children.*`];
    dialogueVariationBSix = [`*Sarah immediately lets go and looks directly at ${charName}, almost in disbelief, but before she could get a word in, ${charName}'s father Luke pulled him by the arm and starts reprimanding and lecturing ${charName}*`];
    dialogueVariationCSix = [`*${charName} doesn't speak nor attempt to hug back.`, `He had waited for her to let go before heading over to the house*`];

    dialogueVariationASeven = [`*${charName}’s children warm up to him and play with him for a short time before heading inside for lunch.*`];
    dialogueVariationBSeven = [`*${charName} is kicked out of the house to cool his head.`,`As his action was to sudden and had injured the child.*`];
    dialogueVariationCSeven = [`*${charName} glances at the children then starts to laugh hysterically.`,` He went to a corner inside the house and started sobbing amidst his laughing.`,` He hugs himself desperately, trying to keep himself from breaking. *`];

    var choices = document.querySelectorAll('.choice');
    for  (let i = 0; i < choices.length; i++){
        choices[i].classList.add('disabled');
    }
    document.querySelector('.special-choice').classList.add('disabled');
    localStorage.setItem('Friendly', progressValFriendly);
    localStorage.setItem('Rude', progressValRude);
    localStorage.setItem('Solitude', progressValSolitude);

    var progressValFriendly = document.querySelector('.friendly-bar').value;
    var progressValRude = document.querySelector('.rude-bar').value;
    var progressValSolitude = document.querySelector('.solitude-bar').value;

    dnum = localStorage.getItem('Dialogue Number');


    localStorage.setItem('Friendly', progressValFriendly);
    localStorage.setItem('Rude', progressValRude);
    localStorage.setItem('Solitude', progressValSolitude);
    
    var dialogueNumber = localStorage.getItem('Dialogue Number');

    if (letter === 'A' && dnum == 1){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.friendly-bar').value += 10;
        progressValFriendly += 10;
        localStorage.setItem('Friendly', progressValFriendly);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationAOne;
    } else if (letter === 'B' && dnum == 1){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.rude-bar').value += 10;
        progressValRude +=10;
        localStorage.setItem('Rude', progressValRude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationBOne;
    } else if (letter === 'C' && dnum == 1){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.solitude-bar').value += 10;
        progressValSolitude +=10;
        localStorage.setItem('Solitude', progressValSolitude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationCOne;
    } else if (letter === 'A' && dnum == 2){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.friendly-bar').value += 5;
        progressValFriendly += 5;
        localStorage.setItem('Friendly', progressValFriendly);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationATwo;
    } else if (letter === 'B' && dnum == 2){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.rude-bar').value += 15;
        progressValRude += 15;
        localStorage.setItem('Rude', progressValRude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationBTwo;
    } else if (letter === 'C' && dnum == 2){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.solitude-bar').value += 15;
        progressValSolitude += 15;
        localStorage.setItem('Solitude', progressValSolitude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationCTwo;
    }else if (letter === 'A' && dnum == 3){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.friendly-bar').value += 5;
        progressValFriendly += 5;
        localStorage.setItem('Friendly', progressValFriendly);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationAThree;
    } else if (letter === 'B' && dnum == 3){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.rude-bar').value += 10;
        progressValRude += 10;
        localStorage.setItem('Rude', progressValRude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationBThree;
    } else if (letter === 'C' && dnum == 3){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.solitude-bar').value += 10;
        progressValSolitude += 10;
        localStorage.setItem('Solitude', progressValSolitude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationCThree;
    } else if (letter === 'A' && dnum == 4){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.friendly-bar').value += 10;
        progressValFriendly += 10;
        localStorage.setItem('Friendly', progressValFriendly);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationAFour;
    } else if (letter === 'B' && dnum == 4){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.rude-bar').value += 15;
        progressValRude += 15;
        localStorage.setItem('Rude', progressValRude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationBFour;
    } else if (letter === 'C' && dnum == 4){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.solitude-bar').value += 10;
        progressValSolitude +=10;
        localStorage.setItem('Solitude', progressValSolitude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationCFour;
    } else if (letter === 'A' && dnum == 5){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.friendly-bar').value += 35;
        progressValFriendly += 35;
        localStorage.setItem('Friendly', progressValFriendly);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationAFive;
    } else if (letter === 'B' && dnum == 5){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.rude-bar').value += 20;
        progressValRude += 20;
        localStorage.setItem('Rude', progressValRude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationBFive;
    } else if (letter === 'C' && dnum == 5){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.solitude-bar').value += 30;
        progressValSolitude += 30;
        localStorage.setItem('Solitude', progressValSolitude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationCFive;
    } else if (letter === 'A' && dnum == 6){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.friendly-bar').value += 30;
        progressValFriendly += 30;
        localStorage.setItem('Friendly', progressValFriendly);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationASix;
    } else if (letter === 'B' && dnum == 6){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.rude-bar').value += 15;
        progressValRude += 15;
        localStorage.setItem('Rude', progressValRude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationBSix;
    } else if (letter === 'C' && dnum == 6){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.solitude-bar').value += 10;
        progressValSolitude +=10;
        localStorage.setItem('Solitude', progressValSolitude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationCSix;
    } else if (letter === 'A' && dnum == 7){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.friendly-bar').value += 5;
        progressValFriendly += 5;
        localStorage.setItem('Friendly', progressValFriendly);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationASeven;
    } else if (letter === 'B' && dnum == 7){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.rude-bar').value += 15;
        progressValRude += 15;
        localStorage.setItem('Rude', progressValRude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationBSeven;
    } else if (letter === 'C' && dnum == 7){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        document.querySelector('.solitude-bar').value += 15;
        progressValSolitude += 15;
        localStorage.setItem('Solitude', progressValSolitude);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationCSeven;
    }
    typeDialogue(txtArr);
    document.querySelector('.dialogue-btn').removeAttribute('disabled');
}

var dialogueElem = document.getElementById('dialogue');
var delay = 1;

function typeDialogue(lines) {
  currentWaitTime = 0
  
  // Iterate over the lines, line by line
  for(let lineNumber=0; lineNumber < lines.length; lineNumber++) {
      // Find the current line
      let line = lines[lineNumber];
      // Iterate over the line, character by character
      for(let charNumber=0; charNumber<line.length; charNumber++) {
        // Find the current character
        let char = line[charNumber];
        
        // Set the char to be printed after current_wait has elapsed
        setTimeout(function(char) {
            dialogueElem.innerHTML += char;
        }.bind(null, char), currentWaitTime);
                
        // Increment current wait
        currentWaitTime += delay; 
      }
    
    // Print a new line after each line of text
    setTimeout(function(char) {
        dialogueElem.innerHTML += '<br>';
    }, currentWaitTime);
}
}

function chooseEnding(unlock=false, redOrBlue=null){
    let progressValFriendly = localStorage.getItem('Friendly');
    let progressValRude = localStorage.getItem('Rude');
    let progressValSolitude = localStorage.getItem('Solitude');
    let inspectNum = localStorage.getItem('Inspect');

    //add extraparameter fo special ending
    if (unlock == true && inspectNum >= 5 && redOrBlue === 'Red'){
        localStorage.setItem('Ending 1b', 'Delusion-Broken');
        location.replace("ending-1b.html");
    } else if (unlock == true && inspectNum >= 5 && redOrBlue === 'Blue'){
        localStorage.setItem('True Ending', 'Remembrance');
        location.replace("True-ending.html");
    }else if (progressValFriendly == 100){
        localStorage.setItem('Ending 1a', 'Delusion');
        location.replace("ending-1a.html");
    } else if (progressValRude == 100){
        localStorage.setItem('Ending 2', 'WHY?..Just why?');
        location.replace("ending-2.html");
    } else if (progressValSolitude == 100){
        localStorage.setItem('Ending 3', 'No One Left');
        location.replace("ending-3.html");
    } else if(progressValSolitude > progressValRude && progressValFriendly > progressValRude){
        localStorage.setItem('Ending 4', 'Despair');
        location.replace("ending-4.html")
    } else if (progressValFriendly > progressValSolitude && progressValRude > progressValSolitude){
        localStorage.setItem('Ending 5', '2-Faced');
        location.replace("ending-5.html");
    } else if(progressValRude > progressValFriendly  && progressValSolitude > progressValFriendly){
        localStorage.setItem('Ending 6', 'Denial');
        location.replace("ending-6.html");
    }
}

function unlockFourthChoice(firstPage=false){
    var ending1A = localStorage.getItem('Ending 1a');
    var ending2 = localStorage.getItem('Ending 2');
    var ending3 = localStorage.getItem('Ending 3');
    var ending4 = localStorage.getItem('Ending 4');
    var ending5 = localStorage.getItem('Ending 5');
    var ending6 = localStorage.getItem('Ending 6');

    if(ending1A != null && ending2 != null && ending3 != null && ending4 != null && ending5 != null && ending6 != null){
        document.querySelector(".special-choice").classList.add('unlock')
        localStorage.setItem('Unlock', true);
        if (firstPage){
            window.alert('Congratulations, You have Unlocked the 4th Choice!')
    }
}
}
function inspect(){
    var charName  = localStorage.getItem('Name');
    document.querySelector('.special-choice').classList.add('disabled');
    var choices = document.querySelectorAll('.choice');
    for (let i = 0; i < choices.length; i++){
        choices[i].classList.add('disabled');
    }
    var dialogueVariationDOne = ['Was the farm always this dilapidated?'];
    var dialogueVariationDTwo = ['Was scrap(the dog) this skinny and lifeless?'];
    var dialogueVariationDThree = ["didn't the shop smell a bit like mold?"];
    var dialogueVariationDFour = ['did David always have rotten smell?'];
    var dialogueVariationDFive = ['Did my mother and father look that pale and almost transpareent before?'];
    var dialogueVariationDSix = ["Why is my wife's embrace so foreign to me?"];
    var dialogueVariationDSeven = ['Did I ever get a good look of my childrens faces?'];
    var dialogueVariationDEight = ['I miss them all...'];

    var unlockPermission = localStorage.getItem('Unlock');
    var inspectNum = localStorage.getItem('Inspect');
    var dnum = localStorage.getItem('Dialogue Number');
    var dialogueNumber = localStorage.getItem('Dialogue Number');

    if (unlockPermission) {
        if (dnum == 1){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        localStorage.setItem('Inspect', ++inspectNum);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationDOne;
    } else if (dnum == 2){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        localStorage.setItem('Inspect', ++inspectNum);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationDTwo;
    }else if (dnum == 3){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        localStorage.setItem('Inspect', ++inspectNum);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationDThree;
    } else if (dnum == 4){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        localStorage.setItem('Inspect', ++inspectNum);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationDFour;
    } else if (dnum == 5){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        localStorage.setItem('Inspect', ++inspectNum);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationDFive;
    } else if (dnum == 6){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        localStorage.setItem('Inspect', ++inspectNum);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationDSix;
    } else if (dnum == 7){
        localStorage.setItem('Dialogue Number', ++dialogueNumber);
        localStorage.setItem('Inspect', ++inspectNum);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationDSeven;
    } else if (dnum == 8){
        localStorage.setItem('Inspect', ++inspectNum);
        document.getElementById("dialogue").innerHTML = '';
        window.txtArr = dialogueVariationDEight;
    }
}
    typeDialogue(txtArr);
    document.querySelector('.dialogue-btn').removeAttribute('disabled');
}

function addPlace(location){
    document.querySelector('.place').innerHTML = location;
    document.querySelector('.place').classList.add('change');
}

function pageTravel(page) {
    if (page === 'Home'){
        location.href = 'index.html';
    }
    if(localStorage.getItem('Dialogue Number') != null){
        if (page === 'Story'){
            location.href = 'story.html';
        }
    } else if(localStorage.getItem('Dialogue Number') == null || localStorage.getItem('Dialogue Number') == undefined){
        alert('You currently have No Saved Progress.')
    }
}

function updateProgValues(){
    var progressValFriendly = localStorage.getItem('Friendly');
    var progressValRude = localStorage.getItem('Rude');
    var progressValSolitude = localStorage.getItem('Solitude');
    document.querySelector('.friendly-bar').value = progressValFriendly;
    document.querySelector('.rude-bar').value = progressValRude;
    document.querySelector('.solitude-bar').value = progressValSolitude;
}

function deleteSavedData() {
    localStorage.removeItem('True Ending')
    localStorage.removeItem('Ending 2')
    localStorage.removeItem('Ending 1a')
    localStorage.removeItem('Inspect');
    localStorage.removeItem('Ending 3');
    localStorage.removeItem('Rude');
    localStorage.removeItem('Unlock');
    localStorage.removeItem('Ending 4');
    localStorage.removeItem('Name');
    localStorage.removeItem('Ending 1b');
    localStorage.removeItem('Ending 6');
    localStorage.removeItem('Dialogue Number');
    localStorage.removeItem('Ending 5');
    localStorage.removeItem('Solitude');
    localStorage.removeItem('Friendly');
    alert('All Progress Data has been Deleted.')
}

function checkEndingProg(){
    var numberOfAcquiredEndings = 0;
    var totalEndings = 8;
    var ending1A = localStorage.getItem('Ending 1a');
    var ending1B = localStorage.getItem('Ending 1b');
    var ending2 = localStorage.getItem('Ending 2');
    var ending3 = localStorage.getItem('Ending 3');
    var ending4 = localStorage.getItem('Ending 4');
    var ending5 = localStorage.getItem('Ending 5');
    var ending6 = localStorage.getItem('Ending 6');
    var trueEnding = localStorage.getItem('True Ending');

    if (ending1A != null) {
        numberOfAcquiredEndings++;
    }
    if (ending2 != null) {
        numberOfAcquiredEndings++;
    }
    if (ending3 != null) {
        numberOfAcquiredEndings++;
    }
    if (ending4 != null) {
        numberOfAcquiredEndings++;
    } 
    if (ending5 != null) {
        numberOfAcquiredEndings++;
    }
    if (ending6 != null) {
        numberOfAcquiredEndings++;
    }
    if (ending1B != null) {
        numberOfAcquiredEndings++;
    }
    if (trueEnding != null) {
        numberOfAcquiredEndings++;
    }
    document.querySelector('.confirm-prompt').style.visibility = 'visible';
    document.querySelector('.progress-prompt').innerHTML = `Endings: ${numberOfAcquiredEndings}/${totalEndings} <br> Story Progress: %${(numberOfAcquiredEndings/totalEndings)*100}`;
}

function hideConfirmPrompt() {
    document.querySelector('.confirm-prompt').style.visibility = 'hidden';
}

function showAchievments() {
    var complete = 0;
    var ending1A = localStorage.getItem('Ending 1a');
    var ending1B = localStorage.getItem('Ending 1b');
    var ending2 = localStorage.getItem('Ending 2');
    var ending3 = localStorage.getItem('Ending 3');
    var ending4 = localStorage.getItem('Ending 4');
    var ending5 = localStorage.getItem('Ending 5');
    var ending6 = localStorage.getItem('Ending 6');
    var trueEnding = localStorage.getItem('True Ending');

    if (ending1A != null) {
        document.querySelector('.ending-img-container1').classList.add('show');
        complete++;
        }
    if (ending2 != null) {
        document.querySelector('.ending-img-container3').classList.add('show');
        complete++;
    }
    if (ending3 != null) {
        document.querySelector('.ending-img-container4').classList.add('show');
        complete++;
    }
    if (ending4 != null) {
        document.querySelector('.ending-img-container5').classList.add('show');
        complete++;
    } 
    if (ending5 != null) {
        document.querySelector('.ending-img-container6').classList.add('show');
        complete++;
    }
    if (ending6 != null) {
        document.querySelector('.ending-img-container7').classList.add('show');
        complete++;
    }
    if (ending1B != null) {
        document.querySelector('.ending-img-container2').classList.add('show');
        complete++;
    }
    if (trueEnding != null) {
        document.querySelector('.ending-img-container8').classList.add('show');
        complete++;
    }
    if (complete == 8){
        alert('Congratulations, You have Acquired All Endings!')
    }
}

function pixelManipulation(wide, long, spd, sz, nop, pixcolor, imgsrc) {
    const image = new Image();
    image.src = imgsrc;
    image.addEventListener('load', function(){
        const canvas = document.getElementById('canvas1');
        const ctx = canvas.getContext('2d');
        canvas.width = wide;
        canvas.height = long;
    
        let particlesArray = [];
        const numberOfParticles = nop;
        const detail = 1;
    
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        let grid = [];
        for (let y = 0; y < canvas.height; y += detail){
            let row = [];
            for (let x = 0; x < canvas.width; x += detail){
                const red = pixels.data[(y * 4 * pixels.width) + (x * 4)]
                const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)]
                const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)]
                const brightness = calculateBrightness(red, green, blue)/100;
    
                row.push(brightness);
            }  
            grid.push(row); 
        }
    
        class Particle {
            constructor(){
                this.x = Math.random() * canvas.width;
                this.y =  0;
                this.speed = 0;
                this.velocity = Math.random() * spd;
                this.size = Math.random() * 2 + sz;
            }
            update () {
                this.speed = grid[Math.floor(this.y / detail)][Math.floor(this.x / detail)];
                let movement = (2.5 - this.speed) + this.velocity;
                this.y += movement;
                if (this.y >= canvas.height) {
                    this.y = 0;
                    this.x = Math.random() * canvas.width;
                }
            }
            draw(){
                ctx.beginPath();
                ctx.fillStyle = pixcolor;
                ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    
        function init(){
            for (let i = 0; i < numberOfParticles; i++){
                particlesArray.push(new Particle());
            }
        }
        init();
    
        function animate () {
            ctx.globalAlpha = 0.05;
            ctx.fillStyle = 'rgb(0, 0,0)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 0.2;
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                ctx.globalAlpha = particlesArray[i].speed * 0.3;
                particlesArray[i].draw();
            }
            requestAnimationFrame(animate);
        }
        animate();
    
        function calculateBrightness(red, green, blue){
            return Math.sqrt(
                (red * red) * 0.299 +
                (green * green) * 0.587 +
                (blue * blue) * 0.114
            );
        }
    
    });
}


