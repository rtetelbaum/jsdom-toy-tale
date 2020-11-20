let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
	const toyFormContainer = document.querySelector(".container");
	const toyCollection = document.querySelector("#toy-collection")

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
	});
	
	const toyDataFetchGet = () => {
		return fetch("http://localhost:3000/toys")
		 .then(response => response.json())
		 .then(toysData => {
			 console.log(toysData)
			 renderAllToys(toysData)
		 })
	}

	const renderAllToys = (toysData) => {
		toysData.forEach(toyData => renderOneToy(toyData))
	}

	const renderOneToy = (toyData) => {
		const toyCard = document.createElement("div")
		toyCard.className = "card"
		const cardH2 = document.createElement("h2")
		const cardImg = document.createElement("img")
		cardImg.className = "toy-avatar"
		const cardP = document.createElement("p")
		const cardButton = document.createElement("button")
		cardButton.className = "like-btn"
		cardH2.textContent = toyData.name
		cardImg.src = toyData.image
		cardP.textContent = `${toyData.likes} Likes`
		cardButton.textContent = "Like ♥️"
		toyCard.append(cardH2, cardImg, cardP, cardButton)
		toyCollection.append(toyCard)
	}

	function initialize() {
		toyDataFetchGet()
	}
	
	initialize()

});
