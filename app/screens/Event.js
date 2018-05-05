
import React, {Component} from 'react'
import { Image, StyleSheet } from 'react-native';
import { Header, Card, CardItem, Thumbnail,
   Button, Icon, Left, Body, Right,
  Container, Content, List,
  ListItem, Spinner, Fab, Text
} from 'native-base'
import {connect} from 'react-redux'
import MapView from 'react-native-maps';

import {allEvent} from '../actions/event'
class Event extends Component{
  constructor() {
    //Document Ready 
    super();
    
  state={
    userLocation: null,
    userMarker:null
  }
    //intial state
   
  }

  componentWillMount(){
    
    this.props.dispatch(allEvent( {
      lat : -6.993279,
      long: 110.421505,
      rad : 5
    }))
 

   
  //
  }

  componentDidMount(){
    //console.log(this.state.userLocation);
    

  }

  handleSubmit(){
  //iki iso keluar datane
   console.log(this.props.eventReducer.event[0]);
  }

  render(){


    return (
      <Container style={styles.container}>
{/*       
      <Button onPress={()=> this.handleSubmit()}>
                                    
                                    <Text>Detail</Text>
                                </Button> */}
     
        <Content>
          {this.props.eventReducer.isLoading? (
            <Spinner/>
          ): (

            <List>
              {/* iki rak iso metu datane */}
              {this.props.eventReducer.event.map((item,index)=>(
     
                <ListItem key={index}>
 
                    <Card>
                    <CardItem>
                            <Left>
                               
                                <Body>
                                    <Text>{item.title}</Text>
                              
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://asset.kompas.com/crop/0x60:960x540/780x390/data/photo/2018/03/08/3380540716.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            
                            <Body>
                           
                               
                                    <Text style={{fontSize: 10}}>Jarak: {item.distance} Km</Text>
                                    <Text style={{fontSize: 10}}>Type: {item.type}</Text>
                            </Body>
                            <Right>
                           
                            </Right>
                        </CardItem>
                    </Card>

                </ListItem>
              ))}
            </List>
          )}

        </Content>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={()=> this.props.navigation.navigate('EventCreate')}
        >
          <Icon name="add" />
        </Fab>
      </Container>

    )
  }
}

const mapStateToProps = (state)=>{
  return {
    eventReducer: state.eventReducer
  }
}

export default connect(mapStateToProps)(Event)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})