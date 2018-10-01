//Reading and Filtering Directory
var fs = require('fs')
var path = require('path')

/* var route = process.argv[2]
var extension = process.argv[3] */
module.exports = filteredls = (route, ext, callback) => {
    let lista = []
        //console.log(lista);
    fs.readdir(route, function(err, list) {
        if (err) {
            return callback(err)
        }
        for (let i of list) {
            let extn = path.extname(i)
            let a = extn.split('.')
            if (a[1] === ext) {
                //console.log(i)
                lista.push(i)
            }
        }
        callback(null, lista)
    })

}