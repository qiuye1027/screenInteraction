 
import getDBSearch from '../../client/common/getDBSearch'
 

async function del(ctx) { 
   let _body = ctx.request.body,
  id = _body.id

 console.log(ctx)
	let sqlstr = "DELETE FROM `screenDB`.`program` WHERE `id`='"+id+"';"

	let arrdata = await getDBSearch.searchData(sqlstr)
 
 	ctx.body  =  {res_code:1,res_msg:'deleted'}  
   
}

export default {del}
