const Snippetmodel = require('../model/snippet')
const {addSnippet,addUser} = require('../controllers/addSnippet')

const generateKey = async(req,res)=>{
    try {
        const{username:user,keyword}=req.body;
        return res.json({key:`${user}_${keyword}`})
    } catch (error) {
        console.log(error);
    }
}
const shareSnippet = async(req,res)=>{
    try {
        const {key,username:userFetching,keyword:userKeyword,display} = req.body;
        const user = key.split('_')[0];
        const keyword = key.split('_')[1];
        const userData = await Snippetmodel.find({username:user});
        const userfetchingData = await Snippetmodel.find({username:userFetching});
        if(userData.length===0 || userfetchingData.length===0){
            return res.status(400).json({status:"not ok",msg:"user not found"})
        }
        const snippetCopy = await userData[0].privateSnippets.find((item)=>item.Snippet_keyword===keyword);
        if(snippetCopy===undefined){
            return res.status(400).json({status:"not ok",msg:"snippet not found"})
        }
        const checkKeyword = await (userfetchingData[0].keywords).find((item)=>item.word===userKeyword);
        if(checkKeyword!=undefined){
            return res.status(400).json({status:"not ok",msg:"keyword already exist"})
        }
        if(display==="private"){
            userfetchingData[0].keywords.push({word:userKeyword});
            snippetCopy.display = "private";
            snippetCopy.Snippet_keyword = userKeyword;
            const newsnippetCopy  = {display:snippetCopy.display,category:snippetCopy.category,Snippet_keyword:snippetCopy.Snippet_keyword,Snippet:snippetCopy.Snippet}
            userfetchingData[0].privateSnippets.push(newsnippetCopy );
            await userfetchingData[0].save();
        }
        else{
            userfetchingData[0].keywords.push({word:userKeyword});
            snippetCopy.display = "public";
            snippetCopy.Snippet_keyword = userKeyword;
            const newsnippetCopy  = {display:snippetCopy.display,category:snippetCopy.category,Snippet_keyword:snippetCopy.Snippet_keyword,Snippet:snippetCopy.Snippet}
            await userfetchingData[0].publicSnippets.push(newsnippetCopy);
            await userfetchingData[0].save();
        }
        res.status(200).json({status:"ok",msg:"snippet shared"})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {shareSnippet,generateKey}