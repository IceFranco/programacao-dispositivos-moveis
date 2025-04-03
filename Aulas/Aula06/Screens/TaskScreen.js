import { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  Appbar,
  List,
  TextInput,
  FAB,
  Modal,
  Button,
  Divider,
} from "react-native-paper";

function TaskScreen() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState("");
  const [concluida, setConcluida] = useState(false);
  const [exibeModal, setExibeModal] = useState(false);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas" />
      </Appbar.Header>
      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <>
            <List.Item
              onPress={() => setConcluida(!concluida)}
              title={item}
              right={(props) => (
                <List.Icon
                  {...props}
                  icon={concluida ? "check-circle-outline" : "circle-outline"}
                />
              )}
            />
            <Divider />
          </>
        )}
      />
      <FAB onPress={() => setExibeModal(true)} icon="plus" style={styles.fab} />
      <Modal visible={exibeModal}>
        <View style={styles.modal}>
          <TextInput
            label="Nova Tarefa"
            onChangeText={(text) => setTarefa(text)}
          />
          <Button
            onPress={() => {
              if (tarefa) {
                setTarefas([...tarefas, tarefa]);
              }
              setTarefa("");
              setExibeModal(false);
            }}
          >
            Salvar
          </Button>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  modal: {
    backgroundColor: "white",
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
});

export default TaskScreen;
