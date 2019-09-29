const http = require('http')

const app = http.createServer((req, res) => {
  if (req.method === "POST") {
    res.write("post")
    res.end()
  } else {
    res.write("page not found")
    res.end()
  }
})

app.listen(3000)