const passport = require('passport');
const local = require('./localStrategy');
// const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () =>{
    // 로그인 시 실행
    // req.session 객체에 어떤 데이터를 저장할지 정하는 메서드
    // 매개변수 User는 어디서 오는가?
    passport.serializeUser((user, done) => {
        done(null, user.id); // 첫번째 인수는 err 발생 시 사용, 두번째 인수는 저장하고 싶은 데이터를 입력 -> 4.3 쿠키와 세션의 이해하기
    });

    passport.deserializeUser((id, done) =>{
        User.findOne({where: {id}})
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    local();
    // kakao();
}