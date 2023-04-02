const Snippetmodel = require('../model/snippet')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const addUser = async(req,res)=>{
    try {
        const {username,password:plainTextPassword} = req.body;
        console.log(req.body)
        password = await bcrypt.hash(plainTextPassword,10);
        console.log(password)
        const create = await Snippetmodel.create({username,password});
        if (!create) {
            return res.status(400).send({ status: "not ok", msg: "user not created" });
        }
        return res.status(200).send({ status: "ok", msg: "user created" });
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    
    try {
      const {username, password}=req.body;
      const user = await Snippetmodel.findOne({username});
      console.group(req.body)
      if (!user){
        return res.status(400).send({ status: "not ok", msg: "user not found" });
      }
      const match= await bcrypt.compare(password,user.password);
      if(match){
          const { _id} = user;
          const token = jwt.sign({ _id, username }, process.env.SECRET_KEY);
          return res.status(200).send({ status: "ok", token });
      }
      else{
          return res.status(400).send({ status: "not ok" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  
const addSnippet = async(req,res)=>{
    try {
        const user  = req.body.username;
        const userfind = await Snippetmodel.find({username:user});
        if(userfind.length===0){
            return res.status(400).json({status:"not ok",msg:"user not found"})
        }
        const newSnippet = req.body.addedSnippet;
        const checkKeyword = await (userfind[0].keywords).find((item)=>item.word===newSnippet.Snippet_keyword);
        console.log(userfind)
        if(checkKeyword!=undefined){
            return res.status(400).json({status:"not ok",msg:"keyword already exist"})
        }
        userfind[0].keywords.push({word:newSnippet.Snippet_keyword});
        if(newSnippet.display==="private"){
            userfind[0].privateSnippets.push(newSnippet);
            // console.log(userfind[0])
            // userfind[0].markModified();
            await userfind[0].save();
        }
        else{
            userfind[0].publicSnippets.push(newSnippet);
            await userfind[0].save();
        }
        res.status(200).json({status:"ok",msg:"snippet added"})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {addSnippet,addUser,loginUser}