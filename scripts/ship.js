class Ship
{
constructor(len)
{
    this.length = len;
    this.sunk = false;
    this.numberOfHits = 0;
}
hit()
{
    this.numberOfHits++;
}
isSunk()
{
    if (this.length <= this.numberOfHits)
        return true
    return false
}
}

export {Ship}