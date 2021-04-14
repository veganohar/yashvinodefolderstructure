const db = require("../models");
const Club = db.club;

exports.testget = (req, res) => {
    res.send("Get Call is Working");
}

exports.testpost = (req,res)=>{ 
    res.send("Post Call is Working");
}

exports.testput = (req,res)=>{
    res.send("Put Call is Working");
}

exports.testdelete = (req,res)=>{
    res.send("Delete Call is Working");
}

exports.dataBody = (req,res)=>{
    console.log(req.body);
    res.send(req.body);
}

exports.dataparams = (req,res)=>{
    console.log(req.params);
    res.send(req.params);
}

exports.dataquery = (req,res)=>{
    console.log(req.query);
    res.send(req.query);
}


exports.testejs = (req,res)=>{
    
    let customer = {
        name : "Manohar",
        age:27,
        email:"manohar@gmail.com",
        phone:9492901901
    }

    res.render("pages/test",{user:customer}); 
}

exports.dataForm =  (req, res)=>{
    let data = req.body;
    let club = new Club();
    for(let p in data){
        club[p] = data[p];
    }
    club.save(club,(err,response)=>{
        if(err){
            return res.status(500).send({message:err});   
        }
        // res.render("pages/result",{data:req.body}); 
        res.redirect("/ejstable",); 
    })
 }

 exports.ejsform = (req,res)=>{  
    res.render("pages/form");  
}

exports.ejstable = (req,res)=>{  
    Club.find((err,clubs)=>{
        if(err){
            return res.status(500).send({message:err});   
        }
        res.render("pages/table",{clubs:clubs});
    })
      
}

exports.createNewClub = (req,res)=>{
    let data = req.body;
    let club = new Club();
    for(let p in data){
        club[p] = data[p];
    }

    club.save(data,(err,response)=>{
        if(err){
            return res.status(500).send({message:err});   
        }
        res.status(201).send({
            data:response,
            message:"Record Stored Successfully"
        })
    })
}

exports.getAllClubs =(req,res)=>{
    Club.find((err,clubs)=>{
        if(err){
            return res.status(500).send({message:err});   
        }
        res.send({
            data:clubs,
            message:"Records Retrieved Successfully"
        })
    })
}

exports.updateClub = (req,res)=>{
    Club.updateOne({_id:req.body.id},req.body,(err,response)=>{
        if(err){
            return res.status(500).send({message:err});   
        }
        res.status(204).send({
            data:response,
            message:"Record Updated Successfully"
        })
    })
}

exports.deleteClub = (req,res)=>{
    Club.deleteOne({_id:req.params.cid},(err,response)=>{
        if(err){
            return res.status(500).send({message:err});   
        }
        res.status(204).send({
            data:response,
            message:"Record Deleted Successfully"
        })
    })
}