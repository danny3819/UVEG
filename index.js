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
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000")
}
)