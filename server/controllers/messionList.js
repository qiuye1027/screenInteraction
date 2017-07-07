 
import getDBSearch from '../../client/common/getDBSearch'
 

async function list(ctx) { 
 	   
	let sqlstr = "SELECT id,name , is_allow FROM screenDB.mession where user_id='"+ ctx.cookies.get('user_id')+"';"
 
	let arrdata = await getDBSearch.searchData(sqlstr)
 
 	ctx.body  = arrdata 
   
}


async function detail(ctx) { 

	let id = ctx.request.body.messionId
 	   
 	let sqlstr = "SELECT execute_start_time, execute_end_time  FROM screenDB.mession_time_list where mession_id='"+id+"';"
 
	let arrdata = await getDBSearch.searchData(sqlstr)
 
 	ctx.body  = arrdata 
   
}

async function update(ctx) { 
  
	let _data = ctx.request.body
  
 	   
 	let sqlstr = "UPDATE `screenDB`.`mession_time_list` SET `execute_start_time`='"+_data.startTime+"', `execute_end_time`='"+_data.endTime+"' WHERE `id`='"+_data.messionId+"';"
 
	let arrdata = await getDBSearch.searchData(sqlstr)
 
 	ctx.body  = arrdata 
   
}

export default {list,detail,update}
