function createList () {
    for (let X = 0; X <= mainListDimension - 1; X++) {
        for (let Y = 0; Y <= mainListDimension - 1; Y++) {
            mainList.unshift(0)
        }
    }
}
function sampleRow (rowIndex: number) {
    sampledRow = []
    for (let X = 0; X <= mainListDimension - 1; X++) {
        sampledRow.push(mainList[rowIndex * mainListDimension + X])
    }
    return sampledRow
}
let sampledRow: number[] = []
let mainList: number[] = []
let mainListDimension = 0
scene.setBackgroundColor(12)
mainListDimension = 4
mainList = []
createList()
console.log(mainList)
