const newgame = document.getElementById("newgame");
const rolldice = document.getElementById("rolldice");
const hold = document.getElementById("hold");
const canvas = document.getElementById("canvas");

var ctx;

if (canvas.getContext) {
    ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "beige";
    ctx.fillRect(10, 25, 1350, 670);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(675, 25, 1350, 670);
    ctx.fill();

    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle';
    ctx.font = '50px Arial';
    ctx.fillText('PLAYER 1', 335, 200);

    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle';
    ctx.font = '50px Arial';
    ctx.fillStyle = "beige";
    ctx.fillText('PLAYER 2', 1015, 200);

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(250, 450, 170, 120);
    ctx.fill();

    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle';
    ctx.font = '20px Arial';
    ctx.fillStyle = "black";
    ctx.fillText('CURRENT', 335, 475);

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(935, 450, 170, 120);
    ctx.fill();

    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle';
    ctx.font = '20px Arial';
    ctx.fillStyle = "black";
    ctx.fillText('CURRENT', 1020, 475);


    window.onload = () => {
        const jouer = new Image(400, 400);
        jouer.onload = () => {
            ctx.drawImage(jouer, 625, 250, 100, 100);
        }
        jouer.src = "jeu/jouer.jpg";

        const newPartie = new Image(100, 100);
        newPartie.onload = () => {
            ctx.drawImage(newPartie, 595, 85, 15, 15);
        }
        newPartie.src = "jeu/newgame.png";

        const relancer = new Image(100, 100);
        relancer.onload = () => {
            ctx.drawImage(relancer, 600, 461, 15, 15);
        }
        relancer.src = "jeu/rolldice.png";

        const enregistrer = new Image(100, 100);
        enregistrer.onload = () => {
            ctx.drawImage(enregistrer, 615, 530, 15, 15);
        }
        enregistrer.src = "jeu/hold.png";
    }
}

else {
    alert("Le navigateur n'est pas compatible pour afficher des éléments !");
}


class Joueur {
    constructor(identite) {
        this.identite = identite;
        this.scoreGlobal = 0;
        this.scoreTemporaire = 0;
        this.passeMonTour = 0;
        this.vainqueur = 0;
    }

}

function rand() {
    return Math.floor((Math.random() * 6) + 1);
}

function lancerDe() {
    var joueur;

    if (joueur1.passeMonTour == 0) {
        joueur = joueur1;
    }

    else {
        joueur = joueur2;
    }

    var points = rand();

    const img = new Image(400, 400);
    img.onload = () => {
        ctx.drawImage(img, 625, 250, 100, 100);
    }
    img.src = "jeu/" + points + ".png";

    if (points == 1) {
        joueur.scoreTemporaire = 0;
        joueur.passeMonTour = 1;
        alert("Pas de chance. Vous avez fait 1 vous passez votre tour !");

        if (joueur.identite == "joueur1") {
            joueur2.passeMonTour = 0;

            ctx.fillStyle = "beige";
            ctx.fillRect(480, 190, 15, 15);
            ctx.fill();

            const pt1 = new Image(100, 100);
            pt1.onload = () => {
                ctx.drawImage(pt1, 1155, 190, 15, 15);
            }
            pt1.src = "jeu/pointRouge.png";
        }

        else {
            joueur1.passeMonTour = 0;

            ctx.fillStyle = "white";
            ctx.fillRect(1155, 190, 15, 15);
            ctx.fill();

            const pt = new Image(100, 100);
            pt.onload = () => {
                ctx.drawImage(pt, 480, 190, 15, 15);
            }
            pt.src = "jeu/pointRouge.png";
        }
    }

    else {
        joueur.scoreTemporaire += points;

        if (joueur.identite == "joueur1") {
            ctx.fillStyle = "red";
            ctx.fillRect(300, 490, 80, 80);
            ctx.fill();

            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle';
            ctx.font = '40px Arial';
            ctx.fillStyle = "white";
            ctx.fillText(joueur.scoreTemporaire, 335, 530);
        }

        else {
            ctx.fillStyle = "red";
            ctx.fillRect(980, 490, 80, 80);
            ctx.fill();

            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle';
            ctx.font = '40px Arial';
            ctx.fillStyle = "white";
            ctx.fillText(joueur.scoreTemporaire, 1020, 530);
        }

        alert("Pour continuer relancer le dé.");
    }
}

function enregistrerPoint() {
    var joueur;

    if (joueur1.passeMonTour == 0) {
        joueur = joueur1;
    }

    else {
        joueur = joueur2;
    }

    if (joueur.scoreTemporaire != 0) {
        joueur.scoreGlobal += joueur.scoreTemporaire;
        joueur.scoreTemporaire = 0;

        if (joueur.identite == "joueur1") {
            ctx.fillStyle = "beige";
            ctx.fillRect(290, 260, 90, 70);
            ctx.fill();

            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle';
            ctx.font = '80px Arial';
            ctx.fillStyle = "red";
            ctx.fillText(joueur.scoreGlobal, 335, 300);

            ctx.fillStyle = "red";
            ctx.fillRect(300, 490, 80, 80);
            ctx.fill();

            joueur1.passeMonTour = 1;
            joueur2.passeMonTour = 0;

            ctx.fillStyle = "beige";
            ctx.fillRect(480, 190, 15, 15);
            ctx.fill();

            const pt1 = new Image(100, 100);
            pt1.onload = () => {
                ctx.drawImage(pt1, 1155, 190, 15, 15);
            }
            pt1.src = "jeu/pointRouge.png";
        }

        else {
            ctx.fillStyle = "white";
            ctx.fillRect(970, 260, 90, 70);
            ctx.fill();

            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle';
            ctx.font = '80px Arial';
            ctx.fillStyle = "red";
            ctx.fillText(joueur.scoreGlobal, 1015, 300);

            ctx.fillStyle = "red";
            ctx.fillRect(980, 490, 80, 80);
            ctx.fill();

            joueur2.passeMonTour = 1;
            joueur1.passeMonTour = 0;

            ctx.fillStyle = "white";
            ctx.fillRect(1155, 190, 15, 15);
            ctx.fill();

            const pt = new Image(100, 100);
            pt.onload = () => {
                ctx.drawImage(pt, 480, 190, 15, 15);
            }
            pt.src = "jeu/pointRouge.png";
        }

        calculPoints(joueur);
        alert("Vous passez votre tour.");
    }
}

function calculPoints(joueur) {
    if (joueur.scoreGlobal >= 100) {
        joueur.vainqueur = 1;
        alert(joueur.identite + " gagne la partie");
        window.location.reload();
    }
}


alert("Bienvenu !");
alert("Le joueur 1 commence. Lancer votre dé !");

newgame.addEventListener("click", commencerPartie);
rolldice.addEventListener("click", lancerDe);
hold.addEventListener("click", enregistrerPoint);

var joueur1 = new Joueur("joueur1");
var joueur2 = new Joueur("joueur2");
joueur1.passeMonTour = 0;
joueur2.passeMonTour = 1;

ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = '80px Arial';
ctx.fillStyle = "white";
ctx.fillText('0', 335, 300);

ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = '80px Arial';
ctx.fillStyle = "beige";
ctx.fillText('0', 1015, 300);

ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = '40px Arial';
ctx.fillStyle = "white";
ctx.fillText('0', 335, 530);

ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = '40px Arial';
ctx.fillStyle = "white";
ctx.fillText('0', 1020, 530);


function commencerPartie() {
    window.location.reload();

    const pt = new Image(100, 100);
    pt.onload = () => {
        ctx.drawImage(pt, 480, 190, 15, 15);
    }
    pt.src = "jeu/pointRouge.png";

    const pt1 = new Image(100, 100);
    pt1.onload = () => {
        ctx.drawImage(pt1, 1155, 190, 15, 15);
    }
    pt1.src;
}
