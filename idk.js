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
const annulationplace=[];
const tickets = [];
let idglobal = 0;
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
function aff()
{
    for(let trip in trips)
    {
        console.log("#"+ trips[trip].id +" "+ trips[trip].departure + " → " + trips[trip].destination);
        console.log("Départ : " + trips[trip].departureTime);
        console.log("Arrivée : " + trips[trip].arrivalTime);
        console.log("Prix : "+trips[trip].price+ " DH");
        console.log("Place disponible : "+trips[trip].availableSeats);
        console.log();
    }
}
function acheter()
{
    const ticket ={
        nom : prompt("Nom du passager : "),
        idtrjt : Number(prompt("Identifiant du trajet : ")),
    }
    let found = false;
    for (let trip in trips)
    {
        if(trips[trip].idtrajet === ticket.idtrjt);
        {
            found = true;
            if(trips[trip].availableSeats != 0)
            {
                trips[trip].availableSeats -= 1;
                ticket.place = 50 - trips[trip].availableSeats;
                ticket.id = idglobal++;
                ticket.destination = trips[trip].destination;
                ticket.departure = trips[trip].departure;
                ticket.prix = trips[trip].price;
                tickets[tickets.length] = ticket;
                console.log("Ticket achet avec succes.");
                console.log();
                console.log("Ticket #"+billet.id);
                console.log("Passager : " + billet.nom);
                console.log("tripId : "+ billet.idtrajet);
                console.log("seat Number : " + billet.seatnumber);
                console.log("price : "+ billet.price);
            }
            else
            {
                console.log("Train complet");
            }
        }
    }
    if(!found)
    {
        console.log("traject introuvable");
    }
    
}
function annulation()
{
    let found = false;
    let idch = Number(prompt("entrez lid du ticket: "));
    for(let i = 0;i < tickets;i++)
    {
        if(tickets[i].id === idch)
        {
            let ind = i;
            for(let trip in trips)
            {
                if(trips[trip].id == tickets[i].idtrajet)
                {
                    trips[trip].availableSeats += 1;
                    annulationplace.push({[tickets[i].idtrajet]: {
                        placeannler : tickets[i].seatnumber
                    }})
                }
            }
        }
        let arr = [];
        for(let i = 0;i < tickets.length;i++)
        {
            if(i != ind)
            {
                arr.push(tickets[i]);
            }
        }
        for(let i = 0;i<arr.length;i++)
        {
            tickets[i] = arr[i];
        }
        tickets.length -= 1;
        console.log("ticket supprime.");
        console.log();
        found = true;
        break;
    }
    if(!found)
    {
        console.log("ticket not found");
    }
}
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
    }
}