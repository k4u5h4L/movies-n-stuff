<h1 align="center">Movies N' Stuff</h1></br>

<p align="center">
:clapper: A JAM stack, movie streaming website built with React, Next.js and Prisma ORM. :tv:
</p>
<br>

<p align="center">
  <a href="#"><img alt="built with love" src="https://forthebadge.com/images/badges/built-with-love.svg"/></a>
  <a href="#"><img alt="js Badge" src="https://forthebadge.com/images/badges/made-with-javascript.svg"/></a>
  <a href="https://github.com/k4u5h4L"><img alt="k4u5h4L GitHub badge" height="37" src="https://badgen.net/badge/GitHub/k4u5h4L?icon=github&color=24292e"/></a>
  <a href="#"><img alt="machine Badge" height="37" src="https://forthebadge.com/images/badges/works-on-my-machine.svg"/></a>
  <a href="#"><img alt="not bug but feature" height="37" src="https://forthebadge.com/images/badges/not-a-bug-a-feature.svg"/></a>
  <a href="#"><img alt="spaghetti Badge" src="https://forthebadge.com/images/badges/contains-tasty-spaghetti-code.svg"/></a>
</p>

<br>
<p align="center">
<img width="460px" src="assets/logo.png" alt="toxi-meter logo"></img>
</p><br>

## Technologies used:

-   React as the UI library.

-   Next.js for the as the server.

-   Prisma as the ORM.

-   NextAuth as the authentication backend with passwordless logins and OAuth.

## To run:

-   Clone and cd into the repo.

```
git clone https://github.com/k4u5h4L/movies-n-stuff.git && cd movies-n-stuff
```

-   Install the dependencies

```
yarn install
```

-   Create a new file called `.env` and fill in variables and keys from different providers.

-   Run migrations for the DB (if not present).

```
npx prisma migrate dev --preview-feature
npx prisma generate
```

-   Create a folder called `thumbnails/` in the `public/` directory. Add the thumbnails you want to display on those movies. Name them serially as `pic-1.jpg`, `pic-2.jpg`, etc. Stick to `.jpg` format.

-   Create a folder called `media/` in the root directory. Here, add the videos/movies you want to be streamed to the client. Name them serially as `video-1.mp4`, `video-2.mp4`, etc. Stick to `.mp4` format.

-   Now with all the API keys and media loaded, run development server.

```
yan dev
```

-   Now visit the location [localhost:3000](http://localhost:3000) to check out the site!

## Note:

-   This project is made as a hobby and is <b>NOT</b> a commercial application.

-   It is for learning purposes only.

-   Any contribution is welcome. You may fork the repo and issue a PR.
