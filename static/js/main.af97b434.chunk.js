(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={title:"Statistics_title__3eVVO",heading:"Statistics_heading__Q8JbN",list:"Statistics_list__1QEOi",item:"Statistics_item__3ZAA_",data:"Statistics_data__101ly"}},,function(e,t,a){e.exports={bntList:"FeedbackOptions_bntList__3pilV",btnItem:"FeedbackOptions_btnItem__3Jdtu",btn:"FeedbackOptions_btn__1tSxd"}},function(e,t,a){e.exports={title:"Section_title__1ld55"}},,,function(e,t,a){e.exports={container:"Container_container__PyCKQ"}},,,function(e,t,a){e.exports={message:"Notification_message__2WM7M"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(6),i=a.n(s),l=(a(17),a(7)),r=a.n(l),o=a(0);var d=function(e){var t=e.children;return Object(o.jsx)("div",{className:r.a.container,children:t})},b=a(8),j=a(9),u=a(12),h=a(11),m=a(3),v=a.n(m),O=function(e){var t=e.onLeavePositiveFeedback,a=e.onLeaveNeutralFeedback,n=e.onLeaveNegativeFeedback;return Object(o.jsxs)("ul",{className:v.a.bntList,children:[Object(o.jsx)("li",{className:v.a.btnItem,children:Object(o.jsx)("button",{type:"button",className:v.a.btn,onClick:t,children:"Good"})}),Object(o.jsx)("li",{className:v.a.btnItem,children:Object(o.jsx)("button",{type:"button",className:v.a.btn,onClick:a,children:"Neutral"})}),Object(o.jsx)("li",{className:v.a.btnItem,children:Object(o.jsx)("button",{type:"button",className:v.a.btn,onClick:n,children:"Bad"})})]})},x=a(10),N=a.n(x),g=function(e){var t=e.message;return Object(o.jsx)("p",{className:N.a.message,children:t})},p=a(4),f=a.n(p);var _=function(e){var t=e.title,a=e.children;return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{className:f.a.title,children:t}),a]})},k=a(1),F=a.n(k);var P=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.positivePercentage;return c=t+a+n,s=Math.round(t/(t+n+a)*100),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:F.a.title,children:"Statistics"}),Object(o.jsxs)("ul",{className:F.a.list,children:[Object(o.jsx)("li",{className:F.a.item,children:Object(o.jsxs)("p",{className:F.a.heading,children:["Good:",Object(o.jsx)("span",{className:F.a.data,children:t})]})}),Object(o.jsx)("li",{className:F.a.item,children:Object(o.jsxs)("p",{className:F.a.heading,children:["Neutral:",Object(o.jsx)("span",{className:F.a.data,children:a})]})}),Object(o.jsx)("li",{className:F.a.item,children:Object(o.jsxs)("p",{className:F.a.heading,children:["Bad:",Object(o.jsx)("span",{className:F.a.data,children:n})]})}),Object(o.jsx)("li",{className:F.a.item,children:Object(o.jsxs)("p",{className:F.a.heading,children:["Total:",Object(o.jsx)("span",{className:F.a.data,children:c})]})}),Object(o.jsx)("li",{className:F.a.item,children:Object(o.jsxs)("p",{className:F.a.heading,children:["Positive feedback:",Object(o.jsxs)("span",{className:F.a.data,children:[s," %"]})]})})]})]})},S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.leavePositiveFeedback=function(){e.setState((function(e){return{good:e.good+1}}))},e.leaveNeutralFeedback=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.leaveNegativeFeedback=function(){e.setState((function(e){return{bad:e.bad+1}}))},e}return Object(j.a)(a,[{key:"countPositiveFeedbackPercentage",value:function(){return this.state.good/(this.state.good+this.state.neutral+this.state.bad)*100}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return Object(o.jsxs)(_,{className:f.a.container,title:"Please leave feedback",children:[Object(o.jsx)(O,{onLeavePositiveFeedback:this.leavePositiveFeedback,onLeaveNeutralFeedback:this.leaveNeutralFeedback,onLeaveNegativeFeedback:this.leaveNegativeFeedback}),a+n+t?Object(o.jsx)(P,{good:t,neutral:a,bad:n,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):Object(o.jsx)(g,{message:"No feedback given"})]})}}]),a}(c.a.Component);S.defaultProps={initialValue:0,children:[]};var L=S;var y=function(){return Object(o.jsx)(d,{children:Object(o.jsx)(L,{})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),C()}],[[19,1,2]]]);
//# sourceMappingURL=main.af97b434.chunk.js.map