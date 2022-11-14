//Module Demo
//Common JS , every file is module(by default)
//Modules : enscapsulated code (only share minimum)

const name = require('./4-firstmodule')
const show = require('./5-utils')

console.log(name)

show(name.john)
show(name.robin)
show('susan')

//alternative 
const data = require('./6-alternative-flavour')
console.log(data)
show(data.singlePerson.name)

require('./7-mind-granade')