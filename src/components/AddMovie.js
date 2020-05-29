import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const AddMovie = () => {
    const [allValues, setValues] = useState({
        title: 'Movie Title',
        director: 'Movie director',
        runtime: 'Movie runtime',
        release: 'Release year',
        genre: 'Genre of the movie',
        media: 'In which format you own the movie'
    });

    const addNewMovie = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/movies/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: allValues.title,
                    director: allValues.director,
                    runtime: allValues.runtime,
                    release: allValues.release,
                    genre: allValues.genre,
                    media: allValues.media
                })
            });

            console.log(response);
            window.location = '/'
        } catch (err) {
            console.log(err.message)
        }
    };

    return (
        <Fragment>
            <div className="container">
                <h3 className="mt-4">Add new movie</h3>
                <input
                  type="text"
                  className="form-control mt-4"
                  name="title"
                  value={allValues.title}
                  onChange={(e) =>
                    setValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="director"
                  value={allValues.director}
                  onChange={(e) =>
                    setValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="runtime"
                  value={allValues.runtime}
                  onChange={(e) =>
                    setValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="release"
                  value={allValues.release}
                  onChange={(e) =>
                    setValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="genre"
                  value={allValues.genre}
                  onChange={(e) =>
                    setValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="media"
                  value={allValues.media}
                  onChange={(e) =>
                    setValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
              </div>
  
              <div className="container">
                <button
                  type="button"
                  className="btn btn-primary mt-4"
                  onClick={(e) => addNewMovie(e)}
                >
                  Add
                </button>
                <Link to='/'>
                <button
                  type="button"
                  className="btn btn-secondary btn-2 mt-4"
                >
                  Return
                </button>
                </Link>
              </div>
        </Fragment>
    )
}

export default AddMovie;