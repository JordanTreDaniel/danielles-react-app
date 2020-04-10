import React, { Fragment } from 'react';
import { Drawer, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = {
    sideBarText: { rotate: 90 },
    sideBar: { minWidth: "40%", maxWidth: "50%" }
}

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        }
    }
    toggleDrawer = () => {
        const { drawerOpen } = this.state;
        this.setState({ drawerOpen: !drawerOpen })
    }
    render = () => {
        const { classes } = this.props;
        return (
            <Fragment>
                <Button onClick={this.toggleDrawer}>Sidebar Toggle</Button>
                <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer} classes={{ paper: classes.sideBar }}>
                    <Typography className={classes.sideBarText}>SideBar</Typography>
                </Drawer>
            </Fragment>
        )
    }
}

const StyledSideBar = withStyles(styles)(SideBar);
export default StyledSideBar;