import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 48
  },

  productContainer: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16
  },

  productListTitle: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
    marginTop: 24
  },

  productListText: {
    marginTop: 8,
    fontSize: 15,
    color: "#737380"
  },

  contactBox: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16
  },

  contactMessage: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold"
  },

  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  action: {
    backgroundColor: "#E02041",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center"
  },
  actionButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15
  }
});
