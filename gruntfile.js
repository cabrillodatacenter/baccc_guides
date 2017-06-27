module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({

    // git add .
    gitadd: {
      task: {
        options: {
          all: true,
          cwd: "/Users/mtw/Projects/cabrillodatacenter/baccc_guides/"
        }
      }
    },

    // git commit -m "Repository updated on <current date time>"
    gitcommit: {
      task: {
        options: {
          message: "Repository updated on " + grunt.template.today(),
          allowEmpty: true,
          cwd: "/Users/mtw/Projects/cabrillodatacenter/baccc_guides/"
        }
      }
    },

    // git push origin master
    gitpush: {
      task: {
        options: {
          remote: "origin",
          branch: "master",
          cwd: "/Users/mtw/Projects/cabrillodatacenter/baccc_guides/"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-git");

};

