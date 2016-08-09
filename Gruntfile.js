module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        props: {
            license: ''
        },
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= props.license %> */\n',
        // Task configuration
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['scripts/aib-salesforce.js'],
                dest: 'dist/aib-salesforce.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/aib-salesforce.min.js'
            }
        },
        jshint: {
            options: {
                node: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                eqnull: true,
                browser: true,
                globals: { jQuery: true },
                boss: true
            },
            gruntfile: {
                src: 'gruntfile.js'
            },
            scripts_test: {
                src: ['scripts/**/*.js', 'test/**/*.js']
            }
        },
        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: "scss",
                cssDir: "dist",
                generatedImagesDir: "images/generated",
                imagesDir: "images",
                javascriptsDir: "scripts",
                fontsDir: "fonts",
                //importPath: "./bower_components",
                httpImagesPath: "../images",
                httpGeneratedImagesPath: "../images/generated",
                httpFontsPath: "../fonts",
                relativeAssets: true,
                assetCacheBuster: false,
                noLineComments: true,
                raw: "Sass::Script::Number.precision = 10\n"
            },
            dist: {
                options: {
                    generatedImagesDir: "dist/images/generated"
                }
            },
            server: {
                options: {
                    sourcemap: true
                }
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            scripts_test: {
                files: '<%= jshint.scripts_test.src %>',
                tasks: ['jshint:scripts_test']
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Default task
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'compass:dist']);
};

