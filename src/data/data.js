// DB mock 

const notes = new Array(15)
  .fill(1)
  .map((_, i) => ({
    // not working properly with Date.now() id
    id: i,
    title: `Note ${i}`
  }))

module.exports = notes 

// CJS type of export so the object will persist