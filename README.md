Angular 2+ Technical Exercise

The task is to write a web application based on Angular 2+
which would allow to handle private data (CMS like). Application
should look good on any device (responsive design). What you should
do:

1. Make a login screen with email and password. Credentials can
be hardcoded.
a. Optional: Email field must be validated. Password should
ask for at least 1 uppercase letter, 1 number and 1 symbol
and be validated.

2. Next page after logging in should contain a data table with 3
or more columns. It can be names, products, prices etc. At
least one field should be numeric. It should be possible to
sort data by any column choosing it on dropdown, or just
clicking the label of column. Preloaded data should be
imported from JSON or any other local data source.

3. There should be a way to add new data values. All the fields
should have a validation (to prevent adding too short values
or adding numerous values to text fields and vice versa).
a. Optional: Add a way to edit existing values or delete
them.
b. Optional: Add a way to add a new, non required column for
new data with possibility to delete it. (prevent deleting
required columns). Add a prompt to delete a column if it
has any information in any row.

4. Page should have a logout button which would delete all the
data from the session storage and return to login screen.

5. BONUS: Add 5 minutes timeout on screen or off screen for user to
be logged out automatically. After coming back to the page
session storage should be cleaned too, so after logging back to
the data page, it should contain only the data which was
preloaded at the very beginning.
You can use any frontend framework for styling. You are allowed to
use different local storages to store data if you think it will fit
you better (data must be accessible after refreshing the page).