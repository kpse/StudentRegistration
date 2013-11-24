package models

import anorm.SqlParser._
import anorm._
import play.api.db.DB
import anorm.~
import play.api.Play.current

case class Module(id: Long, collegeId: Long, name: String, desc: String, url: String, displayIndex: Int, enable: Boolean)

object Modules {
  val simple = {
    get[Long]("id") ~
      get[Long]("collegeId") ~
      get[String]("name") ~
      get[String]("url") ~
      get[String]("desc") ~
      get[Int]("displayIndex") ~
      get[Int]("enable") map {
      case id ~ collegeId ~ name ~ url ~ desc ~ displayIndex ~ 0 =>
        Module(id, collegeId, name, desc, url, displayIndex, false)
      case id ~ collegeId ~ name ~ url ~ desc ~ displayIndex ~ 1 =>
        Module(id, collegeId, name, desc, url, displayIndex, true)
    }
  }


  def all(college: String): List[Module] = DB.withConnection {
    implicit c =>
      SQL("select a.* from REGISTER_MODULE a, college c where a.collegeId = c.id and c.name={college}")
        .on("college" -> college)
        .as(simple *)
  }

  def findByName(name: String) = all(name).find {
    _.name == name
  }

}
