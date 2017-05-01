import fs from 'fs' 
 
import getDBSearch from '../../client/common/getDBSearch'

async function find(ctx) {  
 ctx.body  =  await getDBSearch.searchData("SELECT * FROM folder where father_id = "+ctx.request.body.fatherId+";")
   
}

async function findFile(ctx) {  
 ctx.body  =  await getDBSearch.searchData("SELECT * FROM screenDB.file where folder_id = "+ctx.request.body.folderId+";")
   
}

async function newFloder(ctx) { 
	let scpath = ctx.request.body.path == '' ? 'static/fileupload/' + ctx.request.body.floderName  : 'static/fileupload/' + ctx.request.body.path+ '/' +ctx.request.body.floderName  
	fs.mkdir(scpath);     
	ctx.body  =  await getDBSearch.searchData("INSERT INTO folder (`name`, `father_id`, `user_id`, `path`) VALUES ('"+ctx.request.body.floderName+"', '"+ctx.request.body.fatherId+"', '"+ctx.cookies.get('user_id')+"' , '"+scpath+"');")
   
}


async function delFile(ctx) {  
	let scdata = await 	 getDBSearch.searchData("SELECT * FROM screenDB.file where id ='"+ctx.request.body.id+"';")

	let scpath= scdata[0].path + '/' + scdata[0].name


	var exec = require('child_process').exec,child;

	child = exec('rm -rf '+scpath,function(err,out) { 

	  console.log(out); err && console.log(err); 

	
	 });
	ctx.body  =  await getDBSearch.searchData("DELETE FROM `screenDB`.`file` WHERE `id`='"+ctx.request.body.id+"';")
   
 
	
}


async function delFloder(ctx) {  
	let scdata = await 	 getDBSearch.searchData("SELECT * FROM screenDB.folder where id ='"+ctx.request.body.id+"';")

	let scpath= scdata[0].path  


	var exec = require('child_process').exec,child;

	child = exec('rm -rf '+scpath,function(err,out) { 

	  console.log(out); err && console.log(err); 

	
	 });
	ctx.body  =  await getDBSearch.searchData("DELETE FROM `screenDB`.`folder` WHERE `id`='"+ctx.request.body.id+"';")
   
 
	
}



export default {find,newFloder,findFile,delFile,delFloder}
