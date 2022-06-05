const express =  require('express');
const Student = require('../Models/Student')
const router = express.Router();

//Get Back All The Posts
router.get('/',(req,res)=>{
    Student.find()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => res.send(err));  
});

//Get the data by id
router.get('/:id', async (req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        res.send(student);
    }catch(err) {
        res.send({ message: err });
    }
});

//Submit A Post
router.post('/', async (req,res)=>{
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


    const newStudent = new Student(req.body);

    try{
        const savedUser = await newStudent.save();
        res.json(savedUser);
    }
    catch(err){
        res.json({message: err});
    }
});

router.patch('/:id',async (req,res)=>{
    try{
        const updatedStudent = await Student.updateOne(
            {_id:req.params.id},
            { $set: req.body}
        );
        res.json(updatedStudent);
    }catch(err){
        res.send(err );
    }
});

router.delete('/:id',async (req,res)=>{
    Student.findByIdAndDelete({_id:req.params.id})
    .then((data)=>{
        res.json({success:true});
    }).catch((err)=>{
        res.json({message:err});
    });
});

module.exports = router;