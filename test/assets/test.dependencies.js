// Dependencies for the unit test via Jasmine
EnvJasmine.loadGlobal(EnvJasmine.libDir + "../underscore.js");
EnvJasmine.loadGlobal(EnvJasmine.libDir + "../jquery-1.9.0.min.js");
EnvJasmine.loadGlobal(EnvJasmine.libDir + "angular.min.js");
EnvJasmine.loadGlobal(EnvJasmine.libDir + "angular-ui-router.js");
EnvJasmine.loadGlobal(EnvJasmine.rootDir + "accommodation.js");
//
EnvJasmine.loadGlobal(EnvJasmine.testDir + "/config/angular-mocks.js");

// Require.js + config
EnvJasmine.loadGlobal(EnvJasmine.libDir + "../require/require-2.1.9.js");
EnvJasmine.loadGlobal(EnvJasmine.testDir + "/require.conf.js");