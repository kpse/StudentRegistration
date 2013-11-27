var studentService = function ($resource) {
    return $resource('/college/:college/student/:student', {college: '@college', student: '@student'});
}

var dormService = function ($resource) {
    return $resource('/college/:college/student/:student/accommodation/:dorm', {college: '@college', student: '@student', dorm: '@dorm'});
}