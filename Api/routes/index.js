const {Router} = require('express')
const router = Router()
const {getUsers,createUser,getUserByID,delUser,updateUser,getPelis,getPelisByID,passwordCheck}= require("../controllers/index.controller")


router.get('/users',getUsers)
router.get('/users/:id',getUserByID)
router.post('/users',createUser)
router.delete('/users/:id',delUser)
router.put('/users/:id',updateUser)
router.get('/pelis',getPelis)
router.get('/pelis/:id',getPelisByID)
router.get('/pass/:id',passwordCheck)
module.exports = router