const test = Vue.createApp({
    data() {
      return {
        // 遊戲
        guess: 0,
        answer: Math.floor(Math.random() * 100) + 1,
        // 狀態
        turn: 5,
        result: "",
        history: [],
        hint: "",
        // 分數
        score: 0,
        // 按鈕
        againShow: false,
        submitHide: true
      };
    },
    methods:{
      // 送出
      guessSubmit(){
        console.log(this.answer);
        // 判斷是否答對
        if (this.guess == this.answer) {
          this.result = "答對"
          this.history.push(this.guess)
          this.hint = ""
          this.score += 1
          this.turn -= 1
          this.playAgain()
        }else {
          this.result = "答錯"
          this.history.push(this.guess)
          this.turn -= 1
          if(this.turn < 1) {
            this.playAgain()
            this.result = `再接再厲，答案是${this.answer}`
          }
          // 提示
          if (this.guess > this.answer) {
            this.hint = "猜太大了"
          }else{
            this.hint = "猜太小了"
          }
        }
        this.guess = 0
      },
      // 再一局
      playAgain(){
        this.submitHide = false
        this.againShow = true
      },
      // 重新遊戲
      newGame(){
        this.answer = Math.floor(Math.random() * 100) + 1
        this.submitHide = true
        this.againShow = false
        this.result = ""
        this.history = []
        this.hint = ""
        this.turn = 5
      }
    }
  }).mount("#vue");
  