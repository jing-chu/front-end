//**********Good luck************ */
let me = {
    Race:"Human",
    Type:"Female",
    Moves:["heal","attack"],
    Health:100,
    Heal: function() {
        let health= me.Health;
        let random = getRndInteger(8,20); // returns a random integer from 8 to 20
        console.log("me add 8 to 20: " + random);
        if (health + random <100){
            health += random;
            me.Health = health;
            console.log("me left: " + me.Health);
            randomPun(puns);
            let respond = Math.floor(Math.random() * 2); //return 0 or 1
            console.log("sans choose: " + respond);
            if (respond == 0) {
                setTimeout(sans.Attack(),2000);
            } else {
                setTimeout(sans.Heal(),2000);
            }
        } else {
            randomPun(overHealReaction);
            me.Health = 100;
        } 
        //console.log("Me aftercharge: " + me.Health);
    },
    Attack: function() {
        let health = sans.Health;
        let random = getRndInteger(20,120); // returns a random integer from 20 to 120
        let leftHealth = health-random;
        console.log("sans subtract 20 to 120: " + random);
        
        if (leftHealth >1){
            health -= random;
            sans.Health = health;
            console.log("Sans left: " + sans.Health);
            randomPun(puns);
            let respond = Math.floor(Math.random() * 2); //return 0 or 1
            console.log("sans choose: " + respond);
            if (respond == 0) {
                setTimeout(sans.Attack(),5000);
            } else {
                setTimeout(sans.Heal(),5000);
            }
        } else {
            gameover();
        }
        //console.log("Sans left: " + health);
        //console.log("Sans left: " + sans.Health);
    }
};

let sans = {
    Race:"Monster",
    Type:"Skeleton",
    Moves:["heal","attack"],
    Health:"1000",
    Heal: function() {
        let health= sans.Health;
        let random = getRndInteger(40,80); // returns a random integer from 40 to 80
        console.log("sans add 40 to 80: " + random);
        if (health + random <1000){
            health += random;
            sans.Health = health; 
        } else {
            randomPun(overHealReaction);
            sans.Health = 1000;
        }
        console.log("Sans aftercharge: " + sans.Health);
    },
    Attack: function() {
        let health = me.Health;
        let random = getRndInteger(10,15); // returns a random integer from 10 to 15 
        let leftHealth = health-random; 
        console.log("me subtract 10 to 15: " + random);
        if (leftHealth >1){
            health -= random;
            me.Health = health;  
        } else {
            gameover();
        }
        console.log("me left: " + health);
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let music = document.getElementById("themeSong");
function musicOn() {
    music.autoplay = true;
    music.loop = true;
    music.load();
    music.play();
}
musicOn();

function musicControl() {
    if(music.autoplay == true){
        music.autoplay = false;
        music.loop = false;
        music.pause();
        document.getElementById("music").innerHTML = "music:on";
    } else {
        music.autoplay = true;
        music.loop = true;
        music.play();
        document.getElementById("music").innerHTML = "music:off";
    }
}

function gameover() {

}
