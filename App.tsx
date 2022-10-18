//import { StatusBar } from 'expo-status-bar';
import { StatusBar } from "react-native";

import { Home } from './src/screens/Home'

export default function App() {

  return (
    <>
      {/* <StatusBar style='dark' translucent={ false } backgroundColor='transparent' /> */}
      {/* <StatusBar style='light' translucent={ false } /> */}
      {/* <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent={ false } /> */}
      <Home />
      <StatusBar />
    </>
  );
}