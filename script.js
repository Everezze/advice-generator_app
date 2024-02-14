const button =  document.querySelector("button");
const title = document.querySelector("h1");
const paragraph = document.querySelector("p");

button.addEventListener("click",function(){
    const advice = fetch("https://api.adviceslip.com/advice", {cache: "no-store"});
    const response = advice.then(value => value.json());
    const data = response.then(value => value["slip"]);
    data.then(value => {
        title.textContent =  `advice #${value["id"]}`;
        paragraph.textContent =  `${value["advice"]}`;
        return value;
    });
});
