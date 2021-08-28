(this.webpackJsonpschedule=this.webpackJsonpschedule||[]).push([[0],{14:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),i=s(8),a=s.n(i),c=s(2),o=s(3),l=s(5),h=s(4),d=s(0),u=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var s=t.target;s.value.includes(">")||s.value.includes("<")||e.props.updateSchedule(e.props.id,parseInt(s.id.substring(s.id.indexOf(":")+1)),s.value)},e.handleChecked=function(t){var s=t.target;e.props.updateSchedule(e.props.id,parseInt(s.id.substring(s.id.indexOf(":")+1)),s.checked)},e.handleDelete=function(t){window.confirm("Are you sure you want to delete this from your schedule?")&&e.props.removeFromSchedule(e.props.id)},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"tsEditor",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-6 name",children:Object(d.jsx)("input",{id:this.props.id+":0",type:"text",onChange:this.handleChange,value:this.props.name,placeholder:"Name"})}),Object(d.jsx)("div",{className:"col-sm-6 link",children:Object(d.jsx)("input",{id:this.props.id+":3",type:"text",onChange:this.handleChange,value:this.props.info,placeholder:"Class Location or Link with http(s)://"})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-sm-6 times",children:[Object(d.jsx)("input",{id:this.props.id+":1",type:"time",onChange:this.handleChange,required:!0,value:this.props.startTime}),Object(d.jsx)("input",{id:this.props.id+":2",type:"time",onChange:this.handleChange,value:this.props.endTime})]}),Object(d.jsxs)("div",{className:"col-sm-6 checks",children:[Object(d.jsx)(p,{htmlID:this.props.id+":4",dateBool:this.props.sun,date:"Sun",handleChecked:this.handleChecked}),Object(d.jsx)(p,{htmlID:this.props.id+":5",dateBool:this.props.mon,date:"Mon",handleChecked:this.handleChecked}),Object(d.jsx)(p,{htmlID:this.props.id+":6",dateBool:this.props.tue,date:"Tue",handleChecked:this.handleChecked}),Object(d.jsx)(p,{htmlID:this.props.id+":7",dateBool:this.props.wed,date:"Wed",handleChecked:this.handleChecked}),Object(d.jsx)(p,{htmlID:this.props.id+":8",dateBool:this.props.thu,date:"Thu",handleChecked:this.handleChecked}),Object(d.jsx)(p,{htmlID:this.props.id+":9",dateBool:this.props.fri,date:"Fri",handleChecked:this.handleChecked}),Object(d.jsx)(p,{htmlID:this.props.id+":10",dateBool:this.props.sat,date:"Sat",handleChecked:this.handleChecked})]})]}),Object(d.jsx)("button",{className:"btn btn-danger btn-sm delete",onClick:this.handleDelete,children:"Delete From Schedule"})]})}}]),s}(r.a.Component),p=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"form-check form-check-inline",children:[Object(d.jsx)("input",{id:this.props.htmlID,className:"form-check-input",type:"checkbox",onChange:this.props.handleChecked,checked:this.props.dateBool}),Object(d.jsx)("label",{htmlFor:this.props.i,className:"form-check-label",children:this.props.date})]})}}]),s}(r.a.Component),j=u,b=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).stringToDate=function(e){var t=e.substring(0,2),s=e.substring(3,5),n=new Date;return n.setHours(parseInt(t)),n.setMinutes(parseInt(s)),n.setSeconds(0),n},n.toggleAndVerify=function(){if(n.state.editorActive)for(var e=0;e<n.props.schedule.length;e++)if(n.stringToDate(n.props.schedule[e][2])<n.stringToDate(n.props.schedule[e][1])){if(""==n.props.schedule[e][0])switch(e+1){case 1:var t="the "+(e+1)+"st class";break;case 2:t="the "+(e+1)+"nd class";break;case 3:t="the "+(e+1)+"rd class";break;default:t="the "+(e+1)+"th class"}else t=n.props.schedule[e][0];return window.confirm("The end time of "+t+" is before the start time. Would you like to close the editor anyway?")?(n.setState({editorActive:!1}),null):null}n.setState({editorActive:!n.state.editorActive})},n.handleAdd=function(e){n.props.addToSchedule()},n.handleChecked=function(e){n.props.toggleWeekly()},n.state={editorActive:!1},n}return Object(o.a)(s,[{key:"render",value:function(){var e,t=this,s=this.props.schedule.map((function(e,s){return Object(d.jsx)(j,{id:s,updateSchedule:t.props.updateSchedule,removeFromSchedule:t.props.removeFromSchedule,name:e[0],startTime:e[1],endTime:e[2],info:e[3],sun:e[4],mon:e[5],tue:e[6],wed:e[7],thu:e[8],fri:e[9],sat:e[10]},"tse"+s)}));e=window.location.href.length>=2e3?Object(d.jsx)("p",{className:"editorInfo",children:"Warning: The schedule link is too big (>2000 chars). If you have links, try using a link shortener like bit.ly to shorten the links"}):this.props.schedule.length>0?Object(d.jsxs)("p",{className:"editorInfo",children:["You can save your schedule by bookmarking this page or copying ","  ",Object(d.jsx)("a",{href:window.location.href,children:"this link"})," (same as link in address bar)."+(this.props.weekly?" If you want your schedule to display earlier or later times, you can create an new class and set the start and end times to your desired times, but leave all the other inputs empty":"")]}):Object(d.jsx)("p",{className:"editorInfo",children:"Your schedule is currently empty. Click [Add Class] below to add a new class"});var n=Object(d.jsxs)("div",{children:[e,Object(d.jsxs)("div",{className:"form-check form-switch",children:[Object(d.jsx)("input",{className:"form-check-input",onChange:this.handleChecked,checked:this.props.weekly,type:"checkbox",id:"weeklyToggle"}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"weeklyToggle",children:"Weekly Schedule (on) or Daily Schedule (off)"})]}),Object(d.jsxs)("div",{className:"editors",children:[Object(d.jsx)("hr",{}),s]}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:this.handleAdd,children:"Add Class"}),Object(d.jsx)("hr",{})]});return Object(d.jsxs)("div",{className:"Editor",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)(f,{})}),Object(d.jsx)("div",{className:"col-sm-6 editSchedule",children:Object(d.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:this.toggleAndVerify,children:this.state.editorActive?"Close Editor":"Edit Schedule"})})]}),this.state.editorActive?n:Object(d.jsx)("hr",{})]})}}]),s}(r.a.Component),f=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=(new Date).toString(),t=e.substring(0,10),s=parseInt(e.substring(16,18)),n=e.substring(19,24),r=s<12?"AM":"PM";return s>12?s%=12:0===s&&(s=12),Object(d.jsx)("button",{type:"button",className:"btn btn-secondary",children:t+" - "+s+":"+n+" "+r})}},{key:"componentDidMount",value:function(){var e=this;this.waitForNextSecond=setInterval((function(){return e.repeatEverySecond()}),1e3-(new Date).getMilliseconds())}},{key:"repeatEverySecond",value:function(){var e=this;clearInterval(this.waitForNextSecond),this.forceUpdate(),this.interval=setInterval((function(){return e.forceUpdate()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearInterval(this.waitForNextSecond)}}]),s}(r.a.Component),m=b,v=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).to24H=function(e){var t=parseInt(e.substring(0,2)),s=e.substring(3,5);if(isNaN(t)||isNaN(s))return"--:--";var n=t<12?"AM":"PM";return t>12?t%=12:0===t&&(t=12),t+":"+s+" "+n},e.handleClick=function(t){if(e.props.info.includes(".")&&(e.props.info.includes("http://")||e.props.info.includes("https://")))try{window.open(new URL(e.props.info),"_blank").focus()}catch(s){console.log(e.props.info+" is an Invalid URL")}},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("button",{onClick:this.handleClick,className:"btn btn-info "+this.props.when,children:[Object(d.jsx)("h1",{className:"text-center text-truncate",children:this.props.name}),Object(d.jsxs)("h6",{className:"text-center text-truncate",children:[this.to24H(this.props.startTime)," to ",this.to24H(this.props.endTime)]}),Object(d.jsx)("p",{className:"text-center text-truncate",children:this.props.info})]})})}}]),s}(r.a.Component),g=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).forceScheduleUpdate=function(){e.forceUpdate()},e.formatMinutes=function(e){if(-1===e)return"";var t=Math.ceil(e),s=Math.floor(t/60),n=1===(t=t%60)?" min":" mins";return 0===s?t+n+" to next class":s+(1===s?" hour":" hours")+" "+t+n+" to next class"},e.sortTimeSlots=function(e){for(var t,s=0;s<e.length;s++){t=s;for(var n=s+1;n<e.length;n++)(e[t][1]>e[n][1]||e[t][2]>e[n][2])&&(t=n);var r=e[s];e[s]=e[t],e[t]=r}return e},e.determineTimes=function(t){for(var s=[],n=-1,r=t.length-1;r>-1;r--){var i=new Date,a=new Date;a.setMinutes(a.getMinutes()+10);var c=e.stringToDate(t[r][1]);i<=e.stringToDate(t[r][2])||""===t[r][2]?c<=i?s.push("classInProgress"):(n=(c-i)/6e4,c<=a?s.push("classSoon"):s.push("classInFuture")):s.push("classOver")}return[s,n]},e.stringToDate=function(e){var t=e.substring(0,2),s=e.substring(3,5),n=new Date;return n.setHours(parseInt(t)),n.setMinutes(parseInt(s)),n.setSeconds(0),n},e}return Object(o.a)(s,[{key:"render",value:function(){for(var e=new Date,t=[],s=[],n=0;n<this.props.schedule.length;n++)this.props.schedule[n][e.getDay()+4]&&t.push(this.props.schedule[n]);if(t.length>0){t=this.sortTimeSlots(t);var r=this.determineTimes(t),i=r[0],a=r[1];s=t.map((function(e,t){return Object(d.jsx)(v,{name:e[0],info:e[3],startTime:e[1],endTime:e[2],when:i[i.length-1-t]},"ts"+t)}))}else s=0===this.props.schedule.length?Object(d.jsx)("h1",{children:"Click [Edit Schedule] Above to Add Classes"}):Object(d.jsx)("h1",{children:"No Classes Today"});return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:this.formatMinutes(a)}),s]})}},{key:"componentDidMount",value:function(){var e=this,t=6e4-1e3*(new Date).getSeconds();this.waitUntilMinute=setInterval((function(){return e.repeatEveryMin()}),t)}},{key:"repeatEveryMin",value:function(){var e=this;clearInterval(this.waitUntilMinute),this.forceUpdate(),this.interval=setInterval((function(){return e.forceUpdate()}),6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearInterval(this.waitUntilMinute)}}]),s}(r.a.Component),O=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).stringToDate=function(e){if(null!=e){var t=e.substring(0,2),s=e.substring(3,5),n=new Date;return n.setHours(parseInt(t)),n.setMinutes(parseInt(s)),n.setSeconds(0),n}},n.handleClick=function(e){n.setState({timeSlot:Object(d.jsx)(v,{when:"classInFuture",name:n.props.schedule[e.target.id][0],info:n.props.schedule[e.target.id][3],startTime:n.props.schedule[e.target.id][1],endTime:n.props.schedule[e.target.id][2]})})},n.state={timeSlot:null},n}return Object(o.a)(s,[{key:"render",value:function(){var e=this;document.documentElement.style.setProperty("--numDays",100/(this.props.days.length+1)+"%");for(var t=24,s=0,n=[],r=0;r<this.props.schedule.length;r++){var i=this.stringToDate(this.props.schedule[r][1]),a=this.stringToDate(this.props.schedule[r][2]);i.getHours()<t&&(t=i.getHours()),a.getHours()>s&&(s=a.getHours())}var c=[];for(r=0;r<this.props.schedule.length;r++){i=this.stringToDate(this.props.schedule[r][1]);for(var o=60*((a=this.stringToDate(this.props.schedule[r][2])).getHours()-i.getHours())+a.getMinutes()-i.getMinutes(),l=0;l<this.props.days.length;l++)this.props.schedule[r][this.props.days[l]+4]&&c.push(Object(d.jsxs)("div",{id:r,className:"block",onClick:this.handleClick,style:{height:o+"px",top:60*i.getHours()+i.getMinutes()-60*(t-1)+"px",left:100/(this.props.days.length+1)*(l+1)+0+"%"},children:[Object(d.jsx)("p",{className:"text-center text-truncate text-wrap",children:this.props.schedule[r][0]}),Object(d.jsx)("p",{className:"text-center text-truncate text-wrap",children:this.props.schedule[r][3]})]}))}for(r=t;r<=s;r++)n.push(Object(d.jsx)(y,{time:r,numOfDays:this.props.days.length}));if(0===this.props.schedule.length)return Object(d.jsxs)("h6",{children:["Click [Edit Schedule] Above to Add Classes or click below to generate an example ",Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.props.generateExample()},children:"Generate Example Schedule"})]});var h=[Object(d.jsx)("th",{scope:"col",children:Object(d.jsx)("p",{children:"Time"})})],u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];for(r=0;r<this.props.days.length;r++)h.push(Object(d.jsxs)("th",{scope:"col",children:["   ",Object(d.jsx)("p",{children:u[this.props.days[r]]}),"   "]}));return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"weekly",children:[this.state.timeSlot,Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{onClick:function(){return e.setState({timeSlot:null})},children:Object(d.jsx)("tr",{children:h})}),Object(d.jsx)("tbody",{onClick:function(){return e.setState({timeSlot:null})},children:n}),c,Object(d.jsx)(x,{days:this.props.days,schedule:this.props.schedule,startHr:t,endHr:s})]})]})})}}]),s}(r.a.Component),y=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.time;if(isNaN(e))var t="";else{t=e<12?"AM":"PM";e>12?e%=12:0===e&&(e=12)}return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",style:{verticalAlign:"top"},children:Object(d.jsx)("p",{children:e+" "+t})}),new Array(this.props.numOfDays).fill(Object(d.jsx)("td",{}))]})}}]),s}(r.a.Component),x=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).intToDate=function(e){if(!isNaN(e)){var t=new Date;return t.setHours(e),t.setMinutes(0),t.setSeconds(0),t}},e.stringToDate=function(e){if(null!=e){var t=e.substring(0,2),s=e.substring(3,5),n=new Date;return n.setHours(parseInt(t)),n.setMinutes(parseInt(s)),n.setSeconds(0),n}},e.formatMinutes=function(e){var t=Math.ceil(e),s=Math.floor(t/60),n=1===(t=t%60)?" min":" mins";return 0===s?t+n:s+(1===s?" hour":" hours")+" "+t+n},e.handleClick=function(){document.getElementById("currentTime").style.display="none",e.hide=setInterval((function(){return e.show()}),5e3)},e.show=function(){document.getElementById("currentTime").style.display="table",clearInterval(e.hide)},e}return Object(o.a)(s,[{key:"render",value:function(){for(var e=new Date,t=-1,s=0;s<this.props.schedule.length;s++){var n=this.stringToDate(this.props.schedule[s][1]),r=this.stringToDate(this.props.schedule[s][2]);if(this.props.schedule[s][e.getDay()+4])if(e<n){var i=(n-e)/6e4;(i<t||-1===t)&&(t=i)}else if(e<r){t=-1;break}}for(s=0;s<this.props.days.length;s++)if((new Date).getDay()===this.props.days[s]){var a=s+1;break}return-1!==this.props.days.indexOf((new Date).getDay())&&e>this.intToDate(this.props.startHr)&&e<this.intToDate(this.props.endHr+1)?Object(d.jsx)("div",{id:"currentTime",className:"line",onClick:this.handleClick,style:{top:60*e.getHours()+e.getMinutes()-60*(this.props.startHr-1)-28+"px",left:a*(100/(this.props.days.length+1))+"%"},children:Object(d.jsxs)("p",{children:[-1!==t?this.formatMinutes(t):"","\u200c"]})}):null}},{key:"componentDidMount",value:function(){var e=this,t=61e3-1e3*(new Date).getSeconds();this.waitUntilMinute=setInterval((function(){return e.repeatEveryMin()}),t)}},{key:"repeatEveryMin",value:function(){var e=this;clearInterval(this.waitUntilMinute),this.forceUpdate(),this.interval=setInterval((function(){return e.forceUpdate()}),6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearInterval(this.waitUntilMinute),clearInterval(this.hide)}}]),s}(r.a.Component),k=O,w=s(6),S=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;Object(c.a)(this,s),(n=t.call(this,e)).updateTimeSlot=function(e,t,s){var r=n.state.schedule;r[e][t]=s,n.setState({schedule:r},(function(){n.saveSchedule()}))},n.addTimeSlot=function(){var e=n.state.schedule;e.push(["","11:30","13:30","",!1,!1,!1,!1,!1,!1,!1]),n.setState({schedule:e},(function(){n.saveSchedule()}))},n.removeTimeSlot=function(e){var t=n.state.schedule;t.splice(e,1),n.setState({schedule:t},(function(){n.saveSchedule()}))},n.toggleWeekly=function(e){var t=!n.state.weekly;n.setState({weekly:t},(function(){n.saveSchedule()}))},n.saveSchedule=function(){if(n.state.weekly)var e="1";else e="0";0!==n.state.schedule.length&&(e+=">");for(var t=0;t<n.state.schedule.length;t++){e+=n.state.schedule[t][0]+"<"+n.state.schedule[t][1]+"<"+n.state.schedule[t][2]+"<"+n.state.schedule[t][3]+"<";for(var s=0;s<7;s++)n.state.schedule[t][s+4]&&(e+=s+"<");t!==n.state.schedule.length-1&&(e+=">")}var r;r=""!==e?Object(w.compressToBase64)(e):"";var i=new URL(window.location);i.search=r,window.history.pushState({},"",i)},n.exampleSchedule=function(){n.setState({schedule:[["BIO 102","10:15","11:45","Hall 102",!1,!0,!1,!0,!1,!0,!1],["AMS 201","13:15","14:40","Engineering 112",!1,!1,!0,!1,!0,!1,!1],["MAT 144","12:00","13:00","https://zoom.us/...",!1,!1,!0,!1,!0,!1,!1],["MUS 101","08:30","09:40","https://zoom.us/...",!1,!0,!1,!0,!1,!1,!1],["POL 181","16:30","17:20","https://zoom.us/...",!1,!0,!1,!1,!1,!1,!1]]},(function(){n.saveSchedule()}))};var r=[],i=window.location.href,a=i.indexOf("?");i=i.substring(a+1);var o=Object(w.decompressFromBase64)(i),l=!0;if(-1!==a){l="1"===o.substring(0,1);for(var h=o.split(">"),d=1;d<h.length;d++){for(var u=h[d].split("<"),p=[!1,!1,!1,!1,!1,!1,!1],j=4;j<u.length;j++)p[parseInt(u[j])]=!0;r.push([u[0],u[1],u[2],u[3],p[0],p[1],p[2],p[3],p[4],p[5],p[6]])}}return n.state={schedule:r,weekly:l},n}return Object(o.a)(s,[{key:"render",value:function(){for(var e=[1,2,3,4,5],t=0;t<this.state.schedule.length;t++)if(this.state.schedule[t][4]||this.state.schedule[t][10]){e=[0,1,2,3,4,5,6];break}return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{schedule:this.state.schedule,updateSchedule:this.updateTimeSlot,addToSchedule:this.addTimeSlot,removeFromSchedule:this.removeTimeSlot,toggleWeekly:this.toggleWeekly,weekly:this.state.weekly}),this.state.weekly?Object(d.jsx)(k,{days:e,schedule:this.state.schedule,generateExample:this.exampleSchedule}):Object(d.jsx)(g,{schedule:this.state.schedule})]})}}]),s}(r.a.Component);a.a.render(Object(d.jsx)(S,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2b9b0d73.chunk.js.map