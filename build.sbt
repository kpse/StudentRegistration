import net.litola.SassPlugin

name := "StudentRegistration"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
   "com.h2database" % "h2" % "1.3.168"
)     

play.Project.playScalaSettings


play.Project.playScalaSettings ++ SassPlugin.sassSettings
