import React from 'react';
import { Platform } from "react-native";
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import MoviesScreen from '../screens/Movies';
import TVScreen from '../screens/TV';
import SearchScreen from '../screens/Search';
import { BG_COLOR } from '../constants/Colors'; 
import TabBarIcon from '../conponents/TabBarIcon';
import {createStack} from "./config";


const TabNavigation = createBottomTabNavigator(
    {
    Movie:{ 
        screen : createStack(MoviesScreen, "Movies"),
        navigationOptions: { 
            tabBarIcon: ({focused}) => (
                <TabBarIcon focused={focused} name="md-film"/> 
            )
        }
    },

    TV:{ 
        screen : createStack(TVScreen, "TV"),
        navigationOptions: { 
            tabBarIcon: ({focused}) => (
                <TabBarIcon focused={focused} name="md-tv"/> 
            )
        }
    },

    Search:{ 
        screen : createStack(SearchScreen, "Search"),
        navigationOptions: { 
            tabBarIcon: ({focused}) => (
                <TabBarIcon focused={focused} name="ios-search"/> 
            )
        }
    }
    },
    {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }  
);

export default createAppContainer(TabNavigation);
