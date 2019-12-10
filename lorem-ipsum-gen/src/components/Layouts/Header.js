import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';




class Header extends Component {

    constructor() {
        super();
        this.state = { snackbaropen:false, snackbarmsg:"st_audrey@outlook.fr" };
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({ snackbaropen: true });
    }

    render() {
        return (   
            <AppBar position="static">
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={null}
                    onClose={this.snackbarClose}
                    message={<span>{this.state.snackbarmsg}</span>}
                    action={[
                        <button key="close" arial-label="Close" color="inherit" onClick={this.snackbarClose}>x</button>
                    ]}
                />
                <Toolbar>
                    <Typography variant='caption'>
                        <button className="btn-contact" onClick={this.handleClick.bind(this)}>
                            Contact
                        </button>
                    </Typography>
                </Toolbar>
            </AppBar>
            
            ) 
    }
}

export default Header;