

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
    console.log(req.body);
    res.render("pages/result",{data:req.body}); 
 }

 exports.ejsform = (req,res)=>{  
    res.render("pages/form");  
}

