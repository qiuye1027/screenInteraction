import fs from 'fs' 

async function getFileList(ctx) {  

	let fileList =[],path = ctx.request.body.path

	 ctx.body = await new Promise((resolve, reject) => {

	  

		fs.readdir('static'+path, 'r', (err, fd) => {
		  if (err) {
		    if (err.code === 'ENOENT') {
		      console.error('myfile does not exist');
		      return;
		    }

		    throw err;
		  }


		 
		  for(let i of fd){
		  	let fileType='floder'
		  	if(i.split(".").length >1){
				fileType = i.split(".")[1]
		  	}
		  	fileList.push({name:i,fileType:fileType})
		  }
		  
			resolve(fileList) 
		 
		});

 
	  
	}); 

 
}


export default {getFileList}