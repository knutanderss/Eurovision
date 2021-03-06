import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
    View,
    Text,
    ScrollView,
    Button,
    StatusBar,
    TouchableOpacity,
    Image
} from "react-native"
import Country from "./Country"
import VoteOption from "./VoteOption"
import style from "./style"
import { back } from "../../assets/icons"
import * as Action from "../../actions"

class Artist extends Component<Prop> {
    static navigationOptions = { gesturesEnabled: true }

    render() {
        const country = this.props.navigation.state.params.country
        const artist = this.props.artists[country]
        const voteOptions = this.props.voteOptions.map((option, index) => (
            <VoteOption
                key={index}
                option={option}
                artist={artist}
                userId={this.props.userId}
                vote={this.props.vote}
                rating={artist.votes[option] || 0}
            />
        ))
        return (
            <View style={style.container}>
                <StatusBar style={style.statusBar} barStyle="dark-content" />
                <View style={style.topView}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#F03278",
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Image
                                style={{ width: 32, height: 32 }}
                                source={back}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <Country
                        country={artist.country}
                        song={artist.song}
                        artist={artist.name}
                        abbr={artist.abbr}
                    />
                    {voteOptions}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    voteOptions: state.artistsReducer.voteoptions,
    artists: state.artistsReducer.artists,
    userId: state.userReducer.user.id
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators(Action, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist)
