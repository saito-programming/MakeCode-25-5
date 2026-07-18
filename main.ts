input.onButtonPressed(Button.A, function () {
    プレイヤー.change(LedSpriteProperty.X, -1)
})
function 敵の生成 () {
    敵 = game.createSprite(randint(0, 4), 0)
}
input.onButtonPressed(Button.AB, function () {
    if (発射中 == 0) {
        弾の生成()
        発射中 = 1
    }
})
function 弾の生成 () {
    プレイヤーの位置 = プレイヤー.get(LedSpriteProperty.X)
    弾 = game.createSprite(プレイヤーの位置, 4)
}
input.onButtonPressed(Button.B, function () {
    プレイヤー.change(LedSpriteProperty.X, 1)
})
function 敵の弾の生成 () {
    敵の位置 = 敵.get(LedSpriteProperty.X)
    敵の弾 = game.createSprite(敵の位置, 0)
}
function プレイヤーを作成 () {
    プレイヤー = game.createSprite(2, 4)
}
let 敵の弾の発射中 = 0
let 敵の弾: game.LedSprite = null
let 敵の位置 = 0
let 弾: game.LedSprite = null
let プレイヤーの位置 = 0
let 敵: game.LedSprite = null
let プレイヤー: game.LedSprite = null
let 発射中 = 0
発射中 = 0
game.setScore(0)
プレイヤーを作成()
敵の生成()
basic.forever(function () {
    敵.change(LedSpriteProperty.X, randint(-1, 1))
    if (敵の弾の発射中 == 0) {
        if (randint(0, 2) > 1) {
            敵の弾の生成()
            敵の弾の発射中 = 1
        }
    }
    basic.pause(500)
})
basic.forever(function () {
    if (発射中 == 1) {
        弾.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (弾.get(LedSpriteProperty.Y) <= 0) {
            if (弾.isTouching(敵)) {
                敵.delete()
                game.addScore(1)
                敵の生成()
            }
            弾.delete()
            発射中 = 0
        }
    }
})
basic.forever(function () {
    if (敵の弾の発射中 == 1) {
        敵の弾.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        if (敵の弾.get(LedSpriteProperty.Y) == 4) {
            if (敵の弾.isTouching(プレイヤー)) {
                game.gameOver()
            }
            敵の弾.delete()
            敵の弾の発射中 = 0
        }
    }
})
