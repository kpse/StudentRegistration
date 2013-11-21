package controllers

import play.api.mvc._

object Schools extends Controller {
  def index(schoolName: String) = Action {
    Redirect("/")
  }
}