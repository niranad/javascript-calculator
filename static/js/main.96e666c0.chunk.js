(this.webpackJsonpjavascriptcalculator=this.webpackJsonpjavascriptcalculator||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),u=n.n(r),a=n(3),c=n.n(a),i=(n(12),n(13),n(4)),o=n(5),s=n(7),l=n(6),p=(n(14),n(0)),d=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).handleKeyPress=function(t){switch(void 0!==t.key?t.key:t.which){case"0":case"48":document.getElementById("zero").click();break;case"1":case"49":document.getElementById("one").click();break;case"2":case"50":document.getElementById("two").click();break;case"3":case"51":document.getElementById("three").click();break;case"4":case"52":document.getElementById("four").click();break;case"5":case"53":document.getElementById("five").click();break;case"6":case"54":document.getElementById("six").click();break;case"7":case"55":document.getElementById("seven").click();break;case"8":case"56":document.getElementById("eight").click();break;case"9":case"57":document.getElementById("nine").click();break;case".":case"110":case"190":document.getElementById("decimal").click()}t.shiftKey&&"="===t.key||"+"===t.key||"107"===t.which?document.getElementById("add").click():"="===t.key||"Enter"===t.key||"13"===t.which?document.getElementById("equals").click():"-"===t.key||"109"===t.which||"189"===t.which?document.getElementById("subtract").click():t.shiftKey&&"8"===t.key||"*"===t.key||"106"===t.which?document.getElementById("multiply").click():"/"!==t.key&&"111"!==t.which&&"191"!==t.which||document.getElementById("divide").click()},r.getScreenHeight=function(){r.setState((function(t){return{screenHeight:window.innerHeight}}))},r.input=function(t){if("="!==r.state.operations[r.state.operations.length-1]?"0"!==r.state.currInput||"0"!==t.target.value?r.setState((function(e){return{formula:e.formula+t.target.value,currInput:e.currInput+t.target.value,display:!1}})):r.setState((function(t){return{formula:t.formula,currInput:t.currInput}})):r.setState((function(e){return{formula:t.target.value,currInput:t.target.value,operations:[],input:[],output:0,display:!1}})),r.state.input.length>0)switch(r.state.operations[r.state.operations.length-1]){case"+":r.setState((function(t){return{output:t.input[t.input.length-1]+Number(t.currInput)}}));break;case"-":r.setState((function(t){return{output:t.input[t.input.length-1]-Number(t.currInput)}}));break;case"x":r.setState((function(t){return{output:t.input[t.input.length-1]*Number(t.currInput)}}));break;case"/":r.setState((function(t){return{output:t.input[t.input.length-1]/Number(t.currInput)}}))}},r.decimalize=function(t){-1===r.state.currInput.indexOf(".")&&r.setState((function(e){return{formula:e.formula+t.target.value,currInput:e.currInput+t.target.value}}))},r.delete=function(){if(""!==r.state.currInput)switch(r.setState((function(t){return{formula:t.formula.substring(0,t.formula.length-1),currInput:t.currInput.substring(0,t.currInput.length-1)}})),r.state.operations[r.state.operations.length-1]){case"+":r.setState((function(t){return{output:t.input[t.input.length-1]+Number(t.currInput)}}));break;case"-":r.setState((function(t){return{output:t.input[t.input.length-1]-Number(t.currInput)}}));break;case"x":r.setState((function(t){return{output:t.input[t.input.length-1]*Number(t.currInput)}}));break;case"/":r.setState((function(t){return{output:t.input[t.input.length-1]/Number(t.currInput)}}))}},r.operate=function(t){""===r.state.currInput?/\+|-/.test(t.target.value)&&0===r.state.input.length?r.setState((function(e){return{formula:e.formula+" "+t.target.value,input:e.input.concat(0),operations:e.operations.concat(t.target.value),display:!1}})):/x|\//.test(t.target.value)&&0===r.state.input.length?r.setState((function(t){return{formula:"",currInput:""}})):r.state.operations[r.state.operations.length-1].match(/x|\//)&&"-"===t.target.value?r.setState((function(e){return{currInput:t.target.value,formula:e.formula+t.target.value}})):r.state.operations[r.state.operations.length-1].match(/-/)&&"-"===t.target.value?r.setState((function(e){return{operations:e.operations.slice(0,e.operations.length-1).concat("+"),formula:e.formula+t.target.value}})):/\+|x|\/|-/.test(t.target.value)?r.setState((function(e){return{formula:e.formula+t.target.value,operations:e.operations.slice(0,e.operations.length-1).concat(t.target.value)}})):r.setState((function(e){return{formula:e.formula+t.target.value,currInput:e.currInput+t.target.value}})):1===r.state.input.length&&"-"===r.state.currInput?r.setState((function(e){return{currInput:"",formula:e.formula+t.target.value,operations:[t.target.value]}})):r.setState((function(e){return{formula:e.formula+" "+t.target.value,operations:e.operations.concat(t.target.value),input:e.input.concat(Number(e.currInput)),currInput:""}})),r.state.input.length>0&&(0===r.state.output||Number.isNaN(r.state.output)||r.setState((function(t){return{input:t.input.concat(t.output)}})),"="===r.state.operations[r.state.operations.length-1]&&r.setState((function(e){return{formula:String(e.output)+t.target.value,input:e.input.slice(e.input.length-1),operations:[t.target.value]}})))},r.answer=function(t){"="!==r.state.operations[r.state.operations.length-1]&&(Number.isNaN(r.state.output)?document.getElementById("display").value="Error: invalid expression":r.setState((function(e){return{formula:e.formula+" "+t.target.value,currInput:"",operations:e.operations.concat(t.target.value),display:!0}})))},r.clearScreen=function(){r.setState({formula:"",input:[],currInput:"",operations:[],output:0,display:!0})},r.state={formula:"",currInput:"",input:[],output:0,display:!0,operations:[],screenHeight:548},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress),window.addEventListener("load",this.getScreenHeight),window.addEventListener("resize",this.getScreenHeight)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress),window.removeEventListener("load",this.getScreenHeight),window.removeEventListener("resize",this.getScreenHeight)}},{key:"render",value:function(){var t=this,e=["+","-","x","/"],n=["zero","one","two","three","four","five","six","seven","eight","nine"].map((function(e,n){return Object(p.jsx)("button",{className:"numbers",type:"button",id:e,value:n,onClick:t.input,children:n},"".concat(e).concat(n))})),r=["add","subtract","multiply","divide"].map((function(n,r){return Object(p.jsx)("button",{id:n,className:"operators",value:e[r],onClick:t.operate,children:e[r]},"".concat(n).concat(r))})),u=this.state,a=u.currInput,c=u.output,i=u.formula,o=u.display,s=u.screenHeight;return Object(p.jsxs)("div",{id:"container",children:[s>=548&&Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"A JavaScript Calculator"}),Object(p.jsx)("h3",{children:Object(p.jsx)("em",{children:"Immediate Execution Logic"})})]}),Object(p.jsx)("p",{children:Object(p.jsx)("em",{children:"by Adeniran"})}),Object(p.jsx)("p",{children:Object(p.jsx)("em",{children:"icon sourced from flaticon"})}),Object(p.jsxs)("div",{id:"calculator",children:[Object(p.jsxs)("div",{id:"screen",children:[Object(p.jsx)("input",{id:"formula",type:"text",value:i,readOnly:!0}),Object(p.jsx)("input",{id:"display",type:"text",value:o?c:a,readOnly:!0})]}),n,r,Object(p.jsx)("button",{id:"equals",value:"=",onClick:this.answer,children:"="}),Object(p.jsx)("button",{id:"decimal",value:".",onClick:this.decimalize,children:"."}),Object(p.jsx)("button",{id:"delete",onClick:this.delete,children:"del"}),Object(p.jsx)("button",{id:"clear",title:"clear memory",onClick:this.clearScreen,children:"AC"})]})]})}}]),n}(u.a.Component),m=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(d,{})})};c.a.render(Object(p.jsx)(u.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.96e666c0.chunk.js.map