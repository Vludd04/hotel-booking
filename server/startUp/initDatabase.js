const City = require("../models/City");
const Hotel = require("../models/Hotel");
const Room = require("../models/Room");
const cityMock = require("../mock/cities.json");
const roomsMock = require("../mock/rooms.json");
const hotelsMock = require("../mock/hotels.json");

module.exports = async () => {
  const cities = await City.find();
  if (cities.length !== cityMock.length) {
    await createInitialEntity(City, cityMock);
  }

  const hotels = await Hotel.find();
  if (hotels.length !== hotelsMock.length) {
    await createInitialEntity(Hotel, hotelsMock);
  }

  const rooms = await Room.find();
  if (rooms.length !== roomsMock.length) {
    await createInitialEntity(Room, roomsMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
