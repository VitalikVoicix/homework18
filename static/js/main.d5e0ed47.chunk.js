(this.webpackJsonphomework18=this.webpackJsonphomework18||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/padlock.e5d0fcfd.png"},27:function(e,t,n){e.exports=n(43)},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),s=n.n(o),i=(n(32),n(9)),l=n(1),c=(n(33),function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Homework \u211618"),r.a.createElement("h2",null,'"StyledComponents. Animations"'))}),p=n(13),u=n(14),m=n(17),d=n(16),h=(n(34),n(15)),b=n.n(h),g=n(6),f=n(7);function x(){var e=Object(g.a)(["\nposition: absolute;\ntop: 63%;\nleft: 50.9%;\ntransform: translate(-50%, -50%);\nz-index: 55555;\nheight: 540px;\nwidth: 422px;\nbackground: #1b1b1b;\nborder-radius: 6px;\ntext-align: center;\n\n"]);return x=function(){return e},e}function v(){var e=Object(g.a)(["\n\nposition: absolute;\ntop:400px;\nright: 35px;\nheight: 45px;\nwidth:330px ;\nborder: 2px solid whitesmoke;\nbackground:#90CAF9; \nborder-radius: 10px;\ncolor:#1B1B1B;\npadding: 3px;\nfont-size: 20px;\n\n\n"]);return v=function(){return e},e}function w(){var e=Object(g.a)(["\n\n     position: absolute;\n    top:350px;\n    left: 33px;\n    width: 20px;\n\n"]);return w=function(){return e},e}function E(){var e=Object(g.a)(["\n    position: absolute;\n    top:290px;\n    right: 35px;\n    height: 35px;\n    width:330px ;\n    border: 2px solid whitesmoke;\n    background: #1b1b1b;\n    border-radius: 7px;\n    color:white;\n    padding: 3px;\n\n"]);return E=function(){return e},e}function k(){var e=Object(g.a)(["\nposition: absolute;\ntop:220px;\nright: 35px;\nheight: 35px;\nwidth:330px ;\nborder: 2px solid whitesmoke;\nbackground: #1b1b1b;\nborder-radius: 7px;\ncolor:white;\npadding: 3px;\n\n"]);return k=function(){return e},e}function y(){var e=Object(g.a)(["\n\nposition: absolute;\ntop:160px;\nright: 30px;\nheight: 35px;\nborder: 2px solid whitesmoke;\nbackground: #1b1b1b;\nborder-radius: 7px;\ncolor:white;\npadding: 3px;\n\n"]);return y=function(){return e},e}function N(){var e=Object(g.a)(["\n\nposition: absolute;\ntop:160px;\nleft:30px;\nheight: 35px;\nborder: 2px solid whitesmoke;\nbackground: #1b1b1b;\nborder-radius: 7px;\ncolor:white;\npadding: 3px;\n"]);return N=function(){return e},e}function I(){var e=Object(g.a)(["\n           color: white;\n           position: absolute;\n           top:90px;\n           font-size: 30px;\n           left:140px;\n"]);return I=function(){return e},e}var S=f.a.p(I()),j=f.a.input(N()),C=f.a.input(y()),O=f.a.input(k()),P=f.a.input(E()),A=f.a.input(w()),B=f.a.button(v()),W=f.a.div(x()),Y=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={mail:"Your Mail ",password:"Password",border:""},e.saveEmail=function(t){e.setState({mail:t.target.value})},e.savePassword=function(t){e.setState({password:t.target.value})},e.CheckData=function(){e.state.mail===localStorage.getItem("mail")&&e.state.password===localStorage.getItem("password")?alert("true"):alert("false")},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapperIn"},r.a.createElement("div",{className:"display"},r.a.createElement("img",{src:b.a,alt:"lock",className:"lockPng"}),r.a.createElement("p",{className:"signIn"},"Sign in"),r.a.createElement("input",{type:"mail",className:"mailIn",placeholder:this.state.mail,style:{border:this.state.border},onChange:this.saveEmail}),r.a.createElement("input",{type:"password",className:"passwordIn",style:{border:this.state.border},placeholder:this.state.password,onChange:this.savePassword}),r.a.createElement("input",{type:"checkbox",className:"checkboxIn"}),r.a.createElement("p",{className:"wantIn"},"Remember me"),r.a.createElement("button",{className:"btnIn",onClick:this.CheckData},"Sign in"),r.a.createElement("p",{className:"forgotIn"},"Forgot password?"),r.a.createElement(i.b,{to:"/signUp",className:"hrefIn",onClick:this.showBlock},"Dont have an account? Sign up "),r.a.createElement("p",{className:"footerIn"},"Copyright \xa9 Your Website 2020.")),r.a.createElement("span",null))}}]),n}(a.Component),z=(n(41),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showSignIn:!1,mail:"Your Mail ",password:"Password",name:"First Name *",surname:"Last Name*",border:""},e.saveEmail=function(t){e.setState({mail:t.target.value})},e.savePassword=function(t){e.setState({password:t.target.value})},e.saveName=function(t){e.setState({name:t.target.value})},e.saveSurname=function(t){e.setState({surname:t.target.value})},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(W,null,r.a.createElement("img",{src:b.a,alt:"lock",className:"lockPng"}),r.a.createElement(S,null,"Sign up"),r.a.createElement(j,{type:"text",style:{border:this.state.border},placeholder:this.state.name,onChange:this.saveName}),r.a.createElement(C,{type:"text",style:{border:this.state.border},placeholder:this.state.surname,onChange:this.saveSurname}),r.a.createElement(O,{style:{border:this.state.border},placeholder:this.state.mail,type:"mail",onChange:this.saveEmail}),r.a.createElement(P,{style:{border:this.state.border},type:"password",placeholder:this.state.password,onChange:this.savePassword}),r.a.createElement(A,{type:"checkbox"}),r.a.createElement("p",{className:"wantUp"},"I want to receive inspiration marketing via mail"),r.a.createElement(B,null,"Sign up"),r.a.createElement("div",{className:"href"},r.a.createElement(i.b,{to:"/signIn"},"Already have an account? Sign in")),r.a.createElement("p",{className:"footer"},"Copyright \xa9 Your Website 2020."),r.a.createElement("div",null,r.a.createElement("span",null))))}}]),n}(a.Component));n(42);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(c,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",exact:!0,render:function(){return r.a.createElement(l.a,{to:"/signIn"})}}),r.a.createElement(l.b,{path:"/signIn",exact:!0,component:Y}),r.a.createElement(l.b,{path:"/signUp",exact:!0,component:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.d5e0ed47.chunk.js.map