document.write(`<script src="gift.js" onload="gift = new Gift();"></script>`)
let timer = null
let gift = null
/**
 * 开始游戏
 * @param time Integer 执行时间
 * */
function startGame(obj, time = 5) {
  // console.log('startGame arguments', arguments)
  if (!timer) {
    // 开始动画
    startAnimation(obj, time)
  } else {
    // 停止动画
    stopAnimation(obj)
  }
}
// 开始动画
function startAnimation(obj, time = 5) {
  obj.innerText = "??"
  setAnimationDuration(1)
  timer = setTimeout(() => {
    stopAnimation(obj)
  }, time * 1000)
}
// 停止动画
function stopAnimation(obj) {
  setAnimationDuration(0)
  clearTimeout(timer)
  timer = null
  obj.innerText = gift ? gift.gift() : `GO`
  
}
// 设置动画状态
function setAnimationDuration(duration) {
  const boxList = document.getElementsByClassName("box");
  for (const box of boxList) {
    box.style.animationDuration = duration + "s";
  }
}