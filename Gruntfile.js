// Generated on 2015-02-12 using
// generator-webapp 0.5.1
'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // access the local static mock data  
  // 访问本地静态mock数据 
  grunt.initConfig({
      mock2easy: {
          test:{
              options: {
                  port:4000,
                  lazyLoadTime:3000,  
                  database:'database',
                  doc:'doc',   
                  keepAlive:true, 
                  ignoreField:['__preventCache'],  
                  interfaceSuffix:'.json',
                  preferredLanguage:'cn'  
              }
          }
      }
  })
};
