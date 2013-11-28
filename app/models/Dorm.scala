package models

import anorm.SqlParser._
import anorm._
import play.api.db.DB
import anorm.~
import play.api.Play.current

case class Dorm(id: Long, studentId: Long, AccommodationId: Long)

object Dorms {
  def update(tuple: (Long, Long, String, Long)) = {
    DB.withConnection {
      implicit connection =>
        SQL("update dorm set accommodationId={accommodation} where studentId={student} and id={id} ")
          .on(
          'student -> tuple._2,
          'accommodation -> tuple._1,
          'id -> tuple._4
        ).executeUpdate()
        findById(tuple._4)(0)
    }
  }


  val simple = {
    get[Long]("id") ~
      get[Long]("studentId") ~
      get[Long]("accommodationId") map {
      case id ~ studentId ~ accId =>
        Dorm(id, studentId, accId)
    }
  }


  def all(studentId: Long): List[Dorm] = DB.withConnection {
    implicit c =>
      SQL("select * from dorm")
        .as(simple *)
  }

  def findById(value: Long) = DB.withConnection {
    implicit c =>
      SQL("select * from dorm where id={id}").on('id -> value)
        .as(simple *)
  }

  def create(tuple: (Long, Long, String)) = {
    DB.withConnection {
      implicit connection =>
        val id: Option[Long] = SQL("insert into dorm(studentId, accommodationId) values ({student}, {accommodation})")
          .on(
          'student -> tuple._2,
          'accommodation -> tuple._1
        ).executeInsert()
        findById(id.getOrElse(-1))(0)
    }
  }


}