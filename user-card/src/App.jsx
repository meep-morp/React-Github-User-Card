import React from 'react';
import axios from "axios";
import './App.css';
import Card from "./components/card";
import Nav from "./components/nav";
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      userData: {},
      userFollowers: [],
      userFollowing: [],
      userRepos: [],
      userSearch: "meep-morp",
      value: "",
      message: ""
    }
  }

  fetchUsers = () => {
    axios.get(`https://api.github.com/users/${this.state.userSearch}`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          userData: res.data,
          message: {...this.state.message, user: ""}
        })
      })
      .catch(err => {
        this.setState({
          message: {user: "No results found."}
        })
      })
  }

  fetchUserFollowers = () => {
    axios.get(`https://api.github.com/users/${this.state.userSearch}/followers`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          userFollowers: res.data,
          message: {...this.state.message, follower: ""}
        })
      })
      .catch(err => {
        this.setState({
          message: {...this.state.message, follower: "This user has no followers yet."}
        })
      })
  }

  fetchFollowing = () => {
    axios.get(`https://api.github.com/users/${this.state.userSearch}/following`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          userFollowing: res.data,
          message: {...this.state.message, following: ""}
        })
      })
      .catch(err => {
        this.setState({
          message: {...this.state.message, repo: "This user isn't following anyone yet."}
        })
      })
  }

  fetchRepos = () => {
    axios.get(`https://api.github.com/users/${this.state.userSearch}/repos`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          userRepos: res.data,
          message: {...this.state.message, repo: ""}
        })
      })
      .catch(err => {
        this.setState({
          message: {...this.state.message, repo: "This user has no repos yet."}
        })
      })
  }

  updateCards = () => {
    this.fetchUsers()
    this.fetchUserFollowers()
    this.fetchFollowing()
    this.fetchRepos()
  }

  onChangeHandler = event => {
    this.setState({
      userSearch: event.target.value,
      value: event.target.value,
    })
  }

  onSubmitHandler= event => {
    event.preventDefault();
    this.setState({
      value: "",
    })
    this.updateCards()
  }

  onClickHandler = (username) => {
    this.setState({
      userSearch: username
    })
    this.updateCards()
    console.log("clicked");
  }

  componentDidMount() {
    this.updateCards()
  }

  render() {
    return (
      <div className="App">
        <Nav
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          value={this.state.value}
        />
        <Card
          user={this.state.userData}
          followers={this.state.userFollowers}
          following={this.state.userFollowing}
          repos={this.state.userRepos}
          message={this.state.message}
          onClickHandler={this.onClickHandler}
        />
      </div>
    );
  }
}

export default App;
