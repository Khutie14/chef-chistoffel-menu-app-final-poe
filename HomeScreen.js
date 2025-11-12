import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation, menu }) {
  const courses = ["Starter", "Main", "Dessert"];

  const courseAverages = courses.map((course) => {
    const items = menu.filter((dish) => dish.course === course);
    if (items.length === 0) return { course, average: 0 };
    const total = items.reduce((sum, dish) => sum + parseFloat(dish.price || 0), 0);
    return { course, average: total / items.length };
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../chef_logo.png")} style={styles.logo} />
        <Text style={styles.title}>Chef’s Full Menu</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🍽 Average Price per Course</Text>
        {courseAverages.map(({ course, average }) => (
          <Text key={course} style={styles.text}>
            {course}: R{average.toFixed(2)}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📋 Complete Menu</Text>
        {menu.length === 0 ? (
          <Text style={styles.text}>No dishes added yet.</Text>
        ) : (
          menu.map((dish, index) => (
            <View key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>
                {dish.name} ({dish.course}) - R{dish.price}
              </Text>
              <Text style={styles.description}>{dish.description}</Text>
            </View>
          ))
        )}
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#1E3A8A" }]}
        onPress={() => navigation.navigate("AddDish")}
      >
        <Text style={styles.buttonText}>Add or Remove Dishes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#B91C1C" }]}
        onPress={() => navigation.navigate("Filter")}
      >
        <Text style={styles.buttonText}>Filter by Course</Text>
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
  section: { marginVertical: 10, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#1E3A8A", marginBottom: 8 },
  text: { fontSize: 16, color: "#1E293B", marginVertical: 2 },
  menuItem: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    borderColor: "#E2E8F0",
    borderWidth: 1,
  },
  menuText: { fontSize: 16, fontWeight: "600", color: "#111827" },
  description: { fontSize: 14, color: "#475569" },
  button: {
    padding: 14,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});