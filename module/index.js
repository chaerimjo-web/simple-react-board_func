/*
1단계
import { func1 } from "./func.js";
import { func2 } from "./func.js";
func1(); //실행
func2();

2단계
import obj from "./func.js";
obj.func1(); //func1 실행함
obj.func2();
*/


import obj from "./func.js";
obj.func('#title1','Hello'); 
obj.func('#title2','World');