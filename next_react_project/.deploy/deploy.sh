cd ~/Frontend-Side-Project-FSD-RTK/next_react_project
npx webpack --env mode=production apiUrl=https://side-frontend.online/api

cp -rf build/* /var/www/side-project/html