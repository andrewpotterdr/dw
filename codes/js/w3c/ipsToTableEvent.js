class IpTables {

  constructor(ips) {
    this.ips = ips
  }

  toHTML() {
    let convertToRow = (tds) => `<tr><td>${tds.join('</td><td>')}</td></tr>`
    let ipInfo = (ip) => convertToRow(Object.values(ip))
    return this.ips.map(ipInfo).join('')
  }

  render() {
    const ipTbody = document.querySelector('#iptable table tbody')
    ipTbody.innerHTML = this.toHTML()
  }

}

let ips = [
  {ip: '192.168.0.1', mask: '255.255.255.0', version: 'v4'},
  {ip: '192.168.0.5', mask: '255.255.255.0', version: 'v4'},
  {ip: '192.168.0.7', mask: '255.255.255.0', version: 'v4'},
  {ip: '192.168.0.10', mask: '255.255.255.0', version: 'v4'}
]

let iptables = new IpTables(ips)
iptables.render()

const button = document.querySelector('button')
button.addEventListener('click', function() {
  console.log("You clicked!")
})
