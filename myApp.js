require("dotenv").config();
const mongoose = require("mongoose");

//Conectarme a la base de datos de mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Crear y asignar un modelo
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

let Person = mongoose.model("Person", personSchema);

//Crear y guardar un registro de un modelo
const createAndSavePerson = (done) => {
  const newPerson = new Person({
    name: "Will Riker",
    age: 21,
    favoriteFoods: ["Cachapa", "Mandocas", "Pasticho"],
  });
  newPerson.save(function (err, data) {
    err ? console.error(err) : console.log(`${data.name} saved to database`);
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  const manyPeople = new Person.create(arrayOfPeople).save(function (
    err,
    data
  ) {
    err ? console.error(err) : console.log(`${data.name} saved to database`);
    done(null, data);
  });
  done(null, manyPeople);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
