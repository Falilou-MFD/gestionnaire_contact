let ecran = document.getElementById("ecran");
        let clavier = document.getElementById("clavier");
        let contacts = [];

        function Contact(nom, prenom, mail, numero) {
            this.nom = nom;
            this.prenom = prenom;
            this.mail = mail ;
            this.numero = numero ;
        }
        
        let Pape = new Contact("Sow", "Pape", "pape.soe@gmail.com", 771234566);
        let Moussa = new Contact("Sow", "Moussa", "sow.moussa@gmail.com", 771234567);
        let Maimouna = new Contact("Ba", "Maimouna", "maimoumna@gmail.com", 771234568);
        let Awa = new Contact("Diop", "Awa", "awa.diop@gmail.com", 771234569);
        let Mamadou = new Contact("Fall", "Mamadou", 772345678);

        contacts.push(Moussa);
        contacts.push(Maimouna);
        contacts.push(Pape);
        contacts.push(Awa);
        contacts.push(Mamadou);




        function ajouterChiffre(chiffre) {
            ecran.value += chiffre;
        }

        function ajouterContact() {
            let nom = prompt("Entrez le nom du contact");
            let prenom = prompt("Entrez le prenom du contact");
            let mail = prompt("Entrez le mail du contact");
            let numero = parseInt(prompt("Entrez le numero du contact"));

            let contact = {
                nom: nom,
                prenom: prenom,
                mail: mail,
                numero: numero
            };

            contacts.push(contact);
            if (contacts.length === 1) {
                sortie1.value = "Contact ajouté";
            } else {
                sortie1.value = "Contact ajouté";
            }
        }

        function afficherContacts() {
            sortie2.value = "Liste des contacts\n";
            for (let i = 0; i < contacts.length; i++) {
                sortie2.value += contacts[i].nom + " " + contacts[i].prenom + "\n";
            }
        }

        function afficherContact() {
            let nom = prompt("Entrez le nom du contact");
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].nom === nom) {
                    sortie3.value = contacts[i].nom + " " + contacts[i].prenom + "\n" + contacts[i].mail + "\n" + contacts[i].numero;
                    break;
                }
            }
        }

        function supprimerContact() {
            let nom = prompt("Entrez le nom du contact a supprimer");
            let prenom = prompt("Entrez le prenom du contact a supprimer");
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].nom === nom && contacts[i].prenom === prenom) {
                    contacts.splice(i, 1);
                    break;
                }
            }
            sortie4.value = "Contact supprimé";
        }

        function modifierContact() {
            let nom = prompt("Entrez le nom actuel du contact a modifier");
            let prenom = prompt("Entrez le prenom actuel du contact a modifier");
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].nom === nom) {
                    let nom = prompt("Entrez le nouveau nom du contact");
                    let prenom = prompt("Entrez le nouveau prenom du contact");
                    let mail = prompt("Entrez le nouveau mail du contact");
                    let numero = prompt("Entrez le nouveau numero du contact");

                    contacts[i].nom = nom;
                    contacts[i].prenom = prenom;
                    contacts[i].mail = mail;
                    contacts[i].numero = numero;
                    break;
                }
            }
            sortie5.value = "Contact modifié";
        }

        function appeler() {
            let numero = parseInt(prompt("Entrez le numero du contact"));
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].numero === numero) {
                    sortie6.value = "Appel en cours...";
                    break;
                }
            }
        }

        function appelerEcran(){
            ecran.value = "Appel en cours...";
            sortie6.value = "Appel en cours...";

        }

        function message() {
            let numero = parseInt(prompt("Entrez le numero du contact"));
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].numero === numero) {
                    let sms = prompt("Entrez le message");
                    sortie7.value = "Message envoyé...";
                    break;
                }
            }
        }

        function email() {
            let mail = prompt("Entrez l'adresse email du contact");
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].mail === mail) {
                    let objet = prompt("Entrez l'objet du mail");
                    let corps = prompt("Entrez le corps du mail");
                    sortie8.value ="Email envoyé...";
                    break;
                }
            }
        }

        function effacer() {
            ecran.value = "";
        }