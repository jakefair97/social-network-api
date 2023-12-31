const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: format,
        },
        username: {
            type: String,
            requred: true,
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
          getters: true,
          virtuals: true,
        },
        id: false,
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function() {return this.reactions.length})

function format(createdAt) {
    return createdAt.toLocaleString();
}

const Thought = model('thought', thoughtSchema);

module.exports = Thought;