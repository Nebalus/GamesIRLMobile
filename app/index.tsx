import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Link href="/sign-in">SIGN IN</Link>
            <Link href="/tests/GetLocation">GetLocation</Link>
        </View>
    );
}
