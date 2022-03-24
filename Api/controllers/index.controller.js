const {Pool} = require('pg')
const bcrypt = require('bcryptjs')


const pool = new Pool ({
    host: 'proyecto-streaming.ciklfidbfwxb.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'raspberry',
    database: 'proyectoStreaming',
    port: '5432'
})

const getUsers = async (req,res) => {
   const response = await pool.query('Select * from usuarios')
   res.status(200).json(response.rows)
}

const getUserByID = async (req,res)=>{
    const response = await pool.query('SELECT * FROM usuarios WHERE id = $1',[req.params.id])
    res.json(response.rows)
}

const createUser = async(req,res)=>{
    const {correo,name,pass,suscripcion} = req.body
    //const id = 'DEFAULT'
    const rondas = 10
    const haspass = await bcrypt.hash(pass, rondas);

    const response = await pool.query('insert into usuarios(correo,nombre,contraseña,estado,suscripcion) values($1,$2,$3,$4,$5)',[correo,name,haspass,false,suscripcion])
    console.log(response)
    res.json({
         message:'Agregado el usuario',
         body:{
             user:{name,correo,suscripcion}
         }
    })
}

const updateUser = async (req, res) => {
    const id = req.params.id
    const {correo,name,pass,estado,suscripcion} = req.body
    const rondas = 10
    const haspass = await bcrypt.hash(pass, rondas);
    console.log(id, name, pass)
    const response = await pool.query('Update usuarios SET correo = $1, nombre = $2, contraseña = $3,estado = $4,suscripcion =$5 WHERE id =$6',[
        correo,
        name,
        haspass,
        estado,
        suscripcion,
        id
    ])
    console.log(response)
    res.json('User Updated')
}

const passwordCheck = async (req,res) =>{
    const id = req.params.id
    const { name, pass } = req.body
    const response = await pool.query('SELECT * FROM usuarios WHERE id = $1',[id])
    const hashed = response.rows[0].contraseña
    const prn = await bcrypt.compare(pass,hashed)
    if(prn){
        res.json("Prueba completada")
    }else{
        res.json("Prueba incompleta")
    }
    
}

const delUser = async(req,res) =>{
    const response = await pool.query('DELETE FROM usuarios where id=$1',[req.params.id])
    res.json(`User ${req.params.id} eliminado de BD`)
}

const getPelis = async (req,res) => {
    const response = await pool.query('Select * from peliculas_series')
    res.status(200).json(response.rows)
}
const getPelisByID = async (req,res)=>{
    const response = await pool.query('SELECT * FROM peliculas_series WHERE codigo = $1',[req.params.id])
    res.json(response.rows)
}

module.exports = {
    getUsers,
    createUser,
    getUserByID,
    delUser,
    updateUser,
    getPelis,
    getPelisByID,
    passwordCheck
}