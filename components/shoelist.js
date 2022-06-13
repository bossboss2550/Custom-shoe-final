import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { useRouter } from 'next/router';
export default function MultiActionAreaCard(props) {
  const { shoegrid } = props;
  const router = useRouter();
  function swapPage(id) {
    router.push({
      pathname: '/show/[id]',
      query: {
        id: id,
      }
    })
  }
  return (

    <Card sx={{ maxWidth: 300 }} onClick={() => { swapPage(shoegrid.id) }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={shoegrid.picUrl}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {shoegrid.info}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shoegrid.brand}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {shoegrid.price}
        </Button>
      </CardActions>
    </Card>
  );
}