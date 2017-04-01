# VolunTier

We all want to do good for the community, but we never seem to find the time. Voluntier will help you plan when and where you can volunteer in your community. Simply start creating an account. Search for opportunities, save volunteering events to your calendar, keep track of your goals and hours, and earn badges along the way. Go ahead, start VolunTiering.

## Getting Started

* **VolunTier** - [voluntier.herokuapp.com](https://voluntier.herokuapp.com/)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

Text editor of your choice
* [Sublime Text](https://www.sublimetext.com/)
* [Visual Studio Code](https://code.visualstudio.com/)

Node.js
* [Node.js](https://nodejs.org/en/)

npm
* [npm](https://www.npmjs.com/)

In order to run this app on your local machine, you will need a [VolunteerMatch Api Key](https://www.volunteermatch.org/legal/publicuseapi). 

### Installing

These are the steps to installation:

NPM dependencies and devDependencies, including webpack
```
npm install 
```

Build bundle.js file with webpack
```
webpack [-w]
```

## Deployment

In order to deploy this to a local system, run the localserver (PORT 8080)
```
node server.js
```

## Built With

* [React](https://facebook.github.io/react/) 
* [React-router](https://www.npmjs.com/package/react-router) 
* [Webpack](https://www.npmjs.com/package/webpack) 
* [Babel](https://www.npmjs.com/package/babel-core) 
* [Passport](http://passportjs.org/) 
* [Fullcalendar.js](https://fullcalendar.io/) 
* [Axios](https://www.npmjs.com/package/axios) 
* [Mongoose](http://mongoosejs.com/) 
* [Moment](https://momentjs.com/) 
* [jQueryUI](https://jqueryui.com/) 
* [Bootstrap](http://getbootstrap.com/)

## Authors

* **Aisha Ahmad** - *search, eventModal, calendar, form, results, resultModal, main, VolunteerMatch API, Mongoose models, Express controllers, HTML5/ CSS3* - [aishaprograms](https://github.com/aishaprograms)
* **Justin Carlson** - *Passport, register, goalTracker, main, Mongoose models, Express controllers, React router, HTML5/ CSS3* - [JustinRyanCarlson](https://github.com/JustinRyanCarlson)
* **Katie Shiro** - *landing, volunteerLevel, profile, calendar, resultModal, main,  React router, Mongoose models, Express controllers, HTML5/ CSS3* - [kshiro622](https://github.com/kshiro622)
* **Hadi Yousufi** - *goalsList, infoModal, goalsForm, jQueryUI, categoryIcon, main, Mongoose models, Express controllers, HTML5/ CSS3* - [hadicodes](https://github.com/hadicodes)

## License

This project is licensed under the ISC License.

## Acknowledgments

* Northwestern Coding Boot Camp

## Version

Please note that the first version of this app is guaranteed support only by Chrome (Chrome version 56.0). Additionally note that the first version of this app is web-first and not guaranteed mobile responsive.

## How this Works

Start by creating a profile, or use the credentials for this guest account:
* login: 
* password: 

### Start Here: Your Calendar

This is where you will see your past events and your upcoming events. Click on a calendar event to see more information about it, update the event, or cancel the event.

![Calendar]("/public/assets/images/calendar.png")

### Search for Opportunities

Here you will be able to search for opportunities by your location, and narrow down the searches by keyword, category, or date range.

![search]("/public/assets/images/search.png")

### Add a New Event

Once you've figured out what you're looking for, consider your matches. You can see the title, organization name, description, categories, and, most importantly, the link to VolunteerMatch where you can apply for the position. After you've submitted your application, go ahead and save the event to your calendar. Plans might change? No worries. You can always go back and edit your timings later.

![results](/public/assets/images/results.png")

### Keep Track of Your Goals

Add new goals, delete completed ones, and rearrange them according to what matters to you the most.

![goals](/public/assets/images/goals.png")

### Track Your Hours

Woot! You helped out the world. Keep track of your hours and try meeting your weekly, monthly, and yearly goals.

![tracker](/public/assets/images/tracker.png")

### Earn Badges

You deserve it. Proudly earn your badges as you complete your volunteering hour goals. You're on your way to becoming a VolunTier aficionado!

![badge](/public/assets/images/badge.png")
