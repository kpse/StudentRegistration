package models

import play.api.db._
import anorm._
import anorm.SqlParser._
import play.api.Play.current

case class College(id: Long, name: String, title: String)

object Colleges {
  val simple = {
    get[Long]("id") ~
      get[String]("name") ~
      get[String]("title") map {
      case id ~ name ~ desc =>
        College(id, name, desc)
    }
  }


  def all: List[College] = DB.withConnection {
    implicit c =>
      SQL("select * from college")
        .as(simple *)
  }

  def findByName(college: String) = all.find {
    _.name == college
  }

}
