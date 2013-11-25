package controllers

import play.api.mvc._
import models.{Accommodation, Accommodations}
import play.api.libs.json._
import play.api.data.Form
import play.api.data.Forms.{tuple, text, optional}

object AccommodationController extends Controller {

  implicit val writes = Json.writes[Accommodation]

  def show(college: String, id: Long) = Action {
    Accommodations.findById(college)(id).map {
      acc =>
        Ok(Json.toJson(acc)).as("application/json")
    }.getOrElse(NotFound)
  }

  def index(college: String) = Action {
    val jsons = Accommodations.all(college)
    Ok(Json.toJson(jsons)).as("application/json")
  }

  val accommodationForm = Form(
    tuple(
      "name" -> text,
      "imageUrl" -> text,
      "desc" -> optional(text)
    )
  )

  def create(college: String) = Action {
    implicit request =>
      accommodationForm.bindFromRequest.value map {
        acc =>
          val created = Accommodations.create(acc, college)
          Ok(Json.toJson(created)).as("application/json")
      } getOrElse BadRequest
  }
}
