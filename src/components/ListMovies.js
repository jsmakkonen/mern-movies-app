import React, { Fragment, useState, useEffect } from 'react';
import EditMovie from './EditMovie';

const ListMovies = () => {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch('http://localhost:5000/movies');
            const jsonData = await response.json();
            setMovies(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    const deleteMovie = async (id) => {
        try {
            await fetch(`http://localhost:5000/movies/${id}`, {
                method: 'DELETE'
            });
            setMovies(movies.filter(movie => movie._id !== id));
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <Fragment>
            <h3 className="mt-4">Movie collection:</h3>
            <table className="table mt-4 text-center">
                <thead className="thead-light">
                    <tr>
                    <th>Movie Title</th>
                    <th>Director</th>
                    <th>Runtime</th>
                    <th>Release</th>
                    <th>Genre</th>
                    <th>Media</th>
                    <th>Actions</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie._id}>
                            <td> {movie.title} </td>
                            <td> {movie.director} </td>
                            <td> {movie.runtime} minutes </td>
                            <td> {movie.release} </td>
                            <td> {movie.genre} </td>
                            <td> {movie.media} </td>
                            <td><EditMovie movie={movie} /></td>
                            <td><button className="btn btn-danger" onClick={() => deleteMovie(movie._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListMovies;