import fs from 'fs' 
import path from 'path'   
import getDBSearch from '../../client/common/getDBSearch'
import util from '../../client/shared/utils'


async function save(ctx) { 
 	  
  	let _body = ctx.request.body
 
	let sqlstr =  "UPDATE `screenDB`.`program_style` SET `type`='"+_body.type+"', `position`='"+JSON.stringify(_body)+"' WHERE `id`='1';"




	await getDBSearch.searchData(sqlstr)

  
 	ctx.body  = {res_code:1,res_msg:'saved'}
   
}

export default {save}
