use("kec-crud");

//to insert data
// ? insertOne
// ? insertMany

// db.student.insertOne({
//   name: "Unik",
//   address: "Imadol",
// });

// db.student.insertOne({
//   _id: 101,
//   name: "Smarika",
//   address: "Imadol",
// });

// //? insertMany ma object dekhi haina array bata suru huncha and array bhitra balla object
// db.student.insertMany([
//   {
//     name: "Samundra",
//     address: "Dhapakhel",
//   },
//   {
//     name: "Prashant",
//     address: "Swayambhu",
//   },
// ]);

//* read operation
//? read operation
//? findOne
//? find
// db.student.find();

// db.student.find({}); //{_conditon_}

// db.student.find({ address: "Imadol" });

// db.student.findOne({ name: "Samundra" });

// db.student.findOne({ address: "Imadol" });//first ma jasko cha tei find huncha DB ma i.e unik first ma cha rather than smarika wala info

// db.student.findOne({ _id: 101 });

// db.student.find({ _id: ObjectId("667e98287305200224a7a4ea") });

//? delete => remove data
//? deleteOne
//? deleteMany

// db.student.deleteOne({ address: "Dhapakhel" });

// db.student.deleteOne({ address: "Swayambhu" });

// db.student.deleteMany({ address: "Imadol" });

//? update => to change field data
//? updateOne
//?updateMany

// db.student.updateOne(
//   {
//     name: "Samundra",
//   },
//   {
//     $set: {
//       name: "Siddhant",
//     },
//   }
// );

// db.student.updateMany(
//   { address: "Dhapakhel" },
//   {
//     $set: {
//       address: "Nakipot",
//     },
//   }
// );

// db.student.updateOne(
//   { name: "Saugat" },
//   {
//     $set: {
//       address: "Tikathali",
//     },
//   },
//   {
//     upsert: true,
//   }
// );

// db.student.find();
