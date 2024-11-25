const profile = document.querySelector('.profile')
console.log(profile);
const click = document.createElement('span')
click.innerHTML=`
<i class="bi bi-list"></i>`

click.addEventListener('click',()=>{
profile.classList.toggle('w')
profileImg.classList.toggle('op')
profileH1.classList.toggle('op')
profileH2.classList.toggle('op')
profileH3.classList.toggle('op')
profileH4.classList.toggle('op')
git.classList.toggle('op')
linkedin.classList.toggle('op')
instagram.classList.toggle('op')
})

profile.innerHTML=`
<h1>Weather Api</h1>
<img src="asset/img/profit.jpg" alt="">
<h2>Coded By Ali khazaei</h2>
<h3>the languages used in this project html , css , javascript , typescript</h3>
<h4>dynamic detail weathers and location in iframe  just search your city!!;) </h4>
<div>
<i class="bi bi-github"></i>
<i class="bi bi-linkedin"></i>
<i class="bi bi-instagram"></i>
</div>
`
const git = profile.querySelector('.bi-github')
// console.log(git);

const linkedin = profile.querySelector('.bi-linkedin')
// console.log(linkedin);

const instagram = profile.querySelector('.bi-instagram')
// console.log(instagram);

const profileImg=profile.querySelector('img')
// console.log(profileImg);
const profileH1=profile.querySelector('h1')
// console.log(profileH1);
const profileH2=profile.querySelector('h2')
// console.log(profileH2);
const profileH3=profile.querySelector('h3')
// console.log(profileH3);
const profileH4=profile.querySelector('h4')
// console.log(profileH4);
profile.appendChild(click)
