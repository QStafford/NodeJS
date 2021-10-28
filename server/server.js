var path = require('path')
var fs = require('fs')

var chirps = path.join(__dirname, '../chirps.json')
var reddit = path.join(__dirname, "../reddit.js")

fs.readFile(chirps, {
    encoding: "UTF-8"
}, (err, data) => {
    console.log(data);
})

const request = require("request");

request('https://reddit.com/r/popular.json'), (err, res, body) => {
    if (err) console.log(err);
    console.log(res)

    fs.writeFile(reddit, res.body, err => {
        if(err) console.log(err)
    })

}