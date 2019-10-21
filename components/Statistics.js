import React, { Component } from 'react'
import { Text, View } from 'native-base'
import {
  StyleSheet
} from 'react-native'
import { PieChart } from 'react-native-svg-charts'

export default class Statistics extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: [],
      issues: [],
      user: '',
      showCreatedOn: false,
      currentActiveProject: -1
    }
  }

  render () {
    const data = [50, 10, 40, 95, -4, -24, 85, 11, 35, 53, -13, 24, 50, -20, -80]

    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
      .filter(value => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
          onPress: () => console.log('press', index)
        },
        key: `pie-${index}`
      }))
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.HeaderText}>Statistics</Text>
        </View>
        <PieChart
          style={{ height: 200 }}
          data={pieData}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  projectData: {
    color: '#FFF'
  },
  projectDisc: {
    color: '#2bcccc'
  },
  projectName: {
    color: '#2bcccc',
    fontSize: 20
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginTop: 10,

    borderWidth: 1,
    borderColor: '#2bcccc'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#2bcccc',
    marginBottom: 5
  },
  HeaderText: {
    color: '#FFF',
    fontWeight: 'normal',
    fontSize: 30

  }
})
