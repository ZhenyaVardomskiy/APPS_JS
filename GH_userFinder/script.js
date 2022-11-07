const userName = document.querySelector("#userName");
const userSection = document.querySelector("#showUser");

userName.focus();
userName.addEventListener("keyup", function () {
  if (userName.value != "") {
    fetch(`https://api.github.com/users/${userName.value}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((res) => {
        userSection.style.display = "flex";

        let img = document.querySelector(".userPhoto");
        let userInfo = document.querySelector("#userInfo");

        userInfo.innerHTML = `<li><span>Name:</span> ${res.name}</li>
    <li><span>Bio:</span> ${res.bio}</li>
    <li><span>Location:</span> ${res.location}</li>
    <li><span>Company:</span> ${res.company}</li>
    <li><span>Company:</span> ${res.followers}</li>`;

        img.innerHTML = `<img src="${res.avatar_url}">`;
      });
  } else clear();
});