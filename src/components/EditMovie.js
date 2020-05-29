import React, { Fragment, useState } from "react";

const EditMovie = ({ movie }) => {
  const [allValues, setAllValues] = useState({
    title: movie.title,
    director: movie.director,
    runtime: movie.runtime,
    release: movie.release,
    genre: movie.genre,
    media: movie.media,
  });

  const updateValues = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:5000/movies/${movie._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: allValues.title,
            director: allValues.director,
            runtime: allValues.runtime,
            release: allValues.release,
            genre: allValues.genre,
            media: allValues.media,
          }),
        }
      );

      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${movie._id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${movie._id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit movie info</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                name="title"
                value={allValues.title}
                onChange={(e) =>
                  setAllValues({
                    ...allValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="director"
                value={allValues.director}
                onChange={(e) =>
                  setAllValues({
                    ...allValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="runtime"
                value={allValues.runtime}
                onChange={(e) =>
                  setAllValues({
                    ...allValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="release"
                value={allValues.release}
                onChange={(e) =>
                  setAllValues({
                    ...allValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="genre"
                value={allValues.genre}
                onChange={(e) =>
                  setAllValues({
                    ...allValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="media"
                value={allValues.media}
                onChange={(e) =>
                  setAllValues({
                    ...allValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateValues(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditMovie;
