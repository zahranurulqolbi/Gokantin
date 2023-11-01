import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>NAMA:ZAHRA NURUL QOLBI INSANI</Text>
      <Text>NIS:222310287</Text>
      <Text>KELAS:XI PPLG 3</Text>
      <Text>UMUR:16 TAHUN</Text>
      <Text>ALAMAT:AWILUAR</Text>
      <Text>HOBY:MEMBACA</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
