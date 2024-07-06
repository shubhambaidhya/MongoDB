use("kec-crud");

// * array operators
// ? $all
// ? $elemMatch
// ? $size

// ? find movies whose genres includes both "Drama" and "Comedy"

// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Comedy" }] });

//? if same field ma $and lairacha ra tyo field chai array ho bhaney:
//? we can use $all

// db.movies.find({ genres: { $all: ["Drama", "Comedy"] } }); //including Drama and Comedy

// db.movies.find({ genres: ["Drama", "Comedy"] }); // aesma movies with Drama and Comedy only aauncha

// * $size => only applicable in array field
//? we cannot provide range to size
//? must provide concrete value

//? find movies whose genres size is 3
// db.movies.find({ genres: { $size: 3 } });
