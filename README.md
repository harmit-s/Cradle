# Project Title: Cradle

## Overview

Cradle is a simple physics-based puzzle game where players must navigate a cube to the final platform using their problem-solving skills. Developed in 3D using JavaScript and the React-three-fiber (a combination of three.js/React) library, this game provides an engaging experience within a Vite development environment.

### Problem

Cradle addresses the need for entertaining and challenging 
puzzle games. With an emphasis on problem-solving and enjoyment, 
it offers a solution for users seeking interactive and engaging 
gameplay experiences.

### User Profile

The target audience for Cradle includes individuals of all ages who enjoy puzzle games and challenges. Users will access the game through web browsers, leveraging the mobile-friendly nature of the Vite environment for convenient gameplay on various devices.

### Features

-Navigate the hero (which will be represented as a cube) through physics-based puzzles.
-Solve challenges to reach the final platform
-Engage in immersive 3D gameplay using three.js library
-You have full control over the camera (background scene), 
so if you want to adjust the position of the frame to find a better angle, click/tap, drag to look around, scroll/pinch to zoom, and right click or two-finger-drag to pan. These features will allow the user to discover what blocks need to be destroyed (theres a purpose to having many ways to view the blocks)

## Implementation
How to Play:
The red hero cube will fall on to the initial platform 
when the level loads. Underneath the platform will be a 
series of purple blocks/boxes. Destroy all of the purple 
blocks by tapping on them without letting our hero fall 
off the platform or hit the platform. Our hero is 
delicate so each time it moves, it will weaken
him - lowering your health score. Goal is to always get the Hero cube on the black cube and the black cube on the platform. 

This is a javascript game developed using react-three-fiber (three.js) library deployed in vite environment. 

### Tech Stack

-Javascript
-React-three-fiber
-three.js (Effects, Scenes, Cameras, Animation, 
Lights, Shaders, Objects, Geometry and more)
-VITE environment for deployment
-node/express 

### APIs

no external APIs

### Sitemap

Sitemap is on excalidraw
-Landing page: Will consist of 3 links: Leadsership board, how to play and Start game (directed to level 1)
-Leadership baord page: to display the list of scores for everyone that has played the game
-How to Play: instructions on how to play
-Level 1, 2 , 3, 4, 5 : levels of the game
-final score page: final score page to add your name and showcase you final score (gives an option to add to leadership board)

### Mockups

Mockup on excalidraw

### Data

Cradle does not rely on external data sources. 
Leaderboard data is persisted with player name and score using node/express.

### Endpoints

1 post request(/players) to submit the player name/score.

### Auth

As Cradle is a client-side game without user accounts, authentication and 
user profile functionality are not implemented.

## Roadmap

Sprint 1 (Week 1)
LEARN THREE.js/React-three-fiber
-Set up project environment with Vite

Sprint 2 (Week 2)
-Create basic game layout and mechanics
-Implement initial physics-based puzzles
-Enhance game visuals using three.js
-Add additional levels and challenges
-Test and debug gameplay mechanics

## Nice-to-haves

-Integration with online leaderboards for competitive gameplay
-Additional game modes or levels for extended gameplay experience
-Incorporation of background music for enhanced immersion

by: Harmit Sidhu