# Kinduct Tech Project - Pratik Panchani
    
This is a simple application that uses uses CodeIgniter API in Back-End and ReactJs in Front-End to perform following operations:

    - Upload .json file to POST data
    
    - View data using GET Request
    
    - Delete data using DELETE Request
 
 Upload JSON File Data Format (sample.json attached at root in this project for test):
 ```json
    {
        "Players": [
           {
                "Name": "Mike",
                "Age": "33",
                "Location": {
                    "City": "Toronto",
                    "Province": "Ontatio",
                    "Country": "Canada"
           }
    }
 ```
    
## Installation and How to Run Application:

1. **Setup Server and Database - Choose your choice of server and set it up. I used WAMP during creation of this project.**

2. **Download the Project from here and copy it to the prefered Server location.**

    For WAMP: Under C:\wamp64\www

    For XAMP: Under C:\campp\htdocs

    Make sure to change the name of the project from "kinduct-master"  to "kinduct"

3. **Run the Server and MySQL.**

4. **Create Mysql database and import db.sql (availbale in root folder of this project).**

5. **Change /application/config/config.php to set up the base url:**

    Line Number 26: $config['base_url'] = 'http://localhost/kinduct/';
    
7. **Change /application/config/database.php**

    Line Number 78: 'hostname' => 'localhost'

    Line Number 79: 'username' => 'database-user-name',

    Line Number 80: 'password' => 'database-user-pass',

    Line Number 81: 'database' => 'database-name',

      Change above parameters as per your mysql connection.

8. **Grant proper permission to your user in database using following command**

    ```mysql
    GRANT INSERT, SELECT, DELETE, UPDATE ON <databasename>.* TO '<db_username>'@localhost IDENTIFIED BY '<db_password>';
    ```

8. **Install NodeJS and go to /assets/my-app directory and run:**

    npm install

9. **After completing the installtion run the following command from the same directory(/assets/my-app) to start the app:**

     npm start
  
  **HELP:**
  
    - Email me for any concerns or questions: pratikpatel5357@gmail.com