(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(5),i=n.n(o),r=(n(16),n(6)),s=n(7),d=n(8),u=n(11),b=n(10),l=n(0);function j(t){var e=t.good,n=void 0===e?0:e,a=t.neutral,c=void 0===a?0:a,o=t.bad,i=void 0===o?0:o,r=t.total,s=void 0===r?0:r,d=t.positivePercentage,u=void 0===d?0:d;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Good: ",n]}),Object(l.jsxs)("p",{children:["Neutral: ",c]}),Object(l.jsxs)("p",{children:["Bad: ",i]}),Object(l.jsxs)("p",{children:["Total: ",s]}),Object(l.jsxs)("p",{children:["Positive feadback: ",u,"%"]})]})}var v=n(3),h=n.n(v);function f(t){var e=t.options,n=t.onFeedback;return Object(l.jsx)("div",{className:h.a.options,children:e.map((function(t){return Object(l.jsx)("button",{className:h.a.button,type:"button",name:t,onClick:n,children:t},t)}))})}var p=n(4),O=n.n(p);function g(t){var e=t.title,n=t.children;return Object(l.jsxs)("section",{className:O.a.section,children:[e&&Object(l.jsx)("h2",{className:O.a.title,children:e}),n]})}var k=n(9),x=n.n(k);function F(t){var e=t.value;return Object(l.jsx)("p",{className:x.a.notification,children:e})}var m=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback();return Math.round(100*t.state.good/e)},t.onFeedback=function(e){var n=e.target.name;t.setState((function(t){return Object(r.a)({},n,t[n]+1)}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad,c=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(g,{title:"Please leave feadback",children:Object(l.jsx)(f,{options:Object.keys(this.state),onFeedback:this.onFeedback})}),0===c?Object(l.jsx)(F,{value:"No feedback given"}):Object(l.jsx)(g,{title:"Statistics",children:Object(l.jsx)(j,{good:e,neutral:n,bad:a,total:c,positivePercentage:o})})]})}}]),n}(a.Component),_=m,N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),N()},3:function(t,e,n){t.exports={options:"FeedbackOptions_options__PNN6Q",button:"FeedbackOptions_button__1Yy3k"}},4:function(t,e,n){t.exports={title:"Section_title__3iYER"}},9:function(t,e,n){t.exports={notification:"Notification_notification__WlsUI"}}},[[18,1,2]]]);
//# sourceMappingURL=main.9ece631a.chunk.js.map