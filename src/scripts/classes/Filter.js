import images from "url:../../assets/products/*.png";
import Storage from "./Storage";

const $arrFilterWomenBtns = document.querySelectorAll(".filter--women");
const $arrFilterMenBtns = document.querySelectorAll(".filter--men");
const $arrFilterAllProductsBtns = document.querySelectorAll(".filter--all");
const $productsContainer = document.querySelector(".allwatches__cards");
const $title = document.querySelector(".allwatches__cards-section .title");
const $priceSorting = document.querySelectorAll(".price-sorting");

const $filtermobile_women = document.querySelector(".filtermobile--women");
const $filtermobile_men = document.querySelector(".filtermobile--men");
const $filtermobile_all = document.querySelector(".filtermobile--all");

const $filtermobileChb = document.querySelector("#filtermobile__chb");

export default class Filter {
  arrBag = Storage.getBag();
  $cards;
  $arrWomen;
  $arrMen;
  $arrAllWatch;

  static get arrObjImgs() {
    return Object.values(images);
  }

  displayProducts(products) {
    let productsRender = "";
    let arrImgs = this.constructor.arrObjImgs;

    products.forEach((product) => {
      productsRender += `
					<article class="card" data-gender=${product.gender} data-id=${product.id}>
						<figure class="card__figure">
							<img src=${arrImgs[product.id - 1]} alt="hand-watch-with-title-${
        product.title
      }" class="card__img" />
						</figure>

						<div class="card__informations">
							<h3 class="card__title">${product.title}</h3>
							<h4 class="card__subtitle">${product.brand}</h4>
							<p class="card__price" data-price=${product.price}>$ ${product.price}</p>
						</div>

						<button class="btn-addtobag" data-id=${product.id}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="21.786" viewBox="0 0 16.5 21.786"><path d="M-6389-2281.464a4.254,4.254,0,0,1,4.25-4.25,4.255,4.255,0,0,1,4.251,4.25,4.256,4.256,0,0,1-4.251,4.25A4.256,4.256,0,0,1-6389-2281.464Zm2,.075a.318.318,0,0,0,.318.316h1.541v1.541a.318.318,0,0,0,.316.316.317.317,0,0,0,.316-.316v-1.541h1.544a.317.317,0,0,0,.314-.316.317.317,0,0,0-.314-.318h-1.544v-1.541a.316.316,0,0,0-.316-.316.317.317,0,0,0-.316.316v1.541h-1.541A.318.318,0,0,0-6387-2281.389Zm-1.726,2.848h0Zm-5.839,0a2.382,2.382,0,0,1-1.8-.833,2.633,2.633,0,0,1-.628-1.957l1.036-11.973a.617.617,0,0,1,.607-.581h1.825v-1.278a3.753,3.753,0,0,1,3.651-3.837,3.588,3.588,0,0,1,2.584,1.122,3.914,3.914,0,0,1,1.066,2.715v1.278h1.827a.616.616,0,0,1,.605.581l.631,7.273a5.007,5.007,0,0,0-1.342-.183,5.006,5.006,0,0,0-5,5,5,5,0,0,0,.774,2.675Zm2.26-16.623v1.278h4.87v-1.278a2.609,2.609,0,0,0-.711-1.811,2.39,2.39,0,0,0-1.724-.747A2.5,2.5,0,0,0-6392.305-2295.164Z" transform="translate(6397 2299.001)"/></svg>
						</button>

						<svg xmlns="http://www.w3.org/2000/svg" data-id=${
              product.id
            } class="card__fav card-fav-btn" width="43.938" height="39.367" viewBox="0 0 43.938 39.367">
							<path d="M38.151,3.608A11.143,11.143,0,0,0,29.863,0a10.425,10.425,0,0,0-6.511,2.247A13.321,13.321,0,0,0,20.72,5a13.314,13.314,0,0,0-2.633-2.749A10.423,10.423,0,0,0,11.576,0,11.143,11.143,0,0,0,3.287,3.608,12.953,12.953,0,0,0,0,12.453c0,3.5,1.306,6.712,4.11,10.1,2.508,3.026,6.113,6.1,10.288,9.656,1.426,1.215,3.041,2.592,4.719,4.059a2.433,2.433,0,0,0,3.2,0C24,34.8,25.615,33.42,27.042,32.2c4.174-3.557,7.779-6.629,10.287-9.656,2.8-3.383,4.11-6.591,4.11-10.1a12.951,12.951,0,0,0-3.287-8.845Zm0,0" transform="translate(1.25 1.25)"/>
						</svg>
					</article>
				`;
    });
    $productsContainer.innerHTML = productsRender;

    this.$cards = document.querySelectorAll(".allwatches__cards-section .card");
    this.makeDOMarrays([...this.$cards]);
  }

  makeDOMarrays(_cards) {
    let arrUnisex = document.querySelectorAll(`[data-gender="unisex"]`);
    this.$arrWomen = [
      ...document.querySelectorAll(`[data-gender="female"]`),
      ...arrUnisex,
    ];
    this.$arrMen = [
      ...document.querySelectorAll(`[data-gender="male"]`),
      ...arrUnisex,
    ];
    this.$arrAllWatches = this.$cards;
  }

  filtering(_filterArrBtns, _arrForDisplay, _title) {
    _filterArrBtns.forEach((filterBtn) => {
      filterBtn.addEventListener("click", () => {
        this.appendingChild(_arrForDisplay);
        this.changeTitle(_title);
        this.scrollToTop();
      });
    });
  }

  filteringMobile(_filterBtn, _arrForDisplay, _title) {
    _filterBtn.addEventListener("click", () => {
      this.appendingChild(_arrForDisplay);
      this.changeTitle(_title);
      this.closeFiltermobileChb(false);
      this.scrollToTop();
    });
  }

  changeTitle(title) {
    if ($title) {
      $title.innerText = title;
      if (!$title.classList.contains("title--anim"))
        $title.classList.add("title--anim");
      else $title.classList.remove("title--anim");
    }
  }

  priceSort() {
    $priceSorting.forEach((selectEl) => {
      selectEl.addEventListener("change", (e) => {
        if (e.srcElement.selectedIndex == 1) {
          //todo fkn priceToHigh
          this.priceToHigh();
          this.closeFiltermobileChb(false);
          this.scrollToTop();
        } else if (e.srcElement.selectedIndex == 2) {
          //todo fkn priceToLow\
          this.priceToLow();
          this.closeFiltermobileChb(false);
          this.scrollToTop();
        }
      });
    });
  }

  priceToHigh() {
    let $arrCards = [...document.querySelectorAll(".card")];

    $arrCards.sort((a, b) => {
      a = parseFloat(a.querySelector(".card__price").dataset.price);
      b = parseFloat(b.querySelector(".card__price").dataset.price);

      if (a > b) return -1;
      else if (a < b) return 1;
      else return 0;
    });

    this.appendingChild($arrCards);
  }

  priceToLow() {
    let $arrCards = [...document.querySelectorAll(".card")];

    $arrCards.sort((a, b) => {
      a = parseFloat(a.querySelector(".card__price").dataset.price);
      b = parseFloat(b.querySelector(".card__price").dataset.price);

      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    });

    this.appendingChild($arrCards);
  }

  appendingChild(_arrForEach, _gender) {
    const $cardsParent = document.querySelector(".allwatches__cards");
    $cardsParent.innerHTML = ""; // da nestanu cards koje nisu u ternutno arrayu

    _arrForEach.forEach((card) => {
      $cardsParent.insertAdjacentElement("afterbegin", card);
    });
  }

  closeFiltermobileChb(_isChecked) {
    $filtermobileChb.checked = _isChecked;
  }

  scrollToTop() {
    return window.scrollTo(0, 0);
  }

  setup_filter() {
    this.filtering($arrFilterWomenBtns, this.$arrWomen, "for her");
    this.filtering($arrFilterMenBtns, this.$arrMen, "for him");
    this.filtering(
      $arrFilterAllProductsBtns,
      this.$arrAllWatches,
      "all watches"
    );

    this.filteringMobile($filtermobile_women, this.$arrWomen, "for her");
    this.filteringMobile($filtermobile_men, this.$arrMen, "for him");
    this.filteringMobile($filtermobile_all, this.$arrAllWatches, "all watches");

    this.priceSort();
    this.closeFiltermobileChb();
  }
}
