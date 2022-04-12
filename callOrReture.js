
///type에 따라 함수를 실행 할 지 , 반환 할 지 는 결정 하는 함수
const callOrReturn = (fn, ...arg) =>
    typeof fn === 'function' ? fn(...arg) : fn;


//console.log(callOrReturn(x => x * x, 2));
//console.log(callOrReturn(3, 2));


//응용
//Promise 여부에 따라 실행의 차이 


const go = (fn, ...arg) =>
    fn instanceof Promise ? fn.then(arg).then(console.log) : console.log(fn(...arg));

go(Promise.resolve(2), a => a + 1)
go(a => a + 1, 2)