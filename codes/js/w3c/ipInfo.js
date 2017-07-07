
let ip = '8.8.8.8'
let url = `https://ipinfo.io/${ip}/json`

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    console.log(data.city)
  })
