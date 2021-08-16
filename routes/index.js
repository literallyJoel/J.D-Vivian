const express = require('express');
const router = express.Router();

//Render home
router.get('/', (req, res) => {
  res.render('index');
});



//Render oCV
router.get('/oCV', (req, res) =>{
  res.render('oCV');
});



//Render start page
router.get('/start', (req, res)=>{
  res.render('start')
})


//DBTest
router.get('/oCV/cv', function(req, res) {
  var db = req.db;
  EducationColl = db.get('Education');
  workHistoryColl = db.get('workHistory');

  EducationColl.find({}, function(e, allEducation) {
         workHistoryColl.find({}, function(err, allWorkHistory) {
                   res.render("cv", {Education: allEducation, workHistory: allWorkHistory});
         }); 
    
});
});
module.exports = router;
