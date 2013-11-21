package controllers

import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Redirect("/jiaotong/register")
  }

  def admin() = Action {
    Redirect("/jiaotong/admin")
  }
}