const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

// Scale mode for all textures 
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const sprite = PIXI.Sprite.from('kanin.png');

// Setting the position
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;

// Pointers normalize touch and mouse
sprite.on('pointerdown', onClick);

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

app.stage.addChild(sprite);

function onClick() {
    sprite.scale.x *= 1.25;
    sprite.scale.y *= 1.25;
}
