import fs from 'fs' 
import path from 'path'   
import getDBSearch from '../../client/common/getDBSearch'
import util from '../../client/shared/utils'


async function add(ctx) { 
 	  
  	let _body = ctx.request.body
 
	let sqlstr = "INSERT INTO `screenDB`.`mession` (`user_id`, `name`, `is_allow`)"+
				"VALUES ('"+ctx.cookies.get('user_id')+"', '"+_body.messionName+"' , '0');"

	await getDBSearch.searchData(sqlstr)
 

	let sqlstr1 = "INSERT INTO `screenDB`.`mession_time_list` (`mession_id`, `execute_start_time`, `execute_end_time`)"+
				"select (SELECT max(id) ID FROM screenDB.mession where user_id = '"+ctx.cookies.get('user_id')+"'),'"+_body.startTime+"' , '"+_body.endTime+"'"

 
  
 	ctx.body  = await getDBSearch.searchData(sqlstr1) 
  
 
   
}

export default {add}
