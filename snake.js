class Snake extends GameObject{
    constructor(width, height, color, startX = 0, startY = 0){
        super(width, height, color, startX, startY);
        this.direction = 1;
        this.parts = [];
    }

    move(blockSize){
        if(this.parts.length >= 1){
            if(this.parts.length > 1){
                for(let i = this.parts.length-2; i>=0;i--){
                    this.parts[i+1].x = this.parts[i].x;
                    this.parts[i+1].y = this.parts[i].y;
                }
            }
            this.parts[0].x = this.x;
            this.parts[0].y = this.y;
        }
        if(this.direction === 0)
            this.y -= blockSize;
        else if(this.direction === 1)
            this.x += blockSize;
        else if(this.direction === 2)
            this.y += blockSize;
        else
            this.x -= blockSize;
    }

    hitWall(boardWidth, boardHeight){
        return this.y < 0 || this.x < 0 || this.x >= boardWidth || this.y >= boardHeight;
    }

    hitSelf(){
        return this.parts.some(part=>part.x === this.x && part.y === this.y);
    }

    grow(blockSize){
        let x = this.x;
        let y = this.y;
        if(this.direction === 0)
            y += blockSize;
        else if(this.direction === 1)
            x -= blockSize;
        else if(this.direction === 2)
            y -= blockSize;
        else
            x += blockSize;
        this.parts.push(new SnakePart(this.width, this.height, this.color, x, y));
    }

    reset(){
        this.x = 0;
        this.y = 0;
        this.direction = 1;
        this.parts = [];
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.parts.forEach(part=>part.draw(ctx));
    }
}

class SnakePart extends GameObject{
    constructor(width, height, color, startX = 0, startY = 0){
        super(width, height, color, startX, startY);
    }
}