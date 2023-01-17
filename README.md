![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

# Bird Nest 🪺 🦤

Deployed website: [bird-nest.netlify.app](https://bird-nest.netlify.app/)

## Description

> _"A rare and endangered Monadikuikka has been spotted nesting at a local lake._
>
> _Unfortunately some enthusiasts have been a little too curious about this elusive bird species, flying their_ > _drones very close to the nest for rare photos and bothering the birds in the process..."_

[Source](https://assignments.reaktor.com/birdnest/)

## Goal of the project

The monitoring equipment endpoints provide a snapshot of all the drones within a 500 by 500 meter square and are updated about once every 2 seconds.
The no-fly zone is a circle with a 100 meter radius, origin at position 250000,250000.

Build and deploy a web application which lists all the drone pilots who recently violated the no fly zone.

---

## Technologies used

The project is built with React + Node.js. Node-Cache was chosen over a database for storing pilots information for it's lightweigth, fast and temporary nature. ReactQuery is used as a preferred technology for fetching and rendering the data over commonly used useEffect to comply with the newest React documentation.

### Client:

- React
- TypeScript
- ReactQuery

### Server

- Node.js
- JavaScript
- Express
- Fast-Xml-Parser
- Node-Cache

## How to run locally

1. Git clone repository
2. Follow steps in client and server README files.
