# vue-monster-slayer

[![Greenkeeper badge](https://badges.greenkeeper.io/skdigital/vue-monster-slayer.svg)](https://greenkeeper.io/)

### Summary

This project is a quick game that uses the following technologies & libraries.

+ Yarn
+ Vue 2.5
+ cli 3
+ flexbox
+ GSAP animations

I also use an 'EventBus' architecture for component communication. I subscribe to my
EventBus much the same as subscribing to an observable. The game works and I achieved
the challenge objectives without directed help from the Udemy course community.

I am unaware of the shortcomings of using my EventBus and how this affects performance
of my game, or whether this kind of architecture or solution is used in production.

I have noticed that a central data store would be ideal for health attributes and for game running booleans so that the state can be communicated and updated from a central location. At the moment there is so much interdependencie and direct communication between all pages that its starting to get a confusing as to where things are being updated etc...

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
