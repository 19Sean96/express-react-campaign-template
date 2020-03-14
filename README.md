# Campaign Generator

A React/Express SPA used for quickly generating single page marketing campaigns utilizing [Directus Headless CMS/API](https://github.com/directus/directus) for handling/creating new campaigns.

View Demo [Here](https://campaign.sportexsafety.com/lsa).

## How It Works

 1. Create a database to be reference as an API (I recommend Directus for it's flexibility & it's open source nature. Show them some love [here](https://github.com/directus/directus).  *NOTE: I will be posting a getting started guide soon. Feel free to contact me in the meantime if you'd like to know how I set up the schema.* 
 2. the application makes an api call to the CMS at http://< URL >/:campaign-name-here to retrieve all theme colors, products, categories & SKUs.
 3. The user is able to browse the products, create a "shopping cart" and add custom messages on each item for customization. 
 4. Once they have their cart set up, they fill out the contact form and send an email to RECEIVING_EMAIL (see below for list of environment variables).


## Quick Start
Please make sure you provide your own `.env`. There are 4 variables you need:

 - CMS_KEY (directus root API key)
 - CMS_URL (directus project URL)
 [See Directus' Github for more information](https://github.com/directus/directus)
 
 - SENDING_EMAIL (Email Address you'd like the email to be sent from in the "contact form")
 - SENDING_EMAIL_PW (email password)
 - RECEIVING_EMAIL (e.g. sales@, marketing@, etc.)

### Install Packages
    npm run installall //installs packages for root dir & "./client" dir

### Run Server
#### Development

     npm run dev //starts express & react-server concurrently
 
 Navigate to localhost:3000 to view the project!
#### Production

    npm run build
    npm run server
Navigate to localhost:5000 to view project
