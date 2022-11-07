
//Добавление в каунтер(переменные)
const yourBalance = document.querySelector('#your-balance');
const leftBalance = document.querySelector('#left-balance');
const inputBalance = document.querySelector('.input-balance')
const btnBalance = document.querySelector('.main-btn')
const addBalance = document.querySelector('.popup');

//Добавление в каунтер
inputBalance.focus();
btnBalance.addEventListener("click", () => {
    if (
        /^\d{1,10}$/g.test(+inputBalance.value)
        ){
            yourBalance.append(+inputBalance.value);
            leftBalance.append(+inputBalance.value);
            addBalance.style.display = "none";
        }else alert('Не верное значение');
      });


//Добавление списка(переменные)
const productName = document.querySelector(".product");
const cost = document.querySelector(".cost");
const ulItem = document.querySelector(".purchases-list__item");
const add = document.querySelector(".add-btn");
const error = document.querySelector('#error');

let itemList = [];

console.log(itemList)

add.addEventListener("click", (event) => {
    if (
        !productName.value && !/^\d{1,10}$/g.test(cost.value) && !yourBalance.textContent !==""
    )return 

      let purchasesList = {
        name: productName.value,
        price: cost.value
      };
      
      
      itemList.push(purchasesList);
      localStorage.setItem('item', JSON.stringify(itemList));

      console.log(productName.value ,cost.value)

      let localItemData = localStorage.getItem('itemList');
      if(localItemData != null && localItemData.length > 0)
      itemList = JSON.parse(localItemData);

      // createLi(productName.value, cost.value);
      itemList.forEach(function(item) {
      let li = document.createElement("li");
      li.innerHTML = `${item.name}:  ${item.price}$`;
      ulItem.appendChild(li);
      li.classList.add('list');
  
});



      calculationBalance(cost.value);
      lowBalance(leftBalance.textContent);
      productName.value = "";
      cost.value = "";
    
  });

function calculationBalance(cost) {
  leftBalance.innerHTML = (leftBalance.textContent - cost);   
}

error.style.display = "none";

function lowBalance(leftBalance) {
    if (leftBalance <= 0) {
      error.style.display = "flex";
      setInterval(function(){
        error.style.opacity = 1 - (error.style.opacity || 1);
            },5e2);  
    }
  }
