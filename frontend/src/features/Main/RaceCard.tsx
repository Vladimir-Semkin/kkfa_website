import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Race } from '../Calendar/types/types';

function RaceCard({ race }: { race: Race }): JSX.Element {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }} className="raceCard">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://avatars.mds.yandex.net/get-altay/5104421/2a00000180478ee6183a7bbd8c5808ffc11d/XXL_height"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {race.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {race.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => navigate(`/race/${race.id}`)}
          type="button"
          size="small"
          color="primary"
        >
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
}

export default RaceCard;
