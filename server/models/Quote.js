const { Schema, model } = require("mongoose");

const quoteSchema = new Schema({
    quoteText: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: false
    },
    topics: [
        {
            type: String,
        }
    ],
    realID: {
        type: String,
        required: true
    },
    collections: [
        {
            type: String,
        }
    ],
    nuggets: [
        {
            type: String,
        }
    ],
    somePeople: {
        type: Boolean,
        required: false
    }
});

const Quote = model("Quote", quoteSchema);

module.exports = Quote;