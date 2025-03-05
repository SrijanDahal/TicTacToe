const typical = (function() {
    let move = 0;
    const game = [
        ["o", "o", "x"],
        ["x", "o", "o"],
        ["o", "x", "x"],
    ];
    const player = {
        name: "Bob",
        name1: "Bill",
    }
    const mark = {
        mark: "X",
        mark1: "O",
    }

    function checkTheMove() {
        if (( game[0][0] === "x" &&  game[0][1] === "x" &&  game[0][2] === "x")
            || ( game[0][0] === "x" &&  game[1][0] === "x" &&  game[2][0] === "x")
            || ( game[0][0] === "x" &&  game[1][1] === "x" &&  game[2][2] === "x")
            || ( game[0][1] === "x" &&  game[1][1] === "x" &&  game[2][1] === "x")
            || ( game[0][2] === "x" &&  game[1][2] === "x" &&  game[2][2] === "x")
            || ( game[0][2] === "x" &&  game[1][1] === "x" &&  game[2][0] === "x")
            || ( game[1][0] === "x" &&  game[1][1] === "x" &&  game[1][2] === "x")
            || ( game[2][0] === "x" &&  game[2][1] === "x" &&  game[2][2] === "x")) {
            return "X wins";
        }
        
        else if (( game[0][0] === "o" &&  game[0][1] === "o" &&  game[0][2] === "o")
            || ( game[0][0] === "o" &&  game[1][0] === "o" &&  game[2][0] === "o")
            || ( game[0][0] === "o" &&  game[1][1] === "o" &&  game[2][2] === "o")
            || ( game[0][1] === "o" &&  game[1][1] === "o" &&  game[2][1] === "o")
            || ( game[0][2] === "o" &&  game[1][2] === "o" &&  game[2][2] === "o")
            || ( game[0][2] === "o" &&  game[1][1] === "o" &&  game[2][0] === "o")
            || ( game[1][0] === "o" &&  game[1][1] === "o" &&  game[1][2] === "o")
            || ( game[2][0] === "o" &&  game[2][1] === "o" &&  game[2][2] === "o")) {
            return "O wins";
        }

        else {
            return "Draw";
        }
    }

    return {
        checkTheMove: checkTheMove(),
        game: game,
    }
})();


console.log(typical.game[0][1]);
console.log(typical.checkTheMove);
