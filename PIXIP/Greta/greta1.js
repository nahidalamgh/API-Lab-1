const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

// Scale mode for all textures, will retain pixelation
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const sprite = PIXI.Sprite.from('medfineprint.png');
//https://pixijs.io/examples/examples/assets/bunny.png
// Set the initial position
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

// Opt-in to interactivity
sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;

// Pointers normalize touch and mouse
sprite.on('pointerdown', onClick);
let zoomInCounter=0; // Skaiciuoju kiek kartu zoomed

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only

app.stage.addChild(sprite);

function onClick() {
    if(event.button===0){ //Left click=0, right =2, tikrinu ar left
        zoomInCounter++;//Pridedu zoom kieki kai paspaudzia
        if(zoomInCounter<=3){ // 3kartus zoom leidzia
            sprite.scale.x *= 1.1;
            sprite.scale.y *= 1.1;
        }
    }
    else if(event.button===2 && zoomInCounter!=0){ //Tikrina ar right ir kad nebutu default dydzio mazinamas
        zoomInCounter--;//sumazinu zoom kieki kai paspaudzia right
        sprite.scale.x /= 1.1;
        sprite.scale.y /= 1.1;
    }
}