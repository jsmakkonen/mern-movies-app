# MERN Movie App

This movie collection CRUD app was developed using the MERN stack. The database is in the MongoDB Atlas (cloud service). Node and Express were used to create schema and routes. Front-end was build using React version 16 and Bootstrap.
I used React hooks in this one as well. Routes in front-end side utilize react-router -module. 
App retrieves list of movies from database. User can also insert a new movie into the collection and edit or delete existing entry. Update function opens a modal where values are shown in input fields. It targets movie's ID. Similar input fields are shown when user inserts a new entry into the database, but that opens link to the new view instead of a modal.