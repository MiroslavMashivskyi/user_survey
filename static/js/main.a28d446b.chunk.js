(this.webpackJsonpuser_survey=this.webpackJsonpuser_survey||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"question_1":{"question":"\u042f\u043a \u043d\u0430\u0437\u0438\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0430 \u0441\u043d\u0430\u0439\u043f\u0435\u0440\u0441\u044c\u043a\u0430 \u0433\u0432\u0438\u043d\u0442\u0456\u0432\u043a\u0430 \u0443 \u0433\u0440\u0456 CS:GO?","answers":["Fnatic","Na`Vi","Team Secret","OG"],"correct_answers":["OG"]},"question_2":{"question":"\u0425\u0442\u043e \u0432\u0438\u0433\u0440\u0430\u0432 \u0433\u043e\u043b\u043e\u0432\u043d\u0438\u0439 \u0442\u0443\u0440\u043d\u0456\u0440 \u0440\u043e\u043a\u0443 \u043f\u043e Dota 2 - The International 2019?","answers":["Fnatic","Na`Vi","Team Secret","OG"],"correct_answers":["OG"]},"question_3":{"question":"\u0421\u043a\u0456\u043b\u044c\u043a\u0438 \u043a\u0430\u0440\u0442 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u0444\u0456\u0446\u0456\u0439\u043d\u0438\u0445 \u0442\u0443\u0440\u043d\u0456\u0440\u0430\u0445 \u0421S:GO?","answers":["12","24","6","7"],"correct_answers":["7"]},"question_4":{"question":"\u041d\u0430\u0439\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0448\u0430 \u0443\u043a\u0430\u0440\u0457\u043d\u0441\u044c\u043a\u0430 \u043a\u0456\u0431\u0435\u0440\u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430","answers":["VP","Na`Vi","Astralis","HR"],"correct_answers":["Na`Vi"]},"question_5":{"question":"\u042f\u043a\u0430 \u0433\u0440\u0430 \u0454 \u0433\u043e\u043b\u043e\u0432\u043d\u0438\u043c \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043e\u043c \u0434\u0438\u0441\u0446\u0438\u043f\u043b\u0456\u043d\u0438 DOTA2","answers":["LOL","WOW","Startcraft","Battlerite"],"correct_answers":["LOL"]}}')},27:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(13),o=n.n(s),c=n(8),u=n(25),i=n(12),l=n(19),m=function(e){var t=[];for(var n in e)t.push(e[n]);return t},w={questions:m(l),count:1,text:"\u042f\u043a \u043d\u0430\u0437\u0438\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0430 \u0441\u043d\u0430\u0439\u043f\u0435\u0440\u0441\u044c\u043a\u0430 \u0433\u0432\u0438\u043d\u0442\u0456\u0432\u043a\u0430 \u0443 \u0433\u0440\u0456 CS:GO?",answers:["Fnatic","Na`Vi","Team Secret","OG"],correct_answers:["OG"],totalCount:m(l).length,result:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEXT_QUESTION":return Object(i.a)(Object(i.a)({},e),{},{count:e.count+1,text:t.question,answers:t.answers,correct_answers:t.correct_answers});case"SET_ANSWER":return Object(i.a)(Object(i.a)({},e),{},{result:[].concat(Object(u.a)(e.result),[t.answer])});default:return e}},E=n(26),q=n(7),v=n.n(q),O=n(2),_=function(e){var t=e.setAnswer,n=e.nextQuestion,s=e.correct_answers,o=e.questions,c=e.question,u=e.count,i=e.answers,l=e.totalCount,m=Object(r.useState)(),w=Object(E.a)(m,2),f=w[0],q=w[1];return u>o.length?a.a.createElement(O.a,{to:"/result"}):a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"\u041d\u0430\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0442\u0438 \u043a\u0456\u0431\u0435\u0440\u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0438\u0439 \u0435\u043a\u0441\u043f\u0435\u0440\u0442"),a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(f===s[0]),u<o.length?n(o[u].question,o[u].answers,o[u].correct_answers):n(null,null,null),q(null)},className:"form"},a.a.createElement("div",null,"\u0417\u0430\u043f\u0438\u0442\u0430\u043d\u043d\u044f \u2116",u),a.a.createElement("div",{className:"question"},c),a.a.createElement("div",{className:"radio"},i.map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement("input",{value:e,type:"radio",id:t,name:"answer",onChange:function(e){return q(e.target.value)}}),a.a.createElement("label",{htmlFor:t},e))}))),a.a.createElement("div",{className:"footer"},a.a.createElement("span",{className:"count"},u,"/",l),a.a.createElement("button",{className:"button"},"\u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438"))))};_.prototype={question:v.a.string};var h=_,d=Object(c.b)((function(e){return{questions:e.question.questions,question:e.question.text,count:e.question.count,answers:e.question.answers,totalCount:e.question.totalCount,correct_answers:e.question.correct_answers,result:e.question.result}}),(function(e){return{nextQuestion:function(t,n,r){e(function(e,t,n){return{type:"NEXT_QUESTION",question:e,answers:t,correct_answers:n}}(t,n,r))},setAnswer:function(t){e(function(e){return{type:"SET_ANSWER",answer:e}}(t))}}}))(h),b=n(17),p=function(e){var t=e.result;return a.a.createElement("div",{className:"result"},a.a.createElement("span",{className:"result__text"},"\u0423 \u0412\u0430\u0441 ",t.filter((function(e){return!0===e})).length," \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0445 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439 \u0437 5"))},N=Object(c.b)((function(e){return{result:e.question.result}}))(p),S=function(){return a.a.createElement(b.a,null,a.a.createElement(O.b,{exact:!0,path:"/",render:function(){return a.a.createElement(d,null)}}),a.a.createElement(O.b,{path:"/result",render:function(){return a.a.createElement(N,null)}}))};n(37);var g=function(){return a.a.createElement(S,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=n(10),T=Object(j.b)({question:f}),y=Object(j.c)(T);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,{store:y},a.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.a28d446b.chunk.js.map