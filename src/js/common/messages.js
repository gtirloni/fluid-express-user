// TODO: Discuss improving these functions and/or making a general pattern to handle this in gpii-json-schema.
/* globals require */
(function (fluid) {
    "use strict";
    if (!fluid) {
        fluid = require("infusion");
    }

    if (fluid.require) {
        require("./globalOrLiteral.js");
    }

    var gpii = fluid.registerNamespace("gpii");
    fluid.registerNamespace("gpii.express.user.messages");
    /**
     *
     * Merge one or more message bundles.
     *
     * @param {Array<String|Object>} messageArray - An array of message bundles represented as raw objects or as global variable names.
     * @return {Object} - An object representing the result of merging all message bundles in order.
     *
     */
    gpii.express.user.messages.mergeMessages = function (messageArray) {
        var expandedArgs = fluid.transform(messageArray, gpii.express.user.globalOrLiteral);
        expandedArgs.unshift({});
        return fluid.merge.apply(null, expandedArgs);
    };

    gpii.express.user.messages.validation = {
        "gpii.express.user.email": "You must provide a valid email address.",
        "gpii.express.user.username": "Username must be a non-empty string.",
        "gpii.express.user.password.length": "The password must be at least 8 characters long.",
        "gpii.express.user.password.uppercase": "The password must have at least one uppercase letter.",
        "gpii.express.user.password.lowercase": "The password must have at least one lowercase letter.",
        "gpii.express.user.password.complexity": "The password must have at least one number or special character.",
        "gpii.express.user.username.or.email.required": "You must provide a valid username or email address.",
        "gpii.express.user.password.required": "You must enter a password.",
        "gpii.express.user.reset.code.required": "You must provide a valid reset code.",
        "gpii.express.user.reset.code.invalid": "The reset code you provided is invalid.",
        "gpii.express.user.reset.code.expired": "Your reset code is too old.  Please request another one.",
        "gpii.express.user.reset.password.mismatch": "The password and confirmation password must match.",
        "gpii.express.user.reset.success": "Your password has been reset."
    };
})(fluid);
