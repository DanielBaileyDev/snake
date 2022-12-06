class GameObject{
    constructor(width, height, color, startX = 0, startY = 0){
        this.x = startX;
        this.y = startY;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}