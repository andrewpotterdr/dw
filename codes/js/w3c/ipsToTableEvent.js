class IpTables {

  constructor(ips, ipTbody) {
    this.ips = ips
    this.ipTbody = ipTbody
    this.removeLink = '<i class="material-icons">clear</i>'
  }

  addAddress(address) {
    this.ips.push(address)
    this.render()
  }

  removeAddress(ip) {
    this.ips = this.ips.filter(address => address.ip !== ip)
  }

  render() {
    const valuesToRow = values => `<tr data-ip="${values[0]}"><td>${values.join('</td><td>')}</td></tr>`
    const getValuesWithClear = values => Object.values(values).concat(this.removeLink)
    const toAddressRow = address => valuesToRow(getValuesWithClear(address))

    this.ipTbody.innerHTML = this.ips.map(toAddressRow).join('')

    const clearIcons = document.querySelectorAll('.material-icons')
    const self = this

    Array.from(clearIcons).map(icon => {
      icon.addEventListener('click', function() {
        let tr = this.parentNode.parentNode
        self.removeAddress(tr.dataset.ip)
        tr.remove()
      })
    })
  }

}

let ips = [
  {ip: '192.168.0.1', mask: '255.255.255.0', version: 'v4'},
  {ip: '192.168.0.5', mask: '255.255.255.0', version: 'v4'},
  {ip: '192.168.0.7', mask: '255.255.255.0', version: 'v4'},
  {ip: '192.168.0.10', mask: '255.255.255.0', version: 'v4'}
]

const ipTbody = document.querySelector('#iptable table tbody')
const iptables = new IpTables(ips, ipTbody)
iptables.render()


const button = document.querySelector('button')
const inputs = document.querySelectorAll('input')
button.addEventListener('click', function() {
  const values = Array.from(inputs).map(input => input.value)
  let address = {ip: values[0], mask: values[1], version: values[2]}
  iptables.addAddress(address)
})
