import fs from 'fs' 
import path from 'path'   
import getDBSearch from '../../client/common/getDBSearch'
import util from '../../client/shared/utils'


async function save(ctx) { 
 	  
  	let _body = ctx.request.body
 
	let sqlstr = "INSERT INTO `screenDB`.`program_style` (`user_id`, `style`, `program_id`,`type`)"+
				"VALUES ('"+ctx.cookies.get('user_id')+"', '"+JSON.stringify(_body)+"', '"+_body.ID+"' , '"+_body.type+"');"

	await getDBSearch.searchData(sqlstr)

  
 	ctx.body  = {res_code:1,res_msg:'saved'} 
   
}

export default {save}
