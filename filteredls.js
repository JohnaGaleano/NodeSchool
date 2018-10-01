var fs = require('fs')
var path = require('path')

var route = process.argv[2]
var extension = process.argv[3]
let ext
fs.readdir(route, function(err, list) {
    if (err) {
        return console.log(err)
    }
    for (let i of list) {
        //console.log(i + list[i])
        ext = path.extname(i)
        let a = ext.split('.')
        if (a[1] === extension) {
            console.log(i)
        }
    }
})