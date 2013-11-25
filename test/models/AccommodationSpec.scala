package models

import org.specs2.mutable.Specification
import play.api.test.Helpers._
import play.api.test.FakeApplication

class AccommodationSpec extends Specification {
  val college = "jiaotong"

  "The Accommodation" should {
    "get all records" in {
      running(FakeApplication(additionalConfiguration = inMemoryDatabase())) {


        Accommodations.all(college).size must beGreaterThan(0)
      }
    }

    "findByID" in {
      running(FakeApplication(additionalConfiguration = inMemoryDatabase())) {



        val tuple = ("Testname",
          "http://image.url.com",
          Option("desc")
          )
        val acc = Accommodations.create(tuple, college)

        val accommodation = Accommodations.findById(college)(acc.get.id)

        accommodation.get.imageUrl must beEqualTo("http://image.url.com")
      }
    }

    "findByName" in {
      running(FakeApplication(additionalConfiguration = inMemoryDatabase())) {

        val tuple = ("Testname",
          "http://image.url.com",
          Option("desc")
          )
        Accommodations.create(tuple, college)

        val accommodation = Accommodations.findByName(college)("Testname")

        accommodation.get.imageUrl must beEqualTo("http://image.url.com")
      }
    }
  }

}