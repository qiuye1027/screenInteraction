 
import getDBSearch from '../../client/common/getDBSearch'
 

async function list(ctx) { 
 	   
	let sqlstr = "SELECT * FROM screenDB.program where user_id='"+ ctx.cookies.get('user_id')+"';"

	let arrdata = await getDBSearch.searchData(sqlstr)
 
 	ctx.body  = arrdata
   
}

export default {list}
