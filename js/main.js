document.querySelector('button').addEventListener('click', getMovie)
var mykey = config.MY_KEY

function getMovie(){
	let movieTitle = document.querySelector('input').value
	fetch(`http://www.omdbapi.com/?apikey=${mykey}&t=${movieTitle}`)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			document.querySelector('h2').innerText = data.Title
			document.querySelector('h3').innerText = data.Genre
			document.querySelector('img').src = data.Poster
			document.querySelector('h4').innerText = data.Rated
			data.Ratings.forEach(obj => {
				console.log(obj.Value)
				console.log(obj.Source)
				 const li = document.createElement('li')
				 li.textContent = obj.Value
				 document.querySelector('.rating').appendChild(li)})
			data.Ratings.forEach(obj =>{
				console.log(obj.Source)
				const li2 = document.createElement('li')
				li2.textContent = obj.Source
				document.querySelector('.source').appendChild(li2)
			})
			document.querySelector('p').innerText = data.Plot
			// document.querySelector('h6').innerText = data.Ratings[0].Value
		})
		.catch(err => console.error(err));
}