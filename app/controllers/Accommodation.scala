package controllers

import play.api.mvc._
import models.Accommodation
import play.api.libs.json._
import play.api.data.Form
import play.api.data.Forms.{tuple, text, optional}

object Accommodations extends Controller {

  implicit val writes = Json.writes[Accommodation]

  def show(id: Long) = Action {
    Accommodation.findById(id).map {
      acc =>
        Ok(Json.toJson(acc)).as("application/json")
    }.getOrElse(NotFound)
  }

  def all = Action {
    val jsons = Accommodation.all
    Ok(Json.toJson(jsons)).as("application/json")
  }

  val accommodationForm = Form(
    tuple(
      "name" -> text,
      "imageUrl" -> text,
      "desc" -> optional(text)
    )
  )

  def create =  Action { implicit request =>
    accommodationForm.bindFromRequest.value map { acc =>
      val created = Accommodation.create(acc)
      Ok(Json.toJson(created)).as("application/json")
    } getOrElse BadRequest
  }
}
