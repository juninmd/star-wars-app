import { Card, Layout, Spinner, Text } from '@ui-kitten/components';
import React, { Component } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';

import { Film } from '../../interface/star-wars.interface';
import HomeStore from '../../stores/home.store';
import { ROUTES_NAMES } from '../../routes';

interface Props {
  homeStore: HomeStore;
  navigation: any;
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {

  componentDidMount() {
    const { getFilms } = this.props.homeStore;
    getFilms();
  }

  navigateScreen = (id: number) => {
    const { navigate } = this.props.navigation;
    navigate(ROUTES_NAMES.Film, { id });
  }

  renderItem: ListRenderItem<Film> = ({ item }) => (
    <Card onPress={() => this.navigateScreen(item.id)} style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>Episode {item.episode_id.toString()}</Text>
    </Card>
  );

  render() {
    const { films, loading, error } = this.props.homeStore;

    if (loading && films.length === 0) {
      return (
        <Layout style={styles.centerContainer}>
          <Spinner />
        </Layout>
      );
    }

    if (error) {
      return (
        <Layout style={styles.centerContainer}>
          <Text status='danger'>{error}</Text>
        </Layout>
      );
    }

    return (
      <Layout style={styles.container}>
        <FlatList
          data={films}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
        />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  centerContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 10,
  },
  card: {
    marginVertical: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
