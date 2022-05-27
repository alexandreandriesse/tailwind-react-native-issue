import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { styled } from "tailwindcss-react-native";

const StyledView = styled(View);

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <StyledView className="bg-white rounded-lg h-64 w-64"><Text>Bonjour</Text></StyledView>
      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  box: {
    backgroundColor: 'red',
    height: 40,
    aspectRatio: 1
  }
});
