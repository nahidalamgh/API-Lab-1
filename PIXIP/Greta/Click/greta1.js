const app = new PIXI.Application({ backgroundColor: 0x99bbf2 });
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
let zoomInCounter=0; // Counting the times it's zoomed in

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only

app.stage.addChild(sprite);

function onClick() {
    if(event.button===0){ //Left click=0, right =2, checking if left
        zoomInCounter++;//Adding zoom count on click
        if(zoomInCounter<=3){ // Limiting the number of zooms
            sprite.scale.x *= 1.1;
            sprite.scale.y *= 1.1;
        }
    }
    else if(event.button===2 && zoomInCounter!=0){ //Checking if right and no zooming out from the initial size image
        zoomInCounter--; //lessen the zoom count after right click
        sprite.scale.x /= 1.1;
        sprite.scale.y /= 1.1;
    }
}