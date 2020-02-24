const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const app = express()
const port = process.env.PORT || 3000

const getFilms = require("./utils/getFilms")
const getUser = require("./utils/users")

/*  Express Settings */
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(session({
  secret: "A String REALLY hard to guess",
  saveUninitialized: true,
  resave: true,
  rolling: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"))

/**
 * We are protecting all of our endpoints by default
 * and only allowing unprotected access to the /login endpoint
 */

const protectedByDefault = (req, res, next) => {
  const unprotectedEndpoints = [
    '/login'
  ]
  if(req.isAuthenticated() || unprotectedEndpoints.includes(req.url)) {
    return next()
  }
  res.redirect("/login")
}

app.use(protectedByDefault)

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  getUser.byId(id, (err, user) => {
    if(err) done(err)
    done(null, user)
  })
});

passport.use(new LocalStrategy(
  (username, password, done) => {
    const user = getUser.byCredentials(username, password)
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  }
));

app.get("/", (req, res) => {
  res.render('index')
})

app.get("/login", (req, res) => {
  res.render('login')
})

app.post("/login", passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}), (req, res) => {
  res.redirect("/")
})

app.get("/logout", (req, res) => {
  req.logout()
  res.redirect("/")
})

app.get("/stories", (req, res) => {
  const filmList = getFilms.all()
  res.render('stories', { pretty: true, filmList })
})

app.get("/stories/:id", (req, res) => {
  const film = getFilms.byId(req.params.id)
  res.render('story', { film, f: (val) => val || "¯\_(ツ)_/¯" })
})

app.listen(port, () => {
  console.log(`Simple form auth "Films" app listening in port ${port}`)
})