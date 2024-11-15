import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css"; 
 import AcUnitIcon from '@mui/icons-material/AcUnit';
 import WbSunnyIcon from '@mui/icons-material/WbSunny';
 import BeachAccessIcon from '@mui/icons-material/BeachAccess';
export default function InfoBox({info}) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1719476096371-d595d60e3b09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=1024x1024&w=is&k=20&c=NyB7w-uFLH5DvfzVARNmAx9lofieWs5m4f7_pEm_ly0=";
 
  return (
        <div className="InfoBox">
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>80?RAIN_URL:(Math.floor(info.temp-270)>15?HOT_URL:COLD_URL)}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                {info.city}{
                  info.humidity > 80 ?
                    <BeachAccessIcon /> :
                    Math.floor(info.temp-270) > 15 ?
                      <WbSunnyIcon />
                      :<AcUnitIcon/>
            }
          </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}
                        component={"span"}>
                            <p>Temperature={Math.round(info.temp-270)}&deg;C</p>
                            <p>Humidity={info.humidity}</p>
                            <p>Min Temp={Math.round(info.tempMin-270)}&deg;C</p>
                            <p>Max Temp={Math.round(info.tempMax-270)}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                        </Typography>
        </CardContent>
      </CardActionArea>
                </Card>
                </div>
        </div>
    )
}