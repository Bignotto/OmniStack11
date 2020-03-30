import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import styles from "./styles";

import logo from "../../assets/logo.png";

export default function Produtos() {
  const navigation = useNavigation();

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
      `mailto:somethingemail@gmail.com?subject=abcdefg&body=body`
    );
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=5519982287773&text="hahaha"`);
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
        <Text style={styles.productListText}>Thiago Bignotto</Text>

        <Text style={styles.productListTitle}>Produto:</Text>
        <Text style={styles.productListText}>Urna 020 sombreada.</Text>

        <Text style={styles.productListTitle}>Descrição:</Text>
        <Text style={styles.productListText}>
          Urna 020 sombreada com visor varão e renda.
        </Text>

        <Text style={styles.productListTitle}>Preço</Text>
        <Text style={styles.productListText}>R$ 199,90</Text>
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
