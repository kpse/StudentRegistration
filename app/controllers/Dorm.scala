package controllers

import play.api.mvc._
import models.{Dorms, Dorm}
import play.api.libs.json.Json
import play.api.data.Form
import play.api.data.Forms._

object DormController extends Controller {

  implicit val writes = Json.writes[Dorm]

  def index(college: String, studentId: Long) = Action {
    val jsons = Dorms.all(studentId)
    Ok(Json.toJson(jsons)).as("application/json")
  }

  val dormCreateForm = Form(
    tuple(
      "dorm_id" -> longNumber,
      "student" -> longNumber,
      "college" -> text
    )
  )

  def create(college: String, studentId: Long) = Action {
    implicit request =>
      dormCreateForm.bindFromRequest.value map {
        dorm =>
          val created = Dorms.create(dorm)
          Ok(Json.toJson(created)).as("application/json")
      } getOrElse BadRequest
  }

  val dormUpdateForm = Form(
    tuple(
      "dorm_id" -> longNumber,
      "student" -> longNumber,
      "college" -> text,
      "dorm" -> longNumber
    )
  )

  def update(college: String, studentId: Long, dorm: Long) = Action {
    implicit request =>
      dormUpdateForm.bindFromRequest.value map {
        dorm =>
          val updated = Dorms.update(dorm)
          Ok(Json.toJson(updated)).as("application/json")
      } getOrElse BadRequest
  }

}
