setTimeout(() => {
  const buttons = document.querySelectorAll(".what-we-do .carousel-item-image");
  const $carousel = document.querySelector(".what-we-do .gallery-feature");
  let hover = 0;

  buttons.forEach((button) => {
    hover++;
    button.addEventListener(
      "mouseover",
      function (hover) {
        const $carousel = button.closest(".gallery-feature");
        $carousel.classList.add("carousel-hover");
        $carousel.classList.add(`carousel-hover-${hover}`);
        button.closest("article").classList.add("carousel-hover");
        button.closest("section").classList.add("carousel-hover");

        const $lastrow = document.querySelector(
          `.responsive-column-inner > ul > li:last-child`,
        );
        console.log("$lastrow remove", $lastrow);
        $lastrow.classList.remove("carousel-hover");

        const $columns = $carousel.closest(".panel");
        console.log("$columns", $columns);
        if ($columns) {
          const $row = $columns.querySelector(`li:nth-child(${hover})`);
          console.log("$row", $row);
          $row.classList.add("carousel-hover");
        }
      }.bind(this, hover),
    );

    button.addEventListener("mouseout", function () {
      const $carousel = button.closest(".gallery-feature");
      $carousel.classList.remove("carousel-hover");
      $carousel.classList.remove(`carousel-hover-${hover}`);
      button.closest("article").classList.remove("carousel-hover");
      button.closest("section").classList.remove("carousel-hover");

      const $columns = $carousel.closest(".panel");
      console.log("$columns", $columns);
      if ($columns) {
        const $rows = $columns.querySelectorAll("li");
        $rows.forEach(($row) => {
          $row.classList.remove("carousel-hover");
        });
      }
      if ($carousel?.classList) {
        $carousel.classList.add("carousel-hover");
      }

      const $lastrow = document.querySelector(
        `.responsive-column-inner > ul > li:last-child`,
      );
      if ($lastrow?.classList) {
        console.log("$lastrow", $lastrow);
        $lastrow.classList.add("carousel-hover");
        $lastrow.closest(".panel").classList.add("carousel-hover");
        $lastrow.closest("article").classList.add("carousel-hover");
      }
    });
  });

  const $lastrow = document.querySelector(
    `.responsive-column-inner > ul > li:last-child`,
  );
  if ($lastrow?.classList) {
    $lastrow.classList.add("carousel-hover");
    $lastrow.closest(".panel").classList.add("carousel-hover");
    $lastrow.closest("article").classList.add("carousel-hover");
    console.log(
      "$lastrow",
      $lastrow,
      "panel",
      $lastrow.closest(".panel"),
      "article",
      $lastrow.closest("article"),
    );
  }
}, 2000);
