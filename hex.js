const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexcolor = '#';
    for(let i = 0; i < 6; i++){
        const randomIndex = Math.floor(Math.random() * hex.length);
        console.log(randomIndex);
        hexcolor += hex[randomIndex];
        console.log(hexcolor);
    }
    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
});