!function(){var e,s=document.getElementsByClassName("second__carousel")[0].children,n=0,t=null,a=function(e,s){e.classList.add("anim"),s&&s.classList.remove("anim")},c=function(){e=setInterval(function(){a(s[n],s[t]),t=n,++n>14&&(n=0)},1500)},i=function(){clearInterval(e),t&&s[t].classList.remove("anim")};Array.prototype.forEach.call(s,function(e){e.addEventListener("mouseover",function(){i(),e.classList.add("anim")}),e.addEventListener("mouseout",function(){c(),e.classList.remove("anim")})}),c();var o=document.getElementsByClassName("top__bars")[0],m=document.getElementsByClassName("menu-screen")[0];o.addEventListener("click",function(){m.classList.contains("menu-screen--show")?(m.classList.remove("menu-screen--show"),m.classList.add("menu-screen--hide")):(m.classList.remove("menu-screen--hide"),m.classList.add("menu-screen--show"))})}();