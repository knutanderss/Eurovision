import React from "react"
import { View, Image, Text } from "react-native"
import style from "./style"
import * as flags from "../../../assets/flag"
import TextTicker from "react-native-text-ticker"

export default props => {
    let info = props.artist + " - " + props.song
    return (
        <View style={style.container}>
            <View>
                <View>
                    <Image source={flags[props.abbr]} style={style.flag} />
                    <Text style={style.country}>{props.country}</Text>
                </View>
                <View style={style.ticker}>
                    <TextTicker
                        style={style.artist}
                        duration={5000}
                        loop
                        bounce={false}
                        repeatSpacer={50}
                        marqueeDelay={3000}
                    >
                        {info}
                    </TextTicker>
                </View>
            </View>
        </View>
    )
}
