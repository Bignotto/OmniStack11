import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import styles from "./styles";

import logo from "../../assets/logo.png";

export default function Produtos() {
  const navigation = useNavigation();
  const route = useRoute();
  const produto = route.params.produto;

  const msgBody = `Gostaria de comprar o produto ${produto.nome}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    // await MailComposer.composeAsync({
    //   subject: "ProdutorRC: Quero comprar seu produto!",
    //   recipients: "bignotto@gmail.com",
    //   body: "Quero comprar o produto XXX"
    // });
    Linking.openURL(
      `mailto:${produto.email}?subject=ProdutorRC: Me interessei por seus produtos&body=${msgBody}`
    );
  }

  function sendWhatsApp() {
    Linking.openURL(
      `whatsapp://send?phone=${produto.telefone}&text="${msgBody}"`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <TouchableOpacity style={styles.detailsButton} onPress={navigateBack}>
          <Text style={styles.detailsButtonText}>
            <Feather name="arrow-left" size={16} color="#E02041" /> Voltar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productContainer}>
        <Text style={([styles.productListTitle], { marginTop: 0 })}>
          Produtor:
        </Text>
        <Text style={styles.productListText}>{produto.produtor_id}</Text>

        <Text style={styles.productListTitle}>Produto:</Text>
        <Text style={styles.productListText}>{produto.nome}</Text>

        <Text style={styles.productListTitle}>Descrição:</Text>
        <Text style={styles.productListText}>{produto.descricao}</Text>

        <Text style={styles.productListTitle}>Preço</Text>
        <Text style={styles.productListText}>{produto.valor}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.contactMessage}>
          Entre em contato com o produtor!
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionButtonText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionButtonText}>E-Mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
