const prompt = require('prompt-sync')();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
let idglobal = 1;
const annulationplace =[];
const ticket_acheter = [];
//MENU
function menu(){
    console.log("=======================================");
    console.log("");
    console.log("RAILWAY MANAGER");
    console.log("");
    console.log("=======================================");
    console.log("1.Afficher les trajets");
    console.log("2.Acheter un ticket");
    console.log("3.Afficher les tickets");
    console.log("4.Annuler un tickets");
    console.log("5.Recher un ticket");
    console.log("6.Filtrer les trajets");
    console.log("7.Trier les trajets");
    console.log("8.Nombre de tickets");
    console.log("9.chiffre d'affaires");
    console.log("10.Trajet le plus vendu");
    console.log("0.Quitter");
}
//afficher les trains
function aff(){
    for(let trip in trips)
    {
        console.log("=========trajet==========");
        console.log("#"+ trips[trip].id +" "+ trips[trip].departure + " → " + trips[trip].destination);
        console.log("Départ : " + trips[trip].departureTime);
        console.log("Arrivée : " + trips[trip].arrivalTime);
        console.log("Prix : "+trips[trip].price+ " DH");
        console.log("Place disponible : "+trips[trip].availableSeats);
        console.log();
    }
}
function acheter(){
        console.log("=====================================");
        console.log("=========L'achat d'un ticket=========");
        console.log("=====================================");
        const billet = {
                nom : prompt("Nom du passager : "),
                idtrajet : Number(prompt("Identifiant du trajet : ")),
        }
        let found = false;
        let foundplace = false;
        for(let trip in trips)
        {
            if(trips[trip].id === billet.idtrajet){

                found = true;
                if(trips[trip].availableSeats !== 0)
                { 
                    trips[trip].availableSeats -= 1;
                    for(let i = 0;i<annulationplace.length;i++)//looping f array kol object
                    {
                        if(billet.idtrajet in annulationplace[i])//checking kol object wash howa number dyal dak traject 
                        {
                            foundplace = true;
                            billet.seatnumber = annulationplace[i][billet.idtrajet].placeannuler;//la lqinah ka n3tiw dik place li asssigned lih lnew place lnew user 
                            annulationplace.splice(i,1);  
                            break;                      
                        }
                    }
                    if(!foundplace)
                        billet.seatnumber = 50 - trips[trip].availableSeats;//sinon ka nkmlo eady

                    billet.id = idglobal++;
                    billet.price = trips[trip].price;
                    billet.destination = trips[trip].destination;
                    billet.departure = trips[trip].departure;
                    ticket_acheter[ticket_acheter.length]= billet;

                    console.log("Ticket acheté avec succès.");
                    console.log("==========Information de ticket ===========");
                    console.log();
                    console.log("Ticket #"+billet.id);
                    console.log("Passager : " + billet.nom);
                    console.log("tripId : "+ billet.idtrajet);
                    console.log("seat Number : " + billet.seatnumber);
                    console.log("price : "+ billet.price);
                    console.log();
                }
                else
                {
                console.log("Train complet.");
                }
            }
        }
        if(!found){
            console.log("Train itrouvable.");
        }
        console.log();
}
function affticket(){
    console.log("=== TICKETS ===");
    console.log();
    if(ticket_acheter.length != 0)
    {
        for(let i = 0;i<ticket_acheter.length;i++)
        {
            console.log("Ticket #" + ticket_acheter[i].id);
            console.log("Passager : "+ticket_acheter[i].nom);
            console.log("Traject : "+ ticket_acheter[i].departure + " → " +ticket_acheter[i].destination);
            console.log("Place : "+ticket_acheter[i].seatnumber);
            console.log("Prix : " + ticket_acheter[i].price);
            console.log();
        }
    }
    else
    {
        console.log("Aucun ticket enregistre.");
        console.log();
    }
    
}
function annulation(){
    let id_ticket = Number(prompt("Identifiant du ticket : "));
    let found;
    for(let i = 0;i<ticket_acheter.length;i++)
    {
        if(ticket_acheter[i].id === id_ticket)
        {
            let indx = i;
            for(let trip in trips)
            {
                if(trips[trip].id === ticket_acheter[i].idtrajet)
                {
                    trips[trip].availableSeats += 1;
                    annulationplace.push({
                        [ticket_acheter[i].idtrajet]: {
                        placeannuler: ticket_acheter[i].seatnumber
                        }
                    });//7tit place number fobject li msmi 3la idtraject.
                }
            }
            let arr = [];
            for(let i = 0;i<ticket_acheter.length;i++)
            {
                if(i !== indx)
                {
                    arr.push(ticket_acheter[i]);
                }
            }
            for(let i = 0;i < ticket_acheter.length;i++)
            {
                ticket_acheter[i] = arr[i];
            }
            ticket_acheter.length -= 1;
            console.log("Ticket annule avec succes.");
            console.log();
            found = true;
            break;
        }
    }
    if(!found)
    {
        console.log("Ticket introuvable.");
        console.log();
    }
        
    
}
function chercher(){
    let nomchercher = prompt("Nom du passager : ");
    let found ;
    for(let i = 0;i<ticket_acheter.length;i++)
    {
        if(ticket_acheter[i].nom === nomchercher)
        {
            found = true;
            console.log("Ticket #" + ticket_acheter[i].id);
            console.log("Passager : "+ticket_acheter[i].nom);
            console.log("Traject : "+ ticket_acheter[i].departure + " → " +ticket_acheter[i].destination);
            console.log("Place : "+ticket_acheter[i].seatnumber);
            console.log("Prix : " + ticket_acheter[i].price);
            console.log();
        }
        
    }
    if(!found)
        {
            console.log("Aucun passager trouve.");
            console.log();
        }
}
function filter(){
    let villechercher = prompt("Ville de depart :");
    let found = false;
    for(let trip in trips)
    {
        if(trips[trip].departure === villechercher)
        {
            found = true;
            console.log("Resultat :")
            console.log(trips[trip].departure + " → " + trips[trip].destination + " : " + trips[trip].price + " DH" );
            console.log();
        }
    }
    if(!found)
    {
        console.log("Aucune departure trouver pour cette ville.");
        console.log();
    }
}
function triage(){
    let exptrips=[];
    for(let trip in trips)
    {
        exptrips[trip] = trips[trip];
    }
    for(let i = 0;i<exptrips.length - 1;i++)
    {
        for(let j = 0;j<exptrips.length - 1 - i;j++)
        {
            if(exptrips[j].price < exptrips[j + 1].price)
            {
                let tmp = exptrips[j];
                exptrips[j] = exptrips[j+1];
                exptrips[j+1] = tmp;
            }
        }
    }
    for(let i = 0; i < exptrips.length; i++)
    {
        console.log("#" + exptrips[i].id + " " + exptrips[i].departure + " → " + exptrips[i].destination + " : " + exptrips[i].price + " DH");
    }
}
function sum()
{
    console.log("===============Nombre de ticket vendue============");
    console.log("Nombre total des tickets est "+ticket_acheter.length);
    console.log("================================");
    console.log();
}
function chiffreaff()
{
    let sum = 0;
    for(let trip in trips)
    {
        sum += trips[trip].price;
    }
    console.log("Chiffre d'affaires total : "+ sum);
}
function trajet()
{   if(ticket_acheter.length === 0)
    {
        console.log("================================");
        console.log("Aucun ticket n'est encore vendu.");
        console.log("================================");
        console.log();
    }
    else
    {
        let min = trips[0].availableSeats;
        let dst = trips[0].destination;
        let dpt = trips[0].departure;
        for(let trip in trips)
        {
            if(trips[trip].availableSeats < min)
            {
                min = trips[trip].availableSeats;
                dst = trips[trip].destination;
                dpt = trips[trip].departure;
            }
        }
        console.log("========================");
        console.log("le trajet le plus vendu :");
        console.log(dpt + " → " + dst);
        console.log(50 - min + "ticket vendu.");
        console.log();
    }
    
}
//the loop
while(1)
{
    menu();
    let choix = Number(prompt("Votre choix :"));
    switch(choix){
        case 1:
            aff();
            break;
        case 2:
            acheter();
            break;
        case 3:
            affticket();
            break;
        case 4:
            annulation();
            break;
        case 5:
            chercher();
            break;   
        case 6:
            filter();
            break;    
        case 7:
            triage();
            break;     
        case 8:
            sum();
            break;
        case 9:
            chiffreaff();
            break;
        case 10:
            trajet();
            break;
        case 0:
            console.log("Au revoir");
            return;
        default: 
            console.log("Option non valide");
    }
}