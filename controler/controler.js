var db = require("../db.js")
module.exports.home = (req , res ) => {
  var data = db.get('list').value();
  console.log(data);
  res.render('list' , {
      "list" : data 
  })
}
module.exports.search = (req , res ) => {
  var name = req.query.name;
  var id = req.query.id;
  var data = db.get('list').value();
  console.log(data);
  var searchArr = data.filter(ele => {
      if(ele.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ) {
          return ele;
      }
  }).filter(ele => {
      return ele.id === id;
  })
  
  res.render('list' , {
      "list" : searchArr 
  })
}
module.exports.get = (req , res) => {
  res.render('create')
}
module.exports.post = (req , res ) => {
  var newUser = req.body;
  db.get('list').push(newUser).write()
  res.redirect('/home')
}