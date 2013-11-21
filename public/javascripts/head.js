var collegeDirective = function (Colleges) {
    return {
        link: function (scope, elem, attrs) {
            var promise = Colleges.get(attrs.college);
            promise.then(function (c) {
                scope.college = c;
            });
        }
    }
}