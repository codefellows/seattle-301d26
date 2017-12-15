# Code 301: Testing PostgreSQL Setups

## First, Some Context...

Setting up and maintaining a dev environment is not always as simple and straightforward as we would like it to be. There are different operating systems on different machines in different versions... and then the tooling is different across different platforms, and the tools go through versions, too. Not only that, but most tools are stitched together with a patchwork of dependencies that often themselves have dependencies, and all of the pieces go through independent versioning processes.

So why do we go through this trouble? Consider a basic MVC pattern, with an end user's **View** being a representation of data from a **Model** that is acquired via a **Controller** layer of the WRRC (Web Request Response Cycle). In a real-world context, it is typical that each of the MVC components is an independent process (or, "application", or even "a program" if you want to call it that) running on its own machine in its own physical location, all communicating over networks.

On our laptops, we create a local mock-up of that process so that we can build web applications that will work in those interrelated environments:

- **View**: This runs in our browser
- **Controller**: This is our `server.js` running in Node in a tab in our terminal
- **Model**: This is the PostgreSQL application that is running in the background on our laptops; we can access it directly by running a SQL shell in a separate tab in our terminal.

Thus, you are frequently going to have at least three terminal tabs (or windows) open at once while building these kinds of applications:

- One for your interface to your file system and running Git commands
- One for Node to run your server
- One for `psql` to access your SQL shell so that you can interface directly with your database

Your skills in maintaining your dev environment are as much a part of your productivity as a developer as is the actual writing of code. Consider yourself a chef: in addition to creating tasty food, you must maintain your kitchen... with supplies readily available and fresh, knives sharpened, stove and oven working properly, all pots and pans and utensils you need cleaned and on hand, and command of your recipes, all of which have idiosyncracies depending upon atmospheric conditions *(ever try making fudge on a rainy day, or baking a cake at altitude?)* PLUS the preferences of your client. You simply can't use from-the-box macaroni-and-cheese with orange powder for everything.

---

Following are setup and testing instructions for your PostgreSQL setups, separated by operating system. For starters, refer to the instructions in the [Code 301 Prework](https://github.com/codefellows/code-301-prework) and follow the steps carefully. A condensed version of those steps is summarized under each operating system heading below, and new information is added to help integrate our code with those environments.


## Windows

*For reference, these instructions are taken from the following documentation: http://www.postgresqltutorial.com/install-postgresql/*

**NOTE: If you are running Windows 8 or 10, you need to create a Windows user with administrator role e.g., postgres and use this user to run the installation file.**

- Your **Default** database super user is: *postgres*
- You will be asked to enter and confirm a database password.
- **Be sure you document your default user and password**, as you will need them later in the course. We are working securely on your computer, so a simple password like `1234` will suffice, and there's no need to change the default user.

**There are three steps to complete the PostgreSQL installation**:

1. Download PostgreSQL installer for Windows (see prework for more details)
1. Install PostgreSQL (see prework for more details)
1. Verify the installation

**Verify Installation**

When you installed PostgreSQL, the installer also installed some extra tools. One of them is psql (it may be called SQL Shell).

- Launch `psql`.
- When it prompts you for input, just hit enter to select default values until it asks for a password. You will put in the password you entered during installation.
- You should have a window that [looks like this](http://www.postgresqltutorial.com/wp-content/uploads/2012/08/psql.png).
- In this window, you can enter SQL statements, which must all end with semicolons. Congratulations, you've installed correctly!

**NEW MATERIAL NOT FROM THE PREWORK, POST-SETUP**

For working in our codebase, we will need to supply the `server.js` file a variable called `conString` that will facilitate the connection between the server and the database.

- Format: `const conString = 'postgres://USER:PASSWORD@HOST:PORT/DBNAME'`
- Example: `const conString = 'postgres://postgres:1234@localhost:5432/postgres'`

If you are having an error, read your error messages and debug the problem!

Once your `conString` is set properly, you should be able to start `server.js` and then go into the PostgreSQL shell, enter `/dt` in the shell, and see the ***articles*** table. Enter the SQL command `SELECT COUNT(*) FROM articles;` and that should return "250".

## Linux

*For reference, these instructions are taken from the following documentation: https://www.postgresql.org/download/*

- If asked to provide or set a username and password, **be sure to document the username and password**, as you will need them later in the course.
- `sudo apt-get install postgresql`
- You will be prompted with the message that a certain amount of disk space will be used and asked if this is OK. Type `y`, then hit enter.
- Several commands will automatically run, this may take a few minutes.
- **You will likely NOT be prompted for a default username or password.** You will need to set one in psql if this is the case.

**Verifying Installation And Setting A Password**

- You should be able to run the command `sudo -u postgres psql`. You will be asked for your administrator password - this is what you usually enter when you run `sudo` commands. This will log you into the psql prompt as the user postgres.
- You should now have a prompt that looks like `postgres=#`. You can run SQL commands from here, which must end in semicolons.
- If you were not prompted for a default user or password, we will set one using psql. If you type `\du`, you can get a list of users associated with PostgreSQL. You should see a single user, `postgres`. In order to give this user a password, enter the following command: `ALTER ROLE postgres PASSWORD 'your-password-here';`, replacing "your-password-here" with whatever you want it to be (something easy like "1234" is fine for now since we are in a secure environment). Remember that your password must be wrapped in quotes. *Don't forget the semicolon*.
- If successful, you will receive the feedback `ALTER ROLE`.


**NEW MATERIAL NOT FROM THE PREWORK, POST-SETUP**

For working in our codebase, we will need to supply the `server.js` file a variable called `conString` that will facilitate the connection between the server and the database.

- Format: `const conString = 'postgres://USER:PASSWORD@HOST:PORT/DBNAME'`
- Example: `const conString = 'postgres://postgres:1234@localhost:5432/postgres'`

If you are having an error, read your error messages and debug the problem!

Once your `conString` is set properly, you should be able to start `server.js` and then go into the PostgreSQL shell, enter `/dt` in the shell, and see the ***articles*** table. Enter the SQL command `SELECT COUNT(*) FROM articles;` and that should return "250".

## Mac

`brew update && brew install postgresql`

This will create a user for you, that matches your logged in user account on your laptop. Run the `whoami` command in the terminal if you aren't sure what that is. This user has a blank password set as the default in Postgres.

*You will need to run the following terminal command whenever you restart your computer.*

`pg_ctl -D /usr/local/var/postgres/ -l /usr/local/var/postgres/server.log start`

The prework directs you to set an alias for this command as `pgstart`. If you do not have this alias, refer back to the prework.

You can then enter `psql` in the terminal to enter the SQL shell.

**NEW MATERIAL NOT FROM THE PREWORK, POST-SETUP**

For working in our codebase, we will need to supply the `server.js` file a variable called `conString` that will facilitate the connection between the server and the database.

- Yours is easy compared to Windows/Linux: `const conString = 'postgres://localhost:5432'`

If you are having an error, read your error messages and debug the problem!

Once your `conString` is set properly, you should be able to start `server.js` and then go into the PostgreSQL shell, enter `/dt` in the shell, and see the ***articles*** table. Enter the SQL command `SELECT COUNT(*) FROM articles;` and that should return "250".
