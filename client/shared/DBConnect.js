var orm 
let co = require("co"); 
import env from '../common/environment'

 
var _data;
async function getUser(){


	orm.connect("mysql://root:qiuye3788@localhost/screenDB", function (err, db) {
		console.log(db)
	})


 
	// var conf = env.getDBAdress()

	// var db = orm.connect(conf);
 
	// return new Promise((resolve, reject) => {

	// 	db.driver.execQuery("SELECT * FROM user ",function (err, data) {
  
	// 	 	resolve(data.length) 

	// 	 	db.close()
	// 	}) 
 
	  
	//   });
 
 
}
 
export default {
   getUser
}