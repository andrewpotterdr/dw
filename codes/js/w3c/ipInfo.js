
class Address {
  constructor(info, table) {
    this.info = info
    this.table = table
    this.render()
  }

  render() {
    let infoTable = '<table>'
    for(let [key,value] of Object.entries(this.info)) {
        infoTable+= `<tr> <td>${key}</td> <td>${value}</td> </tr>`
    }
    infoTable+='</table>'
    this.table.innerHTML = infoTable
  }
}

const ipAddressInput = document.querySelector('#ip-addres')
const getIpButton = document.querySelector('#get-ip')
const addressDiv = document.querySelector('#address-table')

getIpButton.addEventListener('click',function() {

  let ip = ipAddressInput.value
  let url = `https://ipinfo.io/${ip}/json`

  addressDiv.innerHTML = '<img src="loading.gif">'

  fetch(url)
    .then(res => res.json())
    .then(info => {
      console.log(info)
      let address = new Address(info, addressDiv)
    })

})
