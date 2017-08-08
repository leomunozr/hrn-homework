(function() {
  /* Carousel animation */
  var carousel = document.getElementsByClassName('second__carousel')[0];
  var items = carousel.children;
  var index = 0;
  var prev = null;
  var animId;

 /* Helper functions */
  var toggleTooltip = function(current, prev) {
    current.classList.add('anim');

    if (prev) {
      prev.classList.remove('anim');
    }
  };
  var startAnim = function() {
    animId = setInterval(function() {
      toggleTooltip(items[index], items[prev]);
      prev = index;
      index++;
      if (index > 14) index = 0;
    }, 1500);
  }
  var stopAnim = function() {
    clearInterval(animId);
    if (prev) {
      items[prev].classList.remove('anim');
    }
  }

  /* Carousel events */
  Array.prototype.forEach.call(items, function(item) {
    item.addEventListener('mouseover', function() {
      stopAnim();
      item.classList.add('anim');
    });
    item.addEventListener('mouseout', function() {
      startAnim();
      item.classList.remove('anim');
    })
  });

  /* Start animation */
  startAnim();

  /* Menu toggle */
  var menuIcon = document.getElementsByClassName('top__bars')[0];
  var menuScreen = document.getElementsByClassName('menu-screen')[0];
  var showClass = 'menu-screen--show';
  var hideClass = 'menu-screen--hide';

  menuIcon.addEventListener('click', function() {
    if (menuScreen.classList.contains(showClass)) {
      menuScreen.classList.remove(showClass);
      menuScreen.classList.add(hideClass);
    } else {
      menuScreen.classList.remove(hideClass);
      menuScreen.classList.add(showClass);
    }
  });

})()
