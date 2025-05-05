var url = new URLSearchParams(window.location.search);
var monkup = url.get('monkup')
var degree = url.get('degree')
var BeltOrAll = url.get('beltorall')
var Catagory = url.get('category')


document.getElementById("quizbelt").src="./assets/images/"+degree+monkup+".png"
function GotoHref(namestr) {
    window.location.href = `./${namestr}.html?monkup=${monkup}&degree=${degree}&beltorall=${BeltOrAll}&category=${Catagory}`;
}

function updateBelt() {
    document.getElementById("quizbelt").src="./assets/images/"+degree+monkup+".png"
}