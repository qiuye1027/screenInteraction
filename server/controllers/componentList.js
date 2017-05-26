 
import getDBSearch from '../../client/common/getDBSearch'
 

async function list(ctx) { 
   let _body = ctx.request.body,
  id = _body.id

 
	let sqlstr = "SELECT * FROM screenDB.program_style where  program_id = "+id+";"

	let arrdata = await getDBSearch.searchData(sqlstr)
 
 	ctx.body  = arrdata
   
}

export default {list}
