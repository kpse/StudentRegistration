name := "StudentRegistration"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
   "com.h2database" % "h2" % "1.3.168"
)     

play.Project.playScalaSettings

seq(jasmineSettings : _*)

appJsDir <+= sourceDirectory { src => src  / ".." / "public" / "javascripts" }

appJsLibDir <+= sourceDirectory { src => src  / ".." / "public" / "javascripts" / "vendor" / "angularjs" }

jasmineTestDir <+= sourceDirectory { src => src / ".." / "test" / "assets" }

jasmineConfFile <+= sourceDirectory { src => src / ".." / "test" / "assets" / "test.dependencies.js" }

jasmineRequireJsFile <+= sourceDirectory { src => src / ".." / "public" / "javascripts" / "vendor" / "require" / "require-2.1.9.js" }

jasmineRequireConfFile <+= sourceDirectory { src => src / "test" / "assets" / "js" / "require.conf.js" }

(test in Test) <<= (test in Test) dependsOn (jasmine)