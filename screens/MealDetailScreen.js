import {View,Text,Image} from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetals';
function MealDetailScreen ({route}){
    const mealId=route.params.mealId;
    const selectedMeals= MEALS.find((meal)=>meal.id===mealId)
return <View>
    <Image source={{uri : selectedMeals.imageUrl}} />
    <Text>{selectedMeals.title}</Text>
    <View>
    <MealDetails duration={selectedMeals.duration} affordability={selectedMeals.affordability} complexity={selectedMeals.complexity} />
    </View>
    <Text>Ingredients</Text>
    {selectedMeals.ingredients.map((ingredient)=>(<Text key={ingredient}>{ingredient}</Text>))}
    <Text>Steps</Text>
    {selectedMeals.steps.map((step)=>(<Text key={step}>{step}</Text>))}
</View>
}
export default MealDetailScreen;