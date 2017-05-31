import getDBSearch from '../../client/common/getDBSearch'
 
async function login(ctx) { 

 let _body = ctx.request.body,
  name = _body.name,
  password = _body.password

	let str = "SELECT * FROM screenDB.user where username = '"+name+"' and password = '"+password+"';"
 
 	let res  =  await getDBSearch.searchData(str)
	if(res.length > 0){ 
		ctx.cookies.set('user_id',res[0].id) 
		ctx.cookies.set('user_name',res[0].username) 
	}

   ctx.body  = res
}

async function isLogin(ctx) { 

  
	if(ctx.cookies.get('user_id') != null){ 
		ctx.body  = {name:ctx.cookies.get('user_name')}
	}else{
		ctx.body  = {name:null}
	}

   
}

export default {login,isLogin}
