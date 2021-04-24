var myController = function ($scope) {
    $scope.timer = 1;
    $scope.count10 = function () {
        setInterval(function () {
            if (10 > $scope.timer) {
                $scope.timer++;
            } else {
                $scope = 1;
            }
            $scope.$apply();
        }, 1000);
    };
}