 
import getDBSearch from '../../client/common/getDBSearch'
 

async function list(ctx) { 
 	   
	let sqlstr = "SELECT * FROM screenDB.program ;"

	let arrdata = await getDBSearch.searchData(sqlstr)
 
 	ctx.body  = arrdata
   
}

export default {list}
