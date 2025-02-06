import { View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View
            className="flex-1 justify-center items-center"
        >
            <Link href="/sign-in">SIGN IN</Link>
            <Link href="/tests/GetLocation">GetLocation</Link>
        </View>
    );
}
