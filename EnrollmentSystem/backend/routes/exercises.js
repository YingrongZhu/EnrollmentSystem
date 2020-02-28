const router = require('express').Router();
let Exercise = require('../models/exercise.model');
var csv = require("fast-csv");

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/').post((req,res)=>{
    var mem= ""
    Exercise.find({lastname:req.body.lastname,firstname:req.body.firstname})
    .then((exercises )=>{
         res.status(200).json(exercises)
         console.log(exercises[0].birthdate)
    }).catch((e)=>{
        console.log(e)
    })
})
router.route('/add').post((req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const nickname = req.body.nickname; 
    const gender = req.body.gender;   
    const homeaddress = req.body.homeaddress;  
    const contactnumber = req.body.contactnumber;  
    const birthdate = Date.parse(req.body.date);
    const newExercise = new Exercise({
        firstname,
        lastname,
        nickname,
        gender,
        homeaddress,
        contactnumber,
        birthdate,

    });
    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(exercises => res.json(' Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercises => {
            exercises.firstname = req.body.firstname;
            exercises.lastname = req.body.lastname;
            exercises.nickname = req.body.nickname; 
            exercises.gender = req.body.gender;   
            exercises.homeaddress = req.body.homeaddress;  
            exercises.contactnumber = req.body.contactnumber;  
            exercises.birthdate = Date.parse(req.body.date);
            exercises.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err))
});
router.route('/py/p').post((req,res)=>{

    var rr=-1;
    const { spawn } = require('child_process');
    const bat = spawn('python', ['C:/Users/zhuyi/Desktop/myweb/mern-exercise-tracker1218/mern-exercise-tracker/src/components/a.py']);
    
    bat.stdout.on('data', (data) => {
      console.log(data)
      rr=data.toString();
      console.log(rr);
      console.log(rr[0]);
      // res.json(rr)
    });
    
    bat.stderr.on('data', (data) => {
      console.error(data.toString());
      // rr=data.toString();
    });
    
    Exercise.find({lastname:req.body.lastname,firstname:req.body.firstname})
    .then((exercises )=>{
      res.status(200).json(exercises)
      csv
    .writeToPath("test.csv", [
        ["child's first name", exercises[0].firstname],
        ["child's last name", exercises[0].lastname],
        ["child's nickname", exercises[0].nickname],
        ["birth data", exercises[0].birthdate],
        ["gender", exercises[0].gender],
        ["home address", exercises[0].homeaddress],
        ["contact number", exercises[0].contactnumber]
        ])
    .on("finish", function(){
    console.log("done!");
});
      }).catch((e)=>{
     console.log(e)
      })
    

    bat.on('exit', (code) => {
      console.log(`Child exited with code ${code}`);
    });



})




module.exports = router;


