import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import PokemonCard from "./components/PokemonCard";
export default function App() {
  const charmendarData = {
    name: "charmendar",
    image: require("./assets/charmender.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "leer"],
    weaknesses: ["Water", "Rock"],
  };
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squartel.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Tail Whip", "Bubble", "Water Gun"],
    weaknesses: ["Electric", "Grass"],
  };
  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.jpeg"),
    type: "Electric",
    hp: 35,
    moves: ["Thunder Shock", "Growl", "Tail Whip", "Quick Attack"],
    weaknesses: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmendarData} />

        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 24 : 0,
  },
});
