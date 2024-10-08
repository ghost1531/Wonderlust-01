const mongoose = require("mongoose");
const initData = require("./data.js")
const Listing = require("../models/listing.js");

const mongoUrl = "mongodb://127.0.0.1:27017/wonderhomes"

main()
    .then(() => {
        console.log("Connect to Database.");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(mongoUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data is intialized.");
};

initDB();