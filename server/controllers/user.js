import getDBSearch from '../../client/common/getDBSearch'
 
async function getUserInfo(ctx) { 
 
 ctx.body  =  await getDBSearch.searchData("SELECT * FROM user")
   
}

async function list(ctx) { 

	let list = await getDBSearch.searchData("SELECT * FROM user where father_id is null;")

	

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


export default {getUserInfo,list,rigths}
