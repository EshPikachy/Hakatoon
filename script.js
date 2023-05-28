const modalopener = document.querySelector(".modalopener");

modalopener.addEventListener("mouseover", () => {
  modalopener.classList.add("buttondecor");
});

modalopener.addEventListener("mouseout", () => {
  modalopener.classList.remove("buttondecor");
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

const mugiwarapictures = [
  {
    wiki: "https://onepiece.fandom.com/wiki/Monkey_D._Luffy",
    name: "Luffy",
    img: "https://i.pinimg.com/originals/e6/36/a6/e636a664f860a1ec9f7b5f3c4e2f634b.jpg",
  },
  {
    wiki: "https://onepiece.fandom.com/wiki/Roronoa_Zoro",
    name: "Zoro",
    img: "https://steamuserimages-a.akamaihd.net/ugc/1764818283971610119/DC931A7A55209DA74C757F603A98A6F0FA5801F5/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  },
  {
    wiki: "https://onepiece.fandom.com/wiki/Sanji",
    name: "Sanji",
    img: "https://static.wikia.nocookie.net/49e413b3-e9ad-4c46-88f7-93ba34636869",
  },
  {
    wiki: "https://onepiece.fandom.com/wiki/Usopp",
    name: "Usopp",
    img: "https://i.pinimg.com/originals/71/d2/74/71d274a454d7a358d54f96cc0a3360bf.jpg",
  },
  {
    wiki: "https://onepiece.fandom.com/wiki/Tony_Tony_Chopper",
    name: "Chopper",
    img: "https://i.pinimg.com/474x/66/5a/86/665a8611f10f29b606174ca8ea3df29d.jpg",
  },
  {
    wiki: "https://onepiece.fandom.com/wiki/Nami",
    name: "Nami",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2a4fd09-561a-4019-b2c9-6461fa3db151/demag5l-edc09abb-c021-4dee-a5b4-52c4cda8f5c8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyYTRmZDA5LTU2MWEtNDAxOS1iMmM5LTY0NjFmYTNkYjE1MVwvZGVtYWc1bC1lZGMwOWFiYi1jMDIxLTRkZWUtYTViNC01MmM0Y2RhOGY1YzguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5DFf-cIA1YHvM2uoYOT6SuwE__w15NtySXl-_qS4J3Y",
  },
  {
    wiki: "https://onepiece.fandom.com/wiki/Nico_Robin",
    name: "Robin",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2a4fd09-561a-4019-b2c9-6461fa3db151/demqz6k-f57b323b-bdcd-4cf3-8d6b-638c3815951a.jpg/v1/fill/w_582,h_922,q_75,strp/nico_robin_wano_by_albertobuzz98_demqz6k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTIyIiwicGF0aCI6IlwvZlwvYzJhNGZkMDktNTYxYS00MDE5LWIyYzktNjQ2MWZhM2RiMTUxXC9kZW1xejZrLWY1N2IzMjNiLWJkY2QtNGNmMy04ZDZiLTYzOGMzODE1OTUxYS5qcGciLCJ3aWR0aCI6Ijw9NTgyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.88Oc8H7qwAOk3PySOFudrkuXSVX25DOSKJTxLS2oLOU",
  },
  {
    wiki: "https://onepiece.fandom.com/wiki/Brook",
    name: "Brook",
    img: "https://i.pinimg.com/originals/7e/12/4c/7e124c0fca7a319d03d0a79b66e4e71a.jpg",
  },
  {
    wiki: "https://onepiece.fandom.com/wiki/Franky",
    name: "Franky",
    img: "https://www.giantbomb.com/a/uploads/scale_medium/9/94709/2655468-untitled-155.jpg",
  },
  {
    wiki: "https://onepiece.fandom.com/wiki/Jinbe",
    name: "Jinbe",
    img: "https://i.pinimg.com/originals/05/f3/ed/05f3edc28da4d81eb9b2d3aefcd44d43.jpg",
  },
];
const swipwrap = document.querySelector(".swiper-wrapper");

mugiwarapictures.forEach((el) => {
  const swipslide = document.createElement("div");
  swipslide.className = "swiper-slide";

  swipslide.textContent = el.name;
  swipslide.style.backgroundImage = `url(${el.img})`;

  swipwrap.append(swipslide);

  swipslide.addEventListener("click", () => {
    window.open(el.wiki);
  });
  swipslide.addEventListener("mouseover", () => {
    swipslide.style.boxShadow = "0px 1px 0px 500px rgba(0, 0, 0, 0.8) inset";
    swipslide.style.color = "white";
  });
  swipslide.addEventListener("mouseout", () => {
    swipslide.style.boxShadow = "";
    swipslide.style.color = "";
  });
});

const mugiwaravideo = [
  {
    link: "./opvids/luffyvid.mp4",
  },
  {
    link: "./opvids/zorovid.mp4",
  },
  {
    link: "./opvids/sanjivid.mp4",
  },
  {
    link: "./opvids/op2.mp4",
  },
  {
    link: "./opvids/op1.mp4",
  },
  {
    link: "./opvids/op3.mp4",
  },
];
const moments__row = document.querySelector(".moments__row");

mugiwaravideo.forEach((el) => {
  const col = document.createElement("div");
  const box = document.createElement("div");
  const vid = document.createElement("video");
  col.className = "col-4";
  box.className = "box";
  vid.className = "vid";

  vid.src = el.link;

  box.append(vid);
  col.append(box);
  moments__row.append(col);


  vid.addEventListener("mouseover", () => {
    vid.play();
    vid.muted = true;
    vid.style.transform = "scale(1.4)";
    vid.style.transition = "0.5s";
    vid.style.borderRadius = "1px";
  });

  vid.addEventListener("mouseout", () => {
    vid.pause();
    vid.style.transform = "";
    vid.style.borderRadius = "10px";
  });
});

const devilfruits = [
  {
    name: "Gomu Gomu no Mi",
    image: "./opimg/op (1).jpg",
    type: "zoan",
  },
  {
    name: "Bara Bara no Mi",
    image: "./opimg/op (14).jpg",
    type: "paramecia",
  },
  {
    name: "Sube Sube no Mi",
    image: "./opimg/op (2).jpg",
    type: "logia",
  },
  {
    name: "Bomu Bomu no Mi",
    image: "./opimg/op (3).jpg",
    type: "paramecia",
  },
  {
    name: "Kiro Kiro no Mi",
    image: "./opimg/op (4).jpg",
    type: "logia",
  },
  {
    name: "Hana Hana no Mi",
    image: "./opimg/op (5).jpg",
    type: "paramecia",
  },
  {
    name: "Doru Doru no Mi",
    image: "./opimg/op (6).jpg",
    type: "zoan",
  },
  {
    name: "Baku Baku no Mi",
    image: "./opimg/op (7).jpg",
    type: "zoan",
  },
  {
    name: "Ito Ito no Mi",
    image: "./opimg/op (8).jpg",
    type: "paramecia",
  },
  {
    name: "Awa Awa no Mi",
    image: "./opimg/op (9).jpg",
    type: "logia",
  },
  {
    name: "Yomi Yomi no Mi",
    image: "./opimg/op (10).jpg",
    type: "paramecia",
  },
  {
    name: "Kage Kage no Mi",
    image: "./opimg/op (11).jpg",
    type: "paramecia",
  },
  {
    name: "Ope Ope no Mi",
    image: "./opimg/op (12).jpg",
    type: "paramecia",
  },
  {
    name: "Mero Mero no Mi",
    image: "./opimg/op (13).jpg",
    type: "logia",
  },
];
const dftypes = ["all", "paramecia", "logia", "zoan"];

const dfrow = document.querySelector(".df__row");

const categoriesRender = (data) => {
  dfrow.innerHTML = "";
  data.forEach((el) => {
    const col = document.createElement("div");
    const box = document.createElement("div");
    const text = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("h4");
    const type = document.createElement("p");

    text.className = "dfinnertext";
    box.className = "dfbox";
    col.className = "col-3";

    img.src = el.image;
    name.textContent = el.name;
    type.textContent = el.type;

    box.append(img, text);
    text.append(type, name);
    col.append(box);
    dfrow.append(col);
  });
};

categoriesRender(devilfruits);

const inputsearchbar = document.querySelector(".searchbarinput");

inputsearchbar.addEventListener("input", (e) => {
  const result = devilfruits.filter((el) => {
    return el.name.toLowerCase().includes(inputsearchbar.value.toLowerCase());
  });

  if (result.length > 0) {
    categoriesRender(result);
  } else {
    dfrow.textContent = "No items like this";
  }
});

// dftypes.forEach((el) => {
//   const dftypebtn = document.createElement("button");

//   dftypebtn.textContent = el;

//   dftypebtn.className = "dftypebtn";

//   dftypeswrap.append(dftypebtn);
// });

const onButtonClickRenderItems = () => {
  const dftypeswrap = document.querySelector(".dftypeswrap");
  dftypes.forEach((el) => {
    const dftypebtn = document.createElement("button");

    dftypebtn.textContent = el;
    dftypebtn.className = "dftypebtn";

    dftypebtn.addEventListener("click", () => {
      if (el === "all") {
        categoriesRender(devilfruits);
      } else {
        const result = devilfruits.filter((item) => {
          return item.type === el;
        });
        categoriesRender(result);
      }
    });

    dftypeswrap.append(dftypebtn);
  });
};
onButtonClickRenderItems();

const activeButton1 = () => {
  const categoryBtns = document.querySelectorAll(".dftypebtn");
  categoryBtns.forEach((el, parentIndex) => {
    el.addEventListener("click", () => {
      categoryBtns.forEach((item, childIndex) => {
        if (parentIndex === childIndex) {
          item.classList.add("activebtn");
        } else if (parentIndex !== childIndex) {
          item.classList.remove("activebtn");
        }
      });
    });
  });
};
activeButton1();

// Получаем ссылки на элементы
const products = document.querySelectorAll(".product");
const selectedProductName = document.getElementById("selectedProductName");

// Обработчик нажатия на товар
function handleProductClick() {
  const productId = this.getAttribute("id");
  selectedProductName.textContent = `Товар ${productId}`;
}

// Привязываем обработчик нажатия к каждому товару
products.forEach((product) => {
  product.addEventListener("click", handleProductClick);
});

const fouremperors = [
  {
    name: "Shanks",
    img: "https://editors.dexerto.com/wp-content/uploads/2023/04/17/Shanks-From-One-Piece.jpeg",
    bounty: "4,048,900,000B",
    crew: "Red Hair Pirates",
  },
  {
    name: "Marshall D. Teach",
    img: "https://www.animesenpai.net/wp-content/uploads/2022/09/ecf05f1ddd74440443031269c66d58d0-1024x576.jpg.webp",
    bounty: "3,996,000,000B",
    crew: "Black Beard Pirates",
  },
  {
    name: "Clown Buggy",
    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/Buggy-One-Piece.jpg",
    bounty: "3,189,000,000B",
    crew: "Cross-Guild",
  },
  {
    name: "Monkey D. Luffy",
    img: "https://staticg.sportskeeda.com/editor/2022/07/519fa-16586727111936-1920.jpg?w=840",
    bounty: "3,000,000,000B",
    crew: "Mugiwara Pirates",
  },
];

// fouremperors.forEach((el,index)=>{
//   const parentparentbox = document.createElement('div')
//   const parentbox =document.createElement('div')
//   const box = document.createElement('div')
//   const name = document.createElement('p')
//   const bounty = document.createElement('p')
//   const crew = document.createElement('p')
//   const img = document.createElement('img')

//   parentparentbox.className = 'product'
//   parentbox.classname = 'box__first'
//   box.classname = 'box__second'
//   name.classname = 'fouremperorsname'
//   bounty.classname = 'fouremperorsbounty'
//   crew.className = 'fouremperorscrew'

//   img.src = el.img
//   name.textContent = el.name
//   bounty.textContent = el.bounty
//   crew.textContent = el.crew
//   parentparentbox.id = index + 1

//   box.append(img,name,bounty,crew)
//   parentbox.append(box)
//   parentparentbox.append(parentbox)
//   fouremperorswrap.append(parentparentbox)

// })






