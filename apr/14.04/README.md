1. NPM INIT
2. npm i --save-dev gh-pages sass live-server npm-run-all
3. delete test scripts
4. add to scripts in curly brackets:
   “start”: “run-p watch watch:styles”,
   “build”: “run-s clean clean:styles build:styles copy”,
   “deploy”: “run-s build publish”,
   “build:styles”: “sass src/scss:src/styles”,
   “watch”: “live-server src”,
   “watch:styles”: “sass src/scss:src/styles --watch”,
   “clean”: “rm -rf dist”,
   “clean:styles”: “rm -rf src/styles”,
   “copy”: “mkdir dist && rsync -avr --exclude=\“/scss\” src/ dist”,
   “publish”: “gh-pages -d dist”
5. create .gitignore in root/main folder and add the following to .gitignore:
    * node modules
    * dist
    * src/styles
    * DS_Store 
    
6. add folder to root/main folder: “src”
7. add “index.html” to “src”
8. add folder “scss” to folder “src”
9. add “main.scss” to “scss” folder
10. run “npm start” and “styles” folder gets automatically created with main.css and main.css.map
11. link “main.css” from newly created folder to index.html doc
12. Dont use this terminal window anymore, except:
    12.1 Everytime you change files or directorynames, installing and updating packages, you need to restart the liveserver
13. Everytime you make changes and save in main.scss, its content gets transferred to main.css
14. “npm run build” in another terminal-window in the same directory to create gh-pages version or update gh-pages version in /dist folder (edited) 
15. "npm run deploy" creates GH-Pages and updates it whenever changes are made.

** Note: always follow this work flow:
1. git add . && git commit -m
2. git push
3. npm run build // creates or updates dist folder
4. npm run deploy // creates or updates gh-pages