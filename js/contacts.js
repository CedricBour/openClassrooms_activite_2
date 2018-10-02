/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

/* VARIABLES*/
var user = {
    // initialization
    init: function (lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
};

var userCommand; //The selected command by the user

//Carole Lévisse
var caroleLevisse = Object.create(user);
caroleLevisse.init("Lévisse", "Carole");

//Mélodie Nelsonne
var melodieNelsonne = Object.create(user);
melodieNelsonne.init("Mélodie", "Nelsonne");

//Array with all contacts
var contactList = [caroleLevisse, melodieNelsonne];

/* USER PROGRAM */

console.log(">>> Bonjour ! <<<");
console.log(">>> Bienvenue dans votre gestion de vos contacts <<<");

while (userCommand != 0) {
	console.log("");
	console.log(" ---------- MENU: ----------");
	console.log(" | Que voulez vous faire ? |");
	console.log(" | 1 : Liste des contacts  |");
	console.log(" | 2 : Ajouter un contact  |");
	console.log(" | 0 : Quitter             |");
	console.log(" ---------------------------");

	userCommand = Number(prompt("Entrez une commande"));
	if (userCommand === 1) {
		//print each contact
		console.log("Vos contacts : ");
		for (var i = 0; i < contactList.length; i++) {
			console.log("--> " + contactList[i].lastName + " " + contactList[i].firstName);
		}
	}
	else if (userCommand === 2) {
		console.log("Veillez entrez le nom de votre nouveau contact");
		userLastName = prompt("Entrez un nom de famille");
		console.log("Veillez entrez le prénom de votre nouveau contact");
		userFirstName = prompt("Entrez un prénom");
		
		//New contact object
		var newContact = Object.create(user);
		newContact.init(userLastName, userFirstName);

		console.log("Nouveau contact ajouté avec succès");
		contactList.push(newContact);
	} 
	else if (userCommand === 0){
		//Nothing here to exit while condition
	}
	else {
		console.log("Commande incorrecte, entrez une nouvelle commande");
	}
}

// When the command is 0 for exit
console.log("Au revoir !");
