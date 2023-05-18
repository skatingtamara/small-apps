//wait for user
document.querySelector('#get-dog').addEventListener('click', getDog)
document.querySelector('#get-shiba').addEventListener('click', getShiba)
document.querySelector('#get-quote').addEventListener('click', getQuote)

function getDog(){
  const url = `https://dog.ceo/api/breeds/image/random`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').style.display = 'block'
        document.querySelector('img').src = data.message
        document.querySelector('.quote').style.display = 'none'
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}







function getShiba(){
  const url = `http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').style.display = 'block'
        document.querySelector('img').src = data
        document.querySelector('.quote').style.display = 'none'
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



function getQuote(){
  const url = `https://api.goprogram.ai/inspiration`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.quote').style.display = 'block'
        document.querySelector('h3').innerText = data.quote
        document.querySelector('h4').innerText = data.author
        document.querySelector('img').style.display = 'none'
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
