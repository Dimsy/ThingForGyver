/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { WebView } from 'react-native-webview';
import {Text} from "react-native";
import axios from 'axios';

function App(): JSX.Element {
  const [data, setData] = React.useState<any>(null);
  React.useEffect(() => {
    axios.get('https://raw.githubusercontent.com/GyverLibs/GyverHub/main/web/app/index.html').then((res) => {
        setData(res.data);
    })
  }, []);

  if (!data) {
    return <Text>Loading</Text>;
  }

  return (
      <>
        <WebView
            source={{ html: data }}
            style={{ marginTop: 20 }}
        />
      </>
  );
}

export default App;
