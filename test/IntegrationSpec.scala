import java.util.concurrent.TimeUnit
import org.specs2.mutable._

import play.api.test._
import play.api.test.Helpers._

/**
 * add your integration spec here.
 * An integration test will fire up a whole play application in a real (or headless) browser
 */
class IntegrationSpec extends Specification {

  "Application" should {

    "work from within a browser" in new WithBrowser {
      running(TestServer(3333), FIREFOX) {
        browser =>

          browser.goTo("http://localhost:3333/")

          browser.pageSource() must contain("class=\"register-page\"");
      }
    }

    "have admin page" in {
      running(TestServer(3333), FIREFOX) {
        browser =>

          browser.goTo("http://localhost:3333/admin")

          browser.pageSource() must contain("class=\"admin-page\"");

      }

    }
  }

}