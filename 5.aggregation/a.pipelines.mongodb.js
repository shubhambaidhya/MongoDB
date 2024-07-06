use("kec-crud");

// ? aggregation => powerful query tool
// ? uses pipeline stage
// ? $match
// ? $project
// ? $sort
// ? $skip
// ? $limit

// db.movies.aggregate([{ $match: { name: "Glee" } }]);

// db.movies.aggregate([
//   { $match: { genres: "Action", "rating.average": { $gt: 9 } } },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   },
// ]);

// ? find movies whose genres is "Crime" or network country is "United States"

// db.movies.aggregate([
//   {
//     $match: {
//       $or: [
//         {
//           genres: "Crime",
//         },
//         { "network.country": "United States" },
//       ],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       networkCountry: "$network.country.name",
//     },
//   },
// ]);

// ? find movies whose genres includes both "Drama"
// ? and "Comedy" and project "name" and "genre" field

// db.movies.aggregate([
//   {
//     $match: {
//       $and: [
//         {
//           genres: "Drama",
//           genres: "Comedy",
//         },
//       ],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

//? .........alternative way

// ? $all => $and wala case huna paryo and array field huna paryo
// db.movies.aggregate([
//   {
//     $match: {
//       genres: { $all: ["Drama", "Comedy"] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

// ? $sort => arranges the data in ascending or in descending order
// ? +1 => ascending sort
// ? -1 => descending sort

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: -1,
//       name: 1, // compound sort
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// db.movies.aggregate([
//   { $match: {} },
//   {
//     $sort: {
//       name: -1, //descending sort
//     },
//   },
//   {
//     $project: {
//       name: 1,
//     },
//   },
// ]);

// ? $limit => number of documents to be returned

// db.movies.insertOne({
//   id: 17,
//   name: "Money Heist",
// });

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $limit: 10, // maximum 10 ota deu bhanna khojya ho
//   },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// ? find movies  whose rating is greater than 8 and id is sorted in ascending order

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": {
//         $gt: 8,
//       },
//     },
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },

//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//       rating: 1,
//     },
//   },
// ]);
