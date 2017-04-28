 

function getDBAdress(){
 
    return  {
		 host: 'localhost',
		 database:  'screenDB',
		 protocol: 'mysql',
		 port: '3306',
		 query: {pool: true},
		 user: 'root',
		 password: 'qiuye3788'
		}; 
}

export default {getDBAdress} 

