// ? $lookup
// ? to query between collections

use("kec-crud");

// db.person.insertMany([
//   {
//     firstName: "Rohan",
//     lastName: "Bhandari",
//     address: "Sydney",
//   },
//   {
//     firstName: "Rohil",
//     lastName: "Khadka",
//     address: "Udaypur",
//   },
//   {
//     firstName: "Enish",
//     lastName: "Shrestha",
//     address: "Kathmandu",
//   },
// ]);

// db.vehicle.insertMany([
//   {
//     model: "X",
//     brand: "Tesla",
//     builtYear: 2021,
//     ownerId: ObjectId("668bb974e30e19831fa80c0a"),
//   },
//   {
//     model: "Mustang",
//     brand: "Ford",
//     builtYear: 2023,
//     ownerId: ObjectId("668bb974e30e19831fa80c0b"),
//   },
//   {
//     model: "Creta",
//     brand: "Hyundai",
//     builtYear: 2023,
//     ownerId: ObjectId("668bb974e30e19831fa80c0c"),
//   },
// ]);

// db.vehicle.aggregate([
//   {
//     $match: {
//       model: "Mustang",
//     },
//   },
//   {
//     $lookup: {
//       from: "person",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFirstName: { $first: "$ownerDetails.firstName" },
//       ownerLastName: { $first: "$ownerDetails.lastName" },
//     },
//   },
// ]);

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
//   {
//     $lookup: {
//       from: "vehicle",
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vehicleDetails",
//     },
//   },
//   {
//     $project: {
//       firstName: 1,
//       lastName: 1,
//       carDetails: {
//         model: { $arrayElemAt: ["$vehicleDetails.model", 0] },
//         brand: { $arrayElemAt: ["$vehicleDetails.brand", 0] },
//       },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: { $concat: ["$firstName", " ", "$lastName"] },
//       vehicle: { $concat: ["$model", " ", "$brand"] },
//     },
//   },
// ]);

// db.vehicle.insertOne({
//   model: "Y",
//   brand: "Tesla",
//   builtYear: 2020,
//   ownerId: ObjectId("668bb974e30e19831fa80c0c"),
// });
// db.vehicle.find();

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
//   {
//     $lookup: {
//       from: "vehicle",
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vehicleData",
//     },
//   },

//   {
//     $project: {
//       firstName: 1,
//       lastName: 1,
//   "vehicleData.model": 1,
//   "vehicleData.brand": 1,

//       model1: { $arrayElemAt: ["$vehicleData.model", 0] },
//       brand1: { $arrayElemAt: ["$vehicleData.brand", 0] },

//       model2: { $arrayElemAt: ["$vehicleData.model", 1] },
//       brand2: { $arrayElemAt: ["$vehicleData.brand", 1] },
//     },
//   },
//   {
//     $project: {
//       name: { $concat: ["$firstName", " ", "$lastName"] },
//       vehicle1: { $concat: ["$brand1", " ", "$model1"] },
//       vehicle2: { $concat: ["$brand2", " ", "$model2"] },
//     },
//   },
// ]);
