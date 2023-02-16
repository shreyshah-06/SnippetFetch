const Snippetmodel = require('../model/snippet')

const addUser = async(req,res)=>{
    try {
        const user = req.body;
        console.log(user)
        const create = await Snippetmodel.create(user);
        if (!create) {
            return res.status(400).send({ status: "not ok", msg: "user not created" });
        }
        return res.status(200).send({ status: "ok", msg: "user created" });
    } catch (error) {
        console.log(error)
    }
}
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

module.exports = {addSnippet,addUser}