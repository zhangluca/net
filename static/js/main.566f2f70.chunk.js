(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{17:function(t,e,a){},28:function(t,e,a){t.exports=a.p+"static/media/logo.9db3bbed.png"},29:function(t,e,a){t.exports=a(58)},58:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(3),r=a.n(c),s=a(8),o=a(2),l=a(4),u=Object(l.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{num:0,listData:[],recomData:[]},e=arguments.length>1?arguments[1]:void 0,a=t.listData,n=t.recomData;switch(e.type){case"updateList":t.listData=e.data;break;case"updateRecom":t.recomData=e.data;break;case"delList":var i=a.findIndex((function(t){return t.id===e.id})),c=a.find((function(t){return t.id===e.id}));return n.push(c),a.splice(i,1),Object.assign({},t,{listData:Object(o.a)(a),recomData:Object(o.a)(n)});case"delRecom":var r=n.findIndex((function(t){return t.id===e.id})),s=n.find((function(t){return t.id===e.id}));return a.push(s),n.splice(r,1),Object.assign({},t,{listData:Object(o.a)(a),recomData:Object(o.a)(n)})}return Object.assign({},t)})),d=a(15),p=a.n(d),m=a(27),f=a(5),v=a(6),h=a(9),b=a(7),E=a(10),j=(a(17),a(11)),O=a.n(j);function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(a,n){O.a.get(t,{params:e}).then((function(t){a(t.data)})).catch((function(t){n(t.data)}))}))}O.a.defaults.timeout=1e4,O.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";var g=function(t){function e(){var t,a;Object(f.a)(this,e);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(h.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(i)))).operateEvent=function(t){a.props.clickEvent(t)},a}return Object(E.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){var t=this,e=this.props.list;return i.a.createElement("div",{className:"mod"},i.a.createElement("div",{className:"title"},this.props.title),i.a.createElement("div",{className:"content"},e.map((function(e){return i.a.createElement("div",{key:e.id,className:"item"},i.a.createElement("img",{src:e.img,alt:""}),i.a.createElement("div",{className:"btn",onClick:function(){t.operateEvent(e.id)}},t.props.operate),i.a.createElement("div",null,e.title))}))))}}]),e}(i.a.Component),y=a(28),k=a.n(y),x=function(t){function e(t){var a;return Object(f.a)(this,e),(a=Object(h.a)(this,Object(b.a)(e).call(this,t))).state={},a}return Object(E.a)(e,t),Object(v.a)(e,[{key:"render",value:function(){var t=this.props.listData,e=this.props.recomData;return i.a.createElement("div",null,i.a.createElement("img",{src:k.a,alt:"netflixLogo",className:"logo"}),i.a.createElement(g,{list:t,clickEvent:this.props.delListEvent,operate:"Delete",title:"My List"}),i.a.createElement(g,{list:e,clickEvent:this.props.delRecomEvent,operate:"Add",title:"Recommendations List"}))}},{key:"componentDidMount",value:function(){var t=Object(m.a)(p.a.mark((function t(){var e,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("./mylist.json");case 2:return e=t.sent,t.next=5,D("./recommendations.json");case 5:a=t.sent,this.props.updateListEvent(e),this.props.updateRecomEvent(a);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),e}(i.a.Component);var L=Object(s.b)((function(t){return{listData:t.listData,recomData:t.recomData}}),(function(t){return{updateListEvent:function(e){t({type:"updateList",data:e})},updateRecomEvent:function(e){t({type:"updateRecom",data:e})},delListEvent:function(e){t({type:"delList",id:e})},delRecomEvent:function(e){t({type:"delRecom",id:e})}}}))(x);r.a.render(i.a.createElement(s.a,{store:u},i.a.createElement(L,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.566f2f70.chunk.js.map