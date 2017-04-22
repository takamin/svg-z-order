module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            build: {
                files: {
                    "sample/web/index-bundle.js":
                        [ "sample/web/index.js" ],
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    "sample/web/index-bundle.min.js" :
                        [ "sample/web/index-bundle.js" ]
                }
            }
        },
        md2html: {
            build: {
                files: {
                    "./index.html" : [ "./README.md" ]
                }
            }
        },
        copy: {
            sample: {
                files: {
                    "sample/web/sample-index.js":
                        [ "sample/web/index-bundle.min.js" ]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-md2html');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask("default",
            ["browserify", "uglify", "md2html", "copy:sample"]);
};
