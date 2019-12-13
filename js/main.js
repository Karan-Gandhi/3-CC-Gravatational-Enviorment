var ball;

window.onload = () => {
    ball = new GObject('circle', 2.7 * 1000, 1, window.innerWidth / 2, 500, 10, 0, 0, 50, 50, 10, "black");
    ball.vely = 100;
    setInterval(() => {
        ball.update();
        ball.draw();

        if (ball.hitGround()) {
            ball.vely = -ball.vely
            console.log("s");
        }
        if (ball.hitWall()) {
            ball.velx = -ball.velx
            console.log("s");
        }
    }, 100);
}