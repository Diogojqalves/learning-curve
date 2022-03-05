// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// alternative const { john, peter } = require('./04-names') 
// pass the module with the names data
const names = require('./04-names') 

// pass the module with the sayHi function
const sayHi = require('./05-utils') 

const data = require('./06-alternative-flavor')

// it works because its inside the module:
require('./07-mind-grenade')

//call the module function with the other module name data
sayHi('susan')
sayHi(names.john) //names module, john variable
sayHi(names.peter)
