require.config({
    baseUrl: EnvJasmine.rootDir,
    paths: {
        mocks:      EnvJasmine.mocksDir,
        specs:      EnvJasmine.specsDir,

        // Libraries
        // FIXME: we don't want to depend on jQuery necessarily, but for
        // now the sbt plugin requires it
        jquery:     'vendor/jquery-1.9.0.min.js'
    }
});
