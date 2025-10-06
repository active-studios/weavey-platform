// TODO move to helper file.
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date(),
      args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

// TODO move to helper file.
function debounce(func, delay) {
  let timeout;
  // console.log('debounce?')
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // console.log('debounced.')
      func.apply(this, args);
    }, delay);
  };
}

addEventListener(
  "scroll",
  throttle(function (event) {
    var body = document.body,
      html = document.documentElement;
    var docHeight =
      Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      ) -
      window.innerHeight -
      600;

    let $el = document.querySelector("header.about-us .about-us-timelime");
    // console.log('!!!$el', $el);

    let display = "none";
    if ($el) {
      display = window.getComputedStyle($el, null)?.display;
      console.log("!!!display", display);
    }

    if (display === "none") {
      // console.log('hmm docHeight', docHeight, display, $el, document.querySelectorAll('.about-us-timelime')[0], document.querySelectorAll('.about-us-timelime')[0].style.display)
    } else {
      let $history = document.querySelectorAll(".instantphoto-container");
      const perSold = parseInt((window.scrollY / docHeight) * 100);
      const numPics = parseInt($history.length * (perSold / 100)) - 1;
      if (numPics > $history.length) {
        for (let i = 0; i < $history.length + 1; i++) {
          $history[i].classList.remove("show");
        }
      } else {
        for (let i = 0; i < $history.length + 1; i++) {
          if ($history[i]) {
            $history[i].style.zIndex = i;
            // $history[i].style.filter = `sepia(${ ((7-i)/7)/7 })`;

            const $p = $history[i].querySelector("p");
            if ($p?.classList) {
              if (i === numPics) {
                // console.log("$p", i, numPics - 1, $p)
                $p.classList.add("current");
              } else {
                // console.log("$p", i, numPics - 1, $p)
                $p.classList.remove("current");
              }
            }
            if (i <= numPics) {
              $history[i].classList.add("show");
            } else {
              $history[i].classList.remove("show");
            }
          }
        }
      }
    }
  }, 250),
);
