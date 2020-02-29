import { Card, Layout, Text } from '@ui-kitten/components';
import { Image, ScrollView, StyleSheet } from 'react-native';
import React, { Component, } from 'react';
import { inject, observer } from 'mobx-react';

import HomeStore from '../../stores/home.store';
import { ROUTES_NAMES } from '../../routes';

interface Props {
  homeStore: HomeStore,
  navigation: any;
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {

  async componentDidMount() {
    const { getFilms } = this.props.homeStore;
    await getFilms();
  }

  render() {
    const { films } = this.props.homeStore;

    const navigateScreen = (id: number) => {
      const { navigate } = this.props.navigation;
      navigate(ROUTES_NAMES.Film, { id });
    }

    return (
      <Layout style={{ flex: 1, backgroundColor: 'black' }}>
        <ScrollView>
          {films.map((film, index) => (
            <Card onPress={() => navigateScreen(film.id)} key={index}>
              <Image source={{ uri: film.photo }} style={{ width: 100, height: 100 }} />
              <Text style={styles.title}>{film.title}</Text>
              <Text>Episode {film.episode_id.toString()}</Text>
            </Card>))
          }
        </ScrollView>
      </Layout>);
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black',
    color: 'white',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
  },
});