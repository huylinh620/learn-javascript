let pageCounter = 1
const btn = document.querySelector('.js-btn')
const animalContainer = document.querySelector('.js-animal-info')

btn.addEventListener('click', () => {
  const ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', `animals-${pageCounter}.json`)
  ourRequest.onload = () => {
    if (ourRequest.status >= 200 & ourRequest.status < 400) {
    const ourData = JSON.parse(ourRequest.responseText)
    renderHTML(ourData)
    } else {
      console.log('We are connect to the server, but it returned an error.')
    }
  }

  ourRequest.onerror = () => {
    console.log('Connection error')
  }

  ourRequest.send()
  pageCounter++
  if (pageCounter > 3) {
    btn.classList.add('hide-me')
  }
})

function renderHTML(data) {
  let htmlString = ''
  if (!data.length) return
  data.map(animal => {
    htmlString += `<p>${animal.name} is a ${animal.species} that likes to eat `

    const animalFoodLikes = animal.foods.likes

    if (!animalFoodLikes.length) return
    animalFoodLikes.map((animalFoodLike, index)=> {
      if (index === 0) {
        htmlString += animalFoodLike
      } else {
        htmlString += ` and ${animalFoodLike}`
      }
    })
    htmlString += ' and dislikes '
    const animalFoodDislikes = animal.foods.dislikes

    if (!animalFoodDislikes.length) return
    animalFoodDislikes.map((animalFoodDislike, index)=> {
      if (index === 0) {
        htmlString += animalFoodDislike
      } else {
        htmlString += ` and ${animalFoodDislike}`
      }
    })
    htmlString += '.</p>'
  })
  animalContainer.insertAdjacentHTML('beforeend', htmlString)
}