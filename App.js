import React, { Component } from 'react';
import {Fetch} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, View } from 'native-base';



export default class FooterTabsIconTextExample extends Component {

  getMoviesFromApiAsync() {
    return fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json()) //converts the retruned object into json
      .then((responseJson) => {
        // responseJson.movies.forEach(movie => {
        //     console.log(movie)
        // });
        //return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>

        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button onPress={this.getMoviesFromApiAsync.bind(this)} vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
