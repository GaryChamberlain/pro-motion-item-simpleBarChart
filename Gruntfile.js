module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-closurecompiler');
		grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-ts");

    var JS_FILE = "js/prostyle.item.simpleBarChart.js";
    var JS_MIN_FILE = "js/prostyle.item.simpleBarChart.min.js";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            item_simpleBarChart: {
                src: ["src/**/*.ts"],
                out: JS_FILE
            }
        },
        closurecompiler: {
            prostyle: {
                files: {"js/prostyle.item.simpleBarChart.min.js": JS_FILE},
                options: {
                    "compilation_level": "SIMPLE_OPTIMIZATIONS",
                    "language_in": "ECMASCRIPT5",
                    "max_processes": 5
                }
            }
        },
        usebanner: {
            banner: {
                options: {
                    banner: '/*!\n' +
                    ' * @license: MIT License - See https://github.com/GaryChamberlain/prostyle-item-simpleBarChart/LICENSE\n' +
                    ' * @author: Gary Chamberlain, gary@pro.graphics.\n' +
                    ' **/\n'
                },
                files: { src: [JS_FILE,JS_MIN_FILE] }
            }
        },
        copy: {
            extensions: {
                files: [
                    {src:JS_FILE, dest:"../../Pro-Graphics/prostyle/js/extensions/prostyle.item.simpleBarChart.js"},
										{src:JS_MIN_FILE, dest:"../../Pro-Graphics/prostyle/js/extensions/prostyle.item.simpleBarChart.min.js"}
                ]
            }
        }
    });

    grunt.registerTask('default', ['ts', 'closurecompiler', 'usebanner', 'copy']);
};