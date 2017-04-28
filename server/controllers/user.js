


var orm = require("orm"); 
 
 

async function getUserInfo(ctx) { 


var opts = {
    database: "screenDB",
    protocol: "mysql",
    host: "localhost",
    username: "root",
    password: "123456",
   
}

 
 
orm.connect(opts, function (err, db) {
		console.log(err)
	})


    ctx.body = {
        name: 'Chikara Chan',
        gender: 'male',
        age: 20
    }
}

export default {getUserInfo}
