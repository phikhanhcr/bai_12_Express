module.exports.checkValue = (req, res , next) => {
  var errors = [];
  if(!req.body.name) {
    errors.push("User is required");
  } 
  if(!req.body.id) {
    errors.push('Id is required ');
  }
  if(errors.length) {
    res.render('create' , {
      "errors" : errors,
      "values" : req.body
    })
  }
  next();
}