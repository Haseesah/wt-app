import { ImageBackground, StyleSheet} from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) { 
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    
    cont [ForecastInfo, setForecast]= useState({
        main: '-',
        description: '-',
        temp: 0

    })

    return (
        <ImageBackground source={require('../bg.jpg')} styles={styles.backdrop}>
            <Text>zip Code</Text>
            <Forecast {...ForecastInfo}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
        
    }
})

   