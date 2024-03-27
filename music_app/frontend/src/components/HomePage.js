import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import Info from "./Info";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { Grid, ButtonGroup, Typography } from "@material-ui/core";

console.log("1")

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
    this.clearRoomCode = this.clearRoomCode.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch("/api/user-in-room");
      if (!response.ok) {
        throw new Error("Failed to fetch room data");
      }
      const data = await response.json();
      console.log("Received room data:", data); // Check if data is received
      this.setState({
        roomCode: data.code,
      });
    } catch (error) {
      console.error("Error fetching room data:", error);
    }
  }
  renderHomePage() {
    console.log("4")
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            House Party
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" component={Link} to="/join">
              Join a Room
            </Button>
            <Button color="default" component={Link} to="/info">
              Info
            </Button>
            <Button color="secondary" component={Link} to="/create">
              Create a Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      
    );
  }

  clearRoomCode() {
    console.log("5")
    this.setState({
      roomCode: null,
    });
  }

  render() {
    console.log("6")
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return this.state.roomCode ? (
              <Redirect to={`/room/${this.state.roomCode}`} />
            ) : (
              this.renderHomePage()
            );
          }}
        />
        <Route path="/join" component={RoomJoinPage} />
        <Route path="/info" component={Info} />
        <Route path="/create" component={CreateRoomPage} />
        <Route
          path="/room/:roomCode"
          render={(props) => {
            return <Room {...props} leaveRoomCallback={this.clearRoomCode} />;
          }}
        />
      </Switch>
    );
  }
}
