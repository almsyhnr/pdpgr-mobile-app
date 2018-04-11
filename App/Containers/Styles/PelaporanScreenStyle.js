import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  locationButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  locationButton: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15
  },
  iconButton: {
    width: 40,
    height: 40,
    position: 'absolute'
  },
  textButton: {
    fontFamily: Fonts.type.base,
    color: Colors.snow,
    flex: 1,
    fontSize: 20,
    textAlign: 'center'
  },
  submitContainer: {
    backgroundColor: Colors.lightBlue,
    padding: 15
  },
  submitText: {
    textAlign: 'center',
    color: Colors.snow,
    fontSize: 20
  },
  image: {
    width: 80,
    height: 60
  },
  delete: {
    position: 'absolute',
    top: 3,
    right: 3,
    backgroundColor: Colors.primary,
    zIndex: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  deleteText: {
    color: Colors.snow
  }
})
