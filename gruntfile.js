module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'source/images/',
                    src: '**/*.{png,gif,jpg,svg,pdf}',
                    dest: 'public/images',
                    filter: 'isFile',
                    flatten: false
                }, {
                    expand: true,
                    cwd: 'source/js',
                    src: ['**/*.js','!**/libs/plugins/*.*'],
                    dest: 'public/js',
                    filter: 'isFile',
                    flatten: false
                }, {
                    expand: true,
                    src: 'source/less/*.css',
                    dest: 'public/css',
                    flatten: true
                }, {
                    expand: true,
                    src: 'source/fonts/*',
                    dest: 'public/fonts',
                    flatten: true
                }]
            }
        },
        less: {
            development: {
                options: {
                    paths: ["public/css"],
                    compress: true
                },
                files: [{
                    "public/css/style.css": ["source/less/plugins.less","source/less/style.less"]
                },{
                    "public/css/fonts-face.css": "source/less/fonts-face.less"
                }]
            },
        },
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [{
                    cwd: "source/views",
                    src: "*.jade",
                    dest: "public",
                    ext: ".html",
                    expand: true,
                }]
            }
        },
        connect: {
            server: {
              options: {
                port: 7000,
                hostname: '*',
                base: {
                  path: 'public/',
                  options: {
                    index: 'index.html',
                    maxAge: 300000
                  }
                }
              }
            }
        },
        uglify: {
            all_plugin : {
                options : {
                    sourceMap : false
                },
                src : 'source/js/libs/plugins/*.js',
                dest : 'source/js/libs/plugins.min.js'
            }
        },
        watch: [{
            files: "source/less/*",
            tasks: ["less"]
        }, {
            files: "source/views/**",
            tasks: ["jade"]
        }, {
            files: "source/js/plugins/*",
            tasks: ["uglify"]
        },{
            files: "source/images/**",
            tasks: ["copy"]
        }, {
            files: "source/js/**",
            tasks: ["copy"]
        }, {
            files: "source/fonts/*",
            tasks: ["copy"]
        }]
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['less','uglify','copy', 'jade', 'connect:server', 'watch']);
};