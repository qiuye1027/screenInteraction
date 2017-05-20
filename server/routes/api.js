import Router from 'koa-router'
import fileupload from '../controllers/fileupload'
import getFloder from '../controllers/getFloder'
import program from '../controllers/program'
import savePlugin from '../controllers/savePlugin'
import creatProgram from '../controllers/creatProgram'
import programList from '../controllers/programList'
//import componentList from '../controllers/componentList'


const router = new Router()

router.post('/fileupload', fileupload.upload)

router.post('/getFloder', getFloder.find)

router.post('/getFile', getFloder.findFile)

router.post('/newFloder', getFloder.newFloder)

router.post('/delFile', getFloder.delFile)

router.post('/programFileList', program.getFileList)

router.post('/savePlugin', savePlugin.save)

router.post('/creatProgram', creatProgram.save)

router.post('/programList', programList.list)

//router.post('/componentList', componentList.list)

export default router
