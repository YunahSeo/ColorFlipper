const colors = ["green", "red","blue", "rgba(133, 122, 200)", "f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// 이 함수를 통해서 0-3까지의 숫자가 나옴
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
