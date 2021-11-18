function createDiv(ships, eventClick, hit){
    let div_1 = document.createElement('div')
    div_1.setAttribute('class', 'pain')
    let body = document.getElementsByTagName('body')[0]
    body.appendChild(div_1)
    for (let i=0; i<100; i++){
        let div_2 = document.createElement('div')
        div_2.uid = i
        div_2.addEventListener('click',(event) => {eventClick(ships, event, img, i)})
        div_2.setAttribute('class', 'brd')
        let img = document.createElement('img')
        img.uid = i
        img.setAttribute('class', 'ship')
        if (ships.includes(i)){
            img.setAttribute('src', 'img/ship.png')
            div_2.appendChild(img)
        }
        div_1.appendChild(div_2)
    }
}

export default createDiv
