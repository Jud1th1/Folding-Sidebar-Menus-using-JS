(function(){
"use strict";

const subMenu = document.querySelectorAll("ul li ul");

function hideSubmenus() {
	for (const eachMenu of subMenu) {
		eachMenu.className = "hide-menu";
	}
}

hideSubmenus();


const mainLinks = document.querySelectorAll('.menulink');

for (let i = 0; i < mainLinks.length; i++) {
	mainLinks[i].addEventListener('click', function(e) {
		e.preventDefault();

		const thisMenu = this.parentNode.querySelector('ul');

		if (thisMenu.classList.contains('hide-menu')) {
			hideSubmenus(); 
			thisMenu.className = "show-menu"; 
		} else {
			thisMenu.className = "hide-menu";
		}
    });
}

})();