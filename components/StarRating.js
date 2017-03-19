import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

const getStarArr = (rating) => {
  // Switch on rating value 0-5 including .5
  // Values inside returned array:
  // 0 = Unselected Star
  // 1 = Selected Star
  // 2 = Half Star
  switch (rating) {
    case 0:
      return [0,0,0,0,0];
    case 0.5:
      return [2,0,0,0,0];
    case 1:
      return [1,0,0,0,0];
    case 1.5:
      return [1,2,0,0,0];
    case 2:
      return [1,1,0,0,0];
    case 2.5:
      return [1,1,2,0,0];
    case 3:
      return [1,1,1,0,0];
    case 3.5:
      return [1,1,1,2,0];
    case 4:
      return [1,1,1,1,0];
    case 4.5:
      return [1,1,1,1,2];
    case 5:
      return [1,1,1,1,1];
    default:
      return [];
  }
}

const getStar = (star, size, index) => {
  const starSize = !size || !Array.isArray(size) ? [20, 20] : size;
  switch (star) {
    case 0:
      return <Image key={index} source={require('../../assets/unselected_star.png')} style={{width: starSize[0], height: starSize[1]}} />;
    case 1:
      return <Image key={index} source={require('../../assets/selected_star.png')} style={{width: starSize[0], height: starSize[1]}} />;
    case 2:
      return <Image key={index} source={require('../../assets/half_star.png')} style={{width: starSize[0], height: starSize[1]}} />;
    default:
  }
}

const StarRating = ({rating, size}) => {
  if (!rating) return null;
  return (
    <View style={styles.container}>
      {getStarArr(rating).map((star, index) => getStar(star, size, index))}
    </View>
  )
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
});
