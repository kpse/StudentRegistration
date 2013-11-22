package models

import play.api.db._
import anorm._
import anorm.SqlParser._
import play.api.Play.current

case class Accommodation(id: Long, collegeId: Long, name: String, desc: String, imageUrl: String)

object Accommodations {

  def findById(college: String)(id: Long) = all(college).find {
    _.id == id
  }

  def findByName(college: String)(name: String) = all(college).find {
    _.name == name
  }

  val simple = {
    get[Long]("id") ~
      get[Long]("collegeId") ~
      get[String]("name") ~
      get[String]("desc") ~
      get[String]("imageUrl") map {
      case id ~ collegeId ~ name ~ desc ~ imageUrl =>
        Accommodation(id, collegeId, name, desc, imageUrl)
    }
  }


  def all(college: String): List[Accommodation] = DB.withConnection {
    implicit c =>
      SQL("select a.* from accommodation a, college c where a.collegeId = c.id and c.name={college}")
        .on("college" -> college)
        .as(simple *)
  }

  def create(tuple: (String, String, Option[String]), college: String) = {
    DB.withConnection {
      implicit connection =>
        val id: Option[Long] = SQL("insert into accommodation(name, desc, imageUrl, collegeId) values ({name}, {desc}, {imageUrl}, {collegeId})")
          .on(
          'name -> tuple._1,
          'desc -> tuple._3.getOrElse(tuple._1),
          'imageUrl -> tuple._2,
          'collegeId -> Colleges.findByName(college).get.id
        ).executeInsert()
        findById(college)(id.getOrElse(-1))
    }
  }


  def delete(id: Long) {}

}

