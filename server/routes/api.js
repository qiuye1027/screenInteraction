import Router from 'koa-router'
import fileupload from '../controllers/fileupload'
import getFloder from '../controllers/getFloder'
import program from '../controllers/program'
import savePlugin from '../controllers/savePlugin'
import creatProgram from '../controllers/creatProgram'
import programList from '../controllers/programList'
import componentList from '../controllers/componentList'
import componentListDel from '../controllers/componentListDel'
import saveProgram from '../controllers/saveProgram'

const router = new Router()
 //文件上传
router.post('/fileupload', fileupload.upload)
 //获取文件夹
router.post('/getFloder', getFloder.find)
 //获取文件
router.post('/getFile', getFloder.findFile)
 //新建文件夹
router.post('/newFloder', getFloder.newFloder)
 //删除文件
router.post('/delFile', getFloder.delFile)
 //获取文件列表
router.post('/programFileList', program.getFileList)
 //临时保存交互区域
router.post('/savePlugin', savePlugin.save)
 //新建节目
router.post('/creatProgram', creatProgram.save)
 //获取节目列表
router.post('/programList', programList.list)
 //获取交互区域列表
router.post('/componentList', componentList.list)
 //删除某个交互区域
router.post('/componentListDel', componentListDel.del)
 //保存节目
router.post('/saveProgram', saveProgram.save)

export default router
