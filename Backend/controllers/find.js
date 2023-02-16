const Snippetmodel = require('../model/snippet')

const PrivateFind = async(user,category,keyword)=>{
    const userData = await Snippetmodel.find({username:user});
    if(!userData){
        return {status:"not ok",msg:"user not found"}
    }
    let responseData = userData[0].privateSnippets;
    Object.assign(responseData,userData[0].publicSnippets)
    if(category!=""){
        responseData = responseData.filter((item)=>item.category===category);
    }
    console.log(responseData)
    responseData = responseData.filter((item)=>item.Snippet_keyword.startsWith(keyword));
    return {status:"ok",msg:"snippet found",data:responseData}
}

const PublicFind = async(user,category,keyword)=>{
    const userfetch = await Snippetmodel.find({username:user})
    const userData = await Snippetmodel.find();
    let responseData = [];
    for(let i=0;i<userData.length;i++){
        for(let j=0;j<userData[i].publicSnippets.length;j++){
            responseData.push(userData[i].publicSnippets[j]);
        }
    }
    for(let i=0;i<userfetch[0].privateSnippets.length;i++){
        responseData.push(userfetch.privateSnippets[i]);
    }
    responseData = responseData.filter((item)=>item.Snippet_keyword.startsWith(keyword) && item.category===category);
    return {status:"ok",msg:"snippet found",data:responseData}
}

const findSnippet = async(req,res)=>{
    try {
        const username = req.body.username;
        const category = req.body.category;
        const keyword = req.body.keyword;
        const display = req.body.display;
        if(display==="private"){
            const find = await PrivateFind(username,category,keyword);
            if(find.status==="not ok"){
                return res.status(400).json({status:"not ok",msg:"server error"})
            }
            return res.status(200).json(find.data);
            
        }
        const find = await PublicFind(username,category,keyword);
        if(find.status==="not ok"){
            return res.status(400).json({status:"not ok",msg:"server error"})
        }
        return res.status(200).json(find.data);
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {findSnippet}