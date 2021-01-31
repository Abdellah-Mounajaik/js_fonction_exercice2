// exo1

// let  reverseNumber = (a) => {
//     let taille = a.s
//     return a
 
// // }
// console.log(reverseNumber("abdel"));
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)


// exo2

// let divPar2 = (a) => {
    // switch (a) {
    //     case (a % 2 == 0) :
    //         alert(`Le num ${a} est divisible par 2 $ {a} : 2 = ${a/2}`)
    //         return a
    //     case (a % 2 == 1) :
    //         alert("Ce nombre n'est pas divisible par 2")
    //         return a
    //     default :
    //         break;
    // }

//     if (a % 2 == 0) {
//         alert(`Le num ${a} est divisible par 2 ${a} : 2 = ${a/2}`)
//     } else if (a % 2 == 1){ 
//         alert("Ce nombre n'est pas divisible par 2")
//     }
// }
// console.log(divPar2(11));

// exo3

let logIn = (a) => {
    a = prompt("mdp?")
    if (a== "mdp") {
        alert("vous êtes connêcté")
    }
    while (a != "mdp") {
        a = prompt("mdp?")
    }
    return a
}
console.log(logIn());

// exo4

let coding16 = []

let ajouter = (a) => {
    let ajout = prompt("veut-tu ajouter une personne?")
    if (ajout == "oui") {
        coding16.push("ayhan")
        coding16.push("benedicte")
        coding16.push("Louise", "Jamila")
        return a
    }    
}
coding16.push("ayhan")

console.log(ajouter(coding16));

let supprimer = (a) => {
    let supp = prompt("veux-tu supprimer?") 
    if (supp == "oui") {
        // coding16.splice(0, 1)
    }

}
console.log(supprimer(coding16));
// Créer une function qui permet d'ajouter et de faire sortir des stagiaires d'une classe en animant la function. C-a-d demander s'il veut a chaque fois rajouter une personne si oui qui si non lui dire ouki et afficher le tableau.
// Avec la capture d'écran reproduisez les entrées / sorties de la classe