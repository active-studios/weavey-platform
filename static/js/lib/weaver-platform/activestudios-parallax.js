let top_nav_effect = false;
let reset = true;
let $topnav = document.querySelectorAll(".website .top-nav")[0];
let $parallax = document.querySelectorAll(".parallax");

update_top_nav = () => {
  if (!$topnav || $topnav.length === 0) {
    $topnav = document.querySelectorAll(".website .top-nav")[0];
  }
  let effects = ["dark-glass", "frosted-glass"];
  effects.forEach((effect) => {
    if (window.scrollY > 450 && $topnav && $topnav.classList.contains(effect)) {
      $topnav.classList.remove(effect);
      $topnav.classList.add(`${effect}-off`);
      top_nav_effect = false;

      // const $gallery = document.querySelectorAll('.masonry-gallery-sidebar-floating')[0];
      // if($gallery) {
      //   $gallery.classList.add(`show`);
      // }

      console.log(`$topnav ${effects} remove`, $topnav, $topnav.classList);
    } else if (
      window.scrollY < 470 &&
      $topnav &&
      $topnav.classList.contains(`${effect}-off`)
    ) {
      $topnav.classList.add(effect);
      $topnav.classList.remove(`${effect}-off`);
      top_nav_effect = true;

      // const $gallery = document.querySelectorAll(
      //   ".masonry-gallery-sidebar-floating",
      // )[0];
      // if ($gallery) {
      //   $gallery.classList.remove(`show`);
      // }

      console.log(`$topnav ${effects} add`, $topnav, $topnav.classList);
    } else {
      // console.log(top_nav_effect, $topnav.classList.contains(effect));
    }
  });
};

update_parallax = () => {
  if (!$parallax || $parallax.length === 0) {
    $parallax = document.querySelectorAll(".parallax");
    console.log("updating parallax", $parallax, $parallax.length);
  }

  $parallax.forEach(($hero) => {
    if ($hero) {
      setTimeout(() => {
        const computedStyle = window.getComputedStyle($hero);
        const computedValue =
          computedStyle.getPropertyValue("background-image");
        const layers = (computedValue.match(/url/g) || []).length;
        const bpos =
          window.scrollY -
          $hero.offsetTop +
          window.innerHeight -
          ($hero.offsetHeight || 0);

        if (layers > 1) {
          let backgroundPosition = "";
          for (let i = 0; i < layers; i++) {
            if (backgroundPosition) {
              backgroundPosition += ", ";
            }
            let percent = (i + 1) / 15;
            if ($hero?.dataset?.parallax) {
              let multipliers = $hero.dataset.parallax
                .split(",")
                .map((s) => parseFloat(s.trim()));
              percent = multipliers[i];
              // console.log('data-parallax yes', $hero, percent)
            }
            backgroundPosition += `0 -${Math.abs(bpos * percent)}px`;
          }
          // console.log(
          //   "multi backgroundPosition",
          //   $hero,
          //   layers,
          //   backgroundPosition,
          // );
          $hero.style.backgroundPosition = backgroundPosition;
        } else {
          let backgroundPosition = `0 -${Math.abs(bpos * 0.2) - 80}px`;
          if (Math.abs(bpos * 0.2) < 80) {
            backgroundPosition = "top";
            console.log("top!");
          }

          // console.log(
          //   "single backgroundPosition",
          //   $hero,
          //   layers,
          //   backgroundPosition,
          // );
          $hero.style.backgroundPosition = backgroundPosition;
        }
      }, 10);
    }
  });

  const $updated_parallax = document.querySelectorAll(".parallax");
  // console.log("zzz", $updated_parallax.length, $parallax.length);
  if ($updated_parallax && $updated_parallax.length > $parallax.length) {
    console.log(
      "refreshing parallax",
      $parallax,
      "refreshing parallax",
      $updated_parallax,
    );
    $parallax = $updated_parallax;
  }
};

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

function debounce(func, delay) {
  let timeout;
  console.log("debounce?");
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log("debounced.");
      func.apply(this, args);
    }, delay);
  };
}

addEventListener("scroll", () => {
  update_parallax();
});

addEventListener(
  "scroll",
  throttle(function (event) {
    update_top_nav();
  }, 250),
);

addEventListener(
  "scroll",
  throttle(function (event) {
    update_parallax();
  }, 10),
);

addEventListener(
  "resize",
  throttle(function (event) {
    update_parallax();
  }, 10),
);

setTimeout(() => {
  update_top_nav();
  update_parallax();
  $topnav = document.querySelectorAll(".website .top-nav")[0];
  $parallax = document.querySelectorAll(".parallax");
}, 1);

update_top_nav();
update_parallax();

setTimeout(() => {
  const $topnav = document.querySelectorAll(".website .top-nav")[0];
  if ($topnav && reset) {
    $topnav.classList.remove("dark-glass-off");
    $topnav.classList.remove("frosted-glass-off");
    reset = false;
  }
}, 50);
