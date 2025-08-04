import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';

export default function InfoBox({info})
{
    let hot_url = "https://travelpassionate.com/wp-content/uploads/2019/10/Barbados-min.jpg";
    let cold_url = "https://www.shutterstock.com/image-photo/winter-forest-south-park-sofia-260nw-2483073899.jpg";
    let rain_url = "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let normal_url = "https://images.unsplash.com/photo-1695697478813-9cd8058712e7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    return(
        <div className='InfoBox'>
          <div className='card-div'>
              <Card className='card-container' sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 ? rain_url : info.temp > 30 ? hot_url : info.temp>20 ? normal_url : cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography style={{color: "white"}} gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormSharpIcon/> : info.temp > 30 ? <WbSunnySharpIcon/> : info.temp>20 ? <WbSunnySharpIcon/> : <AcUnitSharpIcon/>}
        </Typography>
        <Typography className='content' variant="body2" sx={{ color: 'text.secondary' }} component="div">
  <div>Temperature: {info.temp}&deg;C</div>
  <div>Humidity: {info.humidity}</div>
  <div>Temp-min: {info.tempmin}&deg;C</div>
  <div>Temp-max: {info.tempmax}&deg;C</div>
  <div>Feels Like: {info.feelslike}</div>
</Typography>

      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}