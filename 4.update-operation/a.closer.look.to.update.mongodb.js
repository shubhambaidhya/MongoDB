use("kec-crud");

//? $set

// db.scores.updateOne(
//   { name: "Subham" },
//   {
//     $set: {
//       name: "Rajan",
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       age: 21,
//     },
//   }
// );

// ? $unset => removes that field

// db.scores.updateOne(
//   {
//     name: "Rajan",
//   },
//   {
//     $unset: {
//       age: "", //removes field value matlab gardaina
//     },
//   }
// );

//? update age of Rajan to 39
//? update age of Suyasha to 40

// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $set: {
//       age: 39,
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $set: {
//       age: 40,
//     },
//   }
// );

// ? $inc => increases field's value by provided value

// db.scores.updateMany(
//   {},
//   {
//     $inc: {
//       age: 5,
//     },
//   }
// );

// db.scores.insertOne({
//   name: "Smarika",
//   scores: [42, 65, 88],
//   points: [
//     {
//       sub: "Social",
//       point: 67,
//     },
//     {
//       sub: "Science",
//       point: 89,
//     },
//   ],
//   age: 30,
// });

// db.scores.updateMany(
//   { name: "Smarika" },
//   {
//     $inc: {
//       age: -10,
//     },
//   }
// );

//? $mul => multiply

// db.scores.updateOne(
//   { _id: ObjectId("6682997487284e3ad3ba6c65") },
//   {
//     $mul: {
//       age: -8,
//     },
//   }
// );

//? divide age of Suyasha by 2

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $mul: {
//       age: 1 / 2,
//     },
//   }
// );

// ? $rename => renames field
// db.scores.updateMany(
//   {},
//   {
//     $rename: {
//       scores: "marks",
//     },
//   }
// );

// ? $min, $max

// ? $min => sif field value is less than specified value, it sets min value to the field's value
// ? $max => if field value is less than specified value, it sets min value to the field's value

// db.scores.updateMany(
//   {},
//   {
//     $max: {
//       age: 10,
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       luckyThings: {
//         number: 7,
//         color: "green",
//       },
//     },
//   }
// );

// ? update lucky color of Suyasha "Blue"
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $set: {
//       "luckyThings.color": "blue",
//     },
//   }
// );

//? update lucky number of Smarika to 8

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $set: {
//       "luckyThings.number": 8,
//     },
//   }
// );

//? increase lucky number of Rajan by 3
db.scores.updateOne(
  { name: "Rajan" },
  {
    $inc: {
      "luckyThings.number": 3,
    },
  }
);

// db.scores.find();
