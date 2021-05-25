"use strict"

const apiUrl = 'https://api.instantwebtools.net/v1/passenger?size=2&page=1'

const urlParams = new URLSearchParams(apiUrl)

for (const [x, y, z] of urlParams.entries()) {
  console.log(x, y)
  console.log(z)
}

export default function Testing () {
  return (
    <h3>Testing</h3>
  )
}