import { Card, Layout, Text } from '@ui-kitten/components';
import React, { Component, } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';

import HomeStore from '../../stores/home.store';

interface Props {
  homeStore: HomeStore
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
    return (
      <Layout style={{ flex: 1, backgroundColor: 'black' }}>
        <ScrollView>
          {films.map((film, index) => (
            <Card key={index}>
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