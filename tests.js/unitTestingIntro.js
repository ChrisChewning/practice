
testing is needed to catch bug.
2.
3. your config folder has your api info in it, your routes (you can chain your methods together),

4. in json your hbs is basically your ejs views. //"hbs": "~4.0.1",

5. to install npm install chai chai-http mocha --save-dev would save it to your dev dependencies (these are dependencies only relevant to developing stuff)


6. to start testing:

npm install
sudo mongod (runs your database)


7. to actually test:
npm test in the root folder.

in terminal:
      GET /book 200 19.447 ms - 2
      ✓ it should GET all the books (55ms)


  1 passing (96ms)
