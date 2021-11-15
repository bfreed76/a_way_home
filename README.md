# a_way_home
A simple easy-to-use app that enables  people to follow an interactive map home using only 2 button clicks. 

Steps: 1) create react app, enable PWA 2) create rails backend 3) fix index.html 4) set up user auth 5) deploy on Heroku  

Reminders: 
    - include add to homescreen button.
    - include "This app works offline!" message when cache is populated
        (https://create-react-app.dev/docs/making-a-progressive-web-app/)

To run in production:
    npm run build
    serve -s build

1) Spash page (while loading PWA)
2) Home Page
    > "Find Home"
    > Menu
        >> LogIn/LogOut/SignUp
        >> Change Home
3) Nav Page (API dependant)

If user is logged in and home is set, map will show custom marker of home for 
current home. If home is selected, address appears via info window.
    