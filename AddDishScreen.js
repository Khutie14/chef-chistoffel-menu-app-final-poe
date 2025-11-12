import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

export default function AddDishScreen({ navigation, menu, addDish, removeDish }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !description || !course || !price) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    addDish({ name, description, course, price });
    Alert.alert("Success", `${name} added to menu!`);
    setName("");
    setDescription("");
    setCourse("");
    setPrice("");
  };

  // Render right swipe action
  const renderRightActions = (index) => (
    <TouchableOpacity
      style={styles.swipeDelete}
      onPress={() => removeDish(index)}
    >
      <Text style={styles.deleteText}>Delete 🗑️</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../chef_logo.png")} style={styles.logo} />
        <Text style={styles.title}>Manage Menu Items</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Dish Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Description"
          style={styles.input}
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          placeholder="Course (Starter/Main/Dessert)"
          style={styles.input}
          value={course}
          onChangeText={setCourse}
        />
        <TextInput
          placeholder="Price (R)"
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#1E3A8A" }]}
          onPress={handleAdd}
        >
          <Text style={styles.buttonText}>Add Dish</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current Menu</Text>
        {menu.length === 0 ? (
          <Text style={styles.text}>No dishes yet.</Text>
        ) : (
          menu.map((dish, index) => (
            <Swipeable
              key={index}
              renderRightActions={() => renderRightActions(index)}
            >
              <View style={styles.menuItem}>
                <View>
                  <Text style={styles.menuText}>
                    {dish.name} ({dish.course}) - R{dish.price}
                  </Text>
                  <Text style={styles.menuDesc}>{dish.description}</Text>
                </View>
              </View>
            </Swipeable>
          ))
        )}
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#B91C1C" }]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E3A8A",
    paddingVertical: 20,
  },
  logo: { width: 60, height: 60, marginRight: 10 },
  title: { fontSize: 24, fontWeight: "bold", color: "#FFF" },
  form: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#1E3A8A",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#FFF",
  },
  section: { marginHorizontal: 20, marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#1E3A8A", marginVertical: 8 },
  text: { color: "#475569", fontSize: 16 },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  menuText: { fontSize: 16, fontWeight: "600" },
  menuDesc: { fontSize: 14, color: "#64748B" },
  swipeDelete: {
    backgroundColor: "#B91C1C",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 8,
    marginVertical: 5,
  },
  deleteText: { color: "#FFF", fontWeight: "bold" },
  button: {
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});