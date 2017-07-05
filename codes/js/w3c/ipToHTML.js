let ip = {
  ip: "8.8.8.8",
  city: "Mountain View",
  region: "California",
  country: "US",
  loc: "37.3860,-122.0840",
  org: "AS15169 Google Inc.",
  postal: "94035",
  phone: "650",
  toHTML: function(){
    let html = '<table>'
    for(let [field, value] of Object.entries(this)){
      if(field !== 'toHTML')
        html += `<tr><td>${field}</td><td>${value}</td></tr>`
    }
    html += '</table>'
    return html
  }
}

const ipTable = document.querySelector('#ip-table')
ipTable.innerHTML = ip.toHTML()

console.log(ip.toHTML())
