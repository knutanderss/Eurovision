import React from "react"
import { View, Text } from "react-native"
import StarRating from "react-native-star-rating"
import style from "./style"
import { COLOR_SCALE } from "../../../assets/constants"
import { star, starfull, starhalf } from "../../../assets/icons"

export default props => {
    return (
        <View style={style.container}>
            <Text style={style.voteText}>{props.option}</Text>
            <View style={{ width: 100 }}>
                <StarRating
                    emptyStar={require("../../../assets/icons/star.png")}
                    fullStar={require("../../../assets/icons/starfull.png")}
                    halfStar={require("../../../assets/icons/starhalf.png")}
                    maxStars={5}
                    rating={props.rating}
                    halfStarEnabled={true}
                    selectedStar={rating =>
                        props.vote(
                            props.userId,
                            props.artist,
                            props.option,
                            rating,
                            (rating - props.rating) * 2
                        )
                    }
                    fullStarColor={COLOR_SCALE[2 * props.rating - 1]}
                />
            </View>
        </View>
    )
}
