package controllers

import play.api.mvc._
import play.api.libs.json.Json
import models.Modules
import play.api.data.Form
import play.api.data.Forms._
import models.Module

object ModuleController extends Controller {

  implicit val writes = Json.writes[Module]

  def index(college: String) = Action {
    val jsons = Modules.all(college)
    Ok(Json.toJson(jsons)).as("application/json")
  }

  val moduleForm = Form(
    tuple(
      "id" -> longNumber,
      "enable" -> boolean
    )
  )

  def update(college: String, id: Long) = Action {
    implicit request =>
      moduleForm.bindFromRequest.value map {
        module =>
          Modules.update(college)(module)
          Ok("{\"status\":\"success\"}").as("application/json")
      } getOrElse BadRequest
  }
}