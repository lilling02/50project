// @ts-nocheck
const range = document.getElementById('range')
const label = document.querySelector('label')

range?.addEventListener('input',e => {
    // 获取滑轨的数值
    let value = e.target.value
    //获得滑轨的宽 和label的宽
    const range_width = getComputedStyle(e.target).getPropertyValue('width').split("px")[0]
    const label_width = getComputedStyle(label).getPropertyValue('width').split("px")[0]
    //获取最小值
    const max = +e.target.max
    const min = +e.target.min

    //lable 要移动的值为 目前滑轨的值value * 滑轨的宽度 / 滑轨最大值 - lable的宽度的一半
    const move = range_width/100 * value - (label_width/2) + scale(value, min, max, 10, -10)
    label.style.left=`${move}px`;
    //将滑轨的数值给lable
    label.innerHTML = value
    
})


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }