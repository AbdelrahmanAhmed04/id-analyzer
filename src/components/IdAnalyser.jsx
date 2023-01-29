import React from "react";

function idAnalyser(props) {
  if (
    (props.id[0] != 2 && props.id[0] != 3) ||
    props.id.length != 14 ||
    props.id.substr(7, 2) == "20" ||
    props.id.substr(7, 2) == "30" ||
    (props.id.substr(7, 2) > "4" && props.id.substr(7, 2) < "11") ||
    (props.id.substr(7, 2) > "35" && props.id.substr(7, 2) < "88") ||
    props.id.substr(7, 2) > "88" ||
    props.id.substr(3, 2) > "12" ||
    props.id.substr(3, 2) < "1" ||
    props.id.substr(5, 2) > "31" ||
    props.id.substr(5, 2) < "1"
  ) {
    document.getElementById("id").value = "";
    return window.alert("please enter correct id");
  }

  var birthYear = props.id[0] === "3" ? "20" : "19";
  var birthDate =
    birthYear +
    props.id.substr(1, 2) +
    " /" +
    props.id.substr(3, 2) +
    " /" +
    props.id.substr(5, 2);
  var sex = props.id[12] % 2 === 0 ? "female" : "male";
  var governorate;
  if (props.id.substr(7, 2) === "01") {
    governorate = "Cairo";
  }
  if (props.id.substr(7, 2) === "02") {
    governorate = "Alexandria";
  }
  if (props.id.substr(7, 2) === "03") {
    governorate = "Port Said";
  }
  if (props.id.substr(7, 2) === "04") {
    governorate = "Al Sues";
  }
  if (props.id.substr(7, 2) === "11") {
    governorate = "Domiat";
  }
  if (props.id.substr(7, 2) === "12") {
    governorate = "Al Dakahlia";
  }
  if (props.id.substr(7, 2) === "13") {
    governorate = "Al Sharkia";
  }
  if (props.id.substr(7, 2) === "14") {
    governorate = "Al Qalyubia";
  }
  if (props.id.substr(7, 2) === "15") {
    governorate = "Kafr Elsheikh";
  }
  if (props.id.substr(7, 2) === "16") {
    governorate = "Al Gharbia";
  }
  if (props.id.substr(7, 2) === "17") {
    governorate = "Al Menofia";
  }
  if (props.id.substr(7, 2) === "18") {
    governorate = "Al Behaira";
  }
  if (props.id.substr(7, 2) === "19") {
    governorate = "Al Ismailia";
  }
  if (props.id.substr(7, 2) === "21") {
    governorate = "Al Giza";
  }
  if (props.id.substr(7, 2) === "22") {
    governorate = "Beni Suef";
  }
  if (props.id.substr(7, 2) === "23") {
    governorate = "Al Fayoum";
  }
  if (props.id.substr(7, 2) === "24") {
    governorate = "Al Minya";
  }
  if (props.id.substr(7, 2) === "25") {
    governorate = "Asyut";
  }
  if (props.id.substr(7, 2) === "26") {
    governorate = "Souhag";
  }
  if (props.id.substr(7, 2) === "27") {
    governorate = "Qena";
  }
  if (props.id.substr(7, 2) === "28") {
    governorate = "Aswan";
  }
  if (props.id.substr(7, 2) === "29") {
    governorate = "Loxor";
  }
  if (props.id.substr(7, 2) === "31") {
    governorate = "Red Sea";
  }
  if (props.id.substr(7, 2) === "32") {
    governorate = "New Valley";
  }
  if (props.id.substr(7, 2) === "33") {
    governorate = "Matrouh";
  }
  if (props.id.substr(7, 2) === "34") {
    governorate = "North Sinai";
  }
  if (props.id.substr(7, 2) === "35") {
    governorate = "South Sinai";
  }
  if (props.id.substr(7, 2) === "88") {
    governorate = "Out of the republic";
  }

  return (
    <div className="w-4/12 flex flex-col gap-5">
      <p className="text-base">Your Birth Day is {birthDate}</p>
      <p className="text-base">Your Sex is {sex}</p>
      <p className="text-base">Your Were born in {governorate}</p>
    </div>
  );
}

export default React.memo(idAnalyser);
