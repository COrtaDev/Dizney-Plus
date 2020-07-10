<!-- Route Names | URL | verbs | desc.
------------|-----|-------|------
index | /users | get | all users
new | /users/new | get | gets form
create | /users | post | saves user
show | /users/:id | get | gets user
edit | /users/:id/edit | get | gets edit form
update | /users/:id | put/patch | saves update
destroy | /users/:id | delete | deletes user

tomorrow deliver a list of routes: -->


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


<!-- Route Names | URL | verbs | desc.
------------|-----|-------|------
/
/sign-up
    get, post
/login
    get, post
/home
    GET /
/search
    get, post
/watchlist
    get
/originals
    get
/movies
    get
    /movies/:id
        get, post
/series
    get
    /series/:id
        get, post
/brand
    get

# HTML
- GET /
# API Endpoints
# Accounts
- POST /api/accounts/ - Sign up
# Profiles
- GET /api/profiles - List profiles
- POST /api/profiles/:id - Log into profile -->
