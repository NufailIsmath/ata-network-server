const mongoose = require("mongoose");

const metaTxSchema = mongoose.Schema({
    transfers: [{
        tokenAddress: String,
        recipient: String,
        amount: String
    }],
    signR: {
        type: String,
        required: true,
        default: "",
    },
    signS: {
        type: String,
        required: true,
        default: "",
    },
    signV: {
        type: Number,
        required: true,
        default: 0,
    },
    metaTx: {
        from: {
            type: String,
            required: true,
        },
        nonce: {
            type: Number,
            required: true,

        },
        relayer: {
            type: String,
            required: true,

        },
        functionSignature: {
            type: String,
            required: true,

        },
    },
    isExecuted: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});

// Model
const MetaTx = mongoose.model("MetaTx", metaTxSchema);

module.exports = MetaTx