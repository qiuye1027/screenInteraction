import fs from 'fs' 
import path from 'path'   
import getDBSearch from '../../client/common/getDBSearch'
import util from '../../client/shared/utils'


async function save(ctx) { 
 	ctx.cookies.set('user_id','0') 

  
  let _body = ctx.request.body,
  name = _body.name,
  height = _body.height,
  width = _body.width

   
	let sqlstr = "INSERT INTO `screenDB`.`program` (`user_id`, `name`, `height`, `width`)"+
				"VALUES ('"+ctx.cookies.get('user_id')+"', '"+name+"', '"+height+"',  '"+width+"' );"

	await getDBSearch.searchData(sqlstr)

 let sqlstr1 = "SELECT max(id) ID FROM screenDB.program where user_id = '"+/*ctx.cookies.get('user_id')*/0+"';"
 
 
  







 ctx.body  = await getDBSearch.searchData(sqlstr1) 
   
}

export default {save}
