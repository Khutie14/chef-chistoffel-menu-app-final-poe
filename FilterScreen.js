import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

export default function FilterScreen({ navigation, menu }) {
  const courses = ["Starter", "Main", "Dessert"];
  const [selectedCourse, setSelectedCourse] = useState("Starter");

  const filteredMenu = menu.filter(dish => dish.course === selectedCourse);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Filter Dishes by Course</Text>

      <View style={styles.buttonsContainer}>
        {courses.map(course => (
          <TouchableOpacity
            key={course}
            style={[
              styles.courseButton,
              { backgroundColor: selectedCourse === course ? "#1E3A8A" : "#E2E8F0" }
            ]}
            onPress={() => setSelectedCourse(course)}
          >
            <Text style={[
              styles.buttonText,
              { color: selectedCourse === course ? "#FFF" : "#111827" }
            ]}>
              {course}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        {filteredMenu.length === 0 ? (
          <Text style={styles.text}>No dishes for {selectedCourse} yet.</Text>
        ) : (
          filteredMenu.map((dish, index) => (
            <View key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>{dish.name} - R{dish.price}</Text>
              <Text style={styles.description}>{dish.description}</Text>
            </View>
          ))
        )}
      </View>

      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: "#B91C1C" }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F8FAFC" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#1E3A8A" },
  buttonsContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  courseButton: { padding: 12, borderRadius: 8, flex: 1, marginHorizontal: 5, alignItems: "center" },
  buttonText: { fontSize: 16, fontWeight: "bold" },
  section: { marginTop: 10 },
  menuItem: { backgroundColor: "#FFF", padding: 10, borderRadius: 8, marginVertical: 5, borderWidth: 1, borderColor: "#E2E8F0" },
  menuText: { fontSize: 16, fontWeight: "600" },
  description: { fontSize: 14, color: "#475569" },
  text: { fontSize: 16, color: "#111827" },
  backButton: { padding: 14, borderRadius: 10, alignItems: "center", marginTop: 20 },
});