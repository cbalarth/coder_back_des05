import {Router} from "express";

const router = Router();

//RUTAS DE LAS VITAS (RENDERS)
router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.get("/signup",(req,res)=>{
    res.render("signup");
});

router.get("/profile",(req,res)=>{
    console.log(req.session);
    res.render("profile");
});

export {router as WebRouter};