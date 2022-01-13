const express = require('express') //express 모듈을 가져옴
const app = express() //위에서 가져온 function을 이용해서 새로운 express app을 만듬
const port = 5000 //포트는 아무거나 해도 됨. 5000번으로 넣음.

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jenny:abcd1234@cluster0.a1tey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


//루트 디렉토리에 hello world라는것을 출력되게 해줌
app.get('/', (req, res) => {
res.send('Hello World!')
})

//이 앱이 포트 5000번에서 실행이 됨.
//5000포트에 listen을 하면, 아래 example~~ 문구가 프린트가 됨!
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




/*
이렇게 하고 package.json에 들어가서 

 "scripts": { 
    "start": "node index.js",  <<<<<<<<<<이부분
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  start: node index.js라고 적은후,
  터미널에 npm run start 치기.

  그럼 index.js부터 시작됨.
*/