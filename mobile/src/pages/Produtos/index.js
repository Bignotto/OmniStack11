import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import logo from "../../assets/logo.png";
import { FlatList } from "react-native-gesture-handler";

export default function Produtos() {
  const navigation = useNavigation();

  function navigateToDetalhes() {
    navigation.navigate("Detalhes");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0</Text> produtos.
        </Text>
      </View>
      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>Produtos disponíveis:</Text>

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        style={styles.productList}
        keyExtractor={i => String(i)}
        renderItem={() => (
          <View style={styles.productList}>
            <View style={styles.productContainer}>
              <Text style={styles.productListTitle}>Produtor:</Text>
              <Text style={styles.productListText}>Thiago Bignotto</Text>

              <Text style={styles.productListTitle}>Produto:</Text>
              <Text style={styles.productListText}>Urna 020 sombreada.</Text>

              <Text style={styles.productListTitle}>Preço</Text>
              <Text style={styles.productListText}>R$ 199,90</Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={navigateToDetalhes}
              >
                <Text style={styles.detailsButtonText}>
                  Detalhes{" "}
                  <Feather name="arrow-right" size={16} color="#E02041" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
