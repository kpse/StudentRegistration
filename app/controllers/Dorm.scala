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

  val dormForm = Form(
    tuple(
      "dorm_id" -> longNumber,
      "student" -> longNumber,
      "college" -> text
    )
  )

  def create(college: String, studentId: Long) = Action {
    implicit request =>
      dormForm.bindFromRequest.value map {
        dorm =>
          val created = Dorms.create(dorm)
          Ok(Json.toJson(created)).as("application/json")
      } getOrElse BadRequest
  }
  
}
