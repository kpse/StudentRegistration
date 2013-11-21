package models

import play.api.db._
import anorm._
import anorm.SqlParser._
import play.api.Play.current

case class Accommodation(id: Long, name: String, desc: String, imageUrl: String)

object Accommodations {

  def findById(id: Long) = all.find { _.id == id }
  def findByName(name: String) = all.find { _.name == name }

  val simple = {
    get[Long]("id") ~
      get[String]("name") ~
      get[String]("desc") ~
      get[String]("imageUrl") map {
      case id ~ name ~ desc ~ imageUrl =>
        Accommodation(id, name, desc, imageUrl)
    }
  }


  def all(): List[Accommodation] = DB.withConnection {
    implicit c =>
      SQL("select * from accommodation").as(simple *)
  }

  def create(tuple:(String, String, Option[String])) = {
    DB.withConnection {
      implicit connection =>
        val id : Option[Long] = SQL("insert into accommodation(name, desc, imageUrl) values ({name}, {desc}, {imageUrl})").on(
          'name -> tuple._1,
          'desc -> tuple._3.getOrElse(tuple._1),
          'imageUrl -> tuple._2
        ).executeInsert()
        findById(id.getOrElse(-1))
    }
  }


  def delete(id: Long) {}

}

