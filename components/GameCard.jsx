import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
import "../app/global.css"   
  
export function GameCard({ game }) {
  return (
    <View className="flex-1 flex-row gap-4 w-10 h-10 bg-blue-500" key={game.slug}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <View className="flex-shrink">
        <Text className="mt-10 text-red-500" style={styles.title}>
          {game.title}
        </Text>
        <Text style={styles.score}>{game.score}</Text>  
        <Text className="mt-2 flex-shrink" style={styles.description}>
          {game.description.slice(0, 100)}Amet labore Lorem dolor veniam aliquip
          consectetur consectetur cupidatat non ea est ut aute. Id
          consectetur...
        </Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row", // Alinea los elementos en fila
    gap: 10, // Espaciado entre imagen y contenido (si tu versión de React Native lo soporta)
    marginBottom: 42,
    alignItems: "flex-start", // Alinea los elementos verticalmente al inicio
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
    marginRight: 10, // Espacio entre la imagen y el contenido
  },
  content: {
    flex: 1, // Hace que el contenido ocupe el resto del espacio disponible
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // color: "#fff",
    marginBottom: 5,
  },
  score: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#ccc",
  },
});

// export function GameCard({ game }) {
//   return (
//     <View className="flex-row gap-4" key={game.slug}>
//       <Image source={{ uri: game.image }} style={styles.image} />
//       <View className="flex-shrink">
//         <Text className="mb-1" style={styles.title}>
//           {game.title}
//         </Text>
//         <Text style={styles.score}>{game.score}</Text>
//         <Text className="mt-2 flex-shrink" style={styles.description}>
//           {game.description.slice(0, 100)}Amet labore Lorem dolor veniam aliquip consectetur
//                consectetur cupidatat non ea est ut aute. Id consectetur...
//         </Text>
//       </View>
//     </View>
//   );
// }

// export function AnimatedGameCard({ game, index }) {
//   const opacity = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(opacity, {
//       toValue: 1,
//       duration: 500,
//       delay: index * 250,
//       useNativeDriver: true,
//     }).start();
//   }, [opacity, index]);

//   return (
//     <Animated.View style={{ opacity }}>
//       <GameCard game={game} />
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     marginBottom: 42,
//   },
//   image: {
//     width: 107,
//     height: 147,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#fff",
//     marginTop: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: "#eee",
//   },
//   score: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "green",
//     marginBottom: 10,
//   },
// });

// const styles = StyleSheet.create({
//   card: {
//     width: "100%", // Ocupa todo el ancho de la pantalla
//     backgroundColor: "#fff", // Añadimos un fondo blanco para resaltar el card
//     padding: 16,
//     marginBottom: 20, // Separación entre tarjetas
//     borderRadius: 10, // Opcional, para esquinas redondeadas
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5, // Sombra en Android
//   },
//   image: {
//     width: "100%", // La imagen ocupa todo el ancho del card
//     height: 200, // Ajusta según el diseño
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#000",
//     marginTop: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: "#2d2d2d",
//     marginTop: 5,
//   },
//   score: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "green",
//     marginTop: 10,
//   },
// });
