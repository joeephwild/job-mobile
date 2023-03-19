import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";

import styles from "./welcome.style";
const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your next job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
        <TextInput
            style={styles.searchInput}
            value=''
            onChangeText={() => {}}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer} >
        <FlatList />
      </View>
    </View>
  );
};

export default Welcome;
