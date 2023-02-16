const Snippetmodel = require('../model/snippet')

const updateSnippet = async(req,res)=>{
    try {
        const userData = req.body;
        const user = await Snippetmodel.find({username:userData.username});
        if(!user){
            return res.status(400).json({status:"not ok",msg:"user not found"})
        }
        const keyword = userData.keyword;
        const category = userData.category;
        console.log(user)
        const old = await user[0].privateSnippets.find((item)=>item.Snippet_keyword===keyword && item.category===category);
        if(!old){
            const oldPublic = await user[0].publicSnippets.find((item)=>item.Snippet_keyword===keyword && item.category===category);
            if(!oldPublic){
                return res.status(400).json({status:"not ok",msg:"snippet not found"})
            }
            else{
                oldPublic.Snippet_keyword= userData.newSnippet.Snippet_keyword;
                oldPublic.category= userData.newSnippet.category;
                oldPublic.Snippetmodel= userData.newSnippet.Snippetmodel;
                await user[0].save();
                return res.status(200).json({status:"ok",msg:"snippet updated",data:oldPublic})
            }
        }
        old.Snippet_keyword= userData.newSnippet.keyword;
        old.category= userData.newSnippet.category;
        old.Snippetmodel= userData.newSnippet.Snippetmodel;
        await user[0].save();
        return res.status(200).json({status:"ok",msg:"snippet updated",data:old})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {updateSnippet}