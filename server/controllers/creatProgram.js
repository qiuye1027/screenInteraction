import fs from 'fs' 
import path from 'path'   
import getDBSearch from '../../client/common/getDBSearch'
import util from '../../client/shared/utils'


async function save(ctx) { 
 	 

  
  let _body = ctx.request.body,
  name = _body.name,
  height = _body.height,
  width = _body.width,
  bgimg = _body.bgPath

   
	let sqlstr = "INSERT INTO `screenDB`.`program` (`user_id`, `name`, `height`, `width`,`bgimg`)"+
				"VALUES ('"+ctx.cookies.get('user_id')+"', '"+name+"', '"+height+"',  '"+width+"',  '"+bgimg+"' );"

	await getDBSearch.searchData(sqlstr)

 let sqlstr1 = "SELECT max(id) ID FROM screenDB.program where user_id = '"+ ctx.cookies.get('user_id')+"';"
 
  
 ctx.body  = await getDBSearch.searchData(sqlstr1) 
   
}

export default {save}
