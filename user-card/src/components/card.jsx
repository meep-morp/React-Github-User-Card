import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="cards">
                <div className="mainuser card" key={this.props.user.id}>
                    <div className="message">{this.props.message.user}</div>
                    <div>
                        <img src={this.props.user.avatar_url}
                            alt="Avatar"
                            key={this.props.user.id + "avatar"} />
                        <div className="mainuserdetails">
                            <h2 key={this.props.user.id + " username"}>
                                {this.props.user.login}
                            </h2>
                            <a href={this.props.user.html_url} key={this.props.user.id + " link"}>
                                Profile</a>
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="followers">
                        <h2>Followers of {this.props.user.login}</h2>
                        <div className="message">{this.props.message.follower}</div>
                        <div className="cardContainer">
                            {this.props.followers.map(follower => (
                                <div className="follower card" key={follower.id}>
                                    <img
                                        src={follower.avatar_url}
                                        alt="Avatar"
                                        key={follower.id + " avatar"}
                                        onClick={() => this.props.onClickHandler(follower.login)}
                                    />
                                    <h2 key={follower.id + " username"}>{follower.login}</h2>
                                </div>
                            ))}
                        </div> {/*  This closes cardContainer   */}
                    </div> {/*  this closes followers   */}
                    <div className="followers following">
                            <h2>{this.props.user.login} is Following</h2>
                        <div className="cardContainer">
                            {this.props.following.map(following => (
                                <div className="follower card" key={following.id}>
                                    <img
                                        src={following.avatar_url}
                                        alt="Avatar"
                                        key={following.id + " avatar"}
                                        onClick={() => this.props.onClickHandler(following.login)}
                                    />
                                    <h2 key={following.id + " username"}>{following.login}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="repos">
                        <h2>{this.props.user.login}'s Repos</h2>
                        <div className="cardContainer">
                            {this.props.repos.map(repo => (
                                <div className="repo card" key={repo.id}>
                                    <h2 key={repo.id + " username"}>{repo.name}</h2>
                                    <a href={repo.html_url}>💻</a>
                                </div>
                            ))}
                        </div>
                    </div> {/*  this closes repos   */}
                </div> {/*  This closes details */}
            </div>
        )
    }
}

export default Card