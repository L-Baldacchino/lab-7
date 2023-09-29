'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    title: {
      allownull:false,
      type: DataTypes.STRING},
    content: {
      allownull:false,
      type: DataTypes.TEXT},
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Post;
};