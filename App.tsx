import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home'

export default function App() {

  return (
    <>
      {/* <StatusBar style='dark' translucent={ false } backgroundColor='transparent' /> */}
      {/* <StatusBar style='light' translucent={ false } /> */}
      <Home />
      <StatusBar />
    </>
  );
}