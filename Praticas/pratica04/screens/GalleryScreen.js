import {View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

function GalleryScreen() {
    return (
        <View>
            <View>
    <Text>Galeria de Fotos</Text>
    </View>
    <ScrollView>
  {imagens.map((img, index) => (
    <TouchableOpacity key={index} onPress={() => {}}>
      <Image source={{ uri: img }} />
    </TouchableOpacity>
  ))}
    </ScrollView>
    <View>
   <TouchableOpacity>
     <Text>Fotos</Text>
   </TouchableOpacity>
   <TouchableOpacity>
     <Text>Álbuns</Text>
   </TouchableOpacity>
   <TouchableOpacity>
     <Text>Favoritas</Text>
   </TouchableOpacity>
    </View>

        </View>
      );
      
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFFBFE", },
    appBar: { backgroundColor: "#6750A4", height: 64, paddingLeft: 16, paddingRight: 16, justifyContent: "center", marginBottom: 8, },
    appTitle: { color: "#FFFFFF", fontSize: 22, fontWeight: 400, lineHeight: 28, alignSelf: "center", },
    grid: { padding: 8, flexDirection: "row", flexWrap: "wrap", gap: 1, },
    photo: { width: "31%", height: 100, aspectRatio: 1, backgroundColor: "#E6E0E9", elevation: 1 },
    bottomBar: { flexDirection: "row", justifyContent: "space-around", alignItems: "center", height: 80, backgroundColor: "#FFFFFF", borderTopWidth: 1, borderTopColor: "#E6E0E9", elevation: 3, },
    bottomBarText: { fontSize: 16, color: "#49454F" },
});


const imagens = [
    "https://picsum.photos/200/200?random=1",
    "https://picsum.photos/200/200?random=2",
    "https://picsum.photos/200/200?random=3",
    "https://picsum.photos/200/200?random=4",
    "https://picsum.photos/200/200?random=5",
  ];

  export default GalleryScreen;
  