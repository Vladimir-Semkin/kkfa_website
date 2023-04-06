import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Contacts(): JSX.Element {
  return (
    <div className="container">
      <Card sx={{ width: 260 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/contactsImg/4IaHCcBEiEI.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Руденко Александр
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Технический комиссар
            </Typography>
            <Typography variant="body2" color="text.secondary">
              https://t.me/Legal_023
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ width: 260 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/contactsImg/8KILuwWxH4Q.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Эвилина Котлярова
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Главный секретарь
            </Typography>
            <Typography variant="body2" color="text.secondary">
              https://t.me/evilin_ka
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ width: 260 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/contactsImg/59391.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Котляров Валерий Валентинович
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Руководитель ККФА
            </Typography>
            <Typography variant="body2" color="text.secondary">
              valeri_kkfa@mail.ru
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
