import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MoviesScreen from '../screens/Movies';
import TVScreen from '../screens/TV';
import SearchScreen from '../screens/Search';
import { BG_COLOR } from '../constants/Colors'; 
import { TabBarIcon } from '../conponents/TabBarIcon'

const tabNavigation = createBottomTabNavigator(
    {
    Movie:{ 
        screen : MoviesScreen,
        navigationOptions: { 
            tabBarIcon: ({focused}) => (
                <TabBarIcon focused={focused} name="md-film"/> 
            )
        }
    },
    TV:{ 
        screen : TVScreen,
        navigationOptions: { 
            tabBarIcon: ({focused}) => (
                <TabBarIcon focused={focused} name="md-film"/> 
            )
        }
    },
    Search:{
        screen : SearchScreen, 
        navigationOptions: { 
            tabBarIcon: ({focused}) => (
                <TabBarIcon focused={focused} name="md-film"/> 
            )
        }
    }
    },
    {
        tabBarOptions: {
           // showLabel: false,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }  
)

export default createAppContainer(TabNavigation);