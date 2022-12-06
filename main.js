let play = false;
let lost = false;
let score = 0;

document.addEventListener('keydown', controls);

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

let board = new Board(BLOCKSIZE, BOARDBLOCKS, '#a3d4be');
let apple = new Apple(board.blockSize, board.blockSize, '#cc4141');
let snake = new Snake(board.blockSize, board.blockSize, '#198252');

apple.randomizeLocation(board.boardBlocks, board.blockSize);

canvas.width = board.width;
canvas.height = board.height;

function controls(e){
    if(Object.values(KEYS).includes(e.code)){
        e.preventDefault();
        if(!play && e.code === KEYS.SPACE){
            play = true;
            lost = false;
            snake.reset();
            score = 0;
        } else if(snake.direction === 0 || snake.direction === 2){
            if(e.code === KEYS.RIGHT)
                snake.direction = 1;
            else if(e.code === KEYS.LEFT)
                snake.direction = 3;
        } else if(snake.direction === 1 || snake.direction === 3){
            if(e.code === KEYS.UP)
                snake.direction = 0;
            else if(e.code === KEYS.DOWN)
                snake.direction = 2;
        }
    }
}

function gameLoop(){
    if(play){
        update();
        draw();
        if(snake.hitWall(board.width, board.height) || snake.hitSelf()){
            lost = true;
            play = false;
        }
    }else{
        board.draw(ctx);
        ctx.textAlign = 'center';
        ctx.font = '48px serif';
        if(lost){
            ctx.strokeText(`Score: ${score}`, board.width/2, board.height/2 - 25);
            ctx.font = '30px serif';
            ctx.strokeText(`Press Space to play again`, board.width/2, board.height/2 + 25);
        }else{
            ctx.strokeText('Snake', board.width/2, board.height/2 - 25);
            ctx.font = '30px serif';
            ctx.strokeText(`Press Space to play`, board.width/2, board.height/2 + 25);
        }
    }
}

function update(){
    snake.move(board.blockSize);
    if(apple.checkCollision(snake.x, snake.y)){
        score++;
        apple.randomizeLocation(board.boardBlocks, board.blockSize, snake.parts, snake.x, snake.y);
        snake.grow(board.blockSize);
    }
}

function draw(){
    board.draw(ctx);
    apple.draw(ctx);
    snake.draw(ctx);
}

setInterval(gameLoop, 200);
