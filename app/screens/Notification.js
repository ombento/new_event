import React, { Component } from 'react';
import {
    Container, Content, List,
    ListItem, Text
  } from 'native-base'

  export default class Notification extends Component {
    state = {
        products: [
            {id: 1, name: "Products 1"},
            {id: 2, name: "Products 2"}
        ]
    }
      render() {
          return (
           <Container>
               <Content>
               <List>
            
            {this.state.products.map(product =>
               <ListItem key={product.id} onPress={()=> this.props.navigation.navigate('NotificationDetail',{product : product})}> 
             
                       <Text>{product.id}</Text>

               </ListItem>
           )}
           
        </List>
               </Content>
           </Container>   
          );
      }
  }