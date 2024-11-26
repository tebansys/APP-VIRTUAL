import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,  
} from "react-native";
import { useEffect, useState } from "react";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context"; //customs hook
import { GameCard } from "./GameCard";
import { Logo } from "./Logo";
import { AnimatedGameCard } from "./GameCard";
import { Screen } from "./Screen";

// const icon = require("./assets/icon.png");

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );

  // return (
  //   // <> fragment
  //   <View
  //     style={{
  //       paddingTop: insets.top,
  //       paddingBottom: insets.bottom,
  //       paddingStart: insets.left,
  //       paddingEnd: insets.right,
  //     }}
  //   >
  //      <View
  //     style={{
  //       width:24,
  //       height:24,
  //     }}
  //   >
  //       <Logo style={{
  //       width:24,  
  //       height:24,
  //     }} />
  //     </View>

  //     {games.length === 0 ? (
  //       <ActivityIndicator color={"#fff"} size={"large"} />
  //     ) : (
  //       <FlatList
  //         data={games}
  //         keyExtractor={(game) => game.slug}
  //         renderItem={({ item, index }) => (
  //           // <GameCard game={item} />
  //           <AnimatedGameCard game={item} index={index} /> 
  //         )}
  //       />

  //       // <ScrollView>
  //       //   {games.map((game) => (
  //       //     <GameCard key={game.slug} game={game} />
  //       //   ))}
  //       // </ScrollView>
  //     )}
  //   </View>
  //   // </> fragment
  // );
}
