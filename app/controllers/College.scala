package controllers

import play.api.mvc._
import play.api.libs.json.Json
import models.{College, Colleges}

object CollegeController extends Controller {
  implicit val writes = Json.writes[College]

  def show(name: String) = Action {
    Colleges.findByName(name).map {
      c =>
        Ok(Json.toJson(c)).as("application/json")
    }.getOrElse(NotFound)
  }


}