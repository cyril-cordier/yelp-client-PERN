(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(30),i=n.n(s),l=(n(39),n(11)),o=n(3),j=n(2),u=n.n(j),b=n(6),d=n(5),h=n(31),x=n.n(h).a.create({baseURL:"https://pern-yelp.herokuapp.com/api/v1/restaurants"}),O=n(33),p=Object(a.createContext)(),m=function(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(null),l=Object(d.a)(i,2),o=l[0],j=l[1];return Object(c.jsx)(p.Provider,{value:{restaurants:r,setRestaurants:s,addRestaurants:function(e){s([].concat(Object(O.a)(r),[e]))},selectedRestaurant:o,setSelectedRestaurant:j},children:e.children})};function f(){var e=Object(a.useContext)(p).addRestaurants,t=Object(a.useState)(""),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),l=Object(d.a)(i,2),o=l[0],j=l[1],h=Object(a.useState)("Price Range"),O=Object(d.a)(h,2),m=O[0],f=O[1],v=function(){var t=Object(b.a)(u.a.mark((function t(n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,x.post("/",{name:r,location:o,price_range:m});case 4:c=t.sent,e(c.data.data.restaurant),console.log(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"mb-4",children:Object(c.jsx)("form",{action:"",children:Object(c.jsxs)("div",{className:"row form-row",children:[Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("input",{type:"text",value:r,onChange:function(e){return s(e.target.value)},className:"form-control",placeholder:"name"})}),Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("input",{type:"text",value:o,onChange:function(e){return j(e.target.value)},className:"form-control",placeholder:"location"})}),Object(c.jsx)("div",{className:"col",children:Object(c.jsxs)("select",{value:m,onChange:function(e){return f(e.target.value)},className:"form-control mr-sm-2",children:[Object(c.jsx)("option",{disabled:!0,children:"Price Range"}),Object(c.jsx)("option",{value:"1",children:"$"}),Object(c.jsx)("option",{value:"2",children:"$$"}),Object(c.jsx)("option",{value:"3",children:"$$$"}),Object(c.jsx)("option",{value:"4",children:"$$$$"}),Object(c.jsx)("option",{value:"5",children:"$$$$$"})]})}),Object(c.jsx)("button",{type:"submit",onClick:v,className:"btn btn-primary col mx-3",children:"Add"})]})})})}function v(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{className:"font-weight-light display-1 text-center",children:"Restaurant Finder"})})}var g=function(e){for(var t=e.rating,n=[],a=1;a<=5;a++)a<=t?n.push(Object(c.jsx)("i",{className:"fas fa-star text-warning"},a)):a!==Math.ceil(t)||Number.isInteger(t)?n.push(Object(c.jsx)("i",{className:"far fa-star text-warning"},a)):n.push(Object(c.jsx)("i",{className:"fas fa-star-half-alt text-warning"},a));return Object(c.jsx)(c.Fragment,{children:n})},N=(n(28),function(e){var t=Object(a.useContext)(p),n=t.restaurants,r=t.setRestaurants,s=Object(o.f)();Object(a.useEffect)((function(){(function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/");case 3:t=e.sent,r(t.data.data.restaurants),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[r]);var i=function(){var e=Object(b.a)(u.a.mark((function e(t,c){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.prev=1,e.next=4,x.delete("/".concat(c));case 4:a=e.sent,r(n.filter((function(e){return e.id!==c}))),console.log(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(e){return e.count?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g,{rating:e.average_rating}),Object(c.jsxs)("span",{className:"text-warning ml-1",children:[" (",e.count,")"]})]}):Object(c.jsx)("span",{className:"text-warning",children:"0 reviews"})};return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"list-group",children:Object(c.jsxs)("table",{className:"table table-hover ",children:[Object(c.jsx)("thead",{className:"bg-primary text-white",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Restaurant"}),Object(c.jsx)("th",{scope:"col",children:"Location"}),Object(c.jsx)("th",{scope:"col",children:"Price Range"}),Object(c.jsx)("th",{scope:"col",children:"Ratings"}),Object(c.jsx)("th",{scope:"col",children:"Edit"}),Object(c.jsx)("th",{scope:"col",children:"Delete"})]})}),Object(c.jsx)("tbody",{className:"table-dark",children:n&&n.map((function(e){return Object(c.jsxs)("tr",{onClick:function(){return t=e.id,void s.push("/restaurants/".concat(t));var t},children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.location}),Object(c.jsx)("td",{children:"$".repeat(e.price_range)}),Object(c.jsx)("td",{children:l(e)}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:function(t){return function(e,t){e.stopPropagation(),s.push("/restaurants/".concat(t,"/update"))}(t,e.id)},className:"btn btn-warning",children:"Update"})}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:function(t){return i(t,e.id)},className:"btn btn-danger",children:"Delete"})})]},e.id)}))})]})})})});function w(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{}),Object(c.jsx)(f,{}),Object(c.jsx)(N,{})]})}var y=function(e){var t=e.reviews,n=Object(o.g)(),a=Object(o.f)(),r=function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.delete("/deleteReview/".concat(t));case 3:a.push("/"),a.push(n.pathname),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"row row-cols-3 mb-2",children:t.map((function(e){return Object(c.jsxs)("div",{className:"card text-white bg-primary mb-3 p-0 marge",style:{maxWidth:"30%"},children:[Object(c.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:Object(c.jsx)(g,{rating:e.rating})}),Object(c.jsxs)("span",{children:[" ",e.name]})]}),Object(c.jsx)("span",{onClick:function(){return r(e.id)},className:"mx-2",children:Object(c.jsx)("i",{className:"far fa-trash-alt"})})]}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsx)("p",{className:"card-text",children:e.review})})]},e.id)}))})},k=function(){var e=Object(o.h)().id,t=Object(o.g)(),n=Object(o.f)(),r=Object(a.useState)(""),s=Object(d.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)(""),h=Object(d.a)(j,2),O=h[0],p=h[1],m=Object(a.useState)("1"),f=Object(d.a)(m,2),v=f[0],g=f[1],N=Object(a.useState)(""),w=Object(d.a)(N,2),y=w[0],k=w[1],C=function(){var c=Object(b.a)(u.a.mark((function c(a){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(y){c.next=12;break}return a.preventDefault(),c.prev=2,c.next=5,x.post("/".concat(e,"/addReview"),{name:i,review:O,rating:v});case 5:n.push("/"),n.push(t.pathname),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),console.log(c.t0);case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}();return Object(a.useEffect)((function(){k(""===i||""===O?"Formulaire incomplet":"")}),[i,O]),Object(c.jsxs)("div",{className:"mb-2",children:[Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsxs)("div",{className:"form-group col-8",children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name"}),Object(c.jsx)("input",{value:i,onChange:function(e){return l(e.target.value)},id:"name",placeholder:"name",type:"text",className:"form-control"})]}),Object(c.jsxs)("div",{className:"form-group col-4",children:[Object(c.jsx)("label",{htmlFor:"name",children:"Rating"}),Object(c.jsxs)("select",{value:v,onChange:function(e){return g(e.target.value)},id:"rating",className:"form-control",children:[Object(c.jsx)("option",{value:"1",children:"1"}),Object(c.jsx)("option",{value:"2",children:"2"}),Object(c.jsx)("option",{value:"3",children:"3"}),Object(c.jsx)("option",{value:"4",children:"4"}),Object(c.jsx)("option",{value:"5",children:"5"})]})]})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"Review",children:"Review"}),Object(c.jsx)("textarea",{value:O,onChange:function(e){return p(e.target.value)},id:"Review",cols:"30",rows:"10",className:"form-control"})]}),y&&(i||O)?Object(c.jsx)("div",{className:"text-danger",children:y}):"",Object(c.jsx)("button",{type:"submit",onClick:C,className:"btn btn-primary",children:"Submit"})]})},C=function(){var e=Object(o.h)().id,t=Object(a.useContext)(p),n=t.selectedRestaurant,r=t.setSelectedRestaurant,s=Object(o.f)();return Object(a.useEffect)((function(){(function(){var t=Object(b.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.get("/".concat(e));case 3:n=t.sent,r(n.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[e,r]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("button",{onClick:function(){return s.push("/")},className:" btn btn-primary",children:[Object(c.jsx)("i",{className:"far fa-arrow-alt-circle-left"})," Back"]}),n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"text-center display-1",children:n.restaurant.name}),Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)(g,{rating:n.restaurant.average_rating}),Object(c.jsx)("span",{className:"text-warning ml-1",children:n.restaurant.count?"(".concat(n.restaurant.count,")"):"(0)"})]}),Object(c.jsx)("div",{className:"mt-3",children:Object(c.jsx)(y,{reviews:n.reviews})}),Object(c.jsx)(k,{})]})]})};function R(e){var t=Object(o.h)().id,n=Object(o.f)(),r=Object(a.useState)(""),s=Object(d.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)(""),h=Object(d.a)(j,2),O=h[0],p=h[1],m=Object(a.useState)(""),f=Object(d.a)(m,2),v=f[0],g=f[1];Object(a.useEffect)((function(){(function(){var e=Object(b.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/".concat(t));case 2:n=e.sent,console.log(n.data.data),l(n.data.data.restaurant.name),p(n.data.data.restaurant.location),g(n.data.data.restaurant.price_range);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var N=function(){var e=Object(b.a)(u.a.mark((function e(c){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,x.put("/".concat(t),{name:i,location:O,price_range:v});case 3:a=e.sent,console.log(a),n.push("/");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{action:"",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name"}),Object(c.jsx)("input",{value:i,onChange:function(e){return l(e.target.value)},id:"name",type:"text",className:"form-control"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"location",children:"Location"}),Object(c.jsx)("input",{value:O,onChange:function(e){return p(e.target.value)},id:"location",type:"text",className:"form-control"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"price_range",children:"Price Range"}),Object(c.jsx)("input",{value:v,onChange:function(e){return g(e.target.value)},id:"price_range",type:"number",className:"form-control",min:"1",max:"5"})]}),Object(c.jsx)("button",{type:"submit",onClick:N,className:"btn btn-primary",children:"Submit"}),Object(c.jsx)("button",{onClick:function(){return n.push("/")},className:" btn btn-primary mx-5",children:"Cancel"})]})})}function S(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"text-center",children:"Update Restaurant"}),Object(c.jsx)(R,{})]})}n(64);var $=function(){return Object(c.jsx)(m,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",component:w}),Object(c.jsx)(o.a,{exact:!0,path:"/restaurants/:id",component:C}),Object(c.jsx)(o.a,{exact:!0,path:"/restaurants/:id/update",component:S}),Object(c.jsx)(o.a,{component:w})]})})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)($,{})}),document.getElementById("root")),F()}},[[65,1,2]]]);
//# sourceMappingURL=main.d20251de.chunk.js.map