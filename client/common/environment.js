 

function getDBAdress(){
 
    return  {
		 host: 'localhost',
		 database:  'screenDB',
		 protocol: 'mysql',
		 port: '3306',
		 query: {pool: true},
		 user: 'root',
		 password: '123456'
		}; 
}

export default {getDBAdress} 

