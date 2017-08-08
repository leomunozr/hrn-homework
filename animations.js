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
      console.log(index);
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
      console.log('hover');
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

})()
