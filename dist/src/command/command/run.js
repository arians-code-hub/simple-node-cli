"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../class/Command");
const node_child_process_1 = require("node:child_process");
const Object_1 = require("../../lib/Object");
const args_1 = require("../../helper/args");
const path_1 = require("../../helper/path");
class run extends Command_1.Command {
    index(props) {
        var _a, _b;
        const current = (0, node_child_process_1.execSync)(`pwd`).toString();
        if (props['!build']) {
            console.log('building..............');
            const built = (0, node_child_process_1.execSync)(`cd ${(_a = props['!path']) !== null && _a !== void 0 ? _a : 'command'} && npm run build`);
            console.log('built...', built.toString());
            console.log('-------------------');
        }
        console.log('running...');
        const runned = (0, node_child_process_1.execSync)(`cd ${(0, path_1.basePath)()} && node ${(_b = props["!path"]) !== null && _b !== void 0 ? _b : 'command'}/dist/index.js ${props["!command"]} ${(0, args_1.argsToStr)((0, Object_1.gatherExcept)(props, ['!build', '!path', '!command']))}`);
        console.log(runned.toString());
        console.log('-------------------');
    }
}
exports.default = run;
