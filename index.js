const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("public"))


app.get("/", (req, res) => {
  res.render("index")
})

app.get("/:carpeta/:materia/:archivo", (req, res) => {
  const carpeta = req.params.carpeta.replace(/-/g, " ")
  const materia = req.params.materia.replace(/-/g, " ")
  const archivo = req.params.archivo
  const path = `${carpeta}/${materia}/${archivo}`

  res.render(path, (err, html) => {
    if (err) {
      res.status(404).send("Página no encontrada")
    } else {
      res.send(html)
    }
  })
})

app.get("/paginas/:archivo", (req, res) => {
  const { archivo } = req.params
  const path = `paginas/${archivo}`

  res.render(path, (err, html) => {
    if (err) {
      console.error(err)
      res.status(404).send("Página no encontrada")
    } else {
      res.send(html)
    }
  })
})



app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000")
}
)