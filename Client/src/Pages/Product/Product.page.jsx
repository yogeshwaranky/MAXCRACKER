import React, { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/img/logo.png"; // Your detailed logo
const Product = ({ cart, setCart }) => {
  const CrackersList = [
    
      {
          "id": 5,
          "productCode": "1",
          "productName": "2 3/4 \" Kuruvi",
          "productContent": "PKT",
          "price": 40.0,
          "discount": 32.0,
          "finalPrice": 8.0,
          "productType": "soundcrackers"
      },
      {
          "id": 39,
          "productCode": "49",
          "productName": "Queen Laptop Matches  (10 In 1)",
          "productContent": "BOX",
          "price": 750.0,
          "discount": 600.0,
          "finalPrice": 150.0,
          "productType": "novelfireworks"
      },
      {
          "id": 7,
          "productCode": "4",
          "productName": "4\" Lakshmi Super Deluxe 10 Ply",
          "productContent": "PKT",
          "price": 150.0,
          "discount": 120.0,
          "finalPrice": 30.0,
          "productType": "soundcrackers"
      },
      {
          "id": 8,
          "productCode": "5",
          "productName": "4\" Gold Lakshmi 12 Ply",
          "productContent": "PKT",
          "price": 175.0,
          "discount": 140.0,
          "finalPrice": 35.0,
          "productType": "soundcrackers"
      },
      {
          "id": 11,
          "productCode": "7",
          "productName": "Flower Pots Big",
          "productContent": "BOX",
          "price": 300.0,
          "discount": 240.0,
          "finalPrice": 60.0,
          "productType": " FLOWERPOTS"
      },
      {
          "id": 12,
          "productCode": "8",
          "productName": "Flower Pots Special",
          "productContent": "BOX",
          "price": 425.0,
          "discount": 340.0,
          "finalPrice": 85.0,
          "productType": "FLOWERPOTS"
      },
      {
          "id": 13,
          "productCode": "9",
          "productName": "Flower Pots Ashoka",
          "productContent": "BOX",
          "price": 475.0,
          "discount": 380.0,
          "finalPrice": 95.0,
          "productType": "FLOWERPOTS"
      },
      {
          "id": 14,
          "productCode": "11",
          "productName": "Colour Koti",
          "productContent": "BOX",
          "price": 895.0,
          "discount": 716.0,
          "finalPrice": 179.0,
          "productType": "FLOWERPOTS"
      },
      {
          "id": 16,
          "productCode": "New 1",
          "productName": "Tricolour Mini 3 Pcs",
          "productContent": "BOX",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "FLOWERPOTS"
      },
      {
          "id": 18,
          "productCode": "15",
          "productName": "Ground Chakkar Special (10 Pcs )",
          "productContent": "BOX",
          "price": 400.0,
          "discount": 320.0,
          "finalPrice": 80.0,
          "productType": "CHAKKARS"
      },
      {
          "id": 20,
          "productCode": "18",
          "productName": "Spinner Wheel  Plastic (10 Pcs )",
          "productContent": "BOX",
          "price": 650.0,
          "discount": 520.0,
          "finalPrice": 130.0,
          "productType": "CHAKKARS"
      },
      {
          "id": 21,
          "productCode": "New 173",
          "productName": "Wire Chakkar ( 10 Pcs )",
          "productContent": "BOX",
          "price": 850.0,
          "discount": 680.0,
          "finalPrice": 170.0,
          "productType": "CHAKKARS"
      },
      {
          "id": 22,
          "productCode": "19",
          "productName": "4*4 Lotus Wheel",
          "productContent": "BOX",
          "price": 750.0,
          "discount": 600.0,
          "finalPrice": 150.0,
          "productType": "CHAKKARS"
      },
      {
          "id": 25,
          "productCode": "31",
          "productName": "10 Cm Crackling Sparklers",
          "productContent": "BOX",
          "price": 85.0,
          "discount": 68.0,
          "finalPrice": 17.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 26,
          "productCode": "34",
          "productName": "12 Cm Electric Sparklers",
          "productContent": "BOX",
          "price": 110.0,
          "discount": 88.0,
          "finalPrice": 22.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 27,
          "productCode": "35",
          "productName": "12 Cm Crackling Sparklers",
          "productContent": "BOX",
          "price": 115.0,
          "discount": 92.0,
          "finalPrice": 23.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 29,
          "productCode": "39",
          "productName": "15 Cm Crackling Sparklers",
          "productContent": "BOX",
          "price": 195.0,
          "discount": 156.0,
          "finalPrice": 39.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 30,
          "productCode": "40",
          "productName": "15 Cm Green Sparklers",
          "productContent": "BOX",
          "price": 210.0,
          "discount": 168.0,
          "finalPrice": 42.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 31,
          "productCode": "41",
          "productName": "15 Cm Red Sparklers",
          "productContent": "BOX",
          "price": 225.0,
          "discount": 180.0,
          "finalPrice": 45.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 33,
          "productCode": "43",
          "productName": "30 Cm Crackling sparklers",
          "productContent": "BOX",
          "price": 195.0,
          "discount": 156.0,
          "finalPrice": 39.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 34,
          "productCode": "44",
          "productName": "30 Cm Green Sparklers",
          "productContent": "BOX",
          "price": 210.0,
          "discount": 168.0,
          "finalPrice": 42.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 35,
          "productCode": "45",
          "productName": "30 Cm Red Sparklers",
          "productContent": "BOX",
          "price": 225.0,
          "discount": 180.0,
          "finalPrice": 45.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 37,
          "productCode": "47",
          "productName": "50 Cm Crackling Sparklers ( 5 Pcs )",
          "productContent": "BOX",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 40,
          "productCode": "48",
          "productName": "Big Boss Laptop Matches ( 10 In 1 )",
          "productContent": "BOX",
          "price": 1100.0,
          "discount": 880.0,
          "finalPrice": 220.0,
          "productType": "novelfireworks"
      },
      {
          "id": 42,
          "productCode": "20",
          "productName": "1 1/2 \" Twinkling Star",
          "productContent": "BOX",
          "price": 125.0,
          "discount": 100.0,
          "finalPrice": 25.0,
          "productType": "CONFETTI"
      },
      {
          "id": 43,
          "productCode": "21",
          "productName": "4 \" Twinkling Star",
          "productContent": "BOX",
          "price": 300.0,
          "discount": 240.0,
          "finalPrice": 60.0,
          "productType": "CONFETTI"
      },
      {
          "id": 46,
          "productCode": "New 167",
          "productName": "Electric stone",
          "productContent": "Box",
          "price": 50.0,
          "discount": 40.0,
          "finalPrice": 10.0,
          "productType": "kidsspecial"
      },
      {
          "id": 47,
          "productCode": "25",
          "productName": "Kit Kat",
          "productContent": "BOX",
          "price": 150.0,
          "discount": 120.0,
          "finalPrice": 30.0,
          "productType": "kidsspecial"
      },
      {
          "id": 48,
          "productCode": "New 169",
          "productName": "Magic Pops",
          "productContent": "Box",
          "price": 50.0,
          "discount": 40.0,
          "finalPrice": 10.0,
          "productType": "kidsspecial"
      },
      {
          "id": 50,
          "productCode": "New 12",
          "productName": "Ayyan Ring Caps",
          "productContent": "1PCE",
          "price": 50.0,
          "discount": 40.0,
          "finalPrice": 10.0,
          "productType": "kidsspecial"
      },
      {
          "id": 51,
          "productCode": "New 8",
          "productName": "Ring Gun",
          "productContent": "1 Pce",
          "price": 250.0,
          "discount": 200.0,
          "finalPrice": 50.0,
          "productType": "kidsspecial"
      },
      {
          "id": 55,
          "productCode": "New 1",
          "productName": "Smoky stick - 10 Pcs",
          "productContent": "BOX",
          "price": 300.0,
          "discount": 240.0,
          "finalPrice": 60.0,
          "productType": "novelfireworks"
      },
      {
          "id": 58,
          "productCode": "74",
          "productName": "Helicopter ( 5pcs )",
          "productContent": "BOX",
          "price": 425.0,
          "discount": 340.0,
          "finalPrice": 85.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 59,
          "productCode": "71",
          "productName": "Siren ( 5 Pcs )",
          "productContent": "BOX",
          "price": 700.0,
          "discount": 560.0,
          "finalPrice": 140.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 61,
          "productCode": "95",
          "productName": "Vennila / Falooda / Jigarthanda",
          "productContent": "1PCE",
          "price": 475.0,
          "discount": 380.0,
          "finalPrice": 95.0,
          "productType": "novelfireworks"
      },
      {
          "id": 63,
          "productCode": "68",
          "productName": "Whistiling Rocket",
          "productContent": "BOX",
          "price": 625.0,
          "discount": 500.0,
          "finalPrice": 125.0,
          "productType": "rocket"
      },
      {
          "id": 64,
          "productCode": "100",
          "productName": "Water Falls Mega",
          "productContent": "BOX",
          "price": 750.0,
          "discount": 600.0,
          "finalPrice": 150.0,
          "productType": "kidsspecial"
      },
      {
          "id": 65,
          "productCode": "New 0101",
          "productName": "Old Is Gold",
          "productContent": "1 Box",
          "price": 750.0,
          "discount": 600.0,
          "finalPrice": 150.0,
          "productType": "kidsspecial"
      },
      {
          "id": 67,
          "productCode": "New 05",
          "productName": "Lollipop",
          "productContent": "1 Box",
          "price": 1100.0,
          "discount": 880.0,
          "finalPrice": 220.0,
          "productType": "kidsspecial"
      },
      {
          "id": 68,
          "productCode": "New 175",
          "productName": "King Star Mega Crackling Fountain / 3",
          "productContent": "Pcs    Box",
          "price": 1100.0,
          "discount": 880.0,
          "finalPrice": 220.0,
          "productType": "kidsspecial"
      },
      {
          "id": 70,
          "productCode": "87",
          "productName": "Joly Ranger / 5 Pcs",
          "productContent": "1PCE",
          "price": 750.0,
          "discount": 600.0,
          "finalPrice": 150.0,
          "productType": "kidsspecial"
      },
      {
          "id": 72,
          "productCode": "204",
          "productName": "Green Flash ( 5 Pcs )",
          "productContent": "Box",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "kidsspecial"
      },
      {
          "id": 73,
          "productCode": "201",
          "productName": "Gold Coin ( 5 Pcs )",
          "productContent": "Box",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "kidsspecial"
      },
      {
          "id": 75,
          "productCode": "New 200",
          "productName": "Little Fish ( 5 Pcs )",
          "productContent": "Box",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "kidsspecial"
      },
      {
          "id": 76,
          "productCode": "New 1",
          "productName": "Lava & Redo & undo ( 3 Pcs )",
          "productContent": "Box",
          "price": 850.0,
          "discount": 680.0,
          "finalPrice": 170.0,
          "productType": "kidsspecial"
      },
      {
          "id": 79,
          "productCode": "New 1",
          "productName": "Star Drum",
          "productContent": "Box",
          "price": 500.0,
          "discount": 400.0,
          "finalPrice": 100.0,
          "productType": "New Arrival"
      },
      {
          "id": 80,
          "productCode": "88",
          "productName": "5 Girls /  5 Pcs",
          "productContent": "BOX",
          "price": 1225.0,
          "discount": 980.0,
          "finalPrice": 245.0,
          "productType": "New Arrival"
      },
      {
          "id": 81,
          "productCode": "New 7",
          "productName": "Sword",
          "productContent": "1 Pce",
          "price": 600.0,
          "discount": 480.0,
          "finalPrice": 120.0,
          "productType": "New Arrival"
      },
      {
          "id": 83,
          "productCode": "New 1",
          "productName": "Motu Patlu / 2 Pcs",
          "productContent": "Box",
          "price": 1100.0,
          "discount": 880.0,
          "finalPrice": 220.0,
          "productType": "New Arrival"
      },
      {
          "id": 84,
          "productCode": "179",
          "productName": "MRF Bat & Ball ( Fountain Bat & Colour",
          "productContent": "smokBeoBxall)",
          "price": 1000.0,
          "discount": 800.0,
          "finalPrice": 200.0,
          "productType": "New Arrival"
      },
      {
          "id": 85,
          "productCode": "New 1",
          "productName": "Emu Egg",
          "productContent": "Box",
          "price": 900.0,
          "discount": 720.0,
          "finalPrice": 180.0,
          "productType": "New Arrival"
      },
      {
          "id": 9,
          "productCode": "New 1",
          "productName": "Baahubali Mega  (20 Ply) M/C Fuse",
          "productContent": "PKT",
          "price": 275.0,
          "discount": 220.0,
          "finalPrice": 55.0,
          "productType": "soundcrackers"
      },
      {
          "id": 15,
          "productCode": "12",
          "productName": "Tri Colour Mega ( 5 Pcs )",
          "productContent": "BOX",
          "price": 1245.0,
          "discount": 996.0,
          "finalPrice": 249.0,
          "productType": "FLOWERPOTS"
      },
      {
          "id": 19,
          "productCode": "16",
          "productName": "Ground Chakkar Deluxe (10 Pcs ) / kalis",
          "productContent": "BOX",
          "price": 625.0,
          "discount": 500.0,
          "finalPrice": 125.0,
          "productType": "CHAKKARS"
      },
      {
          "id": 24,
          "productCode": "30",
          "productName": "10 Cm Electric Sparklers",
          "productContent": "BOX",
          "price": 75.0,
          "discount": 60.0,
          "finalPrice": 15.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 88,
          "productCode": "New 1",
          "productName": "Magic sound ( Digital wala)",
          "productContent": "Box",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "New Arrival"
      },
      {
          "id": 89,
          "productCode": "New 1",
          "productName": "Gold Blake",
          "productContent": "Box",
          "price": 750.0,
          "discount": 600.0,
          "finalPrice": 150.0,
          "productType": "New Arrival"
      },
      {
          "id": 93,
          "productCode": "99",
          "productName": "Pop corn - ( 2 Pcs )",
          "productContent": "BOX",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "kidsspecial"
      },
      {
          "id": 94,
          "productCode": "97",
          "productName": "Snow Fall - ( 2 Pcs )",
          "productContent": "BOX",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "kidsspecial"
      },
      {
          "id": 95,
          "productCode": "98",
          "productName": "1000k Sizzling  - ( 2 Pcs )",
          "productContent": "BOX",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "kidsspecial"
      },
      {
          "id": 97,
          "productCode": "90",
          "productName": "Drum Stick - ( 2 Pcs )",
          "productContent": "BOX",
          "price": 1000.0,
          "discount": 800.0,
          "finalPrice": 200.0,
          "productType": "kidsspecial"
      },
      {
          "id": 98,
          "productCode": "91",
          "productName": "Choconz - ( 2 Pcs )",
          "productContent": "BOX",
          "price": 1000.0,
          "discount": 800.0,
          "finalPrice": 200.0,
          "productType": "kidsspecial"
      },
      {
          "id": 101,
          "productCode": "New 152",
          "productName": "Peacock ( 3 Ways )",
          "productContent": "1PCE",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "kidsspecial"
      },
      {
          "id": 102,
          "productCode": "New 166",
          "productName": "Bada Peacock",
          "productContent": "1 pce",
          "price": 2000.0,
          "discount": 1600.0,
          "finalPrice": 400.0,
          "productType": "kidsspecial"
      },
      {
          "id": 105,
          "productCode": "75",
          "productName": "Tweet",
          "productContent": "BOX",
          "price": 700.0,
          "discount": 560.0,
          "finalPrice": 140.0,
          "productType": "kidsspecial"
      },
      {
          "id": 106,
          "productCode": "New 1",
          "productName": "6000 watts",
          "productContent": "Box",
          "price": 700.0,
          "discount": 560.0,
          "finalPrice": 140.0,
          "productType": "kidsspecial"
      },
      {
          "id": 107,
          "productCode": "New 1",
          "productName": "Poppings",
          "productContent": "Box",
          "price": 700.0,
          "discount": 560.0,
          "finalPrice": 140.0,
          "productType": "kidsspecial"
      },
      {
          "id": 110,
          "productCode": "62",
          "productName": "1/4 Kg Bomb",
          "productContent": "1PCE",
          "price": 250.0,
          "discount": 200.0,
          "finalPrice": 50.0,
          "productType": "soundcrackers"
      },
      {
          "id": 111,
          "productCode": "63",
          "productName": "1/2 Kg Bomb",
          "productContent": "1PCE",
          "price": 500.0,
          "discount": 400.0,
          "finalPrice": 100.0,
          "productType": "soundcrackers"
      },
      {
          "id": 112,
          "productCode": "60",
          "productName": "Classic Bomb",
          "productContent": "BOX",
          "price": 550.0,
          "discount": 440.0,
          "finalPrice": 110.0,
          "productType": "soundcrackers"
      },
      {
          "id": 115,
          "productCode": "110",
          "productName": "1\" Chotta Fancy",
          "productContent": "1PCE",
          "price": 175.0,
          "discount": 140.0,
          "finalPrice": 35.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 116,
          "productCode": "New 171",
          "productName": "Penta Magic - 5 Pcs / Mother's",
          "productContent": "Box",
          "price": 750.0,
          "discount": 600.0,
          "finalPrice": 150.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 118,
          "productCode": "106",
          "productName": "Pentagon - 5 Pcs / Pandyan's",
          "productContent": "BOX",
          "price": 1000.0,
          "discount": 800.0,
          "finalPrice": 200.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 119,
          "productCode": "108",
          "productName": "White House - 5 Pcs / Pandyan's",
          "productContent": "BOX",
          "price": 1000.0,
          "discount": 800.0,
          "finalPrice": 200.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 122,
          "productCode": "New 1",
          "productName": "2\" Joy - ( 3 Pcs ) - Fancy / Magizh",
          "productContent": "Box",
          "price": 1375.0,
          "discount": 1100.0,
          "finalPrice": 275.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 124,
          "productCode": "122",
          "productName": "4\" Golden Attack",
          "productContent": "1PCE",
          "price": 1200.0,
          "discount": 960.0,
          "finalPrice": 240.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 125,
          "productCode": "123",
          "productName": "4\" Hot ( Red & Green )",
          "productContent": "1PCE",
          "price": 1200.0,
          "discount": 960.0,
          "finalPrice": 240.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 127,
          "productCode": "126",
          "productName": "4\" Green Shower",
          "productContent": "1PCE",
          "price": 1200.0,
          "discount": 960.0,
          "finalPrice": 240.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 129,
          "productCode": "127",
          "productName": "4\" Silver Line",
          "productContent": "1PCE",
          "price": 1200.0,
          "discount": 960.0,
          "finalPrice": 240.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 131,
          "productCode": "129",
          "productName": "4\" Nayagara Falls",
          "productContent": "1PCE",
          "price": 1300.0,
          "discount": 1040.0,
          "finalPrice": 260.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 133,
          "productCode": "New168",
          "productName": "4\" King Fisher",
          "productContent": "1Pce",
          "price": 1300.0,
          "discount": 1040.0,
          "finalPrice": 260.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 136,
          "productCode": "New 160",
          "productName": "4.5\" Action Jackion  ( Red & Blue)",
          "productContent": "1 pce",
          "price": 2000.0,
          "discount": 1600.0,
          "finalPrice": 400.0,
          "productType": "speacialshots"
      },
      {
          "id": 137,
          "productCode": "New 161",
          "productName": "4.5\" Spicejet ( White & Red )",
          "productContent": "1 pce",
          "price": 2000.0,
          "discount": 1600.0,
          "finalPrice": 400.0,
          "productType": "speacialshots"
      },
      {
          "id": 139,
          "productCode": "New 163",
          "productName": "4.5\" Action Reply ( Yellow & White)",
          "productContent": "1 pce",
          "price": 2000.0,
          "discount": 1600.0,
          "finalPrice": 400.0,
          "productType": "speacialshots"
      },
      {
          "id": 140,
          "productCode": "195",
          "productName": "4.5\" Tango ( Red & white )",
          "productContent": "1 Pce",
          "price": 2000.0,
          "discount": 1600.0,
          "finalPrice": 400.0,
          "productType": "speacialshots"
      },
      {
          "id": 143,
          "productCode": "New 148",
          "productName": "4.5\" Nikon ( 2 Pcs )",
          "productContent": "Box",
          "price": 3750.0,
          "discount": 3000.0,
          "finalPrice": 750.0,
          "productType": "displaycomets"
      },
      {
          "id": 144,
          "productCode": "New 149",
          "productName": "4.5\" Walmart (2 Pcs)",
          "productContent": "Box",
          "price": 3750.0,
          "discount": 3000.0,
          "finalPrice": 750.0,
          "productType": "displaycomets"
      },
      {
          "id": 146,
          "productCode": "New 151",
          "productName": "4.5\" Amazon (2 Pcs)",
          "productContent": "Box",
          "price": 3750.0,
          "discount": 3000.0,
          "finalPrice": 750.0,
          "productType": "displaycomets"
      },
      {
          "id": 147,
          "productCode": "196",
          "productName": "4.5\" Sony ( 2 PCS )",
          "productContent": "Box",
          "price": 3750.0,
          "discount": 3000.0,
          "finalPrice": 750.0,
          "productType": "displaycomets"
      },
      {
          "id": 150,
          "productCode": "138",
          "productName": "Oyalo 120 Shots",
          "productContent": "1BOX",
          "price": 8000.0,
          "discount": 6400.0,
          "finalPrice": 1600.0,
          "productType": "cakes"
      },
      {
          "id": 151,
          "productCode": "139",
          "productName": "City Mall 240 Shot",
          "productContent": "1BOX",
          "price": 15000.0,
          "discount": 12000.0,
          "finalPrice": 3000.0,
          "productType": "cakes"
      },
      {
          "id": 154,
          "productCode": "183",
          "productName": "60 Shot Multicolour with Crackling",
          "productContent": "Box",
          "price": 3800.0,
          "discount": 3040.0,
          "finalPrice": 760.0,
          "productType": "cakes"
      },
      {
          "id": 155,
          "productCode": "184",
          "productName": "120 Shot Multicolour",
          "productContent": "Box",
          "price": 7100.0,
          "discount": 5680.0,
          "finalPrice": 1420.0,
          "productType": "cakes"
      },
      {
          "id": 158,
          "productCode": "New 146",
          "productName": "Sky Damakka (10×10=100 shots)/ Blue Star",
          "productContent": "1PCE",
          "price": 17500.0,
          "discount": 14000.0,
          "finalPrice": 3500.0,
          "productType": "cakes"
      },
      {
          "id": 159,
          "productCode": "New 1",
          "productName": "3 1/2 \" inch  -  16 Shots Setout",
          "productContent": "Box",
          "price": 19000.0,
          "discount": 15200.0,
          "finalPrice": 3800.0,
          "productType": "cakes"
      },
      {
          "id": 6,
          "productCode": "2",
          "productName": "3 1/2\" Lakshmi",
          "productContent": "PKT",
          "price": 65.0,
          "discount": 52.0,
          "finalPrice": 13.0,
          "productType": "soundcrackers"
      },
      {
          "id": 28,
          "productCode": "38",
          "productName": "15 Cm Electric Sparklers",
          "productContent": "BOX",
          "price": 185.0,
          "discount": 148.0,
          "finalPrice": 37.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 32,
          "productCode": "42",
          "productName": "30 Cm Electric Sparklers (UV)",
          "productContent": "BOX",
          "price": 185.0,
          "discount": 148.0,
          "finalPrice": 37.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 36,
          "productCode": "46",
          "productName": "50 Cm Electric Sparklers ( 5 Pcs )",
          "productContent": "BOX",
          "price": 725.0,
          "discount": 580.0,
          "finalPrice": 145.0,
          "productType": "SPARKLERS"
      },
      {
          "id": 44,
          "productCode": "New 1",
          "productName": "Rope Colour - 4 Pcs /  (Pink Colour)",
          "productContent": "Box",
          "price": 750.0,
          "discount": 600.0,
          "finalPrice": 150.0,
          "productType": "novelfireworks"
      },
      {
          "id": 49,
          "productCode": "24",
          "productName": "Photo Flash",
          "productContent": "BOX",
          "price": 300.0,
          "discount": 240.0,
          "finalPrice": 60.0,
          "productType": "kidsspecial"
      },
      {
          "id": 53,
          "productCode": "28",
          "productName": "Red Bijili - 100 Pcs / ASN",
          "productContent": "PKT",
          "price": 145.0,
          "discount": 116.0,
          "finalPrice": 29.0,
          "productType": "novelfireworks"
      },
      {
          "id": 56,
          "productCode": "50",
          "productName": "Golden stars handle ( 3 Pcs )",
          "productContent": "BOX",
          "price": 725.0,
          "discount": 580.0,
          "finalPrice": 145.0,
          "productType": "novelfireworks"
      },
      {
          "id": 62,
          "productCode": "New 1",
          "productName": "Rim Zim ( Laddu ) 5 Pcs",
          "productContent": "BOX",
          "price": 1000.0,
          "discount": 800.0,
          "finalPrice": 200.0,
          "productType": "novelfireworks"
      },
      {
          "id": 66,
          "productCode": "22",
          "productName": "Top Gun( 5 Pcs )",
          "productContent": "BOX",
          "price": 1000.0,
          "discount": 800.0,
          "finalPrice": 200.0,
          "productType": "novelfireworks "
      },
      {
          "id": 71,
          "productCode": "76",
          "productName": "Red Bloom ( 5 Pcs )",
          "productContent": "BOX",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "kidsspecial"
      },
      {
          "id": 74,
          "productCode": "203",
          "productName": "Silver Moon (5 Pcs )",
          "productContent": "Box",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "kidsspecial"
      },
      {
          "id": 77,
          "productCode": "New 1",
          "productName": "Lava 1 Pcs",
          "productContent": "Box",
          "price": 250.0,
          "discount": 200.0,
          "finalPrice": 50.0,
          "productType": "kidsspecial"
      },
      {
          "id": 82,
          "productCode": "65",
          "productName": "Money Heist / 2 Pcs / Currency Note",
          "productContent": "BOX",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "New Arrival"
      },
      {
          "id": 86,
          "productCode": "New 178",
          "productName": "Doubles ( Fountain with shot)",
          "productContent": "Box",
          "price": 900.0,
          "discount": 720.0,
          "finalPrice": 180.0,
          "productType": "New Arrival"
      },
      {
          "id": 87,
          "productCode": "New 1",
          "productName": "Classic Three - ( 3 Step Function 1)",
          "productContent": "Box",
          "price": 1100.0,
          "discount": 880.0,
          "finalPrice": 220.0,
          "productType": "New Arrival"
      },
      {
          "id": 92,
          "productCode": "101",
          "productName": "Tings - ( 2 Pcs )",
          "productContent": "BOX",
          "price": 800.0,
          "discount": 640.0,
          "finalPrice": 160.0,
          "productType": "kidsspecial"
      },
      {
          "id": 96,
          "productCode": "89",
          "productName": "Black Forest - ( 2 Pcs )",
          "productContent": "BOX",
          "price": 1000.0,
          "discount": 800.0,
          "finalPrice": 200.0,
          "productType": "kidsspecial"
      },
      {
          "id": 99,
          "productCode": "New 1",
          "productName": "Monkey & Elephant",
          "productContent": "Box",
          "price": 900.0,
          "discount": 720.0,
          "finalPrice": 180.0,
          "productType": "kidsspecial"
      },
      {
          "id": 103,
          "productCode": "New 1",
          "productName": "Rose Bada Peafowl ( Pink Colour )",
          "productContent": "1 Pce",
          "price": 2250.0,
          "discount": 1800.0,
          "finalPrice": 450.0,
          "productType": "kidsspecial"
      },
      {
          "id": 108,
          "productCode": "New 1",
          "productName": "Golden Peacock",
          "productContent": "Box",
          "price": 700.0,
          "discount": 560.0,
          "finalPrice": 140.0,
          "productType": "kidsspecial"
      },
      {
          "id": 113,
          "productCode": "61",
          "productName": "Digital Bomb",
          "productContent": "BOX",
          "price": 1125.0,
          "discount": 900.0,
          "finalPrice": 225.0,
          "productType": "soundcrackers"
      },
      {
          "id": 117,
          "productCode": "107",
          "productName": "Black & White - 5 Pcs / Pandyan's",
          "productContent": "BOX",
          "price": 1000.0,
          "discount": 800.0,
          "finalPrice": 200.0,
          "productType": "fancyfireworks"
      },
      {
          "id": 121,
          "productCode": "New 1",
          "productName": "2\" Three Step Fancy ( 6 varieties ) / Mot",
          "productContent": "hers Box",
          "price": 950.0,
          "discount": 760.0,
          "finalPrice": 190.0,
          "productType": "speacialshots"
      },
      {
          "id": 126,
          "productCode": "125",
          "productName": "4\" Pink Pearls",
          "productContent": "1PCE",
          "price": 1200.0,
          "discount": 960.0,
          "finalPrice": 240.0,
          "productType": "speacialshots"
      },
      {
          "id": 128,
          "productCode": "124",
          "productName": "4\" Mercury",
          "productContent": "1PCE",
          "price": 1200.0,
          "discount": 960.0,
          "finalPrice": 240.0,
          "productType": "speacialshots"
      },
      {
          "id": 132,
          "productCode": "128",
          "productName": "4\" Digitalstar",
          "productContent": "1PCE",
          "price": 1300.0,
          "discount": 1040.0,
          "finalPrice": 260.0,
          "productType": "speacialshots"
      },
      {
          "id": 135,
          "productCode": "131",
          "productName": "4.5 \"  Once more  ( Yellow & Green)",
          "productContent": "1PCE",
          "price": 2000.0,
          "discount": 1600.0,
          "finalPrice": 400.0,
          "productType": "speacialshots"
      },
      {
          "id": 138,
          "productCode": "New 162",
          "productName": "4.5\" Nestle ( Red & Green )",
          "productContent": "1 pce",
          "price": 2000.0,
          "discount": 1600.0,
          "finalPrice": 400.0,
          "productType": "speacialshots"
      },
      {
          "id": 142,
          "productCode": "New 147",
          "productName": "4.5\" Samsung (2 Pcs)",
          "productContent": "Box",
          "price": 3750.0,
          "discount": 3000.0,
          "finalPrice": 750.0,
          "productType": "displaycomets"
      },
      {
          "id": 145,
          "productCode": "New 150",
          "productName": "4.5\" Vivo (2 Pcs)",
          "productContent": "Box",
          "price": 3750.0,
          "discount": 3000.0,
          "finalPrice": 750.0,
          "productType": "displaycomets"
      },
      {
          "id": 149,
          "productCode": "134",
          "productName": "Pandyan's Maaza  12 Shots (Multi Color cracking rider)",
          "productContent": "1BOX",
          "price": 1000.0,
          "discount": 800.0,
          "finalPrice": 200.0,
          "productType": "cakes"
      },
      {
          "id": 153,
          "productCode": "182",
          "productName": "30 Shot Multicolour with Crackling",
          "productContent": "Box",
          "price": 1900.0,
          "discount": 1520.0,
          "finalPrice": 380.0,
          "productType": "comets"
      },
      {
          "id": 157,
          "productCode": "New 164",
          "productName": "Bharat Rathna T20 Shot (2 1/2 Commet)",
          "productContent": "1 pce",
          "price": 12500.0,
          "discount": 10000.0,
          "finalPrice": 2500.0,
          "productType": "comets"
      },
      {
          "id": 2,
          "productCode": "New Series 01",
          "productName": "5000 Rs Combo Pack (55 Products  ) Some item alteration no: Gift",
          "productContent": "BOX",
          "price": 25000.0,
          "discount": 20000.0,
          "finalPrice": 5000.0,
          "productType": "FAMILYPACK "
      },
      {
          "id": 3,
          "productCode": "New 1",
          "productName": "7000 VIP PACK ( 65 products ) Some item alteration no: Gift",
          "productContent": "BOX",
          "price": 35000.0,
          "discount": 28000.0,
          "finalPrice": 7000.0,
          "productType": "FAMILYPACK  "
      }
  ]
 
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [quantities, setQuantities] = useState({});
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedProductType = queryParams.get("productType");

  const { category } = location.state || {};  // Retrieve category passed through state

  // Filter products based on the selected productType or category
  const filteredItems = CrackersList.filter(
    (item) =>
      (!selectedProductType || item.productType === selectedProductType) &&
      item.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!category || item.productType === category) // Filter by category if passed
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when the search query changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleQuantityChange = (e, index) => {
    const value = Math.max(1, parseInt(e.target.value));
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: value,
    }));
  };

  const handleProceedToCheckout = () => {
    const selectedItems = CrackersList.filter((item) => quantities[item.id] > 0);
    setCart(selectedItems);
    navigate("/Order");
  };

  const totalItemsInCart = Object.values(quantities).reduce((total, qty) => total + qty, 0);

  return (
    <div className="container-fluid">
      <h2 className="text-center mb-4">CRACKER LIST</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by product name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Image</th>
              <th style={{ width: "15%" }}>Name</th>
              <th style={{ width: "15%" }}>Content</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "10%" }}>Discounted Price</th>
              <th style={{ width: "10%" }}>Final Price</th>
              <th style={{ width: "10%" }}>Quantity</th>
              <th style={{ width: "10%" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt="Cracker img or vdo"
                    style={{ width: "100px" }}
                  />
                </td>
                <td>{item.productName}</td>
                <td>{item.productContent}</td>
                <td>{item.price}</td>
                <td>{item.discount}</td>
                <td>{item.finalPrice}</td>
                <td>
                  <input
                    type="number"
                    value={quantities[item.id] || 0}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    style={{ width: "80px" }}
                  />
                </td>
                <td>{((quantities[item.id] || 0) * item.finalPrice).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

      <button
        className="btn btn-primary"
        onClick={handleProceedToCheckout}
        disabled={totalItemsInCart === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Product;