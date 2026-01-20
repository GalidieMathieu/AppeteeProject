import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';
import { SearchBar, ListItem, Avatar, Card, Badge } from 'react-native-elements'
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';

const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "Mathieu1801",
    name: "MG"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "Agathe75",
    name: "AD"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "20100",
    name: "VB"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "Caro13600",
    name: "CD"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "TestPseudoLongLong",
    name: "PL"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "P",
    name: "PC"
  }
];





export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'hello',
    headerLeft: (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  //searchbar
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };
  //searchbar
  /* 
    renderRecipes = ({ item }) => (
      <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
        <View>
          <Image source={{ uri: item.photo_url }} />
          <Text>{item.title}</Text>
          <Text>{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableHighlight>
    ); */


  /* render() {
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  } */


  render() {
    const { navigation } = this.props;
    const { search } = this.state;
    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      }
    ];

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.avatar}>
            <Avatar
              size="medium"
              title="CD"
              rounded
              onPress={() => {
                navigation.navigate('ProfilUser');
              }}
              overlayContainerStyle={{ backgroundColor: 'grey' }}
            />
          </View>

          <View style={styles.title}>
            <Text style={styles.titleGrey}>Salut</Text>
            <Text style={styles.titleRose}> username,</Text>
          </View>

          <Text style={styles.titleGrey}>On prépare pour qui ?</Text>

          <SearchBar
            placeholder="Rechercher..."
            onChangeText={this.updateSearch}
            value={search}
            round
            lightTheme
          />

          <Text style={styles.sousTitre}>Récent</Text>
          {/* <View style={styles.listeConvives}>
            {
              list.map((l, i) => (
                <ListItem key={i} style={styles.listeConvives}>
                  <Avatar source={{ uri: l.avatar_url }} /> 
                  <View styles={styles.personnesManger}>
                    <Avatar
                      size="medium"
                      title="CD"
                      rounded
                      overlayContainerStyle={{ backgroundColor: 'grey' }}
                    />
                    <ListItem.Content>
                      <ListItem.Title>{l.name}</ListItem.Title>
                    </ListItem.Content>
                  </View>
                </ListItem>
              ))
            }
          </View> */}

          <FlatList
            horizontal
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <Card
                  title={null}
                  containerStyle={{ padding: 0, marginHorizontal: 8, width: 80, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Avatar
                    size="medium"
                    title={rowData.name}
                    rounded
                    overlayContainerStyle={{ backgroundColor: 'grey' }}
                  />
                  <Text style={{ marginBottom: 10, fontSize: 10, fontFamily: "Poppins-Regular", textAlign: 'center', color: '#707070' }}>
                    {rowData.title}
                  </Text>
                </Card>
              );
            }}
            keyExtractor={(item, index) => index}
          />

          <Text style={styles.sousTitre}>Profils annexes</Text>
          {/* <View style={styles.listeConvives}>
            {
              list.map((l, i) => (
                <ListItem key={i} style={styles.listeConvives}>
                  <Avatar source={{ uri: l.avatar_url }} /> 
                  <View styles={styles.personnesManger}>
                    <Avatar
                      size="medium"
                      title="CD"
                      rounded
                      overlayContainerStyle={{ backgroundColor: 'grey' }}
                    />
                    <ListItem.Content>
                      <ListItem.Title>{l.name}</ListItem.Title>
                    </ListItem.Content>
                  </View>
                </ListItem>
              ))
            }
          </View> */}
          <FlatList
            horizontal
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <Card
                  title={null}
                  containerStyle={{ padding: 0, marginHorizontal: 8, width: 80, flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Avatar
                    size="medium"
                    title={rowData.name}
                    rounded
                    overlayContainerStyle={{ backgroundColor: 'grey' }}
                  />
                  <Text style={{ marginBottom: 10, fontSize: 10, fontFamily: "Poppins-Regular", color: '#707070' }}>
                    {rowData.title}
                  </Text>
                </Card>
              );
            }}
            keyExtractor={(item, index) => index}
          />

          <Text style={styles.sousSousTitre}>PARTICIPANTS</Text>
          {/* <View>
            {
              list.map((l, i) => (
                <ListItem key={i}>
                  <Avatar source={{ uri: l.avatar_url }} />
                </ListItem>
              ))
            }
          </View> */}
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Avatar
              size="small"
              title='CD'
              rounded
              overlayContainerStyle={{ backgroundColor: 'grey', margin: 0, padding: 0 }}
            />
            <FlatList
              horizontal
              data={this.state.data}
              renderItem={({ item: rowData }) => {
                return (
                  <Card
                    title={null}
                    containerStyle={{ padding: 0, marginHorizontal: 5, width: 40 }}>
                    <Avatar
                      size="small"
                      title={rowData.name}
                      rounded
                      overlayContainerStyle={{ backgroundColor: 'grey' }}
                    />
                    <Badge
                      status="error"
                      containerStyle={{ position: 'absolute', top: 3, right: 3 }}
                    />
                  </Card>

                );
              }}
              keyExtractor={(item, index) => index}
            />
          </View>


          <View style={styles.stylebutton}>
            <ViewIngredientsButton
              title="Trouver ma recette"
              onPress={() => {
                navigation.navigate('RecettesListe');
              }}
            />
          </View>

        </ScrollView>
      </SafeAreaView>

    );
  }
}
/*
HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
}; */
