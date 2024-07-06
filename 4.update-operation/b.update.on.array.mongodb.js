use("kec-crud");

// ? update on array

// ? $push
// ? add 92 on marks of Rajan

// db.scores.updateOne({ name: "Rajan" }, { $push: { marks: 92 } });

// ? add 87 and 93 to marks of Suyasha

// db.scores.updateOne(
//   { name: "Suyasha" },
//   { $push: { marks: { $each: [87, 93] } } }
// );

// ? $pop
// ? 1 => removes item from end of array
// ? -1 => removes item from start of array

// db.scores.updateOne({ name: "Suyasha" }, { $pop: { marks: 1 } });

//? $pull => removes item based upon condition

// db.scores.updateOne(
//   {
//     name: "Smarika",
//   },
//   {
//     $pull: { marks: { $lt: 70 } },
//   }
// );

// db.scores.updateOne(
//   {
//     name: "Smarika",
//   },
//   {
//     $pull: {
//       points: { sub: "Science" },
//     },
//   }
// );

// ? update subject of suyasha Science => Maths

// db.scores.updateOne(
//   {
//     name: "Suyasha",
//     "points.sub": "Science",
//   },
//   {
//     $set: {
//       "points.$.sub": "Maths",
//     },
//   }
// );

// ? pull item which has sub "Science" and marks less than 88 from Rajan's data

// db.scores.updateOne(
//   {
//     name: "Rajan",
//   },
//   {
//     $pull: {
//       points: { sub: "Science" },
//       marks: { $lt: 88 },
//     },
//   }
// );

// ? $pullAll
// ? we give concrete value which needs to be removed
// db.scores.updateOne(
//   { _id: ObjectId("66852047bc2a5fe2b0f5bab5") },
//   {
//     $pullAll: {
//       marks: [42, 65],
//     },
//   }
// );

// ? push 78,67,83 to the marks array of Rajan
//* $each
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $push: {
//       marks: { $each: [78, 67, 83] },
//     },
//   }
// );

// ? addToSet
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: {
//       marks: {
//         $each: [95, 83, 88, 52],
//       },
//     },
//   }
// );

//?..........................................................
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: {
//       points: { sub: "Social", point: 83 },
//     },
//   }
// );

// ? push an object with sub:Science and point:92 on Suyasha
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $push: {
//       points: { sub: "Science", point: 92 },
//     },
//   }
// );
// ? push 57,88,96 on Suyasha's marks such that no value is duplicated
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $addToSet: {
//       marks: { $each: [57, 88] },
//     },
//   }
// );
// ? change Rajan's lucky color to orange
// db.scores.updateOne(
//   { name: "Rajan" },
//   { $set: { "luckyThings.color": "Orange" } }
// );

// ? pull last item from Rajan's points

// db.scores.updateOne({ name: "Rajan" }, { $pop: { points: 1 } });

// ? decrease age of Smarika by 20
// db.scores.updateOne({ name: "Smarika" }, { $inc: { age: -20 } });

// ? push{sub:"C program",point:72} and {"C++",point:65} on Smarika's point
// db.scores.updateOne(
//   { _id: ObjectId("6682997487284e3ad3ba6c65") },
//   {
//     $push: {
//       points: {
//         $each: [
//           { sub: "C program", point: 72 },
//           { sub: "C++", point: 65 },
//         ],
//       },
//     },
//   }
// );
// db.scores.find();

// ? divide age of Rajan by 2
// db.scores.updateOne({ name: "Rajan" }, { $mul: { age: 1 / 2 } });
