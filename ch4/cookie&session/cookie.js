// 쿠키란?
// 접속자가 누구인지 기억하기 위해 서버는 요청에 대한 응답을 할 때 함께 전송되는 것
// 쿠키의 특징
// 1. 유효기간이 존재
// 2. 'key-value' 쌍으로 구성
// 처음 서버에게 응답을 받을 때 쿠키를 함께 받음 -> 다음에 요청할 때에는 쿠키를 함께 동봉하여 서버는 사용자가 누구인지 파악
// 이 때 모든 쿠키들은 Header를 통해 오가게 됨
// 이러한 기능 때문에 개인정보 유출 방지를 위해 쿠키를 꾸준히 삭제를 해야 함
const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    //res.writeHead: 응답의 헤더에 쿠키를 기록
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test'}); // Set-Cookie: 브라우저한테 다음과 같은 값의 쿠키를 저장하라는 의미
    res.end('Hello Cookie');
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기 중입니다.');
    });
// 쿠키의 형태
// name=zerocho;year=1994와 같은 문자열 형태, 쿠키 간에는 세미콜론으로 구분
// req 객체의 쿠키는 req.headers.cookie에 들어있음 

//파비콘(favicon)이란?
// 탭창에서의 앞쪽 이미지를 의미