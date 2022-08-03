const btn = document.querySelector(".btn");
const joker = document.querySelector(".joker");
//用于测试joker的数据
// joker.innerHTML = "this is a test";

//当点击btn时候发请求获取joke
btn?.addEventListener("click", () => {
  generateJoke();
});
// 初始化时候调用一次
generateJoke();
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  joker.innerHTML = data.joke;
}
