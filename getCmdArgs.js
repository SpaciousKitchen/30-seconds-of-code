
/*
command-line 으로 받은 arguments를 node script로 넘기는 함수

시작 시 실행 인자를 받으려면 process.argv로 받을 수 있다.
slice함수를 이용해 배열의 3번째 인덱스 값( 1,2인덱스는 node 와 파일 경로에 대한 정보를 담고 있음)으로 부터  arguments를 반환한다.
*/
const getCmdArs = () => process.argv.slice(2);

//node getCmdArgs.js --name=Song --age=27
console.log(getCmdArs()); //[ '--name=Song', '--age=27' ]