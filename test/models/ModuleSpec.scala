package models

import org.specs2.mutable.Specification
import play.api.test.Helpers._
import play.api.test.FakeApplication

class ModuleSpec extends Specification {
  val college = "jiaotong"

  "The Module" should {
    "get all records" in {
      running(FakeApplication(additionalConfiguration = inMemoryDatabase())) {

        Modules.all(college).size must beGreaterThan(0)
      }
    }

    "update enable status by id" in {
      running(FakeApplication(additionalConfiguration = inMemoryDatabase())) {

        val moduleInfo = (1L, false)

        Modules.update(college)(moduleInfo)

        val module = Modules.findById(college)(moduleInfo._1)

        module.get.enable must beEqualTo(false)
      }
    }

  }

}