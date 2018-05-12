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
        console.log(country);
        if (!(country.id in countriesPoints)) {
          countriesPoints[country.id] = 0
        }
        for (key of Object.keys(country).filter(k => k !== 'id')) {
          countriesPoints[country.id] += Math.max(country[key], 10);
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