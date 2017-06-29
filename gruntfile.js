module.exports = function (grunt) {
  "use strict";
  
  var cwd = "/Users/mtw/Projects/cabrillodatacenter/baccc_guides/";

  grunt.initConfig({

    // git add .
    gitadd: {
      task: {
        options: {
          all: true,
          cwd: cwd
        }
      }
    },

    // git commit -m "Repository updated on <current date time>"
    gitcommit: {
      task: {
        options: {
          message: "Repository updated on <%= grunt.template.today() %>",
          allowEmpty: true,
          cwd: cwd
        }
      }
    },

    // git push origin master
    gitpush: {
      task: {
        options: {
          remote: "origin",
          branch: "master",
          cwd: cwd
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-git");
};

