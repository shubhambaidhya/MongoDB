// ?$unwind

// ? unwind => undo or be undone after winding or being wounded

// db.product.insertOne({
//   name: "Bottle",
//   price: 400,
//   availableColor: ["blue", "white", "green"],
// });

// db.product.find();

// db.product.aggregate([
//   {
//     $match: {},
//   },
//   { $unwind: "$availableColor" },
// ]);

// db.learners.insertOne({
//   name: "Smriti",
//   scores: [
//     {
//       sub: "Computer Network",
//       marks: 68,
//     },
//     {
//       sub: "Project Management",
//       marks: 72,
//     },
//     {
//       sub: "Organization and Management",
//       marks: 58,
//     },
//   ],
// });

// db.learners.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $unwind: {
//       path: "$scores",
//     },
//   },
//   {
//     $sort: {
//       "scores.marks": -1,
//     },
//   },
// ]);

// ? find owner of Ford Mustang car
db.vehicle.find();
