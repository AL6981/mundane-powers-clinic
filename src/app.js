const createError = require("http-errors")
const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
const expressSession = require("express-session")
const fs = require("fs")
const flash = require("flash")
const hbsMiddleware = require("express-handlebars")
const MundanePower = require("./MundanePower.js")
const app = express()

const dataPath = path.join(__dirname, "../data.csv")
const fields = ["title", "url", "description"]

// view engine setup
app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)
app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())
app.use(
  expressSession({
    secret: "Launch Academy",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
)
app.use(flash())

// flush session
app.use((req, res, next) => {
  if (req.session && req.session.flash && req.session.flash.length > 0) {
    req.session.flash = []
  }
  next()
})

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))

const powerFile = path.join(__dirname, "../powers.json")

const loadPowers = () => {
  return JSON.parse(fs.readFileSync(powerFile).toString())
}

app.get("/", async (req, res) => {
   let title = "Mundane Powers Resource Site"
   let info = "THE place to find out what options are out there!"
  res.render("welcome", { title: title, info: info })
})

app.get("/powers", async (req, res) => {
  let powerSkills = loadPowers().map(power => {
    return power.skill
  })
  res.render("mundanePowers/index", {skills: powerSkills})
})

app.get("/powers/:skill", async (req, res) => {
  let skillsArray = loadPowers()
  let showSkill = skillsArray.find(power => {
    return power.skill === req.params.skill
  })
  res.render("mundanePowers/show", {skill: showSkill})
})

app.get("/error", async (req, res) => {
  res.render("error")
})

module.exports = app
