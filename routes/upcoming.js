const express =  require('express');
const Company = require('../Models/Company')
const router = express.Router();

//Get Back All The Upcoming Companies List
router.get('/getCompany',(req,res)=>{
    Company.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.send(err));  
});

//Get the data by id
router.get('/getCompany/:id', async (req,res)=>{
    try{
        const company = await Company.findById(req.params.id);
        res.send(company);
    }catch(err) {
        res.send({ message: err });
    }
});

//Submit A Post
router.post('/postCompany', async (req,res)=>{
    const {name,company,batch,branch,ctc} = req.body;
    if (
        !name ||
        !company ||
        !batch ||
        !branch ||
        !ctc
    ) {
        return res.send({ error: "Fill the form" });
    }


    const newCompany = new Company(req.body);

    try{
        const savedUser = await newCompany.save();
        res.json(savedUser);
    }
    catch(err){
        res.json({message: err});
    }
});

router.patch('/updateCompany/:id',async (req,res)=>{
    try{
        const updatedCompany = await Company.updateOne(
            {_id:req.params.id},
            { $set: req.body}
        );
        res.json(updatedCompany);
    }catch(err){
        res.send(err );
    }
});

router.delete('/deleteCompany/:id',async (req,res)=>{
    Company.findByIdAndDelete({_id:req.params.id})
    .then((data)=>{
        res.json({success:true});
    }).catch((err)=>{
        res.json({message:err});
    });
});

module.exports = router;