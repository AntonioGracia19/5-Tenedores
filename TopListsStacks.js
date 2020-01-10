import { createStackNavigator } from "react-navigation-stack";
import TopRestaurantsScreen from "../Screens/TopRestaurants";

const TopListScreenStacks = createStackNavigator({
  TopRestaurants: {
    screen: TopRestaurantsScreen,
    navigationOptions: () => ({
      title: "Los Mejores Restaurantes"
    })
  }
});

export default TopListScreenStacks;
