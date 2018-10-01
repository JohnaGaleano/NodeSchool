//solution my way
var fs = require('fs')
let lines = 0

function read(callback) {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        var str = fileContents.toString()
        lines = str.split('\n').length - 1
        callback()
    })
}

function printLines() {
    console.log(lines)
}

read(printLines)



//solution learnyounode way
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function(err, contents) {
    if (err) {
        return console.log(err)
    }
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
})