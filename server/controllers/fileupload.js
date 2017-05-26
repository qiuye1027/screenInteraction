import fs from 'fs' 
import path from 'path'  
import asyncBusboy from 'async-busboy'; 
import getDBSearch from '../../client/common/getDBSearch'
import util from '../../client/shared/utils'


async function upload(ctx) { 
	ctx.cookies.set('user_id','0') 

 
 let {files,fields} = await asyncBusboy(ctx.req);
//多文件无法重命名
  let _body = fields, 
  scshare = _body.scshare == undefined ? 0 : 1,
  scpath = _body.scpath,
  folderid = _body.folderid
   

  fs.readdir('static/fileupload' + scpath, function (err) {

  	 if(err) {
	    fs.mkdir('static/fileupload' + scpath);    
	  }

	for(let value of files){
		  
	 
	  	let tmpath = value.path //上传到临时目录的文件
	    
	  	let ph = path.join('static/fileupload'+scpath,value.filename);//生成新的上传文件路径全称 
		let stream = fs.createWriteStream(ph);//创建一个可写流
		fs.createReadStream(tmpath).pipe(stream);//可读流通过管道写入可写流 

		fs.unlink(tmpath)

		let sqlstr = "INSERT INTO `screenDB`.`file` (`name`, `size`, `type`, `path`, `folder_id`, `user_id`,`is_share`) "+
					"VALUES ('"+value.filename+"', '"+util.bytesToSize(fs.statSync(value.path).size)+"', '"+value.mimeType+"', 'static/fileupload"+scpath+"', '"+folderid+"', '"+ctx.cookies.get('user_id') +"','"+scshare+"');"

		getDBSearch.searchData(sqlstr)
	 
	  }


  })





  







 ctx.body  =  {res_code:1,res_msg:'upload'} 
   
}

export default {upload}
