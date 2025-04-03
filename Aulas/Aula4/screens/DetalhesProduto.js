import { View, Text, StyleSheet, Image } from "react-native";

function DetalhesProduto() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Detalhes do Produto</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
        <Text style={styles.productName}>Nome do Produto</Text>
        <Text style={styles.productDetail}>Descrição detalhada do produto</Text>
        <View style={styles.choice}>
          <View style={styles.quantity}>
            <View>
              <Text>-</Text>
            </View>
            <View>
              <Text>1</Text>
            </View>
            <View>
              <Text>+</Text>
            </View>
          </View>                
          <Text>R$ 99,99</Text>
        </View>
        <View>
          <Text>Adicionar no Carrinho</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    padding: 16,
    backgroundColor: "blue",
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  container: {
    flex: 1,
    padding: 8,
  },
  photo: {
    height: 200,
    padding: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600"
  },
  productDetail: {
    fontSize: 12,
    color: "gray",
    marginBottom: 64,
  },
  choice: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonMinusPlus: {
    height: 32,
    width: 32,
    backgroundColor: "lightblue",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  textMinusPlus: {
    fontSize: 16,
    fontWeight: "600"
  }
});

export default DetalhesProduto;