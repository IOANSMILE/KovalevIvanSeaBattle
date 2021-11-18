
function createImg(i){
    const div = document.getElementsByClassName('brd')
    let imgMiss = document.createElement('img')
    imgMiss.setAttribute('class', 'imgs')
    imgMiss.setAttribute('src', 'img/add.png')
    div[i].appendChild(imgMiss)
}



export default createImg