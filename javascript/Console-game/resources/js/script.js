//**********Good luck************ */
let me = {
    Race:"Human",
    Type:"Female",
    Moves:["heal","attack"],
    Health:100,
    Heal: function() {
        let health= me.Health;
        let random = getRndInteger(8,20); // returns a random integer from 8 to 20
        console.log("me add (8 to 20): " + random);
        if (health + random <100){
            health += random;
            me.Health = health;
            console.log('%cme left:' + me.Health, 'color:red');
            randomPun(puns);
            let respond = Math.floor(Math.random() * 2); //return 0 or 1
            
            if (respond == 0) {
                console.log("sans choose: Attack");
                setTimeout(sans.Attack(),5000);
            } else {
                console.log("sans choose: Heal");
                setTimeout(sans.Heal(),5000);
            }
        } else {
            randomPun(overHealReaction);
            me.Health = 100;
        } 
        
    },

    Attack: function() {
        let health = sans.Health; 
        let criticalStrike = Math.floor(Math.random() * 4); // return 0,1,2,or 3
        console.log("criticalStrike" + criticalStrike);
        if (criticalStrike == 0){
            let random = 500;
            let leftHealth = health-random;
            if(leftHealth>1){
                health -= random;
                sans.Health = health;
                randomPun(puns);
                console.log("sans subtract 500");
                console.log("%cSans left: " + sans.Health,'color:blue');
                let respond = Math.floor(Math.random() * 2); //return 0 or 1
                if (respond == 0) {
                    console.log("sans choose: Attack");
                    setTimeout(sans.Attack(),5000);
                } else {
                    console.log("sans choose: Heal");
                    setTimeout(sans.Heal(),5000);
                }
            } else {
                health -= random;
                sans.Health = health;
                console.log("%cSans real left: " + sans.Health,'color:blue');
                gameover();
            }
            
        } else if (criticalStrike != 0) {
            random = getRndInteger(20,120); // returns a random integer from 20 to 120
            leftHealth = health-random;
            if (leftHealth >1) {
                health -= random;
                sans.Health = health;
                console.log("sans subtract (20 to 120): " + random);
                console.log("%cSans left: " + sans.Health,'color:blue');
                randomPun(puns);
                let respond = Math.floor(Math.random() * 2); //return 0 or 1
                if (respond == 0) {
                    console.log("sans choose: Attack");
                    setTimeout(sans.Attack(),5000);
                } else {
                    console.log("sans choose: Heal");
                    setTimeout(sans.Heal(),5000);
                }
            }
            
        } else {
            health -= random;
            me.Health = health;
            console.log("%cme real left: " + me.Health,'color:red');
            gameover();
        }
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
        console.log("sans add (40 to 80): " + random);
        if (health + random <1000){
            health += random;
            sans.Health = health; 
        } else {
            randomPun(overHealReaction);
            sans.Health = 1000;
        }
        console.log("Sans aftercharge: " + sans.Health);
        console.log("%cme left: " + me.Health, 'color:red');
    },
    Attack: function() {
        let health = me.Health;
        let criticalStrike = Math.floor(Math.random() * 4); // return 0,1,2,or 3 
        console.log("criticalStrike" + criticalStrike);
        if (criticalStrike ==0) {
            let random = 50;
            let leftHealth = health-random;
            if (leftHealth >1){
                health -= random;
                me.Health = health;
                console.log("me subtract 50");
                console.log("%cme left: " + me.Health, 'color:red');
            } else {
                health -= random;
                me.Health = health;
                console.log("%cme real left: " + me.Health, 'color:red');
                gameover();
            }
        } else if (criticalStrike !=0) {
            random = getRndInteger(10,15); // returns a random integer from 10 to 15
            leftHealth = health-random;
            if (leftHealth >1){
                health -= random;
                me.Health = health;
                console.log("me subtract:" + random);
                console.log("%cme left: " + me.Health, 'color:red');
            } else {
                health -= random;
                me.Health = health;
                console.log("%cme real left: " + me.Health, 'color:red');
                gameover();
            }
        }
               
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
    console.log("Game Over!");
    if (me.Health==1 || me.Health< 0){
        console.log("%cme left: 0", "color:red");
        console.log("%cSans left: " + sans.Health, 'color:blue');
    } else if (sans.Health==1 || sans.Health < 0) {
        console.log("%cme left: " + me.Health, 'color:red');
        console.log("%cSans left: 0", "color:blue");
    }
}
