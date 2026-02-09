import 'react-native-gesture-handler';

import * as Stores from './src/stores';

import { SafeAreaView } from 'react-native';
import { dark as darkTheme, mapping } from '@eva-design/eva';

import { ApplicationProvider } from '@ui-kitten/components';
import { Provider } from 'mobx-react';
import React from 'react';
import Routes from './src/routes';

const App = () => (
    <Provider {...Stores}>
        <ApplicationProvider mapping={mapping} theme={darkTheme}>
            <SafeAreaView style={{ flex: 1 }}>
                <Routes />
            </SafeAreaView>
        </ApplicationProvider>
    </Provider>
);

export default App;
