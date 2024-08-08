const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image : { 
    filename: String,
    url: {
        type: String,
        default: "https://media.istockphoto.com/id/136917788/photo/xl-migrating-canada-geese.jpg?s=1024x1024&w=is&k=20&c=ZJaOWuC9MHrVA1s2ZShEQusWNsvUpUi4WF-nzpDCBeI=",
        set : (v) => v === "" ? "https://images.pexels.com/photos/17644421/pexels-photo-17644421/free-photo-of-seagulls-flying-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1": v,
    }
},
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type:Schema.Types.ObjectId,
      ref: "Review"
    }
  ]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;