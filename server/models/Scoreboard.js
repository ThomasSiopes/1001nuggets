const { Schema, model } = require("mongoose");

const option = new Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    }
});

const question = new Schema({
    text: {
        type: String,
        required: true,
    },
    choices: [
        {
            type: option,
        }
    ]
});

const scoreboard = new Schema({
    questions: [
        {
            type: question,
        }
    ],
    scores: [
        {
            name: {
                type: String,
                required: true,
            },
            value: {
                type: Number,
                required: true,
            },
            score: {
                type: Number,
                required: true,
            }
        }
    ]
});

const Scoreboard = model("Scoreboard", scoreboard);

module.exports = Scoreboard;