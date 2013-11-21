package controllers

import play.api.mvc._

object Register extends Controller {
  def index(name: String) = Action {
    Ok(views.html.index(name))
  }

  def admin(name: String) = Action {
    Ok(views.html.admin(name))
  }


}