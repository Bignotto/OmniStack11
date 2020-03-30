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
    alignItems: "center"
  },

  headerText: {
    fontSize: 15,
    color: "#737380"
  },

  headerTextBold: {
    fontWeight: "bold"
  },

  title: {
    fontSize: 30,
    marginBottom: 8,
    marginTop: 18,
    color: "#13131a",
    fontWeight: "bold"
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380"
  },

  productList: {
    marginTop: 6
  },

  productContainer: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16
  },

  productListTitle: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold"
  },

  productListText: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380"
  },

  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },

  detailsButtonText: {
    color: "#E02041",
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "flex-end"
  }
});
