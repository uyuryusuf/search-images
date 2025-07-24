const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const clearButton = document.querySelector("#clearBtn");
const searchButton = document.querySelector("#searchBtn");
const imageListWrapper = document.querySelector(".image-list-wrapper");


form.addEventListener("submit", search);


let previousValue=""

function search(e) {
  // console.log("yusuf")

  let value;

  if(previousValue){
    clearItems()
    value=inputValue.value.trim()
    previousValue=value
  }else{
    value=inputValue.value.trim()
  }


  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    method: "GET",
    headers: {
      Authorization: "Client-ID 6MPETgFqq7PCFrCfIHw4te5SKEyIKay2n4gPOjKZM4w",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      [...data.results].forEach((item) => {
        // console.log(item)
        // console.log(item.urls.small)
        addImageToUI(item.urls.small);
      });
    })
    .catch((err) => console.log(err));

  e.preventDefault();
}

function addImageToUI(url) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");

  img.setAttribute("src", url);
  img.setAttribute("alt", "resim yüklenemedi");

  img.className = "card-img";

  div.appendChild(img);

  imageListWrapper.appendChild(div);
}

clearButton.addEventListener("click", clearItems);

function clearItems() {
  imageListWrapper.innerHTML = "";
  searchInput.value = "";
}


function inputValue(){

}