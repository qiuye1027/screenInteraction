import getDBSearch from '../../client/common/getDBSearch'
 
async function getUserInfo(ctx) { 
 
 ctx.body  =  await getDBSearch.searchData("SELECT * FROM user")
   
}

async function list(ctx) { 
 
 ctx.body  =  await getDBSearch.searchData("SELECT * FROM user")
   
}

async function rigths(ctx) { 

 let _body = ctx.request.body
 
 ctx.body  =  await getDBSearch.searchData("SELECT * FROM screenDB.rights where user_id = '"+_body.id+"'")
   
}


export default {getUserInfo,list,rigths}
