import { Card, Layout, Spinner, Text } from '@ui-kitten/components';
import { FlatList, Image, ListRenderItem, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Character } from '../../interface/star-wars.interface';
import HomeStore from '../../stores/home.store';

interface Props {
  homeStore: HomeStore;
  navigation: any;
  route: any;
}

@inject('homeStore')
@observer
export default class Film extends Component<Props> {

  componentDidMount() {
    const { params } = this.props.route;
    const { getFilmById } = this.props.homeStore;

    getFilmById(params.id);
  }

  renderCharacter: ListRenderItem<Character> = ({ item }) => (
    <Card status='success' style={styles.card}>
      <View style={styles.characterContainer}>
        {item.photo ? (
          <Image source={{ uri: item.photo }} style={styles.characterImage} />
        ) : null}
        <View style={styles.characterInfo}>
          <Text category='h6'>{item.name}</Text>
          <Text>Gender: {item.gender}</Text>
          <Text>Mass: {item.mass}</Text>
        </View>
      </View>
    </Card>
  );

  renderHeader = () => {
    const { film } = this.props.homeStore;
    if (!film) return null;

    return (
      <View>
        <Card status='success' style={styles.card}>
          {film.photo ? (
            <Image source={{ uri: film.photo }} style={styles.filmImage} />
          ) : null}
          <Text category='h4' style={styles.title}>{film.title}</Text>
          <Text style={styles.crawl}>{film.opening_crawl}</Text>
          <Text>Director: {film.director}</Text>
          <Text>Producer: {film.producer}</Text>
          <Text>Release Date: {film.release_date}</Text>
        </Card>
        {film.characters && film.characters.length > 0 && (
          <Text category='h5' style={styles.sectionTitle}>Characters</Text>
        )}
      </View>
    );
  }

  render() {
    const { film, loading, error } = this.props.homeStore;

    if (loading) {
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

    if (!film) return null;

    return (
      <Layout style={styles.container}>
        <FlatList
          data={film.characters || []}
          renderItem={this.renderCharacter}
          keyExtractor={(item, index) => item.name || index.toString()}
          ListHeaderComponent={this.renderHeader}
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
    marginBottom: 10,
  },
  crawl: {
    fontStyle: 'italic',
    marginBottom: 10,
  },
  filmImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  characterImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  characterInfo: {
    flex: 1,
  },
  sectionTitle: {
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
});
