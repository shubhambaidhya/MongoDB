use("kec-crud");

// ? logical operator
// ? $and, $or,$not,$nor

// * $and
// ? find movies whose genre is action and rating is greater than 7

// db.movies.find({
//   $and: [{ genres: "Action" }, { "rating.average": { $gt: 7 } }],
// });

// equivalent code
// db.movies.find({ genres: "Action", "rating.average": { $gt: 7 } });

// * $or
// ? find movies whose genres is "Crime" or network country is "United States"

// db.movies.find({
//   $or: [{ genres: "Crime" }, { "network.country.name": "United States" }],
// });

// * $nor => all applied condition should not match
// ? find movies whose rating is neither greater than 7 nor genres is "Drama"

// db.movies.find({
//   $nor: [{ "rating.average": { $gt: 7 } }, { genres: "Drama" }],
// });
