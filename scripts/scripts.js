const btnMenu = document.querySelectorAll(".button-menu");
const menu = document.querySelector(".menu");

let menuON = false;

btnMenu.forEach((e) => {
  e.addEventListener("click", () => {
    menuON = !menuON;

    menu.style.width = menuON ? "220px" : "0px";
    menu.style.padding = menuON ? "20px 20px" : " 20px 0px";
  });
});

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

const titleSprite = document.querySelector(".title-sprite");

const prevSprite = document.querySelector(".prev-sprite");
const nextSprite = document.querySelector(".next-sprite");

const staticSprite = document.querySelector(".static-sprite");
const animationSprite = document.querySelector(".animation-sprite");

const btnSprite = document.querySelectorAll(".btn-sprite");
const imgBtnSprite = document.querySelectorAll(".img-btn-sprite");

const descriptionSprite = document.querySelector(".description-sprite");

const sprites = [
  {
    title: "mico-stop",
    sprite: [
      "mico-stop/mico-stop-1.png",
      "mico-stop/mico-stop-2.png",
      "mico-stop/mico-stop-3.png",
      "mico-stop/mico-stop-4.png",
    ],
    gif: "mico-stop/mico-stop.gif",
    description:
      "Uma animação simples, mas eficaz: o personagem se desloca suavemente um pixel para cima, criando a ilusão de que está respirando de forma natural.",
  },

  {
    title: "mico-stop-pickaxe",
    sprite: [
      "mico-stop-pickaxe/mico-stop-pickaxe-1.png",
      "mico-stop-pickaxe/mico-stop-pickaxe-2.png",
      "mico-stop-pickaxe/mico-stop-pickaxe-3.png",
      "mico-stop-pickaxe/mico-stop-pickaxe-4.png",
    ],
    gif: "mico-stop-pickaxe/mico-stop-pickaxe.gif",
    description:
      "O personagem permanece em posição estática, segurando uma picareta com ambas as mãos, enquanto se desloca um pixel para cima, simulando o movimento de respiração.",
  },

  {
    title: "mico-walk",
    sprite: [
      "mico-walk/mico-walk-1.png",
      "mico-walk/mico-walk-2.png",
      "mico-walk/mico-walk-3.png",
      "mico-walk/mico-walk-4.png",
    ],
    gif: "mico-walk/mico-walk.gif",
    description:
      "O personagem alterna o movimento dos pés enquanto seu corpo se desloca um pixel para cima a cada passo, simulando a ação de corrida.",
  },

  {
    title: "mico-run",
    sprite: [
      "mico-run/mico-run-1.png",
      "mico-run/mico-run-2.png",
      "mico-run/mico-run-3.png",
      "mico-run/mico-run-4.png",
    ],
    gif: "mico-run/mico-run.gif",
    description:
      "O personagem alterna o movimento dos pés enquanto os braços acompanham o ritmo, com o corpo se deslocando um pixel para cima a cada passo, simulando a ação de corrida.",
  },

  {
    title: "mico-walk-pickaxe",
    sprite: [
      "mico-walk-pickaxe/mico-walk-pickaxe-1.png",
      "mico-walk-pickaxe/mico-walk-pickaxe-2.png",
      "mico-walk-pickaxe/mico-walk-pickaxe-3.png",
      "mico-walk-pickaxe/mico-walk-pickaxe-4.png",
    ],
    gif: "mico-walk-pickaxe/mico-walk-pickaxe.gif",
    description:
      "O personagem alterna o movimento dos pés enquanto segura uma picareta com ambas as mãos, deslocando-se um pixel para cima a cada passo, simulando o ato de caminhar.",
  },
];

let spriteIndex = 0;

const changeSprite = (i) => {
  titleSprite.textContent = sprites[i].title;
  staticSprite.src = `img/Mico/${sprites[i].sprite[0]}`;
  animationSprite.src = `img/Mico/${sprites[i].gif}`;

  btnSprite.forEach((e, index) => {
    e.addEventListener("click", () => {
      staticSprite.src = `img/Mico/${sprites[i].sprite[index]}`;
    });
  });

  imgBtnSprite.forEach((e, index2) => {
    e.src = `img/Mico/${sprites[i].sprite[index2]}`;
  });

  descriptionSprite.textContent = sprites[i].description;
};

prevSprite.addEventListener("click", () => {
  spriteIndex = spriteIndex - 1;

  if (spriteIndex < 0) {
    spriteIndex = sprites.length - 1;
  }

  changeSprite(spriteIndex);
});

nextSprite.addEventListener("click", () => {
  spriteIndex = spriteIndex + 1;

  if (spriteIndex > sprites.length - 1) {
    spriteIndex = 0;
  }

  changeSprite(spriteIndex);
});

changeSprite(spriteIndex);
