'use strict';

const EventEmitter = require('events');
const fs = require('fs');
const path = require("path");

class Welcome extends EventEmitter {
    constructor () {
        super();
        this.message = 'This is a new student!';
    }
    visit() {
    //     console.log(this.message);
        // this.emit('newStudent', 'Demo');
        setInterval(()=> this.emit("count"), 1000);

        for (let i=10;i>20;i++) {
            console.log("fuck");
            this.emit('count', i);
        }
        // this.emit('count', this.message);
    }
}

const student = new Welcome();

student.on('count', function (name) {
    console.log(name);
});

student.visit();

// const readable = fs.createReadStream(path.join(__dirname, 'text.txt'), {encoding: 'utf-8', highWatermark: 16*1024});
// const writable = fs.createWriteStream(path.join(__dirname, 'dest.txt'));
//
// readable.on('data', function (chunk) {
//    console.log(chunk.length);
//    writable.write(chunk);
// });
