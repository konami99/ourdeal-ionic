module.exports = {
    dir:{
        build: 'build',
        compile: 'bin',
        assets: 'assets',
        vendor: 'vendor',
        app: 'app',
        lib: 'lib',
        src: 'src',
        config: 'config'
    },

    src:{
        css:['src/**/*.css'],
        json:['src/**/*.json'],
        config: 'config/**/*',
        assets: 'src/assets/**/*',
        js: ['client/Ang/**/*.js'],
        ts : ['client/Ang/**/*.ts'],
        tslibs : 'libs/**/*.ts',
        html:['src/**/*.html'],
        index: 'src/index.html',
        lib: {
            js: ['lib/**/*.js'],
            css: ['lib/**/*.css']
        }
    }
};
