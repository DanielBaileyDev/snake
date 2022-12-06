class Board{
    constructor(blockSize, boardBlocks, color){
        this._blockSize = blockSize;
        this._boardBlocks = boardBlocks;
        this._width = blockSize * boardBlocks;
        this._height = blockSize * boardBlocks;
        this.color = color;
    }
    
    get blockSize(){
        return this._blockSize;
    }

    get boardBlocks(){
        return this._boardBlocks;
    }

    get width(){
        return this._width;
    }
    
    get height(){
        return this._height;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.width, this.height);
    }
}