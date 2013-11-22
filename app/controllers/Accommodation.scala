package controllers

import play.api.mvc._
import models.{Accommodation, Accommodations}
import play.api.libs.json._
import play.api.data.Form
import play.api.data.Forms.{tuple, text, optional}

object AccommodationController extends Controller {

  implicit val writes = Json.writes[Accommodation]

  def show(id: Long) = Action {
    Accommodations.findById(id).map {
      acc =>
        Ok(Json.toJson(acc)).as("application/json")
    }.getOrElse(NotFound)
  }

  def index = Action {
    val jsons = Accommodations.all
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
      val created = Accommodations.create(acc)
      Ok(Json.toJson(created)).as("application/json")
    } getOrElse BadRequest
  }
}
