const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

console.time('전체 시간');
console.log('평범한 로그 입니다. 쉽표로 구분하여 여러값을 찍을 수 있습니다.');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요.');

console.table([{name: '제로', birth: 1994}, {name: 'hero', birth: 1988}]);

console.dir(obj, { colors: false, depth: 2});
console.dir(obj, { colors: true, depth: 1});

console.time('시간 측정');
for(let i = 0; i < 10000; i++){}
console.timeEnd('시간 측정');

function b(){
    console.trace('에러 위치 추적');
}
function a() {
    b();
}
a();

console.timeEnd('전체 시간');