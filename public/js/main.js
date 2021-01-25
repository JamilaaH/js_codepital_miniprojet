let cimetiere = []; 
class Patient {
    constructor(nom, maladie, argent, poche, sante) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.sante = sante;
    }

    goTo(lieu) {
        console.log(`${this.nom} se déplace vers ${lieu}`);
    }

    takeCare() {
        if (this.traitement == "ctrl+maj+f") {
            var medoc = 60;
            console.log(`le traitement de ${this.nom} est ${indente.traitement} et coute ${medoc} €`);
            this.argent -= medoc;
        } else if (this.traitement == "saveOnFocusChange") {
            var medoc = 100;
            console.log(`le traitement de ${this.nom} est ${indente.traitement} et coute ${medoc} €`);
            this.argent -= medoc;
        } else if (this.traitement == "CheckLinkRelation") {
            var medoc = 35;
            console.log(`le traitement de ${this.nom} est ${indente.traitement} et coute ${medoc} €`);
            this.argent -= medoc;
        } else if (this.traitement == "ventoline") {
            var medoc = 40;
            console.log(`le traitement de ${this.nom} est ${indente.traitement} et coute ${medoc} €`);
            this.argent -= medoc;
        } else {
            var medoc=20;
            console.log(`le traitement de ${this.nom} est ${indente.traitement} et coute ${medoc} €`);
            this.argent -= medoc;
        }
    }

    paye() {
        if (this.argent <= 0 ) {
            cimetiere.push(this.nom);
            this.sante = "décédé"
            console.log(`vous n'avez plus d'argent
            -> cimetière`);
        } else {
            this.sante = "guerri"
            console.log(`vous pouvez payer votre traitement \n ${this.nom} est guéri` );
        }


    }
}

let marcus = new Patient("marcus", "mal indenté", 100, "vide", "malade");
let optimus = new Patient("optimus", "unsave", 200, "vide", "malade");
let sangoku = new Patient("sangoku", "404", 80, "vide", "malade");
let darthVader = new Patient("darthVader", "azmatique", 110, "vide", "malade");
let semicolon = new Patient("semicolon", "syntaxError", 60, "vide", "malade");


class Maladie {
    constructor(nom, traitement) {
        this.nom = nom;
        this.traitement = traitement;
    }
}

let indente = new Maladie("mal indenté", "ctrl+maj+f")
let unsave = new Maladie("unsave", "saveOnFocusChange")
let error = new Maladie("404", "CheckLinkRelation")
let azmatique = new Maladie("azmatique", "ventoline")
let bug = new Maladie("syntaxError", "f12+doc")

let doctor = {
    nom: "Dr Debugger",
    argent: 0,
    cabinet : [],


    diagnostique(patient) {
        if (patient.maladie == "mal indenté") {
            patient.traitement = indente.traitement
            console.log(`${this.nom} prescrit du ${indente.traitement} à ${patient.nom} `);
        } else if (patient.maladie == "unsave") {
            console.log(`${this.nom} prescrit du ${unsave.traitement} à ${patient.nom}`);
        } else if (patient.maladie == "404") {
            console.log(`${this.nom} prescrit du ${error.traitement} à ${patient.nom}`);
        } else if (patient.maladie == "azmatique") {
            console.log(`${this.nom} prescrit du ${azmatique.traitement} à ${patient.nom}`);
        } else {
            console.log(`${this.nom} prescrit du ${bug.traitement} à ${patient.nom}`);
        }
    },

    patientIn(patient) {
        this.cabinet.push(patient);
        console.log(`${patient.nom} rentre dans le cabinet`);
        console.log(`${patient.nom} est atteint de ${patient.maladie}`);
    },

    patientOut(patient) {
        patient.sante = "traitement";
        patient.argent -= 50;
        this.argent += 50
        this.cabinet.pop();
        console.log(`${patient.nom} sort du cabinet`);
    }
}

let salleAttente = [marcus,optimus,sangoku,darthVader,semicolon]








salleAttente.forEach(element => {
    console.log(`Dans la salle d'attente du docteur il y a ${salleAttente.length} personnes`);   
    console.log("_____________");
    doctor.patientIn(element)
    doctor.diagnostique(element)
    doctor.patientOut(element)
    element.goTo("pharmacie")
    element.takeCare()
    element.paye()
    salleAttente.splice(salleAttente.indexOf(element), 1); 
    console.log("_____________");
});

