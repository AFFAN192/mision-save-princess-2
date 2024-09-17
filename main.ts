controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(e)
})
let projectile: Sprite = null
let e: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . c c c . . . . . . 
    . . . . . . c b 5 c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b c b 5 b b 5 b f b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
e = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let en = sprites.create(img`
    . . . d 4 d . . . . d 5 d . . . 
    . . d d 1 d f d e d d 1 d d . . 
    c c d 1 f 1 f 1 1 d 1 f 1 d c c 
    c . d f f d f d e d f f d d . c 
    c . . d 4 d . . . . d 5 d . . c 
    c . . . . . . . . . . . . . . c 
    `, SpriteKind.Enemy)
let ene = sprites.create(img`
    . . . . 3 . . . . . . . . . . 
    . . . . . 3 3 . . 3 . . . . . 
    . . . . . . 3 3 3 . . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 3 3 3 3 8 8 8 8 8 3 3 3 3 . 
    3 9 9 9 9 3 8 8 8 3 9 9 9 9 3 
    9 c c 8 8 9 3 8 3 9 8 8 c c 9 
    c 8 8 1 1 8 9 3 9 8 1 1 8 8 c 
    a 8 1 9 f 1 8 9 8 1 9 f 1 8 a 
    a 8 1 f f 1 8 c 8 1 f f 1 8 a 
    a a 8 1 1 8 c 9 c 8 1 1 8 a a 
    a a a 8 8 a a a a a 8 8 a a a 
    a a a a a a a a a a a a a a a 
    8 a 8 a 8 a 8 a 8 a 8 a 8 a 8 
    . 8 . 8 . 8 . 8 . 8 . 8 . 8 . 
    `, SpriteKind.Enemy)
let enem = sprites.create(img`
    . 6 6 . . . . . . . . 
    . . 6 6 . . . . . . . 
    . . 6 6 6 . . . . 6 . 
    . . 6 6 6 . . . 6 . . 
    . . 6 6 6 6 . 6 6 . . 
    . 6 6 6 6 6 6 6 6 . . 
    . 6 6 6 6 6 6 6 6 6 . 
    . 6 6 6 6 6 6 6 6 6 . 
    6 1 1 9 6 6 6 9 1 1 6 
    6 6 1 8 1 6 1 8 1 6 6 
    6 6 6 8 6 6 6 8 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 1 6 1 6 1 6 6 6 
    . 6 1 6 1 6 1 6 1 6 . 
    . . 6 6 6 6 6 6 6 . . 
    . . . 6 6 6 6 6 . . . 
    `, SpriteKind.Enemy)
let enemi = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Enemy)
let enemei = sprites.create(img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c . . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f b 3 b c 3 b c f b b c c c . 
    . c b b b b b b c f b c b c c . 
    . c b b b b b b c b b c b b c . 
    c b 1 b b b 1 b b b c c c b c . 
    c b b b b b b b b c c c c c . . 
    f b c b b b c b b b b f c . . . 
    f b 1 f f f 1 b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(e, sprites.dungeon.darkGroundNorthWest0)
tiles.placeOnRandomTile(en, sprites.dungeon.darkGroundNorthWest0)
tiles.placeOnRandomTile(ene, sprites.dungeon.darkGroundNorthWest0)
tiles.placeOnRandomTile(enem, sprites.dungeon.darkGroundNorthWest0)
tiles.placeOnRandomTile(enemi, sprites.dungeon.darkGroundNorthWest0)
tiles.placeOnRandomTile(enemei, sprites.dungeon.darkGroundNorthWest0)
e.follow(mySprite, 20)
en.follow(mySprite, 20)
ene.follow(mySprite, 20)
enem.follow(mySprite, 20)
enemei.follow(mySprite, 20)
enemi.follow(mySprite, 20)
