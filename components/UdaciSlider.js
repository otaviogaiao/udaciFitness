import React from 'react'
import { View, Text, Slider, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'

export default function UdaciSlider({ max, unit, step, value, onChange }){
    return (
        <View style={styles.row}>
            <Slider
             style={{flex: 1}}
             maximumValue={max}
             minimunValue={0}
             step={step}
             value={value}
             onValueChange={onChange}
            />
            <View style={styles.metricCounter}>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    metricCounter: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center'
    }
}) 