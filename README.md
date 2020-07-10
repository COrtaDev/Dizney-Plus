# Dizney+

## Features-List

1. #### Hosting on Heroku

2. #### User Authorization
    - Visitors arrive on landing page when not logged in   <!-- When the user enters the app, they should arrive on a landing page. -->
    - Visitors can sign up, log in, log out   <!-- This will ask them to sign up or log into their existing account or logout. -->
    - Visitors can use a demo login to try the site   <!-- Demo login to look around the site. -->
    - Visitors must log in to enter site
    - Users arrive on home page when logged in   <!-- After the user is authenticated, we will go to the main profile page for that User. -->
3. #### CRUD - User Profile Settings
    - Users can navigate profile options with drop-down menu   <!-- Add Drop down menu with profile option. -->
    - Users can add profile with name/avatar    <!-- They will name the new profile. -->
    - Users can update profile name/avatar   <!-- The user will select a name and avatar. -->
    - Users can delete profile
4. #### Watch List - CRUD across watch list items
    - Users have a watch list that is initially empty    <!-- This will redirect to what is initially and empty watch list page. -->
    - Users can add/remove videos to their watch list   <!-- The user may select videos to add to this list. --> <!-- - There will be a table for watchlist videos to be added, they will populate this page. -->
5. #### Search
    - Users can search for videos by:
        - Title
        - Actor
        - Genre    <!-- Will have a text input as wide as the viewport --> <!-- It will have placeholder text="Search by title or genre" -->
    - Explore-block shows movie collections under text input    <!-- Explore block showing featured videos under text input -->
6. #### Catalog/Profile (Home)
    - Users have a home page as a catalog/profile of videos
    - Users can dynamically update home page based on recently watched items    <!-- Dynamically updates based on recently watched items -->
    - Users can view videos based on genre/type      <!-- Display the database tables based on genre and/or type -->
    - Users can browse through a main banner of ten featured/trending videos
    - Users can browse across five major collections:
        - Disney
        - Pixar
        - Marvel
        - Star Wars
        - National Geography
7. #### videos Player
    - Users can play/pause movie
    - Users can time-stamp movie


## Bonus
1. #### CRUD - Continue Watching
    - Users can resume play where they left off. <!-- - Have a table of video "in-progress". --><!-- - They populate the row "Continue Watching" on the main Catalogue page. -->
    - Users can watch from the beginning.
2. #### "It's a small world after all..." Selecting app language
    - Users can change the global site language
3. #### Search
    - Users can see suggested search results render per keystroke


# Main Component Routes

### /home
- GET /home - Renders the catalogue
### /search
- GET /search - Render the search page
- PATCH /search - Update to display matched results
### /watchlist
- GET /watchlist/:id - Render the associated id watchlist
### /movies
- GET /movies - Renders all movies
- GET /movies/:id - Render the associated id movie
- DESTROY /movies/:id - Deletes from watch list
### /series
- GET /series - Renders all series
- GET /series/:id - Renders the associated id series
### /select-avatar
- GET /select-avatar - Render possible avatars for a profile
- POST /select-avatar - Save the selected avatar to the profile
### /profile
- GET /add-profile - Render the add profile screen
- GET /select-profile - Renders a screen to select current profile
- GET /edit-profiles - Renders a screen with all available profiles
- GET /edit-profile - Renders a screen to edit the selected profile
- PATCH /edit-profiles - Updates the profiles
- PATCH /edit-profile - Updates the preferences for a selected profile and redirects to /edit-profiles
- POST /create-profile - Save newly added profile
- POST /select-profile - Set the current profile and redirect
- DESTROY /edit-profile - Deletes selected profile and redirects to /edit-profiles
### /brand
- GET /brand/:id
