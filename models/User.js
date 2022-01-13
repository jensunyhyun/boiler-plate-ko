//모델은 스키마를 감싸주는 것.

//mongoose 모듈을 가져와줌
const mongoose = require('mongoose');

//스키마 생성 moongse를 이용해서 스키마를 생성함
const userSchema = mongooose.Schema({
    name: { 
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //띄어쓰기 없애줌
        unique: 1 //똑같은 이메일은 쓰지 못하게. unique
    },
    password: {
        type: String,
        maxlength: 50
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //관리자 or 일반유저
        type: Number,
        default: 0 //1: 관리자, 0: 일반유저, 기본은 0으로 해두겠다.
    },
    image: String, //이렇게만 할수도 있음.
    token: { //토큰을 줘서 나중에 유효성을 관리할 수 있음.
        type: String
    },
    tokenExp: { //토큰을 사용할 수 있는 기간
        type: Number
    }
})

//스키마를 모델로 감싸줌, 'User'는 모델의 이름, userSchema는 스키마 이르
const User = mongoose.model('User', userSchema)

//다른 파일에서도 쓸수 있게 exports
module.exports = {User}