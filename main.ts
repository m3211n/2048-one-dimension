controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    let Y = 0
    for (let Y = 0; Y <= maxIndex; Y++) {
        list = sampleCol(Y)
        list = pushBackward(list)
    }
    replaceCol(Y, list)
})
function replaceCol (i: number, src: number[]) {
    for (let Y = 0; Y <= maxIndex; Y++) {
        mainList[Y * mainListDimension + i] = src[Y]
    }
}
function replaceRow (i: number, src: number[]) {
    for (let X = 0; X <= maxIndex; X++) {
        mainList[i * mainListDimension + X] = src[X]
    }
}
function createList () {
    for (let X = 0; X <= maxIndex; X++) {
        for (let Y = 0; Y <= maxIndex; Y++) {
            mainList.unshift(0)
        }
    }
}
function sampleRow (rowIndex: number) {
    sampledRow = []
    for (let X = 0; X <= maxIndex; X++) {
        sampledRow.push(mainList[rowIndex * mainListDimension + X])
    }
    return sampledRow
}
function sampleCol (colIndex: number) {
    sampledCol = []
    for (let Y = 0; Y <= maxIndex; Y++) {
        sampledCol.push(mainList[mainListDimension * Y + colIndex])
    }
    return sampledCol
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let Y = 0; Y <= maxIndex; Y++) {
        list = sampleRow(Y)
        list = pushBackward(list)
        replaceRow(Y, list)
    }
})
function pushBackward (_set: number[]) {
    tmpSet = _set
    tmpSet.reverse()
    tmpSet = pushForward(tmpSet)
    tmpSet.reverse()
    return tmpSet
}
function pushForward (_set: number[]) {
    tmpSet = []
    Merged = false
    zerosToAdd = 0
    for (let X = 0; X <= maxIndex; X++) {
        cell = _set[maxIndex - X]
        if (cell != 0) {
            if (cell == tmpSet[0] && !(Merged)) {
                tmpSet[0] = cell * 2
                zerosToAdd += 1
            } else {
                tmpSet.unshift(cell)
            }
        } else {
            zerosToAdd += 1
        }
    }
    for (let index = 0; index < zerosToAdd; index++) {
        tmpSet.unshift(0)
    }
    return tmpSet
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let Y = 0; Y <= maxIndex; Y++) {
        list = sampleRow(Y)
        list = pushForward(list)
        replaceRow(Y, list)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let Y = 0; Y <= maxIndex; Y++) {
        list = sampleCol(Y)
        list = pushForward(list)
        replaceCol(Y, list)
    }
})
let cell = 0
let zerosToAdd = 0
let Merged = false
let tmpSet: number[] = []
let sampledCol: number[] = []
let sampledRow: number[] = []
let list: number[] = []
let mainList: number[] = []
let maxIndex = 0
let mainListDimension = 0
scene.setBackgroundColor(12)
mainListDimension = 4
maxIndex = mainListDimension - 1
mainList = []
createList()
console.log(mainList)
