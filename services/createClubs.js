const { club } = require("../entities/class-club");
const createClubs = (classCLub, listOfClubs) => {
  return listOfClubs.map(
    (club) =>
      new classCLub(
        club.id,
        club.area,
        club.name,
        club.shortName,
        club.tla,
        club.crestUrl,
        club.address,
        club.phone,
        club.website,
        club.email,
        club.founded,
        club.clubColors,
        club.venue,
        club.lastUpdated
      )
  );
};

const createClub = (id, classCLub, listOfClubs) => {
  const club = listOfClubs.filter((club) => club.id === id)[0];
  return new classCLub(club);
};

module.exports = { createClub, createClubs };
