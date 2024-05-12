"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../class/Command");
const File_1 = require("../lib/File");
class json extends Command_1.Command {
    index() {
        console.log('Json index command.');
    }
    read(props) {
        let obj = File_1.File.readJson({ path: props.src });
        if (props.key) {
            if (typeof props.key === 'string' && !!props.key)
                obj = obj[props.key];
            else if (Array.isArray(props.key) && props.key.length)
                for (let k of props.key)
                    obj = obj[k];
        }
        return obj;
    }
    copy(props) {
        File_1.File.create({
            path: props.dst,
            data: JSON.stringify(this.read(props)),
        });
    }
    toJs(props) {
        File_1.File.create({
            path: props.dst,
            data: `exports.default = ${JSON.stringify(this.read(props))}`,
        });
    }
    toTs(props) {
        File_1.File.create({
            path: props.dst,
            data: `export default ${JSON.stringify(this.read(props))}`,
        });
    }
}
exports.default = json;