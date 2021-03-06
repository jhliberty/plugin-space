var S = require('string')
var c = require('chalk')

var _module = () => {

  var header = _ => {
    console.log("Use (⌘ +double click) to open links on OSX");
  }

  var tablify = _ => {
    var n = `${_.name}@${_['dist-tags'].latest}`
    console.log(`${c.bold(S(n).padRight(25).s)}: ${_.description} - ${c.blue.underline("https://www.npmjs.com/package/"+_.name+"#short-help")}`);
  }

  return {
    tablify: tablify,
    header: header
  }
}

module.exports = _module()
