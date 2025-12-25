//TP5
//import { View, Text } from "react-native"; 
// 
//export default function TodoDetailsScreen({ route }) { 
// const { id, title } = route.params; 
// 
// return ( 
//   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> 
//     <Text style={{ fontSize: 30 }}>{title}</Text> 
//     <Text style={{ fontSize: 20, marginTop: 10 }}>ID : {id}</Text> 
//   </View> 
// ); 
//} 

import { View, Text, Button } from "react-native"; 
import { useDispatch } from "react-redux"; 
import { removeTodo } from "../store/todosSlice"; 
 
export default function TodoDetailsScreen({ route, navigation }) { 
 const { id, title } = route.params; 
 const dispatch = useDispatch(); 
 
 const handleDelete = () => { 
   dispatch(removeTodo(id)); 
   navigation.goBack(); 
 }; 
 
 return ( 
   <View style={{ flex: 1, padding: 20 }}> 
     <Text style={{ fontSize: 24 }}>{title}</Text> 
 
     <Button 
       title="Supprimer cette tâche" 
       color="red" 
       onPress={handleDelete} 
     /> 
   </View> 
 ); 
}