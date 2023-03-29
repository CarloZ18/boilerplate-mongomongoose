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
  newPerson.save((err, data) => {
    err ? console.error(err) : console.log(`${data.name} saved to database`);
    done(null, data);
  });
};

//Use model.create() para añadir varios datos a la vez

let arrayOfPeople = [
  {
    name: "Grisell Lopez",
    age: 21,
    favoriteFoods: ["Cachapa", "Mandocas", "Pasticho"],
  },
  {
    name: "Freddy Sojo",
    age: 21,
    favoriteFoods: ["Empanada", "Arepa", "Sushi"],
  },
  {
    name: "Carlos Mata",
    age: 21,
    favoriteFoods: ["Pizza", "Hamburguesa", "Parrilla"],
  },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    err ? console.error(err) : console.log(`${data.name} saved to database`);
    done(null, data);
  });
};

//Use model.find() para buscar en su base de datos todos los documentos que coinciden

let personName=/^(freddy)/i //Personas cuyo apellido es Sojo

const findPeopleByName = (personName, done) => {
  Person.find({name:personName},(err,data)=>{
    err ? console.error(err) : console.log(`${data.name} finded to database`);
   done(null, data);
 })
};

//Use model.findOne() para devolver un único documento coincidente de su base de datos

let food=/parrilla/i

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food},(err,data)=>{
    err ? console.error(err) : console.log(`${data.name} finded to database`);
   done(null, data);
 })
}

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
