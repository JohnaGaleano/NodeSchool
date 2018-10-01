var fs = require('fs')
var bf = fs.readFileSync(process.argv[2])
var str = bf.toString()
var res = str.split('')
var lin = 0
for (var index in res) {
    if (res[index] == '\n') {
        lin += 1
    }
}
console.log(lin)