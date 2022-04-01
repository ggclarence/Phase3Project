import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function PostCard( {post} ) {
  return (
    <Card sx={{ 
      minWidth: "65%", 
      maxWidth: "420px", 
      Height: "520px", 
      marginBottom: "1.3rem"}}>
      <CardHeader
        avatar={
          <Avatar 
          src={post.user.profile_picture}
          alt={post.user.name}>
          </Avatar>
        }
        title={post.user.name}
      />
      <CardMedia component="img"
        height="230"
        image= {post.img_url}
        alt={post.user.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">{post.post}</Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}