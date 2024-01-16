import {View,Text} from 'react-native'
function MealDetailScreen ({route}){
    const mealId=route.params.mealId;
return <View>

    <Text>New page{mealId}</Text></View>
}
export default MealDetailScreen;