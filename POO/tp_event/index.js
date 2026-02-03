class Event {

    constructor(date) {
        this.date = date;
    }

    getDate() {
        return this.date;
    }
}

class Sport extends Event {

    constructor(nomSport, teamA, teamB, date) {
        super(date);
        this.nomSport = nomSport;
        this.teamA = teamA;
        this.teamB = teamB;
    }

    getNomSport() {
        return this.nomSport;
    }

    getTeamA() {
        return this.teamA;
    }

    getTeamB() {
        return this.teamB;
    }

    rendu() {
        return "sport(" + this.date + ") : Rencontre de " + this.nomSport + " entre " + this.teamA + " et " + this.teamB
    }
}

class Concert extends Event {

    constructor(artist, date) {
        super(date);
        this.artist = artist;
    }

    getArtist() {
        return this.artist;
    }

    rendu() {
        return "concert(" + this.date + ") : concert de " + this.artist;
    }
}

class EventFactory {

    constructor(events) {
        this.lstEvents = [];

        for(let i = 0 ; i < events.length ; i ++) {
            let e;
            switch(events[i]["type"]) {
                case("sport"):
                    e = new Sport(events[i]["sport"], events[i]["teamA"], events[i]["teamB"], events[i]["date"])
                    this.lstEvents.push(e);
                    break;
                case("concert"):
                    e = new Concert(events[i]["artist"], events[i]["date"])
                    this.lstEvents.push(e);
                    break;
                default:
                    console.log("type non reconnu");
            }
        }
    }

    getLstEvents() {
        return this.lstEvents;
    }
}

let events = [
      {
        type: 'sport', 
        sport: 'basket', 
        teamA: 'OLB', 
        teamB: 'LA ROCHELLE', 
        date: '2023-12-25'
      },
      {
        type: 'sport', 
        sport: 'foot', 
        teamA: 'USO', 
        teamB: 'PSG', 
        date: '2024-01-10'
      },
      {
        type: 'concert', 
        artist: 'Machin', 
        date: '2024-01-10'
      },
    ];

eventClass = new EventFactory(events)
list = eventClass.getLstEvents()
listStr = []

for(let i = 0 ; i < list.length ; i ++) {
    listStr.push(list[i].rendu());
}

const ul = document.getElementById("list_events");

listStr.forEach(texte => {
    let li = document.createElement("li");
    li.textContent = texte;
    ul.appendChild(li);
});