const { Schema, model } = require("mongoose");

const topicSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    sortedName: {
        type: String, 
        required: true
    },
    realID: {
        type: String,
        required: true
    },
    similarTopics: [
        {
            type: String
        },
    ],
    quotes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Quote",
        },
    ],
});

const Topic = model("Topic", topicSchema);

module.exports = Topic;