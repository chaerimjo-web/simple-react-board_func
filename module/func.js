/*
1단계
export function func1(){
    document.querySelector('#title1').innerHTML = 'Hello';
}

const func2 = function(){
    document.querySelector('#title2').innerHTML = 'World';
}
export {func2}

//1과 2 둘 다 export 함
*/

/*
2단계
//객체로 -> 변수 + 함수
//{속성:값, 속성:값, 속성:function()}
const obj = {
  func1 : function(){
    document.querySelector('#title1').innerHTML = 'Hello';
  },func2 : function(){
    document.querySelector('#title2').innerHTML = 'World';
  }
}
export default obj; //객체 obj를 내보내기 할 수 있음
//default->디폴트로 엑스포트하면 중괄호 필요 x
//export->중괄호 넣어야함
*/

const obj = {
  func : function(target,msg){ //target 누구에게 msg 어떤것을
    document.querySelector(target).innerHTML = msg;
  }
}
export default obj;