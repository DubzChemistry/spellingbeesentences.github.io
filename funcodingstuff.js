const wordListFour = ["been", "bevy", "baby", "womb", "bomb", "ably", "bawl", "blew", "blow", "bony", "bowl", "byte", "newb", "obey", "vibe", "babe", "balm", "beam", "bibe", "blab", "blob", "blub", "bulb", "lamb", "limb", "numb", "tomb", "able", "bail", "bait", "bale", "bane", "bate", "beal", "bean", "beat", "belt", "bent", "beta", "bile", "bite", "blue", "boat", "boil", "bolt", "bone", "bunt", "ebon", "tuba", "tube", "unbe"];
const wordListFive = ["webby", "womby", "blowy", "bylaw", "balmy", "beamy", "bilby", "blimy", "embay", "embow", "lamby", "limby", "lobby", "maybe", "nobby", "nubby", "tabby", "tubby", "bimbo", "above", "banty", "belay", "blawn", "bliny", "blown", "bluey", "boney", "bowel", "butyl", "ebony", "elbow", "inbye", "nobly", "outby", "abbot", "album", "ambit", "amble", "babel", "bible", "bilbo", "biome", "blame", "blume", "imbue", "limbo", "umbel", "aboil", "about", "baton", "bento", "binal", "biont", "biota", "blain", "blate", "bleat", "blent", "bloat", "blunt", "built", "noble", "table", "tubae", "tubal"];
const wordListSix = ["blowby", "wabbly", "byelaw", "viably", "blimey", "bowman", "bowmen", "byname", "nibbly", "nimbly", "numbly", "nibbly", "wabble", "wimble", "wobble", "wombat", "bumble", "beauty", "botany", "bounty", "bovine", "byline", "outbye", "viable", "bauble", "mobile", "nobble", "tumble", "albeit", "albino", "butane", "nebula", "obtain", "oblate", "unable", "unbelt", "unbolt"];
const wordListSeven = ["movably", "beltway", "beamily", "buyable", "movable", "mutably", "nobbily", "bambino", "baloney", "bayonet", "buoyant", "notably", "ownable", "teabowl", "towable", "votable", "ambient", "bimetal", "bobtail", "lambent", "minable", "mutable", "outbeam", "bailout", "butanol", "notable", "tabouli", "tunable"];
const wordListEight = ["moveably", "blowtube", "obviable", "bivalent", "tuneably", "unviable", "bailment", "nobelium", "ablution", "abutilon", "tailbone"];
const wordListNine = ["unmovable", "bombinate", "mountable"];
const wordListTen = ["obnubilate"];

submittedWords = [];
wordCount = 0;
foundWordList = document.getElementById("foundWords");

function shuffle() {
   var randomImage = Math.floor(Math.random()*5) + 1;
   var setImg = document.getElementById("grid");
   if (randomImage == 1) {setImg.src = "grid1.png";}
   else if (randomImage == 2) {setImg.src = "grid2.png";}
   else if (randomImage == 3) {setImg.src = "grid3.png";}
   else if (randomImage == 4) {setImg.src = "grid4.png";}
   else if (randomImage == 5) {setImg.src = "grid5.png";}
}

function submitWord() {
    submittedWord = (document.getElementById("fname").value).toLowerCase();

    if (submittedWord = "will you be my valentine") {window.location.href="valentine.html";}
    if (submittedWords.includes(submittedWord)) {document.getElementById("fname").value = ""; return false;}

    if (submittedWord.length == 4) {
        if (wordListFour.includes(submittedWord)) {
            submittedWords.push(submittedWord);
            wordCount = wordCount + 1;
            alert(wordCount);
            foundWordList.textContent += submittedWord;
            foundWordList.textContent += "    ";
        }
    }

    else if (submittedWord.length == 5) {
        if (wordListFive.includes(submittedWord)) {
            submittedWords.push(submittedWord);
            wordCount = wordCount + 1;
            alert(wordCount);
            foundWordList.textContent += submittedWord;
            foundWordList.textContent += "    ";
        }
    }

    else if (submittedWord.length == 6) {
        if (wordListSix.includes(submittedWord)) {
            submittedWords.push(submittedWord);
            wordCount = wordCount + 1;
            alert(wordCount);
            foundWordList.textContent += submittedWord;
            foundWordList.textContent += "    ";
        }
    }

    else if (submittedWord.length == 7) {
        if (wordListSeven.includes(submittedWord)) {
            submittedWords.push(submittedWord);
            wordCount = wordCount + 1;
            alert(wordCount);
            foundWordList.textContent += submittedWord;
            foundWordList.textContent += "    ";
        }
    }

    else if (submittedWord.length == 8) {
        if (wordListEight.includes(submittedWord)) {
            submittedWords.push(submittedWord);
            wordCount = wordCount + 1;
            alert(wordCount);
            foundWordList.textContent += submittedWord;
            foundWordList.textContent += "    ";
        }
    }

    else if (submittedWord.length == 9) {
        if (wordListNine.includes(submittedWord)) {
            submittedWords.push(submittedWord);
            wordCount = wordCount + 1;
            alert(wordCount);
            foundWordList.textContent += submittedWord;
            foundWordList.textContent += "    ";
        }
    }

    else if (submittedWord.length == 10) {
        if (wordListTen.includes(submittedWord)) {
            submittedWords.push(submittedWord);
            wordCount = wordCount + 1;
            alert(wordCount);
            foundWordList.textContent += submittedWord;
            foundWordList.textContent += "    ";
        }
    };
    document.getElementById("fname").value = "";

    if (wordCount == 10) {document.getElementById("dailySentence").textContent = "DAILY SENTENCE: BE  _____  _____  _____  _____";}
    else if (wordCount == 20) {document.getElementById("dailySentence").textContent = "DAILY SENTENCE: BE  WILL  _____  _____  _____";}
    else if (wordCount == 30) {document.getElementById("dailySentence").textContent = "DAILY SENTENCE: BE  WILL  MY  _____  _____";}
    else if (wordCount == 40) {document.getElementById("dailySentence").textContent = "DAILY SENTENCE: BE  WILL  MY  YOU  _____";}
    
}