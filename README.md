# **My Coding Path**

## :pushpin:01Feb.2023- Hello Github :tada:
Today is my first time to push the file successfully to Github.

After several hours for researching.

Created ssh-key, checked the environment, saw __OhMyZsh__ been updated with pic

<img src="Image/OMZ.png" width="500" >

which inspires me to __keep going__. :smile:

I edit code in Atom, type command line in terminal, learn how to use MARKDOWN to edit README.

Finally, I know how to update file on Github through git config.

Thanks my mentor [@jerome1210](https://github.com/Jerome1210)

:notebook_with_decorative_cover: *I'll continuously update README to record down my learning...*
___

### Learning Note
### :pushpin: 25.Mar.2023
**Project: MoneyList**
_* mongoDB- server connect with database_
- server receive history data from mongoDB (use `find({})`)
  - problem: received `{"_events":{},"_eventsCount":0}`
    - solution: add `toArray()` after `find({})`
- sort data by date
- display history data exclude id

_*HTML_
- show history data on website page
 - problem: server received data but unable to show on page
   - solution: transform html file type to ejs, import ejs npm package and set the path to access file
- input data into html table
 - problem: there're too many data that I'm unable to handle each item be placed into correct table position.
   - work-around: Just list down every expense object {date, time, tag, amount} instead insert each data into each column of table. Delete table and create new list by \<span\> tag.

_* javascript- deal with object of an array (data received at server)_
- query each element(object) as one expense list
- query value of an each element(object) and send value to html file

### :pushpin: 24.Mar.2023
**Project: MoneyList**

_* javascript- request for insert data (POST)_
- learn about fetch data

_* javascript- request for history data (GET)_
- learn about get and render

### :pushpin: 23.Mar.2023
**Project: MoneyList**

_* mongoDB- server connect with database_
- auto insert data into database by click on save button
  - problem : insert data into mongoDB successfully, but the server console: `Promise { <pending> }`and endpoint unable to get the response.
    - solution: use `async` and `await` function (Note: await is only valid in async functions and the top level bodies of modules)

### :pushpin: 22.Mar.2023
**Project: MoneyList**

_*HTML_
- get data from input button
- create table: expense list
- send data to table
 - problem : can not see data show in table, it seems the "id" in getElementById doesn't work in \<td\> tag
   - solution: create \<span\> and add "id" into this tag

_* javascript- server connect with API_
- deploy html on GitHub page (display website online)
- receive data endpoint
  - problem : server unable to get request from endpoint, shows "undefined".
   - solution : need to parse the data as JSON, so the server can identify data coming from endpoint. In order to give the server an ability to parse data as JSON, use express.json function : `app.use(express.json({limit: '1mb'}));`

_* mongoDB- server connect with database_
- create new database : clusterML
- connect with mongodb successfully
- insert data into database manually with javascript code

### :pushpin: 21.Mar.2023
**mongoDB**
- [lookup: left join](https://www.youtube.com/watch?v=kLlpIuyL8Ms)
- send Data API request with mongosh
- connect to mongoDB with Node.js driver

**Project: MoneyList**
- create new repo and connect local branch to GitHub
 - problem : clone by HTTPS but need to input id and password every time when push.
   - solution: clone by ssh-key (make sure ssh-key should matched with the github setting, if not matched, generate it by typing
     `ssh-keygen -t ed25519 -C "lksh20602@gmail.com"` in terminal -> open the file and copy new ssh-key -> paste into github setting)
 - problem : unable to push at local branch
   - solution: set the remote to upstream, use `git push --set-upstream origin <branch Name>`

### :pushpin: 20.Mar.2023
**mongoDB**
- [Query Operators](https://www.w3schools.com/mongodb/mongodb_query_operators.php)
- Aggregation Pipelines


### :pushpin: 18.Mar.2023
**mongoDB**
- connect to the database with mongoDB shell
- [Insert Documents](https://www.mongodb.com/docs/manual/tutorial/insert-documents/)
- [Query Documents](https://www.mongodb.com/docs/manual/tutorial/query-documents/)
- [Update Documents](https://www.mongodb.com/docs/manual/tutorial/update-documents/)
- [Delete Documents](https://www.mongodb.com/docs/manual/tutorial/remove-documents/)


### :pushpin: 16.Mar.2023
**AJAX and JSON**
- [AJAX: Asynchronous JavaScript And XML](https://www.youtube.com/watch?v=82hnvUYY6QA)
- JSON names require double quotes
 - JSON string => `'{"id": 1, "name": "Ruby"}'`
 - JSON object literal => `{"id": 1, "name": "Ruby"}`
   JSON object literal inside the string
 - object => `{id: 1, name; "Ruby"}`

- [server only process string] JSON.parse() / JSON.stringify()
- Web Storage API: localStorage.setItem("keyName", "keyValue") / localStorage.getItem("keyName")

**mongoDB**
- get start and install (document / collections)

### :pushpin: 15.Mar.2023
**javascript (freeCodeCamp)**
- ES6: added many powerful new features, includes Let and Const、Modules、Destructuring Assignment、Arrow Functions、Template Literals、Promise、Class…
- Object.freeze(objectName): prevent data mutation
- Arrow Functions

### :pushpin: 14.Mar.2023
**javascript (freeCodeCamp)**
- while loop / do...while loop (ensures that the code inside the loop will run at least once because of the condition fails on the first check)
- for loop
- Math.floor() / Math.random()
 - Generate Random Whole Numbers within a Range
 `
 Math.floor(Math.random() * (max - min + 1)) + min
 `
- [Recursion()](https://www.youtube.com/watch?v=vLhHyGTkjCs&t=375s)
 - Recursion is the concept that a function can be expressed in terms of itself.

**LeetCode**
509. Fibonacci Number

### :pushpin: 13.Mar.2023
**LeetCode**
21. Merge Two Sorted Lists

**javascript (freeCodeCamp)**
- switch function (case / break)
- object (JavaScript will automatically typecast "non-string properties" as strings.)
- <p>Example of accessing Object Properties with Variables:</p>

<pre><code>const team1 = {
 12: "Alice",
 16: "Betty",
 19: "Cathy"
};
const playerNumber = 16;
const player = team1[playerNumber]; //=> "Betty"
</code></pre>
- .hasOwnProperty(propname) => return true or false
- object Record Collection


### :pushpin: 10.Mar.2023
**javascript (freeCodeCamp)**
- Number, String, Array, if...else
- Variable
  - var: can easily overwrite variable declarations
  - let: a variable with the same name can only be declared once
  - const: read-only,once a variable is assigned with const, it cannot be reassigned
  - Note: uppercase variable identifiers for immutable values (ex. const MY_NAME)/ lowercase or camelCase for mutable values like objects and arrays (ex. const firstLine)

### :pushpin: 09.Mar.2023
**mySQL**
- Executing SQL Statements Read from a File
 - `$ mysql -u 'user_name' -p 'database' < 'file-name.sql'`

 The "<" symbol tells MySQL to read the SQL statements from the file named "file_name.sql".

- stuck in connection of database and server -unsolved
- stuck in recover database which deleted by the mistake of executing SQL Statements from a File - solved

### :pushpin: 08.Mar.2023
**working with data and API with javaScript**
- create database: NeDB
- fetch() get data from databases


### :pushpin: 07.Mar.2023
**working with data and API with javaScript**
- server-side: server received data from [routing](https://expressjs.com/en/guide/routing.html)(the end point of the API)
<video src="https://user-images.githubusercontent.com/120363088/223328748-0b8fa315-7e7b-48b8-9496-2bc513173b29.mp4" style="max-width: 500px;">
</video>
- [HTTP post request with fetch()](https://www.youtube.com/watch?v=Kw5tC5nQMRY&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=12)
- JSON parsing: to let the server understand the data by JSON file
- fs.appendFile and fs.readFile to save the data received by server

### :pushpin: 06.Mar.2023
**working with data and API with javaScript**
- client-side: graph the CSV file into chart by using chart.js
- client-side: fetch JSON data from API
- Geolocate : [2.2 Geolocation Web API - Working with Data and APIs in JavaScript](https://www.youtube.com/watch?v=3ls013DBcww&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=10)

### :pushpin: 04.Mar.2023
**working with data and API with javaScript**
- client-side: [fetch image from API/ promises/ async/ await](https://www.youtube.com/watch?v=tc8DU14qX6I&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=3)
- client-side: fetch CSV file from API and parse it into text

### :pushpin: 03.Mar.2023
**mySQL/Node**
- [Node.js MySQL basic](https://www.w3schools.com/nodejs/nodejs_mysql.asp) : insert / select / where / order by / drop
- prevent injection: escape / [?](https://www.w3schools.com/nodejs/nodejs_mysql_where.asp) / [@](https://www.w3schools.com/sql/sql_injection.asp)
- [combine tables : Join](https://www.w3schools.com/nodejs/nodejs_mysql_join.asp)

### :pushpin: 01.Mar.2023
**javaScript**
- [exercism](https://exercism.org/tracks/javascript/exercises/two-fer/solutions/rubywu0604)

**LeetCode**
- 27.Remove Element

**mySQL**
- SQL Database : create / drop / backup
- SQL table : create / drop / alter
- SQL Constraint:
  * NOT NULL - Ensures that a column cannot have a NULL value
  * UNIQUE - Ensures that all values in a column are different
  * PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
  * FOREIGN KEY - Prevents actions that would destroy links between tables
  * CHECK - Ensures that the values in a column satisfies a specific condition
  * DEFAULT - Sets a default value for a column if no value is specified
  * CREATE INDEX - Used to create and retrieve data from the database very quickly


### :pushpin: 27.28Feb.2023
**mySQL**
- [mySQL basic](https://www.w3schools.com/sql/default.asp)
- [completed mySQL exercise](https://www.w3schools.com/SQL/exercise.asp?fbclid=IwAR06K-mI1AdOFa5_sE9Xoum4wHpN4abR4F-4p1pQgjaQXe0LSEVG3vY2308)

### :pushpin: 23Feb.2023
**mySQL/Node**
- install mySQL
- [Node.js tutorial](https://www.w3schools.com/nodejs/default.asp) : using Node to connect / creatDB / creatTable

**reading** *(MySQL Cookbook, 4th Edition)*

### :pushpin: 22Feb.2023
**HTML**/**javaScript**/**CSS**
- combination in ProjectMoney: three files (HTML/JS/CSS) interact on web page

  [javascript file: "tableAct.js"](ProjectMoney/tableAct.js) two functions demo as below:

 a. function setTimeout()
<video src="https://user-images.githubusercontent.com/120363088/220559533-b65c6740-544e-4a0c-82b5-22c1b81993ac.mp4" controls="controls" style="max-width: 400px;">
</video>

 b. function sum()
<video src="https://user-images.githubusercontent.com/120363088/220559450-7fb516d7-cc0a-4abd-8e2f-605e92d33b82.mp4" controls="controls" style="max-width: 400px;">
</video>
- [CSS basic](https://www.codecademy.com/learn/learn-css)

### :pushpin: 21Feb.2023
**HTML**
- [HTML basic (HyperText Markup Language)](https://www.codecademy.com/resources/docs/html/attributes)
- [HTML element](https://www.codecademy.com/resources/docs/html/elements)

### :pushpin: 20Feb.2023
**Node**
- Node.js Upload Files
- [ProjectProfile: html/css opened success on localhost by node](ProjectProfile) (http://localhost:8080/home.html)
- Sending Email using Node.js


**Git**
- [Git concepts review](https://www.codecademy.com/resources/docs/git/add)

### :pushpin: 17Feb.2023
**Node**
- HTTP module
- [File system](Node/note.md)
- [URL module1](Node/demo_read_url.js) / [URL module2](Node/demo_querystring.js)
- [NPM - Node.js package mamager](Node)
- [Events](Node/eventEmitter.js)

### :pushpin: 16Feb.2023
**CSS**
- [design my web](html/style.css)

### :pushpin: 15Feb.2023
**Node**
- [Node.js Tutorial](https://www.w3schools.com/nodejs/default.asp)

**CSS**
- [design my web](html/style.css)

### :pushpin: 14Feb.2023
**LeetCode**
- 14.Longest Common Prefix

**HTML**
- [create my web](html/home.html)

### :pushpin: 13Feb.2023
**javaScript**

- Sets (practice in [exercism](https://exercism.org/tracks/javascript/exercises/ozans-playlist/solutions/rubywu0604))

### :pushpin: 10Feb.2023
**javaScript**
- [Regular Expression](https://youtu.be/sa-TUpSx1JA)(practice in [exercism](https://exercism.org/tracks/javascript/exercises/regular-chatbot/solutions/rubywu0604))
- Array Loops (practice in [exercism](https://exercism.org/tracks/javascript/exercises/elyses-looping-enchantments/solutions/rubywu060400))

### :pushpin: 09Feb.2023
**javaScript**
- Errors and Inheritance (practice in [exercism](https://exercism.org/tracks/javascript/exercises/factory-sensors/solutions/rubywu0604))
- [prototype chain](https://youtu.be/GhJTy5-X3kA)

**LeetCode**
- 136.Single Number

### :pushpin: 07.08Feb.2023
**javaScript**
- [Prototypes and Classes](exercism/PrototypesAndClasses.js)(practice in [exercism](https://exercism.org/tracks/javascript/exercises/windowing-system/solutions/rubywu0604))

**reading** *(JavaScript: The Definitive Guide, 7th Edition)*
- Chapter 1.Introduction to JavaScript
- Chapter 2.Lexical Structure

**LeetCode**
- 7.Reverse Integer

### :pushpin: 06Feb.2023
**javaScript**
- Array Transformations(practice in [exercism](https://exercism.org/tracks/javascript/exercises/elyses-transformative-enchantments/solutions/rubywu0604))

### :pushpin: 04Feb.2023
**javaScript**
- Tpye Conversion (practice in [exercism](https://exercism.org/tracks/javascript/concepts/type-conversion))
- Template Strings/Ternary Operator (practice in [exercism](https://exercism.org/tracks/javascript/exercises/custom-signs/solutions/rubywu0604))
- Array Destructuring/Rest and Spread (practice in [exercism](https://exercism.org/tracks/javascript/exercises/elyses-destructured-enchantments/solutions/rubywu0604))
- Array Analysis/Arrow Functions (practice in [exercism](https://exercism.org/tracks/javascript/exercises/elyses-analytic-enchantments/solutions/rubywu0604))

### :pushpin: 03Feb.2023
**javaScript**
- [Callback](javascript/callback.js) (practice in [exercism](https://exercism.org/tracks/javascript/concepts/callbacks))

**Git**
- [merge vs rebase](https://www.youtube.com/watch?v=7Mh259hfxJg)
- alias
- [gitNote](git/gitNote.md)

### :pushpin: 02Feb.2023
**javaScript**
- [Callback](javascript/callback.js) (practice in [exercism](https://exercism.org/tracks/javascript/concepts/callbacks))

**Git**
- [MARKDOWN](https://youtu.be/HUBNt18RFbo)
- branch
- push / pull
- fetch
- merge
- rebase / reset / amend
