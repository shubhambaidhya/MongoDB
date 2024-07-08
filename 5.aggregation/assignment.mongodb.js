use("kec-crud");

// ? Find movies whose status is "Ended
// db.movies.aggregate([
//   {
//     $match: { status: "Ended" },
//   },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//       status: 1,
//     },
//   },
// ]);

// ? Find movies whose rating is 9

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": 9,
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

// ? find movie whose rating is greater than 7 and
// ? less than 9

// db.movies.aggregate([
//   {
//     $match: {
//       $and: [
//         {
//           "rating.average": {
//             $gt: 7,
//             $lt: 9,
//           },
//         },
//       ],
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

// ? find movies whose genre is Thriller

// db.movies.aggregate([
//   {
//     $match: {
//       genres: "Thriller",
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//       genres: 1,
//     },
//   },
//   {
//     $sort: {
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// ? find movies whose status is "Running"

// db.movies.aggregate([
//   {
//     $match: {
//       status: "Running",
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//       status: 1,
//     },
//   },
//   {
//     $sort: {
//       id: -1,
//     },
//   },
// ]);

//? find movies whose status is Ended and runtime is 60
// db.movies.aggregate([
//   {
//     $match: {
//       $and: [
//         {
//           status: "Ended",
//           "network.country.name": "Canada",
//         },
//       ],
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//       network: 1,
//     },
//   },
// ]);

// ?find movies whose weight is 75 and network country is Canada
// db.movies.aggregate([
//   {
//     $match: {
//       $and: [
//         {
//           weight: 75,
//           "network.country.name": "Canada",
//         },
//       ],
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//       weight: 1,
//       network: 1,
//     },
//   },
// ]);

// ?find movies whose weight is 96 or runtime is 60
// db.movies.aggregate([
//   {
//     $match: {
//       $or: [
//         {
//           weight: 96,
//           runtime: 60,
//         },
//       ],
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       weight: 1,
//       runtime: 1,
//     },
//   },
//   {
//     $sort: {
//       name: 1,
//     },
//   },
// ]);

// ? find movies whose rating average is not 9
// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": {
//         $not: {
//           $eq: 9,
//         },
//       },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       rating: 1,
//     },
//   },
//   {
//     $sort: {
//       name: 1,
//     },
//   },
// ]);

// ? find movies whose rating averages is either 6 or 6.5 or
// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": {
//         $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8],
//       },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       rating: 1,
//     },
//   },
//   {
//     $limit: 46,
//   },
// ]);

// db.movies.find();
