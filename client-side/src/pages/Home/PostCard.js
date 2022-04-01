
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function RecipeReviewCard( {post} ) {
  console.log(post)
  return (
    <Card sx={{ width: "auto", maxWidth: "90%", height:"auto"}}>
      <CardHeader
        avatar={
          <Avatar 
          sx={{ bgcolor: red[500] }} 
          src={post.user.profile_picture}
          alt={post.user.name}>
          </Avatar>
        }
        title={post.user.name}
      />
      <CardMedia
        component="img"
        height="194"
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