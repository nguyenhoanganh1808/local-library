const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchmea = new Schema({
  name: { type: String, require: true, minLength: 3, maxLength: 100 },
});

GenreSchmea.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", GenreSchmea);
