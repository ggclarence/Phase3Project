import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function AlignItemsList({friend}) {
    return (
        <List 
        key={friend.id}
        sx={{ width: '100%', 
        maxWidth: 360, 
        bgcolor: 'background.paper'}}>
        <ListItem>
            <ListItemAvatar>
                <img style={{width: '60px', borderRadius:360, padding:10}} 
                alt={friend.name} 
                src={friend.profile_picture} />
            </ListItemAvatar>
            <ListItemText 
            primary={friend.name} 
            style={{
                textAlign: 'left',
                justifyContent:'center',}} />
        </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
}