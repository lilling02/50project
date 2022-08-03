const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    doTheTrick(e.target);
  });
});

console.log(good);
//传入改变的对象
function doTheTrick(theClickedOne) {
  //当三个都是打开时候
  if (good.checked && cheap.checked && fast.checked) {
    //最后一个打开的是good，那么fast 就变成false
    if (good === theClickedOne) {
      fast.checked = false;
    }
    //最后一个打开的是cheap，那么good 就变成false
    if (cheap === theClickedOne) {
      good.checked = false;
    }
    //最后一个打开的是fast，那么cheap 就变成false
    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}

// good.addEventListener("click", () => {
//   alert(11);
// });
