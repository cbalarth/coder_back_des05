import {Router} from "express";
import {UserModel} from "../models/user.models.js";

const router = Router();

//REGISTRO
router.post("/signup",async(req,res)=>{
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email:email}); //Busca el usuario en la base de datos.
        if(!user) {
            //Si no existe el usuario, lo registramos.
            const newUser = await UserModel.create({email, password});
            req.session.user=newUser.email;
            return res.redirect("/profile");
        }
        //Si ya existe el usuario, enviamos un mensaje que el usuario ya existe.
        res.send(`Usuario ya registrado. <a href="/login">Inicia sesión.</a>`);
    } catch (err) {
        console.log(err.message);
    }
});

//LOGOUT
router.post("/logout",(req,res)=>{
    req.session.destroy(err => {
        if(err) return res.send("La sesión no se pudo cerrar.");
        res.redirect("/");
    });
});

export {router as AuthRouter};