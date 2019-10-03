import React from "React";
import {Text, TouchableOpacity} from "react-native";
export default () => (
    <>
    <Text>Movies</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>Detail</Text>
    </TouchableOpacity>
    </>
);