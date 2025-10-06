setTimeout(() => {
  window.addEventListener("hashchange", (event) => {
    if (window.location.hash) {
      var hash = window.location.hash.substring(1);
    }
    const $cats = document.querySelectorAll(".category");
    $cats.forEach(($cat) => {
      $cat.classList.remove("show");
    });

    const $cat = document.querySelectorAll(
      ".category." + hash.replace("filter-by-", ""),
    )[0];
    if ($cat) {
      $cat.classList.add("show");
    }
  });
}, 500);

setTimeout(() => {
  const $iconItems = document.querySelectorAll(".category .icon-item");
  if ($iconItems) {
    $iconItems.forEach(($iconItem) => {
      eventListeners($iconItem);
    });
  }
}, 500);

const setThumbs = (tag, $tile) => {
  const $thumbs = $tile.querySelectorAll(".thumb-container." + tag);
  console.log("$thumbs", $tile, $thumbs);
  if ($thumbs.length > 0) {
    $thumbs.forEach(($thumb) => {
      const $morethumbs =
        $thumb.parentElement.querySelectorAll(".thumb-container");
      $morethumbs.forEach(($thumb) => {
        $thumb.classList.remove("show");
      });

      $thumb.classList.add("show");
      console.log("show", $thumb, $morethumbs);
    });
  } else {
    const $thumbs = $tile.querySelectorAll(".thumb-container");
    console.log("$thumbs2", $tile, $thumbs);
    if ($thumbs.length > 0) {
      $thumbs.forEach(($thumb) => {
        $thumb.parentElement
          .querySelector(".thumb-container")
          .classList.remove("show");
      });
      $thumbs[0].classList.add("show");
    }
  }
};

const eventListeners = ($iconItem) => {
  $iconItem.addEventListener("click", function (e) {
    const $others = document.querySelectorAll(".icon-item");
    $others.forEach(($other) => {
      $other.classList.remove("selected");
    });
    this.classList.add("selected");

    const $tiles = document.querySelectorAll(".masonry-tile");
    $tiles.forEach(($tile) => {
      $tile.classList.remove("show");
      $tile.style.display = "none";
    });

    const $selecttiles = document.querySelectorAll(
      ".masonry-tile." + this.dataset.tag,
    );

    console.log("this.dataset.tag", this.dataset.tag, $selecttiles);

    if ($selecttiles.length == 0) {
      const $tiles = document.querySelectorAll(".masonry-tile");
      $tiles.forEach(($tile) => {
        const $thumbs = $tile.querySelectorAll(
          ".thumb-container." + this.dataset.tag,
        );
        if ($thumbs.length > 0) {
          $tile.classList.add("show");
          $tile.style.display = "block";
        }
      });
      setThumbs(this.dataset.tag, document.querySelector(".masonry-gallery"));
    } else if ($selecttiles.length > 0) {
      $selecttiles.forEach(($tile) => {
        $tile.classList.add("show");
        $tile.style.display = "block";
        setThumbs(this.dataset.tag, $tile);
      });
    }
  });
};
