class Monitor {
  constructor() {
    this.memorySize = document.querySelector('#memory-size')
    this.usedMemory = document.querySelector('#memory-status td:nth-child(1)')
    this.freeMemory = document.querySelector('#memory-status td:nth-child(2)')
  }

  getMemoryStatus() {
    const memoryStatusURL = '/data/memory.json'
    fetch(memoryStatusURL)
      .then(res => res.json())
      .then(memoryStatus => {
        let used = parseInt(memoryStatus.memoryUsageUsed)
        let free = parseInt(memoryStatus.memoryUsageUnused)
        let total = used + free

        used = (100 * used / total).toFixed(1)
        free = (100 - used).toFixed(1)
        total = `${(total / 2 ** 10).toFixed(0)} GB`

        this.memorySize.innerHTML = total
        this.usedMemory.innerHTML = used
        this.freeMemory.innerHTML = free
      })
  }

  render() {
    this.getMemoryStatus()
  }
}

const monitor = new Monitor()
monitor.render()
