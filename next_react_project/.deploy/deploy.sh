cd ~/Frontend-Side-Project-FSD-RTK
npx webpack --env mode=production apiUrl=https://side-frontend.online/api

cp -rf build/* /var/www/side-frontend/html