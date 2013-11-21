package controllers

import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Ok(views.html.index("Students registration"))
  }

  def admin() = Action {
    Ok(views.html.admin("Admin Management"))
  }
}