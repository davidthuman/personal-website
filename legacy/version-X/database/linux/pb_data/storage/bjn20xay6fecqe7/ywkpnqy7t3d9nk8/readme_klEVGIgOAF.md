# Request For Proposal (RFP) App Documentation

Documentation is vial to any project, big or small. The writings below will serve as an expert for this application; give it a question, and you will receive a detailed answer.

## Introduction

This web-application will be used to track Request For Proposals (RFPs) that are needed when planning conference, student programs, or general events. Using the paradigm of a CRUD (Create Read Update Delete) web-app, this is a full-stack solution that includes a frontend, backend, and database. The main components of the technology stack are:

- React JS
- Django
- PostgreSQL
- Nginx
- Docker

## Docker

The full-stack web-application is containerized with Docker. Not only is it good practice to containerize your applications, Docker allows us to easily connects the frontend, backend, and database when the web-app launches. A Docker Compose file is created with all configutions and start scripts. This compose file creates and started three containers:

- Nginx container to store, build, and serve the React JS frontend
- Django container to act as an API endpoint for the backend
- Postgres container to host the database software and track the Docker volume

Once you make sure you have installed Docker Desktop (and Docker Compose if you are running Linux), make sure you have your Docker Desktop application open. You can then run `docker-compose up -d --build` to build and start all containers.

### Nginx Container

The Docker file for this container has two stages. The first stage starts with a Node.js image. It creates a working directory, copies over the `package-lock.json` and `package.json` file, and then runs `npm ci --silent` to create the necessary node modules defined in the package files. The source files are then copied over and `npm run build` is used to create build files that Nginx will serve.

The second stage starts from an Nginx image. This stage copies over the build files into a HTML directory and then runs `nginx -g daemon off` to start the web server.

### Django Container

The Docker file for this container starts from a Python 3.10 image. Environment variables are set, a working directory is created, the `requirements.txt` file is copied over and other dependencies are installed, and finally the backend folder is copied over.

To run Django migrations, or other commands, when the Docker containers are running, use `docker compose exec <service_type> <command>`.

## PostgreSQL

“PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.”  - PostgreSQL website

The correct database type depends on the type of data you are storing and how you are going to use that data. This statement is broad and unhelpful to point to a specific database, but is the correct first mindset when searching for a database to use in a project. The RFP data that will be stored is strict in most of its formatting, but needs one field for variability. PostgreSQL was chosen because it has the capability of storing JSONB (JSON binary) data in a single cell of a table. This means we get the organization of SQL-based databases with a sprinkle of document-based variablility.

The setup and configuration of the database is all done through the main Docker Compose file. Django has models for PostgreSQL that make it extremely easy to interface with the database.

Once the containerized database is running, you can access the container’s terminal via Docker Desktop. You can then run `su - postgres` to switch to the operating system user. This will allow you to use all commands that the database has to offer.

## Nginx

Nginx is a web server that can be used for serving static files, as a reverse proxy, load balancer, mail proxy, or HTTP cache. It was written with an explicit goal of outperforming the Apache web server.

For our use, it will be a proxy server, which means a server that receives requests, passes them to the proxied servers, retrieves responses from them, and sends them to the clients. This is how we will serve our static files that are built from React. It will also connect with Gunicorn, a Python Web Server Gateway Interface (WSGI) HTTP server. It allows our Python web applications to communicate with our Nginx web server. Gunicorn is also described as an “application server.” In a production build, we are not using `runserver` to access our Django back-end, or `npm start` to access our React JS front-end. We use Nginx and Gunicorn as an intermediary.

### nginx.conf

As the file type suggests, this is where we configure our Nginx web server. The configuration file is used to define the functionality of the Nginx web server.

We are able to define configurations for a given URL. The base url ( / ) will serve the static React files. The @proxy_api, which is set in the package.json file in the React folder, will define what needs to happen when we attempt to use our Django API.

## Gunicorn

As stated above, Gunicorn is a Python Web Server Gateway Interface (WSGI) HTTP server. Django’s `python manage.py runserver` command is said, by the developers, to not be used for production. Instead, we use Gunicorn which used all the Django files to function as the backend.

### wsgi-entrypoint.sh

This shell script file is used to start Gunicorn in the backend's Docker container. The script migrates all changes in Django before starting Gunicorn.

## React JS (updated Auguat 2nd, 2022)

The 'ces-rfp-frontend' directory contains all the necessary source code to run the React app front-end. After cloning the repo, you can `cd` into the 'ces-rfp-frontend' directory and run `npm install` to generate the necessary node modules. After, you can run `npm start` to start the app on your local machine.

There is a necessary mindset when building UIs with React. We will discuss here how our front-end needs to be broken down, and the functionality that attaches to each part.

There are three main objects that are used to build React apps:

- Components
- Props and States
- Event Handling

These three objects give the app organization/structure, templates with unique data, and interactivity.

### Components

A reusable piece of UI that can live in isolation.

Each “block” of our UI should be created as a component. The goal of a component is to be reused, and to only have one function. If a component is getting too complex, you should create sub-components to be called.

Below will be an attempt at keeping all the moving parts in the frontend organized. Already, with some but minimal features, our frontend has become decently complex. States must be lifted up to have a top-down information approach, event handlers must then be passed down to nested components, and naming conventions have become convoluted. React JS, just like most HTML DOMs, are tree-like structures, so that is the logical structure we will attempt to use to keep the frontend organized.

**In ‘src/’ folder:**

Index.js

- Creates the ReactDOM tree
- Imports App.js

App.js

- Top-level functionality of the frontend. It renders the Navigation bar that will always be present. It also implements a custom “paging” mechanism to change what display is rendered under the navigation bar. React JS is configured to be used as a Single Page Application (many websites’ URLs become website.com/index/posts or …/index/comments, these are different pages). Instead, App.js implements a handlePathChange function to change the path state of the component. Then, different components are displayed depending on the path state. This function must be passed as a prop to all displayed components so they can change the path.
- Imports Navbar.js, Sorter.js, NewRFP.js, RFP.js

**In ‘src/components/’ folder:**

Navbar.js

- This is a navigation bar that renders buttons to change the path, and therefore the display, of the App components

**In ‘src/components/home/’ folder:**

Sorter.js

- As an acting home page, Sorter renders RFPs given some sort parameters. There is a RFP status sort state and a sudo by planner sort state. Each of these two states have bound functions that work to change/update the sort state. Depending on the sort states, Sorter will render different RFPslist. Sorter also renders are Sortbar that contains the buttons and such for sorting.
- Import Sortbar.js, RFPslist.js

Sortbar.js

- Sortbar takes those bound functions as props and applies them to its rendered buttons and selector. Like navbar, it has nothing too special

**In ‘src/components/rfps/’ folder:**

RFPsList.js

- RFP Lists are rendered by Sorter. Sorted, based on the sort states, gives each RFP List it renders a specific query. This query is then used to GET the necessary RFP information from the backend, creates an RFPcard with RFP information, and then renders them.
- Imports RFPcard.js

RFPcard.js

- RFP card is a smaller sized component that renders some of the RFPs information on the home screen. You can click on an RFP name in the RFP card to access the specific RFP’s page

RFP.js

- Like RFPcard, RFP renders the RFP’s information in a more verbose way. It also contains an EDIT button that changes the path of App to be able to edit the RFP. To understand editing, we must first dive into the components that enable us to create a new RFP in the database.

**In ‘src/components/new_rfp/’ folder:**

NewRFP.js

- This component renders the NewRFPForm and DetailSelector components to allow us to create and POST new RFPs to the database. As the top-level component for these forms and deeper logic, their states must rise into this component.
- The components props are:
  - handlePathChange: passed to lower components (like a SAVE button to POST/PUT and then to go back to the home page)
  - Update: to tell whether we need to treat this like we are updating an RFP
  - rfpID: the ID of the RFP, if we are updating (this allows us to re-use the Form code, and lets us place the RFP’s values in the form fields to be updated)
- The component’s states are:
  - Initial: used to populate the form fields (whether we are editing an RFP or create a new one from blank information)
  - Checked: used to track which details are check in the DetailSelector (checked details must have an input that can be filled in the NewRFPForm)
  - Details: used to track detail information to display check-able detail in the DetailSelector and to give information to create an input in the New RFPForm)
  - Search: you can search for detail names in the DetailSelector (maybe this doesn't have to be at this level)
- The bound functions are:
  - handleCheckboxChange: to update the checked state when a detail is checked in the DetailSelector
  - handleDetailChange: to update the details state when a new detail is added
  - handleSearchChange: to update the details state when a search is entered in the DetailSelector
  - componentDidMount: initializes all states
- Imports NewRFPForm.js, DetailSelector.js

NewRFPForm.js

- The high-level is not too complicated as Formik and Yup (third-party libraries) are used to handle the complexities of creating forms, tracking changes and values, and submitting. Most of the information is taken in through its props that are the states of NewRFP
- This component’s props are:
  - Details: like the state of NewRFP
  - Checked: ibid
  - InitialValues: initial from NewRFP
  - Update: ibid
  - handlePathChange: ibid

DetailSelector.js

- This component switches between displays that list DetailCheckbox components or NewDetail. It has a state that tracks whether you are adding a detail or not, with associated bound functions for SAVE and Cancel buttons.
- Imports DetailCheckbox.js and NewDetail.js

DetailCheckbox.js

- Just renders a simple header and checkbox input, using its detail prop, isSelected props, and a prop function to handle a checkbox change event.

NewDetail.js

- A simple form to create and POST a detail to the database.

### Props and States

Data that is handed down from parent to child and data that is isolated, and mutable, within a component.

### Event Handling

Functionality that is bound to user actions inside a component.

### Additional Libraries

**Axios**

Axios is a popular library used in the React JS community that is mainly used to send asynchronous HTTP requests to REST endpoints. It is very useful when performing CRUD operations.

**Formik**

Formik is an open source form library for React JS applications. Nothing too complicated, it will just make state management, validation, and event handling with forms easier, allowing our code to be more DRY.

**Yup**

Yup is a Javascript schema builder for value parsing and validation. Yup and Formik are used together to create strong and concise forms in React JS.

**HeadlessUI**

Created by the team at TailwindCSS, Headless UI is a library with un-styled components, that are meant to be styled with Tailwind.

**Heroicons**

Library with custom icons

## Django

The 'ces-rfp-backend' directory contains all the necessary source code to run the Django back-end. Again, after cloning the repo, you can `cd` into the 'ces=rfp-backend' directory and run `python3.10 -m venv .venv`. This will create a Python virtual environment so we can isolate library and module indtallations to just this directory. To activate the virtual environment (which is necessary to use the venv's version of Python and all of its libraries), run `source .venv/bin/activate`. You can run `deactivate` at anytime to deactivate the virtual environment. Once we are activated, you can run `pip install -r requirements.txt` to install all the necessary modules and libraries to start the Django back-end.

We will discuss here our thinking when creating the back-end, using Django, of our RFP CURD application.

Django comes with an “object-relational mapper” which helps you describe your database layout in Python code. Once these database models are created, Django gives you an API on the fly to access your data.

Django also offers an Admin site, where you can view your models, and make changes to your data.

Django allows for a decoupling of URLs from Python code. The ‘URLconf’ module is basically a table that maps actual URLs to Python call-back functions.

These call-back functions are ‘Views.’ Each view is just a function that is responsible for doing one or two things.

Django has an HTML template system.

Here (https://docs.djangoproject.com/en/4.0/ref/contrib/postgres/fields/) is the documentation on PostgreSQL specific model fields that are available in Django

When the containers are up and running, if you want to run a manage command with Django, use the command style `docker compose exec <service_type> python manage.py <command>`

Here (https://pganalyze.com/blog/custom-postgres-data-types-django-python) is an example post of how to add a custom data type in a Django model that will be registered with PostgreSQL

### Backend Configuration

Inside the ‘ces-rfp-backend’ folder there is another ‘backend’ folder that contains higher-level ‘settings.py’ and ‘urls.py’ configuration files. 

‘settings.py’ contains, you guessed it, settings for the Django application. 

Key additions are:

- Additions of rfp app configurations, rest framework to ‘INSTALLED_APPS’
- Database configuration for PostgreSQL

‘urls.py’ attach all additional apps created within the Django application, which will be discussed below.

### RFP App

Once a Django base is built, we can begin to add other “apps” to it. These apps are in another folder next to the folder holding the files for the base of Django..

In the case of our web application, Django will be used to create an API that can be consumed by our React JS frontend. This API should give CRUD functionality (Create Read Update Delete) with our database, and maybe some extra functionality. To create this API using Django, Django-Rest-Framework is the helping module (I think).

#### Models

The ‘models.py’ file is where you define the structure of your data for your database. Django does a majority of the heavy-lifting, and as a result, you do not have to write any SQL or NoSQL language to access your database. Django will also create tables with your defined column types.

As defined in the above portions of this document, the three main tables will be for Events, RFPs, and Vendors. Django has a large variety of Data Fields that are compatible with multiple database management systems.

#### Views

The 'views.py' file is where you define classes that contain functionality (this definition is still a work in progress). 

#### URLs

The ‘urls.py’ file is where we update and add local paths to our API for this given app. In the top-level urls file, we will then include this file to complete the connection.



