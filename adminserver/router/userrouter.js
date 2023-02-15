const express=require('express')
const router=express.Router();
const usercontroller=require('../Controller/userController')

router.get('/getAll',usercontroller.getAll)
router.post('/addUser',usercontroller.addOne)
router.get('/getOne/:id',usercontroller.getOne)
router.put('/updateOne/:id',usercontroller.updateOne)
router.delete('/deleteOne/:id',usercontroller.deleteOne)

module.exports = router