(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={title:"Statistics_title__3eVVO",heading:"Statistics_heading__Q8JbN",list:"Statistics_list__1QEOi",item:"Statistics_item__3ZAA_",data:"Statistics_data__101ly"}},,function(e,t,a){e.exports={title:"Section_title__1ld55"}},function(e,t,a){e.exports={bntList:"FeedbackOptions_bntList__3pilV",btnItem:"FeedbackOptions_btnItem__3Jdtu",btn:"FeedbackOptions_btn__1tSxd"}},,,function(e,t,a){e.exports={container:"Container_container__PyCKQ"}},,,,function(e,t,a){e.exports={message:"Notification_message__2WM7M"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(6),i=a.n(c),r=(a(18),a(7)),l=a.n(r),o=a(0);var d=function(e){var t=e.children;return Object(o.jsx)("div",{className:l.a.container,children:t})},b=a(8),j=a(9),h=a(10),u=a(13),m=a(12),O=a(4),x=a.n(O),p=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(o.jsx)("ul",{className:x.a.bntList,children:Object.keys(t).map((function(e){return Object(o.jsx)("li",{className:x.a.btnItem,children:Object(o.jsx)("button",{className:x.a.btn,type:"button",onClick:a,children:e})},e)}))})},_=a(11),v=a.n(_),g=function(e){var t=e.message;return Object(o.jsx)("p",{className:v.a.message,children:t})},f=a(3),N=a.n(f);var k=function(e){var t=e.title,a=e.children;return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{className:N.a.title,children:t}),a]})},F=a(1),S=a.n(F);var y=function(e){var t=e.good,a=e.neutral,s=e.bad,n=e.total,c=e.positivePercentage;return n=t+a+s,c=Math.round(t/(t+s+a)*100),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:S.a.title,children:"Statistics"}),Object(o.jsxs)("ul",{className:S.a.list,children:[Object(o.jsx)("li",{className:S.a.item,children:Object(o.jsxs)("p",{className:S.a.heading,children:["Good:",Object(o.jsx)("span",{className:S.a.data,children:t})]})}),Object(o.jsx)("li",{className:S.a.item,children:Object(o.jsxs)("p",{className:S.a.heading,children:["Neutral:",Object(o.jsx)("span",{className:S.a.data,children:a})]})}),Object(o.jsx)("li",{className:S.a.item,children:Object(o.jsxs)("p",{className:S.a.heading,children:["Bad:",Object(o.jsx)("span",{className:S.a.data,children:s})]})}),Object(o.jsx)("li",{className:S.a.item,children:Object(o.jsxs)("p",{className:S.a.heading,children:["Total:",Object(o.jsx)("span",{className:S.a.data,children:n})]})}),Object(o.jsx)("li",{className:S.a.item,children:Object(o.jsxs)("p",{className:S.a.heading,children:["Positive feedback:",Object(o.jsxs)("span",{className:S.a.data,children:[c," %"]})]})})]})]})},P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=t.target.textContent;e.setState((function(e){return Object(b.a)({},a,e[a]+=1)}))},e}return Object(h.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.bad+this.setState.neutral}},{key:"countPositiveFeedbackPercentage",value:function(){return this.state.good/(this.state.good+this.state.neutral+this.state.bad)*100}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,s=e.bad;return Object(o.jsxs)(k,{className:N.a.container,title:"Please leave feedback",children:[Object(o.jsx)(p,{onLeaveFeedback:this.onLeaveFeedback,options:this.state}),t+s+a?Object(o.jsx)(y,{good:t,neutral:a,bad:s,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):Object(o.jsx)(g,{message:"No feedback given"})]})}}]),a}(n.a.Component);P.defaultProps={initialValue:0,children:[]};var L=P;var w=function(){return Object(o.jsx)(d,{children:Object(o.jsx)(L,{})})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.e4c55b21.chunk.js.map