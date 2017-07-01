let ips = [
  {ip: '192.168.0.1', mask: '255.255.255.0', version: 'v4'},
  {ip: '192.168.0.5', mask: '255.255.255.0', version: 'v4'},
  {ip: '192.168.0.7', mask: '255.255.255.0', version: 'v4'},
  {ip: '192.168.0.10', mask: '255.255.255.0', version: 'v4'}
]

class IpTables {

  constructor(ips) {
    this.ips = ips
  }

  render() {
    let convertToRow = (tds) => `<tr><td>${tds.join('</td><td>')}</td></tr>`
    let ipInfo = (ip) => convertToRow(Object.values(ip))
    let content = this.ips.map(ipInfo).join('\n\t\t')
    let table =
      `<table>
          <thead>
            <tr>
              <th>IP</th>
              <th>Mask</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            ${content}
          </tbody>
      </table>`
      return table
  }

}

let iptables = new IpTables(ips)
const ipTableDiv = document.querySelector('#iptable')
ipTableDiv.innerHTML = iptables.render()
