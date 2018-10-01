var mymodule = require('./mymodule.js')

var route = process.argv[2]
var extension = process.argv[3]

mymodule(route, extension, (err, lista) => {

    if (err) {
        return console.log(err)
    }
    lista.forEach((archivo) => {
        console.log(archivo)
    })
})



//learn you node solution

/* var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
 */