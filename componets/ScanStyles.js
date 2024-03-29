import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;
const styles = {
  scrollViewStyle: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  header: {
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    //height: "10%",
    paddingRight: 10,
    paddingTop: 10,
    //width: deviceWidth,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    padding: 5,
    color: "black",
  },
  textTitle1: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    padding: 5,
    color: "#6D55FE",
  },
  cardView: {
    width: deviceWidth - 32,
    height: deviceHeight - 32,
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    padding: 25,
    marginLeft: 5,
    marginRight: 5,
    marginTop: "10%",
    backgroundColor: "white",
  },
  scanCardView: {
    width: deviceWidth,
    height: deviceHeight / 2.2,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    padding: 1,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
    overflow: "hidden",
    backgroundColor: "white",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonScan: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#258ce3",
    paddingTop: 5,
    paddingRight: 25,
    paddingBottom: 5,
    paddingLeft: 25,
    marginTop: 20,
  },
  buttonScan2: {
    marginLeft: deviceWidth / 2 - 50,
    width: 100,
    height: 100,
  },
  descText: {
    padding: 5,
    textAlign: "center",
    fontSize: 16,
    color: "#B9B9B9",
  },
  highlight: {
    fontWeight: "700",
  },
  centerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    padding: 32,
    color: "white",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  bottomContent: {
    width: deviceWidth,
    height: 120,
  },
  buttonTouchable: {
    fontSize: 21,
    backgroundColor: "white",
    marginTop: 32,
    width: deviceWidth - 62,
    justifyContent: "center",
    alignItems: "center",
    height: 44,
  },
  buttonTextStyle: {
    color: "black",
    fontWeight: "bold",
  },
};
export default styles;
