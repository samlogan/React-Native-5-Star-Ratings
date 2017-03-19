# React Native 5 Star Ratings

Super minimal 5 star rating component for React Native

![React Native 5 Star Ratings](https://image.ibb.co/dkGXFa/Screen_Shot_2017_03_19_at_1_11_02_pm.png)

## Props

| Name                 | Value                        | Type    | Default |
| -------------------- |----------------------------- |-------- |-------- |
| Rating               | 0 - 5 *including* .5 values  |**INT**  | null    |
| Size                 | Star size in pixels [x, y]   |**Array**| [20,20] |

## Example usage inside component

```
import { View } from 'react-native';
import StarRating from './StarRating';

export default class Example extends Component {
  render() {
    return (
        <View>
            <StarRating
              rating={3.5}
              size={[15,15]}
            />
        </View>
    );
  }
}
```

## Bring your own stars

- Swap out the png's inside the `/assets` folder with your own stars.
- Maintain the filenames or update their reference within `/components/StarRating.js`
