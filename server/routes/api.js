import Router from 'koa-router'
import fileupload from '../controllers/fileupload'
import getFloder from '../controllers/getFloder'

const router = new Router()

router.post('/fileupload', fileupload.upload)

router.post('/getFloder', getFloder.find)

router.post('/getFile', getFloder.findFile)

router.post('/newFloder', getFloder.newFloder)

router.post('/delFile', getFloder.delFile)

router.post('/delFloder', getFloder.delFloder)

export default router
