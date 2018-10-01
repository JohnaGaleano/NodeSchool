//Reading and Filtering Directory
var fs = require('fs')
var path = require('path')

filteredls = () => {
    var route = process.argv[2]
    var extension = process.argv[3]
    let ext

    fs.readdir(route, function(err, list) {
        if (err) {
            return console.log(err)
        }
        for (let i in list) {
            //console.log(i + list[i])
            ext = path.extname(list[i])
            let a = ext.split('.')
            if (a[1] === extension) {
                console.log(list[i])
            }
        }
    })
}
module.exports = filteredls