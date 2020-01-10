import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../Screens/Search";

const SearchScreenStacks = createStackNavigator({
  SearchTop: {
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "Busca Tu Restaurantes"
    })
  }
});

export default SearchScreenStacks;
