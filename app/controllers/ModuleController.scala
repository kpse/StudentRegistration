package controllers

import play.api.mvc._
import play.api.libs.json.Json
import models.{Module, Modules, Accommodation}

object ModuleController extends Controller {

  implicit val writes = Json.writes[Module]

  def index(college: String) = Action {
    val jsons = Modules.all(college)
    Ok(Json.toJson(jsons)).as("application/json")
  }
}