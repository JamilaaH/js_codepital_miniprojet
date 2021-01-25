let traitement = (patient) => {
    if (patient.traitement == "ctrl+maj+f") {
        patient.paye(traitement);
        console.log(`le traitement de ${patient.nom} est ${indente.traitement}`);
    } else if (patient.traitement == "saveOnFocusChange") {
        console.log(`son traitement est ${unsave.traitement}`);
    } else if (patient.traitement == "CheckLinkRelation") {
        console.log(`son traitement est ${error.traitement}`);
    } else if (patient.traitement == "ventoline") {
        console.log(`son traitement est ${azmatique.traitement}`);
    } else {
        console.log(`son traitement est ${bug.traitement}`);
    }
} 
let traitement = (patient) => {
    if (patient.traitement == indente.traitement) {
        console.log(`le traitement de ${patient.nom} est ${indente.traitement}`);
    } else if (patient.traitement == unsave.traitement) {
        console.log(`son traitement est ${unsave.traitement}`);
    } else if (patient.traitement == error.traitement) {
        console.log(`son traitement est ${error.traitement}`);
    } else if (patient.traitement == azmatique.traitement) {
        console.log(`son traitement est ${azmatique.traitement}`);
    } else {
        console.log(`son traitement est ${bug.traitement}`);
    }
} 


class Pharmacie {
    constructor(traitement,prix){
        this.traitement = traitement;
        this.prix = prix;
    }
}

let traitement1 = new Pharmacie('ctrl+maj+f', 60)
let traitement2 = new Pharmacie('saveOnFocusChange', 100) 
let traitement3 = new Pharmacie('CheckLinkRelation', 35)
let traitement4 = new Pharmacie('Ventoline', 40)
let traitement5 = new Pharmacie('f12+doc', 20)

    // cabinet: [chat = {
    //     miaule() {
    //         setTimeout(() => {
    //             console.log(`le chat miaule`);
    //         }, 2000)
    //     }
    // }],



if (this.patient.traitement == "ctrl+maj+f") {
    var medoc = 60;
    console.log(`le traitement de ${patient.nom} est ${indente.traitement} et coute ${medoc}`);
} else if (this.patient.traitement == "saveOnFocusChange") {
    console.log(`son traitement est ${unsave.traitement}`);
} else if (this.patient.traitement == "CheckLinkRelation") {
    console.log(`son traitement est ${error.traitement}`);
} else if (this.patient.traitement == "ventoline") {
    console.log(`son traitement est ${azmatique.traitement}`);
} else {
    console.log(`son traitement est ${bug.traitement}`);
}