(function(){var c,b=[].slice,a=function(d,e){return function(){return d.apply(e,arguments)}};c=function(){var h,k,e,d,l,j,f,i,g;e=arguments[0],h=2<=arguments.length?b.call(arguments,1):[];l=e||{};for(f=0,i=h.length;f<i;f++){d=h[f];g=d||{};for(k in g){j=g[k];if(typeof l[k]==="object"){l[k]=c(l[k],j)}else{l[k]||(l[k]=j)}}}return l};this.WOW=(function(){d.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0};function d(e){if(e==null){e={}}this.scrollCallback=a(this.scrollCallback,this);this.scrollHandler=a(this.scrollHandler,this);this.start=a(this.start,this);this.config=c(e,this.defaults);this.scrolled=true}d.prototype.init=function(){if(document.readyState==="complete"){return this.start()}else{return document.addEventListener("DOMContentLoaded",this.start)}};d.prototype.start=function(){var f,h,e,g;this.element=window.document.documentElement;this.boxes=this.element.getElementsByClassName(this.config.boxClass);if(this.boxes.length){g=this.boxes;for(h=0,e=g.length;h<e;h++){f=g[h];this.applyStyle(f,true)}window.addEventListener("scroll",this.scrollHandler,false);window.addEventListener("resize",this.scrollHandler,false);return this.interval=setInterval(this.scrollCallback,50)}};d.prototype.stop=function(){window.removeEventListener("scroll",this.scrollHandler,false);window.removeEventListener("resize",this.scrollHandler,false);if(this.interval!=null){return clearInterval(this.interval)}};d.prototype.show=function(e){this.applyStyle(e);return e.className=""+e.className+" "+this.config.animateClass};d.prototype.applyStyle=function(g,h){var e,i,f;i=g.getAttribute("data-wow-duration");e=g.getAttribute("data-wow-delay");f=g.getAttribute("data-wow-iteration");return g.setAttribute("style",this.customStyle(h,i,e,f))};d.prototype.customStyle=function(h,i,e,g){var f;f=h?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;";if(i){f+="-webkit-animation-duration: "+i+"; -moz-animation-duration: "+i+"; animation-duration: "+i+";"}if(e){f+="-webkit-animation-delay: "+e+"; -moz-animation-delay: "+e+"; animation-delay: "+e+";"}if(g){f+="-webkit-animation-iteration-count: "+g+"; -moz-animation-iteration-count: "+g+"; animation-iteration-count: "+g+";"}return f};d.prototype.scrollHandler=function(){return this.scrolled=true};d.prototype.scrollCallback=function(){var e;if(this.scrolled){this.scrolled=false;this.boxes=(function(){var i,g,h,f;h=this.boxes;f=[];for(i=0,g=h.length;i<g;i++){e=h[i];if(!(e)){continue}if(this.isVisible(e)){this.show(e);continue}f.push(e)}return f}).call(this);if(!this.boxes.length){return this.stop()}}};d.prototype.offsetTop=function(e){var f;f=e.offsetTop;while(e=e.offsetParent){f+=e.offsetTop}return f};d.prototype.isVisible=function(h){var f,j,i,g,e;j=h.getAttribute("data-wow-offset")||this.config.offset;e=window.pageYOffset;g=e+this.element.clientHeight-j;i=this.offsetTop(h);f=i+h.clientHeight;return i<=g&&f>=e};return d})()}).call(this);