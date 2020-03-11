const app = new PIXI.Application();
document.body.appendChild(app.view);

//Creating the image and than making it blury. 
const littleDudes = PIXI.Sprite.from('Blur2.png');
littleDudes.x = (app.screen.width / 2) - 200;
littleDudes.y = 10;
app.stage.addChild(littleDudes);

//Blurfilter for the images.
const blurFilter1 = new PIXI.filters.BlurFilter();
const blurFilter2 = new PIXI.filters.BlurFilter();

//Implementing the blur on the images.
littleDudes.filters = [blurFilter1];
littleRobot.filters = [blurFilter2];

let count = 0;
//Blur amount.

app.ticker.add(() => {
    count += 0.005;

    const blurAmount = Math.cos(count);
    const blurAmount2 = Math.sin(count);

    blurFilter1.blur = 20 * (blurAmount);
    blurFilter2.blur = 20 * (blurAmount2);
});
