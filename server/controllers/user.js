import getDBSearch from '../../client/common/getDBSearch'
 
async function getUserInfo(ctx) { 
 
 ctx.body  =  await getDBSearch.searchData("SELECT * FROM user")
   
}

async function list(ctx) { 
	let _body = ctx.request.body
	let id = _body.id == undefined ? "is null" : "= '" +_body.id + "'"
	let list = await getDBSearch.searchData("SELECT * FROM user where father_id "+id+";")

	

	for(let i in list){
		let data =  await getDBSearch.searchData("SELECT * FROM user where father_id = '"+list[i].id+"';")

		if(data.length > 0){
			list[i].hasChild = 1
		}else{
			list[i].hasChild = 0
		}

	} 
  ctx.body  =  list
   
}

async function rigths(ctx) { 

 let _body = ctx.request.body
 
 ctx.body  =  await getDBSearch.searchData("SELECT * FROM screenDB.rights where user_id = '"+_body.id+"'")
   
}



async function editProps(ctx) { 

 let _body = ctx.request.body
 
 ctx.body  =  await getDBSearch.searchData("UPDATE `screenDB`.`user` SET `username`='"+_body.username+"', `password`='"+_body.password+"', `effective_time`='"+_body.effective_time+"', `is_active`='"+_body.is_active+"' WHERE `id`='"+_body.id+"';")
   
}





export default {getUserInfo,list,rigths,editProps}
