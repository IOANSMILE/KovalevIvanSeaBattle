import createDiv from "./createDiv/createDiv.js";
import createImg from "./img/createImgMiss.js";



function random(min, max, num) {
    let result = []
    let i, arr = [];
    for (i = min; i <= max; i++) {
        arr.push(i)
    }
    for (i = 0; i < num; i++) {
        result.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0])
    }
    return result

}

const hits = new Set() // почитать
function clickHandler(ships, event, img, i){
    event.preventDefault();
    if (ships.includes(event.target.uid)){
        hits.add(event.target.uid)
        img.style.visibility = "visible"
        hit()

    }else {
        console.log(ships)
        createImg(i)
        console.log('промазал')
    }
}

function hit(){
    if (hits.size === 10){
        console.log('победа')
    } else {
        console.log(`Осталось ${10-hits.size} кораблей`)
    }
}


window.onload = () => {
    const shipLocation = random(0, 100, 10)
    createDiv(shipLocation, clickHandler)


}

