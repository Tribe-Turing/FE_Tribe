# Tribe

## Overview

During the past 30 years, we as a society have witnessed an unprecedented level of technological growth.  Ever since the advent of the internet in the 90s, the world has become increasingly technologically connected.

However, these changes have not come without consequence.  Today, over 61% of young adults in the United States report feeling seriously lonely.  Additionally, the average number of friends that Americans report having is half the number reported in surveys just 20 years prior.  The impact of this trend is staggering: reports estimate that loneliness increases the risk of mortality to the same degree as smoking as many as 15 cigarettes a day!

The trend is clear: in an increasingly connected world, we ironically find ourselves increasingly isolated by technology.

Tribe is here to fix that.

Tribe is a location-based friendship exploration app that uses technology to connect lonely people based on their interest compatibility.  Unlike other social media platforms--which are known to increase feelings of isolation and anxiety--Tribe emphasizes the creation of interest-based communities and natural conversations instead of the posting of over-curated images in shallow news feeds.

The details of the Alpha release of Tribe can be found below.

# Deployment
- The application was deployed using [Heroku](https://www.heroku.com/).
- Skip installation by using this deployment link to view the application: [Tribe](https://fe-tribe.herokuapp.com/)
- Since the application currently doesn't have a login page, type the following in the url to login:

   https://fe-tribe.herokuapp.com/login/:id

   Where ":id" is the user's login ID.
- The application currently has 12 different logins with the numbers of 1 to 12 used as the login IDs.

# Learning Goals
- Collaborating on a fullstack application
- Implementing WebSockets
- Refining React fundamentals
- Using React Hooks
- API Creation and Implementation
- Asychronous JavaScript

# Project Details
## Design Concept Wireframes

![](https://user-images.githubusercontent.com/92283709/170591742-83af81fe-4d92-46a0-85e1-11752aa8ce0e.png)

## Project Roadmap

![](https://user-images.githubusercontent.com/92283709/170591329-f04e0488-1b0b-469b-a9eb-44bfbbef1297.png)

## JSON Contract

![json_contract](https://user-images.githubusercontent.com/93230374/170589289-94ac0631-feaa-4ed4-8d24-d7f663d02378.png)

# Getting Started
To get a local copy up and running follow these simple steps:

## Developer Environment Installation

1. In your terminal, clone the repo
   ```sh
   git clone git@github.com:Tribe-Turing/fe_tribe.git
   ```
2. cd into the root directory
   ```sh
   cd fe_tribe
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server to see the application in the browser
   ```sh
   npm start
   ```
   - Runs the app in the development mode.
   - Open http://localhost:3000 to view it in the browser.
   - This installation process will enable you to run the Cypress tests for the project.

## Installation for backend server
Installation steps can be found here in the [Backend README](https://github.com/Tribe-Turing/be_tribe#readme)

# Features

## MVP

The Minimum Viable Product (MVP) has three core components:

- Dashboard with Interest Filtering
- Profile Customization
- Chat Application
## Dashboard, Profile Customization, & Chat Application Gifs

![tribe-filter](https://user-images.githubusercontent.com/92277979/170588024-7ee4b2de-64b4-48eb-805e-363f459aa1b1.gif) ![tribe-settings](https://user-images.githubusercontent.com/92277979/170588038-2bfdeb2b-655f-4048-943f-11e3b2d46b05.gif) ![tribe-chat](https://user-images.githubusercontent.com/92277979/170588052-afca5a42-805b-41f0-ab03-00fa99517f4a.gif)

## Component Architecture

We designed our component architecture with the mobile view in mind.  

The general component format is as follows:

 - Header
 - Page Content
 - Nav

 The Header component always has an icon of the current user's profile which navigates to their full profile when clicked.

 The Nav component always has the following three icons:

 - Home
 - Chat
 - Settings

The Home button navigates to the Dashboard component for searching for friends.

The Chat button navigates to the ChatList component, which is a list of the user's existing chats with other users.  

- If the user clicks on the profile picture of the another user, the application will navigate to their corresponding profile.  

- If the user clicks on the body of the most recent message displayed, the application will navigate to the Chat component, which contains the full conversation between the two users.

The Settings button navigates to the Settings component, which consists of a controlled form that lets the user customize their own profile.  

- Once the user profile has been customized, clicking the Save Changes button redirects the user to their UserProfile so that they can see that the changes have been unpdated.

## Cypress Testing, GitHub Actions, & Continuous Integration

We used Cypress for End-to-End testing.  Here is an example of one of our tests:

![](https://user-images.githubusercontent.com/92277979/170595157-72453efa-29ff-4bf2-b617-bad97f25a8f8.png)

To install Cypress locally and view the rest of the tests, type the following command:
   ```sh
   npm run cypress
   ```

# Future Work & Feature Additions

### Application Functionality
 * Refactoring and adding further testing
 * Adding more-specific error handling
 * Adding a dedicated login page

### Features
 * Interest-based chat room
 * Location-based friendship discovery
 * Event support
 * Random chat feature
 * Friendship matchmaking

# Technologies Used
- Languages/Frameworks: React, Ruby on Rails
- Chat: WebSocket
- Hosting: Heroku
- Continuous Integration: GitHub Actions
- Testing: Cypress, RSpec
- Accessibility: Lighthouse

![Lucid Chart](https://user-images.githubusercontent.com/93230374/170495899-edd6d611-6a8e-4549-a304-57b8b00956e5.png)

# Contributors
<table>
    <tr>
<!--         <td> Sam Ivari: <a href="https://github.com/samivari">GitHub</td> -->
        <td> Sam Mistele: <a href="https://github.com/SamusMist">GitHub</td>
<!--         <td> Gunnar Sorensen: <a href="https://github.com/glsorensen">GitHub</td> -->
<!--         <td> Eldridge Turambi: <a href="https://github.com/Eldridge-Turambi">Github</td> -->
        <td> Lauralyn Watson: <a href="https://github.com/lswatson16">Github</td>
        <td> Dillon Parker: <a href="https://github.com/Prkr93">Github</td>
        <td> Andrew Musselman: <a href="https://github.com/Andrew-Musselman">Github</td>
        <td> Rory Magee: <a href="https://github.com/roryemagee1">Github</td>
    </tr>
<!--  <td><img src="https://avatars.githubusercontent.com/u/87387139?v=4" alt="Sam Ivari GitHub" -->
<!--  width="150" height="auto" /></td> -->
 <td><img src="https://avatars.githubusercontent.com/u/89484102?v=4" alt="Sam Mistele GitHub"
 width="150" height="auto" /></td>
<!--  <td><img src="https://avatars.githubusercontent.com/u/81265307?v=4" alt="Gunnar Sorensen GitHub" -->
<!--  width="150" height="auto" /></td> -->
<!--  <td><img src="https://avatars.githubusercontent.com/u/87398716?v=4" alt="Eldridge Turambi GitHub" -->
<!--  width="150" height="auto" /></td> -->
 <td><img src="https://avatars.githubusercontent.com/u/93230374?v=4" alt="Lauralyn Watson GitHub"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/90285348?v=4" alt="Dillon Parker GitHub"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/92277979?v=4" alt="Andrew Musselman GitHub"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/92283709?v=4" alt="Rory Magee GitHub"
 width="150" height="auto" /></td>
</table>

# Credits
- [Create React App](https://create-react-app.dev/)
- [Heroku](https://www.heroku.com/)
- [FontAwesome](https://fontawesome.com/)
