package models

import anorm.SqlParser._
import anorm._
import play.api.db.DB
import anorm.~
import play.api.Play.current

case class Module(id: Long, collegeId: Long, name: String, desc: String, url: String, displayIndex: Int, enable: Boolean) {
  def enable(b: Boolean) = DB.withConnection {
    implicit c =>
      val enableValue: Int = if (b) 1 else 0
      SQL("update REGISTER_MODULE set enable={enable} where id={id}")
        .on('id -> id,
        'enable -> enableValue).executeUpdate
  }
}

object Modules {

  def findById(collegeName: String)(id: Long) = all(collegeName).find(_.id == id)

  def update(collegeName: String)(module: (Long, Boolean)) = findById(collegeName)(module._1).get.enable(module._2)


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
        .on('college -> college)
        .as(simple *)
  }

}
