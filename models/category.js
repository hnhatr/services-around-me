var dbConnect = require('../configs/dbconnection')
var Category = {

    addCategory: function ( Category, callback ) {

      let queryString = "INSERT INTO businessonline.Category  ( CategoryName, Description, ParentID) VALUES (?, ?, ?)";
      dbConnect.query(queryString, [ Category.name, Category.desc, Category.pid], function(err, results, fields){
          if (err) {callback(err, null);}
          else {
            callback(null, results );
          }
      });

    },


    getCategories: function (callback) {

      let queryString = "SELECT CategoryID as id, CategoryName as name FROM businessonline.Category WHERE CategoryID != 0";
      dbConnect.query( queryString, function(err, results, fields){
          if (err) {callback(err, null);}
          else {
            callback(null, results );
          }
      });

    },


    getCategory: function ( categoryid ,callback) {

      let queryString = "SELECT CategoryID as id, CategoryName as name, Description as description, ParentID as pid  FROM businessonline.Category WHERE CategoryID = ?";
      dbConnect.query( queryString, [categoryid],function(err, results, fields){
          if (err) {callback(err, null);}
          else {
            callback(null, results );
          }
      });

    },

    getCategoryParents: function (callback) {

      let queryString = "SELECT CategoryID as id, CategoryName as name FROM businessonline.Category WHERE ParentID = 0";
      dbConnect.query( queryString, function(err, results, fields){
          if (err) {callback(err, null);}
          else {
            callback(null, results );
          }
      });

    },

    searchCategory: function (query, callback) {
        
    },


};

module.exports = Category;
