const hex = document.querySelector(".hex");

const btn = document.querySelector(".generate");

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateColor);

//if you want to generate random color on page load call the function
//generateColor();





// let color = Math.random();

// color = Math.random().toString(16);

// color = Math.random().toString(16).substring(2,8);

// console.log(color);
