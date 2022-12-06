class Apple extends GameObject{
    constructor(width, height, color, startX = 0, startY = 0){
        super(width, height, color, startX, startY);
    }

    randomizeLocation(boardBlocks, blockSize, snakeParts, snakeX, snakeY){
        let x = Math.floor(Math.random() * boardBlocks) * blockSize;
        let y = Math.floor(Math.random() * boardBlocks) * blockSize;
        while(snakeParts && (snakeParts.some(part=>part.x === x && part.y === y) || snakeX === x && snakeY === y)){
            x = Math.floor(Math.random() * boardBlocks) * blockSize;
            y = Math.floor(Math.random() * boardBlocks) * blockSize;
        }
        this.x = x;
        this.y = y;
    }

    checkCollision(snakeX, snakeY){
        return snakeX === this.x && snakeY === this.y;
    }
}