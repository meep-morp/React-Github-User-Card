import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <h1>GITHUB™ Users</h1>
                <form
                    onSubmit={this.props.onSubmitHandler}>
                    <input
                        placeholder="Search..."
                        type="text"
                        onChange={this.props.onChangeHandler}
                        value={this.props.value}
                    />
                </form>
            </nav >
        )
    }
}

export default Nav;