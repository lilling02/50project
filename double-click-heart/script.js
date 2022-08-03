// 获取div元素
const loveMe = document.querySelector('.loveMe')
// 获取点赞次数的那个span
const times = document.getElementById('times')

//计算点赞次数的属性
let clickTime = 0;

//计算是否双击
let doubleClick = 0;
loveMe?.addEventListener('click',(e)=>{
    doubleClick++
    console.log(doubleClick);
    if (doubleClick >= 2) {
        //如果双击   
        createHeart(e)
        clickTime++
        times.innerHTML = clickTime
    }
    setTimeout(() => {
        //点击次数清零
        doubleClick = 0
    }, 300);
})

const createHeart = (e)=>{
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    //获取点击的坐标信息
    let x = e.clientX
    let y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    console.log(heart.style.top,heart.style.left);

    loveMe.appendChild(heart)

    setTimeout(() => heart.remove(), 1000)

}