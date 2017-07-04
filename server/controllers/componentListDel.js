 
import getDBSearch from '../../client/common/getDBSearch'
 

async function del(ctx) { 
   let _body = ctx.request.body,
  id = _body.id

 
	let sqlstr = "DELETE FROM `screenDB`.`program` WHERE `id`='"+id+"';"

	let sqlstr2 = "DELETE FROM `screenDB`.`program_style` WHERE `program_id`='"+id+"';"
	console.log(sqlstr2)


	let arrdata = await getDBSearch.searchData(sqlstr)
	await getDBSearch.searchData(sqlstr2)
 
 	ctx.body  =  {res_code:1,res_msg:'deleted'}  
   
}

export default {del}
