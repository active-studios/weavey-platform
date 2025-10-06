const $search = document.querySelectorAll("#search");
document.addEventListener("keyup", handleSearch);

setTimeout(() => {
  const $search = document.querySelectorAll("#sitemap-search-text");
  const urlParams = new URLSearchParams(window.location.search);
  console.log("$search", $search, urlParams, urlParams.get("q"));
  if (urlParams.get("q")) {
    $search[0].value = urlParams.get("q");
    console.log("$search", $search, $search[0].value);
    handleSitemapSearch({ target: { value: $search[0].value } });
  }
}, 50);

function handleSearch(e) {
  e.preventDefault(); // Otherwise the form will be submitted

  if (e.key === "Enter") {
    location.href = "/sitemap?q=" + e.target.value;
  }
}

const $sitemapSearch = document.querySelectorAll("#sitemap-search-text");
document.addEventListener("keyup", handleSitemapSearch);
function handleSitemapSearch(e) {
  if (e?.preventDefault) {
    e.preventDefault(); // Otherwise the form will be submitted
  }

  const $sitemapSectionPage = document.querySelectorAll(
    ".sitemap-section-page",
  );
  $sitemapSectionPage.forEach(($s) => {
    const $link = $s.querySelector("a");
    if ($link?.style) {
      if (e.target.value === "") {
        // Reset and show everything.
        const $sitemapSections = document.querySelectorAll(
          ".sitemap-section, .sitemap-section-page",
        );
        $sitemapSections.forEach(($s) => {
          $s.classList.remove("desc-show");
          $s.classList.remove("show");
          $s.classList.remove("hide");
        });
      } else if (e.target.value) {
        if (
          $link.innerText.toLowerCase().indexOf(e.target.value.toLowerCase()) >
          -1
        ) {
          // We are matching, but what level?   Does that matter?
          $s.classList.add("show");
          $s.classList.remove("hide");
          let $li = $s.parentElement.closest(".sitemap-section-page.hide");
          if ($li) {
            $li.classList.add("desc-show");
            $li.classList.remove("show");
            $li.classList.remove("hide");
          }
        } else {
          // We didn't match anything, so make sure the parent decendant doesn't show, either.
          $s.classList.remove("show");
          $s.classList.add("hide");
          let $li = $s.parentElement.closest(".sitemap-section-page.desc-show");
          if ($li) {
            $li.classList.remove("desc-show");
          }
        }

        const $parent = $s.closest(".sitemap-section");
        const anySelected = $parent.querySelectorAll(".show").length > 0;
        if ($parent) {
          if (anySelected) {
            $parent.classList.add("desc-show");
            $parent.classList.remove("hide");
          } else {
            $parent.classList.remove("desc-show");
            $parent.classList.add("hide");
          }
        }

        // For any page we just showed, show all of the children pages.
        const $sitemapSectionPageSelected = document.querySelectorAll(
          ".sitemap-section-page.show",
        );
        $sitemapSectionPageSelected.forEach(($s) => {
          $s.querySelectorAll(".sitemap-section-page.hide").forEach(($h) => {
            $h.classList.add("show");
            $h.classList.remove("hide");
          });
        });

        const $sitemapSectionSelected = document.querySelectorAll(
          ".sitemap-section.show",
        );
        $sitemapSectionSelected.forEach(($s) => {
          if ($s.querySelectorAll(".sitemap-section-page.show").length > 0) {
            $s.querySelectorAll(".sitemap-section-page.show").forEach(($c) => {
              console.log("ooh", $c);
              let $li = $c.parentElement.closest(".sitemap-section-page.hide");
              if ($li) {
                $li.classList.add("show");
                $li.classList.remove("hide");
              }
            });
          } else {
            $s.querySelectorAll(".sitemap-section-page.show").forEach(($c) => {
              console.log("aah", $c);
              let $li = $c.parentElement.closest(".sitemap-section-page.show");
              if ($li) {
                $li.classList.remove("show");
                $li.classList.add("hide");
              }
            });
          }
        });
      }
    }
  });
}
