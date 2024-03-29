import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;
const styles = {
  scrollViewStyle: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: 10,
    paddingTop: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "10%",
    paddingLeft: 10,
    paddingTop: 1,
    width: deviceWidth,
  },
  header_columTopUp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    //height: "10%",
    paddingLeft: 10,
    paddingTop: 1,
    width: deviceWidth,
  },

  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    padding: 5,
    color: "white",
  },
  textTitle1: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    padding: 10,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 25,
  },

  textTitle_topUp: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    padding: 10,
    marginLeft: 1,
    marginRight: 1,
    marginTop: -1,
  },

  textTitle_recharge: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    padding: 10,
    marginLeft: 85,
    marginRight: 1,
    marginTop: -1,
  },
  boxSpacing: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "10%",
    paddingLeft: 15,
    paddingTop: 50,
    padding: 70,
    width: deviceWidth,
  },
  rechargeBoxView: {
    width: deviceWidth / 3.5,
    height: deviceHeight / 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    padding: 1,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 25,
    backgroundColor: "#6D55FE",
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
  payBoxView: {
    width: deviceWidth / 3,
    height: deviceHeight / 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 1,
    marginTop: 5,
    marginLeft: 120,
    marginRight: 1,

    backgroundColor: "#6D55FE",
  },
  descText: {
    fontSize: 16,
    color: "black",
    padding: 5,
    marginLeft: 6,
    marginRight: 1,
  },
  descText1: {
    fontSize: 16,
    color: "black",
    padding: 10,
    marginLeft: 150,
    marginRight: 1,
  },

  descText_totalPayment: {
    fontSize: 16,
    color: "black",
    padding: 5,
    marginLeft: -2,
    marginRight: 1,
    marginTop: -1,
  },

  highlight_totalPrice: {
    fontWeight: "700",
    color: "#6D55FE",
    padding: 10,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 25,
    fontSize: 32,
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
  rechargeText: {
    color: "white",
    fontSize: 24,
  },
};
export default styles;
