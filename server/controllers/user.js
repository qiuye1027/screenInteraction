import getDBSearch from '../../client/common/getDBSearch'
 
async function getUserInfo(ctx) { 
 
 ctx.body  =  await getDBSearch.searchData("SELECT * FROM user")
   
}

export default {getUserInfo}
