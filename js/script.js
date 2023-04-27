// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: april 2023
// This file contains the JS functions for index.html

"use strict"

const randomNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6 into variable "randomNumber"
const randomNegativeNumber = Math.floor((Math.random() * 6) + 1) * -1 // returns a random integer from 1 to 6 into variable "randomNumber"


/**
 * This function updates a slider value.
 */
function myButtonClicked () {
  // this function updates the slider value
  const valueFromSlider = parseInt(document.getElementById('guessed-number').value)

  if (alwaysOnButtonChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
    "<p>Value is: Positive</p>"
  } else {
    document.getElementById("radio-button-value").innerHTML =
    "<p>Value is: Negative</p>"
  }
}
