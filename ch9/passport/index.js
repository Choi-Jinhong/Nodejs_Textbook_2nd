const passport = require('passport');
const local = require('./localStrategy');
// const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () =>{
    // 로그인 시 실행
    // req.session 객체에 어떤 데이터를 저장할지 정하는 메서드
    // 매개변수 User는 어디서 오는가?
    // 사용자 정보 객체를 세션에 아이디로 저장하는 것
    passport.serializeUser((user, done) => {
        done(null, user.id); // 첫번째 인수는 err 발생 시 사용, 두번째 인수는 저장하고 싶은 데이터를 입력 -> 4.3 쿠키와 세션의 이해하기
    });

    // 세션에 저장한 아이디를 통해 사용자 정보 객체를 불러오는 것
    // 세션에 불필요한 데이터를 담아두지 않기 위한 과정
    passport.deserializeUser((id, done) =>{
        User.findOne({where: {id}})
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    local();
    // kakao();
}

// 로그인의 전체 과정
// 1. 라우터를 통해 로그인 요청이 들어옴
// 2. 라우터에서 passport.authenticate 메서드 호출
// 3. 로그인 전략 수행
// 4. 로그인 성공 시 사용자 정보 객체와 함께 req.login 호출
// 5. req.login 메서드가 passport.serializeUser 호출
// 6. req.session에 사용자 아이디만 저장
// 7. 로그인 완료

// 로그인 이후 과정
// 1. 요청이 들어옴
// 2. 라우터에 요청이 도달하기 전에 passport.session 미들웨어가 passport.deserializeUser 메서드 호출
// 3. req.session에 저장된 아이디로 데이터베이스에서 사용자 조회
// 4. 조회된 사용자 정보를 req.user에 저장
// 5. 라우터에서 req.user 객체 사용 가능