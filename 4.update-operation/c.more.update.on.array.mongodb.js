use("kec-crud");

// ? $ operator
// ? $ => element which matches the document
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Maths" },
//   { $set: { "points.$.sub": "Statistics" } }
// );

// ? update sub from "C++" to "MERN" and point to "69" from smarika's document

// db.scores.updateOne(
//   { _id: ObjectId("6682997487284e3ad3ba6c65"), "points.sub": "C++" },
//   {
//     $set: { "points.$.sub": "MERN", "points.$.point": 69 },
//   }
// );

// ? update points to 70 for each sub of "Smarika"

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $set: {
//       "points.$[].point": 70, //[] rakhesi sabai subject lai target garcha
//     },
//   }
// );

//? to update point to 75 for each subject which has point below 70
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $set: {
//       "points.$[element].point": 75,
//     },
//   },
//   {
//     arrayFilters: [{ "element.point": { $lt: 80 } }],
//   }
// );

// ? decrease each marks of Rajan  by 10
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $inc: {
//       "marks.$[]": -10,
//     },
//   }
// );
// ? set 57 marks to 77 to Suyasha's marks

// db.scores.updateOne(
//   { name: "Suyasha", marks: 57 },
//   {
//     $set: {
//       "marks.$": 77,
//     },
//   }
// );

// ? decrease each marks which are greater than 80 by 10 marks for "Smarika"
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $inc: {
//       "marks.$[element]": -10,
//     },
//   },
//   {
//     arrayFilters: [{ element: { gt: 80 } }],
//   }
// );

// db.scores.find();
