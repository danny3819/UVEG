const App = require("express")
const app = App()

app.set("view engine", "ejs")
app.set("views", "./views")
app.use(App.static("public"))

app.get("/", (req, res) => {
  res.render("./index")
})

app.get("/paginas/genialis-UVEG", (req, res) => { 
  res.render("./paginas/genialis-UVEG")
})


//paginas de peticiones para cada materia en esta es introduccion al desarrollo de software
app.get("/Tipos-de-lenguajes-de-programacion", (req, res) => {
  res.render("genialis/Introduccion al desarrollo de software/Tipos-de-lenguajes-de-programacion")
}
)

app.get("/paginas/algebraING", (req, res) => {
  res.render("./paginas/algebraING")
}
)

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000")
}
)