const {db, find, insert, update} = require('./mongoLib')
const fetch = require('node-fetch')

const getArtists = () => {
  return find(db.artists, {});
}

const getVoteOptions = () => {
  return find(db.voteoptions, {});
}

const addUserIfNotExists = (user) => {
  return find(db.users, {'id': user}).then(result => {
    return new Promise((resolve, reject) => {
      if (result.length === 0) {
        return insert(db.users, {
            'id': user,
            'countries': []
        })
          .then(result => resolve(result))
          .catch(err => reject(err));
      } else {
        resolve();
      }
    });
  });
};

const countryIsInList = (country, list) => {
  return list
    .filter(v => v && v.id && v.id === country)
    .length > 0
}

const addCountryIfNotExists = (user, country) => {
  // TODO: add countries.id here as well, and remove countryIsInList
  return find(db.users, {id: user}).then(result => {
    return new Promise((resolve, reject) => {
      if (!countryIsInList(country, result[0].countries)) {
        update(db.users, {
          id: user
        }, {
          '$push': {
            'countries': {
              'id': country
            }
          }
        }, {})
          .then(result => resolve(result))
          .catch(err => reject(err));
      }
    });
  });
}

const updateOption = (user, country, option, rating) => {
  // Todo: Should maybe not return?
  return new Promise((resolve, reject) => {
    let setQuery = {};
    setQuery['countries.$.' + option] = rating;
    setTimeout(() => {
      console.log("doing the next update");
      update(db.users, {
        'id': user,
        'countries.id': country
      }, {
        '$set': setQuery
      }, {})
        .then(result => resolve(result))
        .catch(err => reject(err));
    }, 5000);
    // TODO: FIX!
  });
}

const vote = info => {
  return addUserIfNotExists(info.user)
    .then(addCountryIfNotExists(info.user, info.country))
    .then(updateOption(info.user, info.country, info.option, info.rating))
}

const countPointsForArtists = users => {
  countriesPoints = {}
  users.forEach(user => {
    if (!user.countries) {
      return;
    }
    user
      .countries
      .forEach(country => {
        if (!(country.id in countriesPoints)) {
          countriesPoints[country.id] = 0
        }
        for (key of Object.keys(country).filter(k => k !== 'id')) {
          countriesPoints[country.id] += Math.min(country[key], 10);
        }
      });
  })
  return countriesPoints;
}

// TODO
const fetchArtistsVotes = () => {
  return new Promise((resolve, reject) => {
    find(db.users).then(users => {
      countriesPoints = countPointsForArtists(users);
      resolve(countriesPoints);
    }).catch(reject);
  })
}

module.exports = {
  getArtists,
  getVoteOptions,
  vote,
  fetchArtistsVotes
}

const artists = [
  {
    "draw": 1,
    "country": "Ukraina",
    "name": "Mélovin",
    "song": "«Under the Ladder»",
    "norskOversettelse": "Under stigen",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 2,
    "country": "Spania",
    "name": "Alfred og Amaia",
    "song": "«Tu canción»",
    "norskOversettelse": "Din sang",
    "language": "Spansk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 3,
    "country": "Slovenia",
    "name": "Lea Sirk",
    "song": "«Hvala, ne!»",
    "norskOversettelse": "Takk, nei!",
    "language": "Slovensk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 4,
    "country": "Litauen",
    "name": "Ieva Zasimauskaitė",
    "song": "«When We're Old»",
    "norskOversettelse": "Når vi blir gamle",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 5,
    "country": "Østerrike",
    "name": "Cesár Sampson",
    "song": "«Nobody but You»",
    "norskOversettelse": "Ingen andre enn deg",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 6,
    "country": "Estland",
    "name": "Elina Netsjajeva",
    "song": "«La forza»",
    "norskOversettelse": "Kraften",
    "language": "Italiensk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 7,
    "country": "Norge",
    "name": "Alexander Rybak",
    "song": "«That's How You Write a Song»",
    "norskOversettelse": "Det er sånn du skriver en sang",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 8,
    "country": "Portugal",
    "name": "Cláudia Pascoal",
    "song": "«O jardim»",
    "norskOversettelse": "Hagen",
    "language": "Portugisisk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 9,
    "country": "Storbritannia",
    "name": "SuRie",
    "song": "«Storm»",
    "norskOversettelse": "Storm",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 10,
    "country": "Serbia",
    "name": "Sanja Ilić og Balkanika",
    "song": "«Nova deca» (Нова деца)",
    "norskOversettelse": "Nye barn",
    "language": "Serbisk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 11,
    "country": "Tyskland",
    "name": "Michael Schulte",
    "song": "«You Let Me Walk Alone»",
    "norskOversettelse": "Du lot meg gå alene",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 12,
    "country": "Albania",
    "name": "Eugent Bushpepa",
    "song": "«Mall»",
    "norskOversettelse": "Lengsel",
    "language": "Albansk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 13,
    "country": "Frankrike",
    "name": "Madame Monsieur",
    "song": "«Mercy»",
    "norskOversettelse": "– (refererer til en person)",
    "language": "Fransk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 14,
    "country": "Tsjekkia",
    "name": "Mikolas Josef",
    "song": "«Lie to Me»",
    "norskOversettelse": "Lyv til meg",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 15,
    "country": "Danmark",
    "name": "Rasmussen",
    "song": "«Higher Ground»",
    "norskOversettelse": "Høyere grunn",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 16,
    "country": "Australia",
    "name": "Jessica Mauboy",
    "song": "«We Got Love»",
    "norskOversettelse": "Vi har kjærlighet",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 17,
    "country": "Finland",
    "name": "Saara Aalto",
    "song": "«Monsters»",
    "norskOversettelse": "Monstre",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 18,
    "country": "Bulgaria",
    "name": "Equinox",
    "song": "«Bones»",
    "norskOversettelse": "Bein",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 19,
    "country": "Moldova",
    "name": "DoReDoS",
    "song": "«My Lucky Day»",
    "norskOversettelse": "Min lykkedag",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 20,
    "country": "Sverige",
    "name": "Benjamin Ingrosso",
    "song": "«Dance You Off»",
    "norskOversettelse": "Danse deg bort",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 21,
    "country": "Ungarn",
    "name": "AWS",
    "song": "«Viszlát nyár»",
    "norskOversettelse": "Farvel, sommer",
    "language": "Ungarsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 22,
    "country": "Israel",
    "name": "Netta",
    "song": "«Toy»",
    "norskOversettelse": "Leketøy",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 23,
    "country": "Nederland",
    "name": "Waylon",
    "song": "«Outlaw in 'Em»",
    "norskOversettelse": "Lovløst i seg",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 24,
    "country": "Irland",
    "name": "Ryan O'Shaughnessy",
    "song": "«Together»",
    "norskOversettelse": "Sammen",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 25,
    "country": "Kypros",
    "name": "Eleni Foureira",
    "song": "«Fuego»",
    "norskOversettelse": "Ild",
    "language": "Engelsk",
    "Plass": "",
    "Poeng": ""
  }, {
    "draw": 26,
    "country": "Italia",
    "name": "Ermal Meta og Fabrizio Moro",
    "song": "«Non mi avete fatto niente»",
    "norskOversettelse": "Dere gjorde meg ingenting",
    "language": "Italiensk",
    "Plass": "",
    "Poeng": ""
  }
]

/*
artists.forEach(artist => {
  insert(db.artists, {
    draw: artist.draw,
    country: artist.country,
    name: artist.name,
    song: artist.song
  });
})*/
/*
find(db.artists).then(artists => {
  artists.forEach(artist => {
    if (artist.abbr) {
      update(db.artists, {
        song: artist.song
      }, {
        '$set': {
          abbr: artist.abbr
        }
      }, {multi: true});
    }
  })
});
*/