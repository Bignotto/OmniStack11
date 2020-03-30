import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

import styles from "./styles";

import logo from "../../assets/logo.png";
import { FlatList } from "react-native-gesture-handler";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();

  function navigateToDetalhes() {
    navigation.navigate("Detalhes");
  }

  async function loadProdutos() {
    const response = await api.get("produtos");
    setTotal(response.headers["x-total-count"]);
    setProdutos(response.data);
  }

  useEffect(() => {
    loadProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total}</Text> produtos.
        </Text>
      </View>
      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>Produtos disponíveis:</Text>

      <FlatList
        data={produtos}
        style={styles.productList}
        keyExtractor={i => String(i.id)}
        renderItem={({ item: produto }) => (
          <View style={styles.productList}>
            <View style={styles.productContainer}>
              <Text style={styles.productListTitle}>Produtor:</Text>
              <Text style={styles.productListText}>{produto.produtor_id}</Text>

              <Text style={styles.productListTitle}>Produto:</Text>
              <Text style={styles.productListText}>{produto.nome}</Text>

              <Text style={styles.productListTitle}>Preço</Text>
              <Text style={styles.productListText}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(produto.valor)}
              </Text>

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
