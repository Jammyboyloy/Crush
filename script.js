const question = document.querySelector(".question");
const image = document.querySelector(".img");
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");

const pic = [
    {
        picture: "/img/cry5.gif"
    },
    {
        picture: "/img/cry3.gif"
    },
    {
        picture: "/img/cry4.gif"
    },
    {
        picture: "img/cry6.gif"
    },
    {
              picture: "/img/cry.gif"
    },
    {
              picture: "/img/cry2.gif"
    }
];

let picIndex = 0; 

const yesMouseOver = () => {
    image.src = "/img/heart.gif";
};

const yesMouseOut = () => {
    image.src = "/img/img1.gif";
};

yesBtn.addEventListener("mouseover", yesMouseOver);
yesBtn.addEventListener("mouseout", yesMouseOut);

yesBtn.addEventListener("click", () => {
    question.innerText = "I love you too!!";
    image.src = "/img/love.gif";

    yesBtn.removeEventListener("mouseover", yesMouseOver);
    yesBtn.removeEventListener("mouseout", yesMouseOut);

    noBtn.remove();
});

noBtn.addEventListener("mouseover", () => {
    image.src = pic[picIndex].picture;
    picIndex = (picIndex + 1) % pic.length; 

    const rect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width;
    const maxY = window.innerHeight - rect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
