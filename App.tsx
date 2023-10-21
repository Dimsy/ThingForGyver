/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { WebView } from 'react-native-webview';
import {Button, Text} from "react-native";
import axios from 'axios';

function App(): JSX.Element {
  const [data, setData] = React.useState<any>(null);
  const viewRef = React.useRef(null);

  React.useEffect(() => {
    //http://10.0.2.2:3000/html
      //https://raw.githubusercontent.com/GyverLibs/GyverHub/main/web/app/index.html
    axios.get('https://raw.githubusercontent.com/GyverLibs/GyverHub/main/web/app/index.html').then((res) => {
      //console.log(res.data)
      setData(res.data);
    }).catch((e) => console.log(e))
  }, []);

  const onReload = () => {
      if (!!viewRef && !!viewRef.current) {
          viewRef.current.reload();
      }
  };

  if (!data) {
    return <Text>Loading</Text>;
  }

  return (
      <>
          <Button onPress={onReload} title={'Reload'}></Button>
          <WebView
              ref={viewRef}
              source={{ html: data, baseUrl: 'http://localhost' }}
              style={{ marginTop: 20 }}
          />
      </>
  )
}

export default App;
