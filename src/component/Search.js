import React, { Component } from "react";

class Search extends Component {
  state = {
    username: "karan919"
  };
  searchHandler(event) {
    event.preventDefault();
    const name = event.target[0].value;
    console.log(name);
    let url = `https://developer.github.com/v3/users/:${name}`;
    // url = `https://api.github.com/users/${name}`;
    url = "https://api.github.com/users?since=135";
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson, null, 2));
      });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-title center mb-4">Search Git Users</h1>
          <form onSubmit={this.searchHandler}>
            <div className="form-group">
              <input
                className="form-control blockcenter"
                type="text"
                placeholder="Git Username.."
                name="username"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block blockcenter"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
