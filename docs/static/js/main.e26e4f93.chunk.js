(this["webpackJsonphand-to-hold"]=this["webpackJsonphand-to-hold"]||[]).push([[0],{140:function(e,t,a){e.exports={updateButton:"Row_updateButton__foLX4",deleteButton:"Row_deleteButton__1VNz4"}},141:function(e,t,a){e.exports={root:"App_root__2h8CC",content:"App_content__3La4L"}},16:function(e,t,a){e.exports={root:"Menu_root__MQOmE",logo:"Menu_logo__2Fs8L",menuItemContainer:"Menu_menuItemContainer__34ZRI",menuItemSelected:"Menu_menuItemSelected__vXjGs",menuItemText:"Menu_menuItemText__erFnV",dashboardIcn:"Menu_dashboardIcn__2iN_F",sidebar:"Menu_sidebar__FvCyc",icnContainer:"Menu_icnContainer__3uhIT",myProfileIcn:"Menu_myProfileIcn__1c4fB",tooltip:"Menu_tooltip__1sk2c",myProfileItem:"Menu_myProfileItem__20pja",dashboardItem:"Menu_dashboardItem__3jKNM",logout:"Menu_logout__2gg1G",logoutIcon:"Menu_logoutIcon__2CESw"}},219:function(e,t,a){e.exports=a(445)},37:function(e,t,a){e.exports={formWrapper:"UpdateMember_formWrapper__14u5D",form:"UpdateMember_form__CQk1M",formInputWrapper:"UpdateMember_formInputWrapper__3xH5v",inputWrapper:"UpdateMember_inputWrapper__A8lP4",formInput:"UpdateMember_formInput__3tm-Y",submitBtn:"UpdateMember_submitBtn__1s0bY",red:"UpdateMember_red__G1UOm"}},38:function(e,t,a){e.exports={formWrapper:"AddMember_formWrapper__3g1b5",form:"AddMember_form__3lIKb",formInputWrapper:"AddMember_formInputWrapper__2n9IA",inputWrapper:"AddMember_inputWrapper__1z9DV",formInput:"AddMember_formInput__1L3jg",submitBtn:"AddMember_submitBtn__151d1",red:"AddMember_red__2GmRV"}},418:function(e,t,a){},43:function(e,t,a){e.exports={root:"Login_root__LHaDN",rootContent:"Login_rootContent__39hoB",logo:"Login_logo__1pIbe",formWrapper:"Login_formWrapper__2jnrI",form:"Login_form__1wxUV",formInputWrapper:"Login_formInputWrapper__2IQ3R",inputWrapper:"Login_inputWrapper__CjCyD",formInput:"Login_formInput__2dBu1",submitBtn:"Login_submitBtn__1vDS6",red:"Login_red__1IRHr"}},44:function(e,t,a){e.exports={formWrapper:"OTP_formWrapper__CuJiV",form:"OTP_form__1xx23",formInputWrapper:"OTP_formInputWrapper__2U3MY",inputWrapper:"OTP_inputWrapper__1HUVJ",formInput:"OTP_formInput__nJ-si",submitBtn:"OTP_submitBtn__2lgpv",red:"OTP_red__eFdIs"}},444:function(e,t,a){},445:function(e,t,a){"use strict";a.r(t);a(220),a(229);var n=a(0),r=a.n(n),l=a(73),s=a.n(l),c=(a(417),a(418),a(48)),o=a(49),i=a(51),m=a(23),u=a(52),d=a(55),p=a(64),f=function(e){console.log("Saving user token to storage... (".concat(e,")")),localStorage.setItem("userToken",e)},b="/hand-to-hold/login",h="/hand-to-haold/dashboard",E=a(217),v=function(e){var t=e.component,a=e.isAllowed,n=e.redirectTo,l=Object(E.a)(e,["component","isAllowed","redirectTo"]);return(r.a.createElement(p.b,Object.assign({},l,{render:function(e){return a()?r.a.createElement(t,e):r.a.createElement(p.a,{to:{pathname:n(),state:{from:e.location}}})}})))},g=a(6),_=a.n(g),N=a(17),C=a(43),x=a.n(C),M=(a(205),function(){var e=Object(N.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:return e.abrupt("return",{status:200,message:"SMS sent to ********4234"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=function(){var e=Object(N.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:return e.abrupt("return",{status:200,message:"",token:"dsafoiuo-asf-asfd-asf"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=a(3),I=a.n(w),O=a(50),D=a(44),U=a.n(D),j=function(e){var t=e.otp,a=e.onChange,n=e.open,l=e.onClose,s=e.onSubmit,c=e.onCancel,o=e.message,i=e.isUIDisabled,m=e.isLoading,u=e.errorMsg;return r.a.createElement(O.a,{open:n,onClose:l,center:!0,styles:{modal:{background:"#fff",padding:0,borderRadius:"10px",maxWidth:"500px",width:"100%",minHeight:"200px"},closeButton:{display:"none"}}},r.a.createElement("div",{className:"my-5 d-flex flex-column h-100"},r.a.createElement("div",{className:"d-flex flex-column justify-content-center flex-grow-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:I()(U.a.formWrapper,"mx-auto")},r.a.createElement("div",{className:U.a.form},r.a.createElement("div",{className:"my-5 text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:I()("col-12",U.a.red)},""===u?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,u)))),r.a.createElement("div",{className:I()(U.a.formInputWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:U.a.inputWrapper},o)))),r.a.createElement("div",{className:I()(U.a.formInputWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:U.a.inputWrapper},r.a.createElement("input",{name:"phone",type:"text",value:t,onChange:a,placeholder:"otp...",className:U.a.formInput,maxLength:"500",disabled:i}))))),r.a.createElement("div",{className:"btn-wrapper text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",onClick:s,className:U.a.submitBtn,disabled:i},r.a.createElement("span",null,m?r.a.createElement("span",{className:"spinner-border spinner-border-sm float-left mt-1",role:"status","aria-hidden":"true"}):r.a.createElement(r.a.Fragment,null),r.a.createElement("span",{style:{verticalAlign:"text-top"}},"verify")))))),r.a.createElement("div",{className:"btn-wrapper text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",onClick:c,className:U.a.submitBtn,disabled:i},r.a.createElement("span",null,r.a.createElement("span",{style:{verticalAlign:"text-top"}},"cancel")))))))))))))};var S=function(e){Object(u.a)(a,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var a,n=Object(m.a)(e);if(t()){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={phone:"",otp:"",isUIDisabled:!1,isLoading:!1,isOTPLoading:!1,errorMsg:"",isOTPOpen:!1,OTPMsg:"",errorOTPMsg:""},e.numReg=new RegExp("\\d"),e.handleSubmit=Object(N.a)(_.a.mark((function t(){var a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.state.phone),e.setState({isUIDisabled:!0,isLoading:!0}),t.next=4,M(e.state.phone);case 4:if(a=t.sent,console.log(a),200!==a.status){t.next=9;break}return e.setState({isOTPOpen:!0,OTPMsg:a.message,isLoading:!1,isUIDisabled:!1}),t.abrupt("return");case 9:e.setState({errorMsg:"Error: "+a.message,isUIDisabled:!1,isLoading:!1});case 10:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){e.numReg.test(t.target.value)&&e.setState({phone:t.target.value})},e.handleOTPChange=function(t){e.numReg.test(t.target.value)&&e.setState({otp:t.target.value})},e.handleVerifyOTP=Object(N.a)(_.a.mark((function t(){var a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isUIDisabled:!0,isOTPLoading:!0}),t.next=3,y(e.state.otp);case 3:if(a=t.sent,console.log(a),200!==a.status){t.next=9;break}return f(a.token),e.props.history.push(h),t.abrupt("return");case 9:e.setState({errorOTPMsg:"Error: "+a.message,isUIDisabled:!1,isOTPLoading:!1});case 10:case"end":return t.stop()}}),t)}))),e.handleCloseOTP=function(){console.log("modale otp closed")},e.handleCancelOTP=function(){e.setState({isUIDisabled:!1,isLoading:!1,isOTPOpen:!1,OTPMsg:""})},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:I()(x.a.root,"row")},r.a.createElement(j,{open:this.state.isOTPOpen,onClose:this.handleCloseOTP,onSubmit:this.handleVerifyOTP,onCancel:this.handleCancelOTP,otp:this.state.otp,onChange:this.handleOTPChange,message:this.state.OTPMsg,isUIDisabled:this.state.isUIDisabled,isLoading:this.state.isOTPLoading,errorMsg:this.state.errorOTPMsg}),r.a.createElement("div",{className:I()("col-lg-6")},r.a.createElement("div",{className:"d-flex flex-column h-100"},r.a.createElement("div",{className:"d-flex flex-column justify-content-center flex-grow-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:I()(x.a.formWrapper,"mx-auto")},r.a.createElement("div",{className:x.a.form},r.a.createElement("div",{className:"my-5 text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:I()("col-12",x.a.red)},""===this.state.errorMsg?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,this.state.errorMsg)))),r.a.createElement("div",{className:I()(x.a.formInputWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:x.a.inputWrapper},r.a.createElement("input",{name:"phone",type:"text",value:this.state.phone,onChange:this.handleChange,placeholder:"phone number...",className:x.a.formInput,maxLength:"500",disabled:this.state.isUIDisabled}))))),r.a.createElement("div",{className:"btn-wrapper text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",onClick:this.handleSubmit,className:x.a.submitBtn,disabled:this.state.isUIDisabled},r.a.createElement("span",null,this.state.isLoading?r.a.createElement("span",{className:"spinner-border spinner-border-sm float-left mt-1",role:"status","aria-hidden":"true"}):r.a.createElement(r.a.Fragment,null),r.a.createElement("span",{style:{verticalAlign:"text-top"}},"log in"))))))))))))),r.a.createElement("div",{className:I()(x.a.rootContent,"col-lg-6")},r.a.createElement("div",{className:"d-flex flex-column h-100"},r.a.createElement("div",{className:"d-flex flex-column justify-content-center flex-grow-1"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:x.a.logo})))))))}}]),a}(n.Component),k=Object(p.g)(S),W=a(89),A=a.n(W),L=a(74),T=a.n(L),P=a(90),B=a.n(P),R=function(e){var t=e.id,a=e.name,n=e.selected,l=e.onSelect;return(r.a.createElement("div",{className:n?I()(B.a.root,B.a.selected):B.a.root,onClick:function(){return l(t)}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("p",{className:B.a.name},a)))))},F=a(88),V=a(56),H=a.n(V),J=function(e){var t=e.open,a=e.onClose,l=e.onSubmit,s=e.onCancel,c=e.isUIDisabled,o=e.isLoading,i=e.errorMsg,m=Object(n.useState)(""),u=Object(F.a)(m,2),d=u[0],p=u[1],f=function(){p("")};return r.a.createElement(O.a,{open:t,onClose:a,center:!0,styles:{modal:{background:"#fff",padding:0,borderRadius:"10px",maxWidth:"500px",width:"100%",minHeight:"200px"},closeButton:{display:"none"}}},r.a.createElement("div",{className:"my-5 d-flex flex-column h-100"},r.a.createElement("div",{className:"d-flex flex-column justify-content-center flex-grow-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:I()(H.a.formWrapper,"mx-auto")},r.a.createElement("div",{className:H.a.form},r.a.createElement("div",{className:"my-5 text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:I()("col-12",H.a.red)},""===i?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,i)))),r.a.createElement("div",{className:I()(H.a.formInputWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:H.a.inputWrapper},r.a.createElement("input",{name:"cName",type:"text",value:d,onChange:function(e){return p(e.target.value)},placeholder:"circle name...",className:H.a.formInput,maxLength:"500",disabled:c}))))),r.a.createElement("div",{className:"btn-wrapper text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",onClick:function(){return l(d,f)},className:H.a.submitBtn,disabled:c},r.a.createElement("span",null,o?r.a.createElement("span",{className:"spinner-border spinner-border-sm float-left mt-1",role:"status","aria-hidden":"true"}):r.a.createElement(r.a.Fragment,null),r.a.createElement("span",{style:{verticalAlign:"text-top"}},"create")))))),r.a.createElement("div",{className:"btn-wrapper text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",onClick:s,className:H.a.submitBtn,disabled:c},r.a.createElement("span",null,r.a.createElement("span",{style:{verticalAlign:"text-top"}},"cancel")))))))))))))},Q=[],Z=function(){var e=Object(N.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("API -> [circle] fetchAll"),e.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:return e.abrupt("return",{status:200,message:"",data:Q});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(N.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("API -> [circle] fetch/"+t),a=Q.filter((function(e){return e.id===t})),e.next=4,new Promise((function(e){return setTimeout(e,1e3)}));case 4:return e.abrupt("return",{status:200,message:"",data:a[0]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(N.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("API -> [circle] create/"+JSON.stringify(t)),a=X(),t.id=a,t.members=[],Q.push(t),e.next=7,new Promise((function(e){return setTimeout(e,1e3)}));case 7:return console.log(t),e.abrupt("return",{status:200,message:"",data:t});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e,t){var a=X();t.id=a;var n=Q.filter((function(t){return t.id===e.id}));return console.log("got circle from db"),console.log(n),n[0].members.push(t),{status:200,message:"",data:t}},X=function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};var Y=function(e){Object(u.a)(a,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var a,n=Object(m.a)(e);if(t()){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={circles:[],isCreateCircleOpen:!1,isCCLoading:!1,isCCUIDisabled:!1,errorCCMsg:""},e.componentDidMount=Object(N.a)(_.a.mark((function t(){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("List -> componentDidMount"),e.reload();case 2:case"end":return t.stop()}}),t)}))),e.componentDidUpdate=function(e,t,a){console.log("List -> componentDidUpdate")},e.reload=Object(N.a)(_.a.mark((function t(){var a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z();case 2:if(a=t.sent,console.log(a),200!==a.status){t.next=7;break}return e.setState({circles:a.data}),t.abrupt("return");case 7:case"end":return t.stop()}}),t)}))),e.openCreateCircle=function(){e.setState({isCreateCircleOpen:!0})},e.handleCloseCreateCircle=function(){console.log("modale CreateCircle closed")},e.handleCancelCreateCircle=function(){console.log("modale CreateCircle closed"),e.setState({isCreateCircleOpen:!1})},e.handleCreateCreateCircle=function(){var t=Object(N.a)(_.a.mark((function t(a,n){var r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("handleCreateCreateCircle:"),console.log(a),""!==a){t.next=5;break}return e.setState({errorCCMsg:"circle name is required!"}),t.abrupt("return");case 5:return e.setState({isCCLoading:!0,isCCUIDisabled:!0}),t.next=8,z({name:a});case 8:if(r=t.sent,console.log("this is c"),console.log(r),200!==r.status){t.next=17;break}return e.reload(),e.setState({isCreateCircleOpen:!1,isCCLoading:!1,isCCUIDisabled:!1}),e.props.onSelect(r.data.id),n(),t.abrupt("return");case 17:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return(r.a.createElement("div",{className:I()(T.a.root)},r.a.createElement(J,{open:this.state.isCreateCircleOpen,onClose:this.handleCloseCreateCircle,onCancel:this.handleCancelCreateCircle,onSubmit:this.handleCreateCreateCircle,isLoading:this.state.isCCLoading,isUIDisabled:this.state.isCCUIDisabled,errorMsg:this.state.errorCCMsg}),r.a.createElement("div",{className:T.a.topArea},r.a.createElement("button",{className:I()("btn",T.a.addButton),onClick:this.openCreateCircle},r.a.createElement("i",{className:"fas fa-plus"})," new circle")),r.a.createElement("div",{className:I()(T.a.listArea,T.a.hasFilter)},this.state.circles.map((function(t,a){return r.a.createElement(R,{key:a,id:t.id,name:t.name,selected:t.id===e.props.selectedCircle,onSelect:e.props.onSelect})})))))}}]),a}(n.Component),K=(a(444),a(140)),$=a.n(K),ee=function(e){var t=e.member,a=e.onUpdate,n=e.onDelete;return(r.a.createElement("tr",null,r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.number),r.a.createElement("td",null,r.a.createElement("button",{className:I()("btn","btn-sm",$.a.updateButton,"mr-2"),onClick:function(){return a(t)}},r.a.createElement("i",{className:"fas fa-pen"})),r.a.createElement("button",{className:I()("btn","btn-sm",$.a.deleteButton),onClick:function(){return n(t)}},r.a.createElement("i",{className:"fas fa-trash"})))))},te=a(37),ae=a.n(te),ne=function(e){var t=e.open,a=e.onClose,n=e.onSubmit,l=e.onCancel,s=e.isUIDisabled,c=e.isLoading,o=e.errorMsg,i=e.name,m=e.number,u=e.OnChangeName,d=e.onChangeNumber;return r.a.createElement(O.a,{open:t,onClose:a,center:!0,styles:{modal:{background:"#fff",padding:0,borderRadius:"10px",maxWidth:"500px",width:"100%",minHeight:"200px"},closeButton:{display:"none"}}},r.a.createElement("div",{className:"my-5 d-flex flex-column h-100"},r.a.createElement("div",{className:"d-flex flex-column justify-content-center flex-grow-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:I()(ae.a.formWrapper,"mx-auto")},r.a.createElement("div",{className:ae.a.form},r.a.createElement("div",{className:"my-5 text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:I()("col-12",ae.a.red)},""===o?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,o)))),r.a.createElement("div",{className:I()(ae.a.formInputWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:ae.a.inputWrapper},r.a.createElement("input",{name:"mName",type:"text",value:i,onChange:function(e){return u(e.target.value)},placeholder:"member name...",className:ae.a.formInput,maxLength:"500",disabled:s}))))),r.a.createElement("div",{className:I()(ae.a.formInputWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:ae.a.inputWrapper},r.a.createElement("input",{name:"mNumber",type:"text",value:m,onChange:function(e){return d(e.target.value)},placeholder:"member number...",className:ae.a.formInput,maxLength:"500",disabled:s}))))),r.a.createElement("div",{className:"btn-wrapper text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",onClick:function(){return n()},className:ae.a.submitBtn,disabled:s},r.a.createElement("span",null,c?r.a.createElement("span",{className:"spinner-border spinner-border-sm float-left mt-1",role:"status","aria-hidden":"true"}):r.a.createElement(r.a.Fragment,null),r.a.createElement("span",{style:{verticalAlign:"text-top"}},"update")))))),r.a.createElement("div",{className:"btn-wrapper text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",onClick:l,className:ae.a.submitBtn,disabled:s},r.a.createElement("span",null,r.a.createElement("span",{style:{verticalAlign:"text-top"}},"cancel")))))))))))))},re=a(91),le=a.n(re),se=function(e){var t=e.open,a=e.onClose,n=e.onSubmit,l=e.onCancel,s=e.isUIDisabled,c=e.isLoading,o=e.name,i=e.number;return r.a.createElement(O.a,{open:t,onClose:a,center:!0,styles:{modal:{background:"#fff",padding:0,borderRadius:"10px",maxWidth:"500px",width:"100%",minHeight:"200px"},closeButton:{display:"none"}}},r.a.createElement("div",{className:"my-5 d-flex flex-column h-100"},r.a.createElement("div",{className:"d-flex flex-column justify-content-center flex-grow-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:I()(le.a.formWrapper,"mx-auto")},r.a.createElement("div",{className:le.a.form},r.a.createElement("div",{className:"my-5 text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:I()("col-12")},"are you sure you want to delete ",r.a.createElement("b",null,o," (",i,")")," ?"))),r.a.createElement("div",{className:"btn-wrapper text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",onClick:function(){return n()},className:le.a.submitBtn,disabled:s},r.a.createElement("span",null,c?r.a.createElement("span",{className:"spinner-border spinner-border-sm float-left mt-1",role:"status","aria-hidden":"true"}):r.a.createElement(r.a.Fragment,null),r.a.createElement("span",{style:{verticalAlign:"text-top"}},"delete")))))),r.a.createElement("div",{className:"btn-wrapper text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",onClick:l,className:le.a.submitBtn,disabled:s},r.a.createElement("span",null,r.a.createElement("span",{style:{verticalAlign:"text-top"}},"cancel")))))))))))))};var ce=function(e){Object(u.a)(a,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var a,n=Object(m.a)(e);if(t()){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={members:[],selectedMember:{},nameToUpdate:"",numberToUpdate:"",isUpdateMemberOpen:!1,isUMLoading:!1,isUMUIDisabled:!1,errorUMMsg:"",isDeleteMemberOpen:!1,isDMLoading:!1,isDMUIDisabled:!1},e.componentDidMount=function(){console.log("Table -> componentDidMount"),e.setState({members:e.props.members})},e.componentDidUpdate=function(){var t=Object(N.a)(_.a.mark((function t(a,n,r){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Table -> componentDidUpdate"),e.state.members!==e.props.members&&e.setState({members:e.props.members});case 2:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e.openUpdateMember=function(t){console.log("openUpdateMember: "+JSON.stringify(t)),e.setState({selectedMember:t,nameToUpdate:t.name,numberToUpdate:t.number,isUpdateMemberOpen:!0})},e.OnChangeName=function(t){e.setState({nameToUpdate:t})},e.onChangeNumber=function(t){e.setState({numberToUpdate:t})},e.handleCloseUpdateMember=function(){console.log("modale UpdateMember closed")},e.handleCancelUpdateMember=function(){console.log("modale UpdateMember closed"),e.setState({isUpdateMemberOpen:!1})},e.openDeleteMember=function(t){e.setState({selectedMember:t,nameToUpdate:t.name,numberToUpdate:t.number,isDeleteMemberOpen:!0})},e.handleCloseDeleteMember=function(){console.log("modale handleCloseDeleteMember closed")},e.handleCancelDeleteMember=function(){console.log("modale DeleteMember closed"),e.setState({isDeleteMemberOpen:!1})},e.handelUpdate=function(){console.log("handelUpdate: "+e.state.nameToUpdate+" "+e.state.numberToUpdate)},e.handelDelete=function(t){console.log("handelDelete: "+e.state.nameToUpdate+" "+e.state.numberToUpdate)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.members;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{open:this.state.isUpdateMemberOpen,onClose:this.handleCloseUpdateMember,onCancel:this.handleCancelUpdateMember,onSubmit:this.handelUpdate,isLoading:this.state.isUMLoading,isUIDisabled:this.state.isUMUIDisabled,errorMsg:this.state.errorUMMsg,name:this.state.nameToUpdate,number:this.state.numberToUpdate,OnChangeName:this.OnChangeName,onChangeNumber:this.onChangeNumber}),r.a.createElement(se,{open:this.state.isDeleteMemberOpen,onClose:this.handleCloseDeleteMember,onCancel:this.handleCancelDeleteMember,onSubmit:this.handelDelete,isLoading:this.state.isDMLoading,isUIDisabled:this.state.isDMUIDisabled,name:this.state.nameToUpdate,number:this.state.numberToUpdate}),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"name"),r.a.createElement("th",null,"number"),r.a.createElement("th",null,"options"))),r.a.createElement("tbody",null,t.map((function(t,a){return r.a.createElement(ee,{key:a,member:t,onUpdate:function(){return e.openUpdateMember(t)},onDelete:function(){return e.openDeleteMember(t)}})})))))}}]),a}(n.Component),oe=a(38),ie=a.n(oe),me=function(e){var t=e.open,a=e.onClose,l=e.onSubmit,s=e.onCancel,c=e.isUIDisabled,o=e.isLoading,i=e.errorMsg,m=Object(n.useState)(""),u=Object(F.a)(m,2),d=u[0],p=u[1],f=Object(n.useState)(""),b=Object(F.a)(f,2),h=b[0],E=b[1],v=function(){p(""),E("")};return r.a.createElement(O.a,{open:t,onClose:a,center:!0,styles:{modal:{background:"#fff",padding:0,borderRadius:"10px",maxWidth:"500px",width:"100%",minHeight:"200px"},closeButton:{display:"none"}}},r.a.createElement("div",{className:"my-5 d-flex flex-column h-100"},r.a.createElement("div",{className:"d-flex flex-column justify-content-center flex-grow-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:I()(ie.a.formWrapper,"mx-auto")},r.a.createElement("div",{className:ie.a.form},r.a.createElement("div",{className:"my-5 text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:I()("col-12",ie.a.red)},""===i?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,i)))),r.a.createElement("div",{className:I()(ie.a.formInputWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:ie.a.inputWrapper},r.a.createElement("input",{name:"mName",type:"text",value:d,onChange:function(e){return p(e.target.value)},placeholder:"member name...",className:ie.a.formInput,maxLength:"500",disabled:c}))))),r.a.createElement("div",{className:I()(ie.a.formInputWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:ie.a.inputWrapper},r.a.createElement("input",{name:"mNumber",type:"text",value:h,onChange:function(e){return E(e.target.value)},placeholder:"member number...",className:ie.a.formInput,maxLength:"500",disabled:c}))))),r.a.createElement("div",{className:"btn-wrapper text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",onClick:function(){return l(d,h,v)},className:ie.a.submitBtn,disabled:c},r.a.createElement("span",null,o?r.a.createElement("span",{className:"spinner-border spinner-border-sm float-left mt-1",role:"status","aria-hidden":"true"}):r.a.createElement(r.a.Fragment,null),r.a.createElement("span",{style:{verticalAlign:"text-top"}},"add")))))),r.a.createElement("div",{className:"btn-wrapper text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",onClick:s,className:ie.a.submitBtn,disabled:c},r.a.createElement("span",null,r.a.createElement("span",{style:{verticalAlign:"text-top"}},"cancel")))))))))))))};var ue=function(e){Object(u.a)(a,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var a,n=Object(m.a)(e);if(t()){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={selectedCircleID:"",circle:{members:[]},isAddMemberOpen:!1,isAMLoading:!1,isAMUIDisabled:!1,errorAMMsg:""},e.componentDidMount=Object(N.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Dashboard -> componentDidMount");case 1:case"end":return e.stop()}}),e)}))),e.componentDidUpdate=function(){var t=Object(N.a)(_.a.mark((function t(a,n,r){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Dashboard -> componentDidUpdate"),console.log(e.state.circle);case 2:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e.handleSelecteCircle=function(){var t=Object(N.a)(_.a.mark((function t(a){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("handleSelecteCircle: "+a),e.setState({selectedCircleID:a}),t.next=4,q(a);case 4:200===(n=t.sent).status&&e.setState({circle:n.data});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.openAddMember=function(){e.setState({isAddMemberOpen:!0})},e.handleCloseAddMember=function(){console.log("modale AddMember closed")},e.handleCancelAddMember=function(){console.log("modale AddMember closed"),e.setState({isAddMemberOpen:!1})},e.handleAddMember=function(){var t=Object(N.a)(_.a.mark((function t(a,n,r){var l;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("handleAddMember:"),console.log(a),console.log(n),e.setState({isAMLoading:!0,isAMUIDisabled:!0}),t.next=6,G(e.state.circle,{name:a,number:n});case 6:l=t.sent,console.log("this is c"),console.log(l),e.setState({isAddMemberOpen:!1,isAMLoading:!1,isAMUIDisabled:!1}),r();case 11:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.circle;return(r.a.createElement("div",{className:A.a.root},r.a.createElement(me,{open:this.state.isAddMemberOpen,onClose:this.handleCloseAddMember,onCancel:this.handleCancelAddMember,onSubmit:this.handleAddMember,isLoading:this.state.isAMLoading,isUIDisabled:this.state.isAMUIDisabled,errorMsg:this.state.errorAMMsg}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"isOpen"},r.a.createElement("div",null,r.a.createElement(Y,{selectedCircle:this.state.selectedCircleID,onSelect:this.handleSelecteCircle}))),r.a.createElement("div",{className:"openSideMenu"},void 0===this.state.circle||1===Object.keys(this.state.circle).length?r.a.createElement(r.a.Fragment,null):r.a.createElement("main",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:A.a.main},r.a.createElement("h3",{className:A.a.title},e.name))),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:I()("btn",A.a.addButton,"mb-3"),onClick:this.openAddMember},r.a.createElement("i",{className:"fas fa-plus"})," add member")),r.a.createElement("div",{className:"row"},r.a.createElement(ce,{members:this.state.circle.members}))))))))}}]),a}(n.Component),de=Object(p.g)(ue),pe=function(){return!!localStorage.getItem("userToken")},fe=function(){return r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/hand-to-hold",render:function(){return r.a.createElement(p.a,{to:b})}}),r.a.createElement(p.b,{exact:!0,path:b,component:k}),r.a.createElement(v,{path:h,component:de,isAllowed:pe,redirectTo:function(){return b}}))},be=a(141),he=a.n(be),Ee=a(16),ve=a.n(Ee),ge=Object(p.g)((function(e){var t=![b].includes(window.location.pathname),a=[r.a.createElement("div",{key:"dashboardMenuItem",className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:ve.a.menuItemContainer},r.a.createElement(d.b,{to:h,className:h===window.location.pathname?I()(ve.a.menuItemContainer,ve.a.menuItemSelected):ve.a.menuItemContainer},r.a.createElement("div",{className:I()(ve.a.dashboardItem,ve.a.icnContainer,ve.a.tooltip),"data-tooltip":"dashboard"},r.a.createElement("span",{className:ve.a.dashboardIcn})))))),r.a.createElement("div",{key:"myProfileMenuItem",className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:ve.a.menuItemContainer},r.a.createElement(d.b,{to:"/hand-to-hold/profile",className:"/hand-to-hold/profile"===window.location.pathname?I()(ve.a.menuItemContainer,ve.a.menuItemSelected):ve.a.menuItemContainer},r.a.createElement("div",{className:I()(ve.a.myProfileItem,ve.a.icnContainer,ve.a.tooltip),"data-tooltip":"my Profile"},r.a.createElement("span",{className:ve.a.myProfileIcn}))))))];return t?r.a.createElement("header",{className:ve.a.root},r.a.createElement("div",{className:ve.a.sidebar},r.a.createElement("div",{className:"d-flex flex-column h-100"},r.a.createElement("div",{className:ve.a.logo}),r.a.createElement("div",{className:"d-flex flex-column justify-content-center flex-grow-1"},a),r.a.createElement("div",{className:ve.a.logout,onClick:function(){e.history.push(b)}},r.a.createElement("span",{className:ve.a.logoutIcon}))))):r.a.createElement(r.a.Fragment,null)}));var _e=function(e){Object(u.a)(a,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var a,n=Object(m.a)(e);if(t()){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:he.a.root},r.a.createElement("div",{className:he.a.content},r.a.createElement(ge,null),r.a.createElement(fe,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,a){e.exports={formWrapper:"CreateCircle_formWrapper__1kut5",form:"CreateCircle_form__3Sqqj",formInputWrapper:"CreateCircle_formInputWrapper__OnM_j",inputWrapper:"CreateCircle_inputWrapper___BPcW",formInput:"CreateCircle_formInput__1L6FB",submitBtn:"CreateCircle_submitBtn__1wjtp",red:"CreateCircle_red__12AZz"}},74:function(e,t,a){e.exports={root:"List_root__19v1S",topArea:"List_topArea__2dmRB",addButton:"List_addButton__1xN4k",listArea:"List_listArea__p5llO",hasFilter:"List_hasFilter__2mv_a"}},89:function(e,t,a){e.exports={root:"Dashboard_root__Ty3kB",main:"Dashboard_main__3MjOW",bold:"Dashboard_bold__1QPLZ",link:"Dashboard_link__6V9CU",title:"Dashboard_title__3bcoI",addButton:"Dashboard_addButton__3iwVZ"}},90:function(e,t,a){e.exports={root:"ListItem_root__2U6UX",name:"ListItem_name__2Fn-B",selected:"ListItem_selected__3F9-b"}},91:function(e,t,a){e.exports={formWrapper:"DeleteMember_formWrapper__2rxVB",form:"DeleteMember_form__3tLzk",formInputWrapper:"DeleteMember_formInputWrapper__26FuR",inputWrapper:"DeleteMember_inputWrapper__kAn3E",formInput:"DeleteMember_formInput__iZAv6",submitBtn:"DeleteMember_submitBtn__3W-Wk",red:"DeleteMember_red__1Qiqr"}}},[[219,1,2]]]);
//# sourceMappingURL=main.e26e4f93.chunk.js.map