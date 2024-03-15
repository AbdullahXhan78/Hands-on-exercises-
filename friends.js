"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var isFriend = await inquirer_1.default.prompt([{
        name: "name",
        type: "string",
        message: "Enter your Friend name: "
    }]);
if (isFriend.name === "Shakoor" || isFriend.name === "Firaun") {
    console.log("".concat(isFriend.name, " is your friend."));
}
else {
    console.log("".concat(isFriend.name, " is not your friend"));
}
