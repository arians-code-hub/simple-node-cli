"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../../class/Command");
class basic extends Command_1.Command {
    index(args) {
        console.log('index of basic! ', args);
    }
}
exports.default = basic;