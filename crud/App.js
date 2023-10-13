import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";
import { useState } from "react";
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./components/config";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    //submit data
    addDoc(collection(db, "users"), {
      email: email,
      password: password,
    })
      .then(() => {
        console.log("data submitted");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleUpdate() {
    //submit data
    updateDoc(doc(db, "users", "LA"), {
      email: email,
      password: password,
    })
      .then(() => {
        console.log("data updated");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  function handleDelete() {
    //submit data
    deleteDoc(doc(db, "users", "LA"))
      .then(() => {
        console.log("data deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <View style={styles.container}>
      <Text>Firebase CRUD</Text>

      <TextInput
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        placeholder="Email"
        style={styles.textBoxes}
      ></TextInput>

      <TextInput
        value={password}
        onChangeText={(password) => {
          setPassword(password);
        }}
        placeholder="Password"
        style={styles.textBoxes}
      ></TextInput>
      <button onClick={handleSubmit}>Submit</button>

      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textBoxes: {
    width: "90%",
    fontSize: 18,
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
