const boxs = document.querySelectorAll('.box')
const fill = document.querySelector('.fill')

boxs.forEach(item =>{
    item.addEventListener('dragover', dragOver)
    item.addEventListener('dragenter', dragEnter)
    item.addEventListener('dragleave', dragLeave)
    item.addEventListener('drop', dragDrop)
})  

function dragOver(e){
    e.preventDefault()
}

function dragLeave() {
    this.className.indexOf('hold') == -1? this.className: this.className = 'box'
}

function dragEnter(e) {
    e.preventDefault()
    this.className.indexOf('hold') == -1? this.className += ' hold': this.className

}

function dragDrop() {
    this.append(fill)
}