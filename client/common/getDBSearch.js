var orm = require("orm");  
import env from '../common/environment'

 
 
async function searchData(sql){
 	console.log(sql)
	var conf = env.getDBAdress()
	var db = orm.connect(conf);
 
	return new Promise((resolve, reject) => {

		db.driver.execQuery(sql,function (err, data) {

			 
  
		 	resolve(data) 

		 	db.close()
		})  
	  
	  }); 
 
}

 
 
export default {
   searchData
}