class GameBoard
{
    constructor()
    {
        this.gameBoard = [[0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0]]
        this.attacks = []
        this.sunkShips = [] 
    }
    placeShip(ship,...cords)
    {
        if(ship.length === cords.length)
        {
            cords.forEach((value) => {
                this.gameBoard[value[0]][value[1]] = ship
            })
        }
    }
    receiveAttack()
    {

    }
}

export {GameBoard}