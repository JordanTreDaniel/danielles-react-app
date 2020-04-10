import React, { Fragment, useState } from 'react';
import {
    Link
} from "react-router-dom";
import {
    Drawer,
    Button,
    Avatar,
    MenuList,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Divider
} from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import HomeIcon from '@material-ui/icons/Home';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import HouseIcon from '@material-ui/icons/House';
import { makeStyles } from '@material-ui/core';
import avatar from '../danielleandsammy.jpeg';

const useStyles = makeStyles((theme) => {
    return ({
        avatar: {
            margin: "auto",
            marginTop: "2em",
            width: theme.spacing(3),
            height: theme.spacing(3),
            width: "75%",
            height: "75%",
        },
        sideBarText: { rotate: 90 },
        sideBar: { minWidth: "40%", maxWidth: "50%" }
    })
});

const SideBar = props => {
    const [drawerOpen, toggleDrawer] = useState(false);
    const classes = useStyles();
    return (
        <Fragment>
            <Button onClick={() => toggleDrawer(!drawerOpen)}>Sidebar Toggle</Button>
            <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)} classes={{ paper: classes.sideBar }}>
                <div>
                    <Avatar alt="Dream Home Realty" src={avatar} className={classes.avatar} />
                </div>
                <List className={classes.rootList}>
                    <Divider />
                    <ListItem component={Link} to="/invest" button divider>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Invest" />
                    </ListItem>
                    <ListItem component={Link} to="/buy" button divider>
                        <ListItemAvatar>
                            <Avatar>
                                <HomeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Buy" />
                    </ListItem>
                    <ListItem component={Link} to="/sell" button divider>
                        <ListItemAvatar>
                            <Avatar>
                                <MoneyIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Sell" />
                    </ListItem>
                    <ListItem component={Link} to="/lease" button divider>
                        <ListItemAvatar>
                            <Avatar>
                                <HouseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Lease" />
                    </ListItem>
                </List>
            </Drawer>
        </Fragment>
    )
}
// const StyledSideBar = withStyles(styles)(SideBar);
// export default StyledSideBar;
export default SideBar