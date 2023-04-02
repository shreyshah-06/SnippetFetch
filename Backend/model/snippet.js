const mongoose = require("mongoose");
const SnippetManager = new mongoose.Schema({
  username: {
    type: String,
    reqiured: true,
    unique: true,
  },
  password:{
    type:String,
    reqiured:true,
  },
  keywords:{
    type:Array,
    default:[]
  },
  privateSnippets:[{
    display:{
      type:String,
      default:""
    },
    category:{
      type:String,
      default:""
    },
    Snippet_keyword:{
      type:String,
    },
    Snippet:{
      type:String
    }
  }],
  publicSnippets:[{
    display:{
      type:String,
      default:""
    },
    category:{
      type:String,
      default:""
    },
    Snippet_keyword:{
      type:String,
    },
    Snippet:{
      type:String
    }
  }]
});

module.exports = mongoose.model("Snippetmodel", SnippetManager);