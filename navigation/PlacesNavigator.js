
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import PlacesListScreen from '../screens/PlacesListScreen'
import PlaceDetailScreen from '../screens/PlaceDetailScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import MapScreen from '../screens/MapScreen'
import AuthScreen from '../screens/AuthScreen'
import Colors from '../constants/Colors';



const PlacesNavigator = createStackNavigator(
    {
      Auth: AuthScreen,
      Places: PlacesListScreen,
      PlaceDetail: PlaceDetailScreen,
      NewPlace: NewPlaceScreen,
      Map: MapScreen
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
      }
    }
  );

  
  
  export default createAppContainer(PlacesNavigator);