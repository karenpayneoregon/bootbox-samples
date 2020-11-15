
    $(document).ready(function (e) {
        app.controller('secondaryController',
            function ($scope) {
                var str = "red";
                var result = str.fontcolor("red");
                $scope.color = result;
            });       
    });

