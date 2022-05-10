import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import style from "../pages/register.module.css";
import TabPanel from './Tabpro';
import { useUser } from '../auth/useUser';
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app'
import { useRouter } from 'next/router';

const ExpandMore = styled((props) => {

  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const { user, logout } = useUser()
  const paperstyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
  const [expanded, setExpanded] = React.useState(false);
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if (user) {
      firebase
        .firestore()
        .collection('User')
        .doc(user.id)
        .get({})
        .then(doc => {
          setProfile(doc.data())
        }).catch(() => {

        })

    }
  }, [user])
  console.log(profile)
  const handleExpandClick = () => {
    setExpanded(!expanded);

  };

  if (user && profile) {
    return (


      <Grid item xs={10} >
        <Card sx={{ maxWidth: 1280 }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={user.email}
            subheader={profile.Name}
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"
                sx={{ width: 136, height: 136 }}>
                B
              </Avatar>
            }
          />

          <CardContent>
            <TabPanel />

          </CardContent>
          <CardActions disableSpacing>





          </CardActions>
        </Card>
      </Grid>
    );
  }
  else return (
    <>
      <main >
        {/* <GetData />
      <Readdata/> */}

      </main>
    </>
  )


}
