// MODULE
var gameApp = angular.module('gameApp', []);

//creates a table of rows with a filler value
function createBoard() {
    var board = {};
    board.rows = [];

    for (var i = 0; i < 3; i++) {
        var row = {};
        row.spots = [];

        for (var j = 0; j < 3; j++) {
            var spot = {};
            spot.isTaken = '_';
            spot.isX = false;
            spot.isO = false;
            row.spots.push(spot);
        }

        board.rows.push(row);
    }
    return board;
}



// CONTROLLERS

gameApp.controller('mainController', ['$scope', function ($scope) {


    $scope.currentPlayer = 'x';
    $scope.isDisabled = false;
    $scope.winner = false;
    $scope.tie = false;
    $scope.playerX = false;
    $scope.canPlay = true;
    $scope.count = 0;

    //start a game
    $scope.board = createBoard();

    //this is how each player takes a turn
    $scope.switchPlayer = function (spot) {

        if (spot.isTaken === '_' && $scope.canPlay) {
            spot.isTaken = $scope.currentPlayer;
            $scope.count++;
            $scope.currentPlayer = $scope.currentPlayer === 'x' ? 'o' : 'x';
        }
        $scope.checkValue(spot);
        $scope.checkWinner();
    };

    $scope.checkValue = function (spot) {
        if (spot.isTaken === 'x') {
            spot.isX = true;

        }
        else if (spot.isTaken === 'o') {
            spot.isO = true;
        }
    }
    $scope.checkWinner = function () {
        //first row check
        if ($scope.board.rows[0].spots[0].isTaken === 'x' && $scope.board.rows[0].spots[1].isTaken === 'x' && $scope.board.rows[0].spots[2].isTaken === 'x') {
            $scope.winner = 'x';
            $scope.canPlay = false;
            return $scope.winner;
        }
        else if ($scope.board.rows[0].spots[0].isTaken === 'o' && $scope.board.rows[0].spots[1].isTaken === 'o' && $scope.board.rows[0].spots[2].isTaken === 'o') {
            $scope.winner = 'o';
            $scope.canPlay = false;
            return $scope.winner;
        }
            //second row check
        else if ($scope.board.rows[1].spots[0].isTaken === 'x' && $scope.board.rows[1].spots[1].isTaken === 'x' && $scope.board.rows[1].spots[2].isTaken === 'x') {
            $scope.winner = 'x';
            $scope.canPlay = false;
            return $scope.winner;
        }
        else if ($scope.board.rows[1].spots[0].isTaken === 'o' && $scope.board.rows[1].spots[1].isTaken === 'o' && $scope.board.rows[1].spots[2].isTaken === 'o') {
            $scope.winner = 'o';
            $scope.canPlay = false;
            return $scope.winner;
        }

            //third row check
        else if ($scope.board.rows[2].spots[0].isTaken === 'x' && $scope.board.rows[2].spots[1].isTaken === 'x' && $scope.board.rows[2].spots[2].isTaken === 'x') {
            $scope.winner = 'x';
            $scope.canPlay = false;
            return $scope.winner;
        }
        else if ($scope.board.rows[2].spots[0].isTaken === 'o' && $scope.board.rows[2].spots[1].isTaken === 'o' && $scope.board.rows[2].spots[2].isTaken === 'o') {
            $scope.winner = 'o';
            $scope.canPlay = false;
            return $scope.winner;
        }

            //first column check
        else if ($scope.board.rows[0].spots[0].isTaken === 'x' && $scope.board.rows[1].spots[0].isTaken === 'x' && $scope.board.rows[2].spots[0].isTaken === 'x') {
            $scope.winner = 'x';
            $scope.canPlay = false;
            return $scope.winner;
        }
        else if ($scope.board.rows[0].spots[0].isTaken === 'o' && $scope.board.rows[1].spots[0].isTaken === 'o' && $scope.board.rows[2].spots[0].isTaken === 'o') {
            $scope.winner = 'o';
            $scope.canPlay = false;
            return $scope.winner;
        }

            //second column check
        else if ($scope.board.rows[0].spots[1].isTaken === 'x' && $scope.board.rows[1].spots[1].isTaken === 'x' && $scope.board.rows[2].spots[1].isTaken === 'x') {
            $scope.winner = 'x';
            $scope.canPlay = false;
            return $scope.winner;
        }
        else if ($scope.board.rows[0].spots[1].isTaken === 'o' && $scope.board.rows[1].spots[1].isTaken === 'o' && $scope.board.rows[2].spots[1].isTaken === 'o') {
            $scope.winner = 'o';
            $scope.canPlay = false;
            return $scope.winner;
        }

            //third column check
        else if ($scope.board.rows[0].spots[2].isTaken === 'x' && $scope.board.rows[1].spots[2].isTaken === 'x' && $scope.board.rows[2].spots[2].isTaken === 'x') {
            $scope.winner = 'x';
            $scope.canPlay = false;
            return $scope.winner;
        }
        else if ($scope.board.rows[0].spots[2].isTaken === 'o' && $scope.board.rows[1].spots[2].isTaken === 'o' && $scope.board.rows[2].spots[2].isTaken === 'o') {
            $scope.winner = 'o';
            $scope.canPlay = false;
            return $scope.winner;
        }

            //first diagonal check
        else if ($scope.board.rows[0].spots[0].isTaken === 'x' && $scope.board.rows[1].spots[1].isTaken === 'x' && $scope.board.rows[2].spots[2].isTaken === 'x') {
            $scope.winner = 'x';
            $scope.canPlay = false;
            return $scope.winner;
        }
        else if ($scope.board.rows[0].spots[0].isTaken === 'o' && $scope.board.rows[1].spots[1].isTaken === 'o' && $scope.board.rows[2].spots[2].isTaken === 'o') {
            $scope.winner = 'o';
            $scope.canPlay = false;
            return $scope.winner;
        }

            //second diagonal check
        else if ($scope.board.rows[0].spots[2].isTaken === 'x' && $scope.board.rows[1].spots[1].isTaken === 'x' && $scope.board.rows[2].spots[0].isTaken === 'x') {
            $scope.winner = 'x';
            $scope.canPlay = false;
            return $scope.winner;
        }
        else if ($scope.board.rows[0].spots[2].isTaken === 'o' && $scope.board.rows[1].spots[1].isTaken === 'o' && $scope.board.rows[2].spots[0].isTaken === 'o') {
            $scope.winner = 'o';
            $scope.canPlay = false;
            return $scope.winner;
        }

            //tie check
        else if ($scope.count === 9) {
            $scope.tie = "no one";
            $scope.canPlay = false;
            return $scope.tie;
        }
    };

    //new game
    $scope.resetGame = function () {
        $scope.winner = false;
        $scope.tie = false;
        $scope.canPlay = true;
        $scope.board = createBoard();
        $scope.count = 0;
    };
}]);

// DIRECTIVES
