import { Card, Layout, Text } from '@ui-kitten/components';
import { Image, ScrollView, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import HomeStore from '../../stores/home.store';
import { Spinner } from '@ui-kitten/components';

interface Props {
  homeStore: HomeStore,
  navigation: any;
  route: any;
}

@inject('homeStore')
@observer
export default class Film extends Component<Props> {

  async componentDidMount() {
    const { params } = this.props.route;
    const { getFilmById } = this.props.homeStore;

    await getFilmById(params.id);
  }

  render() {
    const { film } = this.props.homeStore;

    return (
      <Layout style={{ flex: 1, backgroundColor: 'black' }}>
        <ScrollView>

          {!film.episode_id && <Card><Text>Carregando...<Spinner /></Text></Card>}

          {film && film.episode_id &&
            <Card status='success'>
              <Image source={{ uri: film.photo }} style={{ width: 200, height: 200 }} />
              <Text style={styles.title}>{film.title}</Text>
              <Text>{film.opening_crawl}</Text>
              <Text>Director: {film.director}</Text>
              <Text>Producer: {film.producer}</Text>
              <Text>Release Date: {film.release_date}</Text>
            </Card>
          }

          {film && film.characters && <Card><Text>Personagens</Text></Card>}

          {film && film.characters && film.characters.map((character, k) => (
            <Card key={k} status='success'>
              <Image source={{ uri: character.photo }} style={{ width: 100, height: 100 }} />
              <Text>{character.name}</Text>
              <Text>Gender: {character.gender}</Text>
              <Text>Mass: {character.mass}</Text>
            </Card>
          ))}
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