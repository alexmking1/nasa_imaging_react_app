<!-- ABOUT THE PROJECT -->
# About The Project
This web application displays a real image of an object in space (such as a planet, galaxy, nebula etc) and uses meta data to calculate interesting metrics about that object relative to earth (such as how far away the object is from Earth and how much larger/smaller the object is compared to Earth). Certain metrics for certain objects may not currently be known (such as temperature comparisons with a black hole) and the app is able to adjust accordingly, so only 'factual' information ends up being displayed to the user. 


* **NOTE:** This is *not* the completed project. It's a previous iteration I managed to recover. The completed project is on my GitHub Enterprise account. Due to the University of Minnesota's recent change to end lifetime alumni support, I no longer have access to what was my primary GitHub account (more details on my [homepage](https://github.com/alexmking1)). While this unfinished version of the project still functions, it lacks the Node.js/Express functionality that was added later and will serve as a placeholder until I regain access to my Enterprise account.  


### Screenshots
[![Product Name Screen Shot][product-screenshot]](https://example.com)

# Built With

![Static Badge][React.js]
![Static Badge][NodeJS]
![Static Badge][Express]
![Static Badge][Vite]

<!-- GETTING STARTED -->
# Getting Started

Follow the steps below to setup and run this project locally.

## Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* NASA API Key at: [NASA API](https://api.nasa.gov). You will need your own API key for the project to work

# Installation

1. Clone the repo
   ```sh
   git clone https://github.com/alexmking1/nasa_imaging_react_proj.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API in `.env` file
   ```js
   VITE_NASA_API_KEY= "ENTER-YOUR-API-STRING-HERE"
   ```
4. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
<!-- ROADMAP -->
## Roadmap

- [ ] Bring in the additional functionality from completed iteration of this app on my Enterprise repo (once my account is recovered). This will automatically complete all the below functionality.
- [ ] Add data calculation for distances in light years and positioning within our solar system.
- [ ] Change images every 30 minutes instead of 1 per day.
- [ ] Keep a persistent 'leaderboard' that indicates which image/object resulted in the 'largest-so-far' value for each metric. Over time this leaderboard becomes more compelling as you're able to see 
   - [ ] Add a 'time on top' value for the leaderboard that indicates how long each images has held the top spot for that particular metric. For example, the image of the 'moon' would likely hold the top spot in the 'weakest-gravity' metric for a long time, since it's unlikely we'll encounter any images that have a weaker gravity than the moon. 
    - [ ] Add a 'tally' of total number of images/objects that the leaderboard is including in its current state















<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Vite]: https://img.shields.io/badge/Vite-%23646CFF?style=for-the-badge&logo=Vite&logoColor=white
[Next-url]: https://nextjs.org/
[Express]: https://img.shields.io/badge/Express-%23000000?style=for-the-badge&logo=Express&logoColor=white
[NodeJS]: https://img.shields.io/badge/Nodejs-43853d?style=for-the-badge&logo=Node.js&logoColor=white
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

