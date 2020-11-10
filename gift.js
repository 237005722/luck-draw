class Gift {

  data = {}
  text = `谢谢惠顾`

  constructor ({ min = Gift.config.min, max = Gift.config.max } = {}) {
    this.min = min
    this.max = max
    this.data = {}
    this.init()
  }

  static config = {
    // min: 1000, // 默认随机4位数
    // max: 9999
    min: 10, // 默认随机2位数
    max: 99
  }

  static random (min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min
    return num
  }

  luck() {
    return Gift.random(this.min, this.max)
  }

  init () {
    console.log('init')
    for (let i = 0; i < 2; i++) {
      this.data[this.luck()] = '一等奖'
    }
    for (let i = 0; i < 4; i++) {
      this.data[this.luck()] = '二等奖'
    }
    for (let i = 0; i < 6; i++) {
      this.data[this.luck()] = '三等奖'
    }
    for (let i = 0; i < 8; i++) {
      this.data[this.luck()] = '四等奖'
    }
    for (let i = 0; i < 10; i++) {
      this.data[this.luck()] = '五等奖'
    }
  }
  
  gift () {
    const key = this.luck()
    const text = this.data[key] || this.text
    console.log(key, text)
    return text
  }
  
}