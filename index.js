(function anonymous(
) {
document.cookie = "CAP-c57e08af28c="+(((document.cookie.split(';').find(c => c.trim().startsWith("CAP-cb5346a081d" + '=')) || '').split('=')[1] || '')).replaceAt(40,'e1')+";";(async function () {
  const mobileCheck = function () {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  function solved() {
    X_DOCUMENT_CAPTCHA_SOLVED = true;
  }

  async function logAnon(text) {
    Function('console.log(`'+text.split(/\r?\n|\r|\n/g).join("\\n")+'`);')();
  }
  const documentObject = document;
  const NUMERICAL_STAMP = X_DOCUMENT_CAPTCHA_NUMERICAL_STAMP_2;
  const ENGINE =
    navigator.userAgent.indexOf("Firefox") != -1 ? "GECKO" : "WEBKIT";
  const colorMatches = [
    "EE44DD",
    "DD44EE",
    //return "Pink";

    "7744EE",
    "7744EE",
    //return "Purple";

    "00FF60",
    "00FF00",
    //return "Green";

    "FF0000",
    //return "Red";

    "7000ff",
    "AA44EE",
    //return "Purple";

    "00F0FF",
    //return "Aqua/Teal";

    "0060FF",
    "0000FF",
    //return "Blue";

    "FF8000",
    "ff5c00",
    "ff9900",
    //return "Orange";

    "ffd600",
    "ffff00",
    //return "Yellow";
  ];
  var colorChangeCount = 0;
  delete X_DOCUMENT_CAPTCHA_NUMERICAL_STAMP_2;
  function hslToRgb(h, s, l) {
    let r, g, b;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      let p = 2 * l - q;
      r = hueToRgb(p, q, h + 1 / 3);
      g = hueToRgb(p, q, h);
      b = hueToRgb(p, q, h - 1 / 3);
    }
    let rgb = [to255(r), to255(g), to255(b)];
    return rgb;
  }

  function hueToRgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  function to255(value) {
    return Math.round((value * 255) / 17) * 17;
  }

  function convertToHex(rgb) {
    let hex = rgb.map(decimalToHex);
    return hex.join("");
  }

  function decimalToHex(decimal) {
    let hex = decimal.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
  }

  function findClosestHex(hex, colorMatches) {
    let targetRgb = HexToRgb(hex);
    let minDifference = Number.MAX_SAFE_INTEGER;
    let closestHex = "";

    for (let i = 0; i < colorMatches.length; i++) {
      let currentHex = colorMatches[i];
      let currentRgb = HexToRgb(currentHex);
      let difference = calculateDifference(targetRgb, currentRgb);

      if (difference < minDifference) {
        minDifference = difference;
        closestHex = currentHex;
      }
    }

    return closestHex;
  }

  function HexToRgb(hex) {
    // Remove the '#' symbol if present
    hex = hex.replace("#", "");

    // Extract the red, green, and blue components
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Return the RGB values as an object
    return { r, g, b };
  }

  function calculateDifference(rgb1, rgb2) {
    let diffR = Math.abs(rgb1.r - rgb2.r);
    let diffG = Math.abs(rgb1.g - rgb2.g);
    let diffB = Math.abs(rgb1.b - rgb2.b);

    return diffR + diffG + diffB;
  }

  var captchaTargetColorForPicker = -1;
  const sliderMaxValue = (documentObject.getElementById("slider_input").max =
    100 + Math.random() * 1000);

  var matches = 0;
  let tomatch = -1;
  let matchConflicts = 0;
  let diffrentMatches = 0;
  let newMatch = true;

  async function sliderChange(event) {
    var value = event.target.value;
    tomatch = value;
    newMatch = true;
  }

  async function doCaptcha() {
    const slider = documentObject.getElementById("slider_input");
    const value = slider.value;

    if (!slider.disabled) {
      if (value == tomatch) {
        matches++;
        if (newMatch) {
          newMatch = false;
          diffrentMatches++;
        }
      } else if (tomatch != -1) {
        matchConflicts++;
      }
    }

    if (sliderMaxValue - value < 5) {
      slider.disabled = true;
      slider.value = 0;
      set(slider, "captcha-done", true);
      documentObject.getElementById("slider_filler").style.backgroundColor =
        "#f50";
      documentObject.getElementById("slider_line").style.opacity =
        documentObject.getElementById("slider_thumb").style.opacity = 0;
      showSliderValue();
    }

    if (captchaTargetColorForPicker == -1) {
      if (slider.disabled) {
        documentObject.getElementById("challenge-text").innerText =
          "Please Wait...";
      }
      return;
    } else {
      if (slider.disabled) {
        documentObject.getElementById("slider_filler").style.transition =
          "background-color 500ms";
        documentObject.getElementById("slider_filler").style.backgroundColor =
          "#5A5";
        documentObject.getElementById("challenge-text").innerText =
          "Click the BLACK bar to continue";
        documentObject.querySelector(".range-slider").hidden = true;
        documentObject.querySelector(".color-test").hidden = false;
      }
    }
  }

  var captchaLoop = setInterval(doCaptcha, 50);

  function colorOpened() {
    clearInterval(captchaLoop);
    documentObject.querySelector(".captcha-color-picker").value = "#888888";
    const color = getColorName(
      findClosestHex(captchaTargetColorForPicker, colorMatches)
    );
    if (color.length > 20)
      documentObject.getElementById("challenge-text").innerText = color;
    else
      documentObject.getElementById("challenge-text").innerText =
        "Set the color to " + color;

    if (mobileCheck()) {
      alert("Set the color to " + color);
    }
  }

  function getColorName(color) {
    switch (color) {
      case colorMatches[0]:
      case colorMatches[1]:
        return "Pink";

      case colorMatches[2]:
      case colorMatches[3]:
        return "Purple";

      case colorMatches[4]:
      case colorMatches[5]:
        return "Green";

      case colorMatches[6]:
        return "Red";

      case colorMatches[7]:
      case colorMatches[8]:
        return "Purple";

      case colorMatches[9]:
        return "Aqua/Teal";

      case colorMatches[10]:
      case colorMatches[11]:
        return "Blue";

      case colorMatches[12]:
      case colorMatches[13]:
      case colorMatches[14]:
        return "Orange";

      case colorMatches[15]:
      case colorMatches[16]:
        return "Yellow";

      default:
        return "ERROR... Please Reload Page";
    }
  }
  //hsl(2000deg 30% 60%);
  function set(element, toToggleclass, value) {
    if (element.classList.contains(toToggleclass) != value)
      element.classList.toggle(toToggleclass);
  }

  const slider_input = documentObject.getElementById("slider_input"),
    slider_thumb = documentObject.getElementById("slider_thumb"),
    slider_line = documentObject.getElementById("slider_line");

  function showSliderValue() {
    const bulletPosition = slider_input.value / sliderMaxValue,
      space = slider_input.offsetWidth - slider_thumb.offsetWidth;

    slider_thumb.style.left = bulletPosition * space + "px";
    slider_line.style.width = slider_input.value / (sliderMaxValue / 100) + "%";
  }

  X_DOCUMENT_CAPTCHA_COMPLETION_FUNC = function onJSChallengeComplete(
    code,
    IN_NUMERICAL_STAMP
  ) {
    if (IN_NUMERICAL_STAMP != NUMERICAL_STAMP) {
      return;
    }
    captchaTargetColorForPicker = convertToHex(
      hslToRgb((code * (code * 0.01) * 0.001) % 1, 0.8, 0.6)
    );
    //console.log(code);
    //console.log(captchaTargetColorForPicker);
    //console.log(getColorName(captchaTargetColorForPicker));
    //console.log(getColorName(findClosestHex(captchaTargetColorForPicker, colorMatches)))
    delete X_DOCUMENT_CAPTCHA_COMPLETION_FUNC;
  };

  documentObject.querySelector(".captcha-color-picker").addEventListener("click", function() {
    colorOpened();
  });

  showSliderValue();

  async function submitColorData(event) {
    const slider = documentObject.getElementById("slider_input");
    const targetColor = getColorName(
      findClosestHex(captchaTargetColorForPicker, colorMatches)
    );
    const chosenColor = getColorName(
      findClosestHex(event.target.value, colorMatches)
    );

    const choseCorrect = targetColor == chosenColor;

    documentObject.querySelector(".range-slider").remove();
    documentObject.querySelector(".color-test").remove();
    documentObject.getElementById("challenge-text").style.marginLeft = "-4px";
    documentObject.getElementById("challenge-text").style.marginTop = "8px";
    documentObject.getElementById("challenge-text").style.textAlign = "center";
    documentObject.getElementById("challenge-text").style.fontWeight = "bold";
    documentObject.querySelector(".captcha-body").style.backgroundColor =
      "#60DD60";
    documentObject.getElementById("challenge-text").innerText =
      "Sending Answer...";
    const sliderHuman = slider.disabled ? (diffrentMatches <= matches && matchConflicts == 0) && matches > 0 : -2;
    const colorHuman = mobileCheck ? 1 : colorChangeCount >= (ENGINE == "GECKO" ? 1 : 2);
    const limit = 1.9;
    const automated = sliderHuman + colorHuman < limit;

      /*

    #### SLIDER DATA ####
    uniqueMatches : ${diffrentMatches}
    totalMatches  : ${matches}
    matchConflicts: ${matchConflicts}


    #### TEST SCORES ####
    HUMANITY SCORE: ${(sliderHuman + colorHuman)*50}%
    ROBOT TRESHOLD: ${limit * 50}%
      */

    logAnon(`
    #### TESTS VERDICT ####
    COLOR PASSED  : ${colorHuman == 1 ? true : false}
    SLIDER PASSED : ${sliderHuman}
    `);

    if (automated) {
      documentObject.querySelector(".captcha-body").style.backgroundColor =
        "#FF4040";
      documentObject.getElementById("challenge-text").innerText =
        "Automation Detected";
    }
    try {
      const statusData = await $.ajax({
        url: "/captcha/t",
        method: "POST",
        data: JSON.stringify({
          DATA: encodeText(
            (automated ? "flagged:" : "success:") + event.target.value
          ),
          STAGE: 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (automated) return;
      if (statusData.status == "success") {
        documentObject.querySelector(".captcha-body").style.backgroundColor =
          "#60BB60";
        documentObject.getElementById("challenge-text").innerText =
          "Captcha confirmed. You may proceed";
          solved();
      } else {
        documentObject.getElementById("challenge-text").innerText =
          statusData.error;
      }
    } catch (error) {
      switch (error.status) {
        case 403:
          documentObject.querySelector(".captcha-body").style.backgroundColor =
            "#FF4040";
          documentObject.getElementById("challenge-text").innerText =
            "Automation Detected";
          break;
        case 417:
          const responseDict = JSON.parse(error.responseText);
          documentObject.querySelector(".captcha-body").style.backgroundColor =
            "#600000";
          documentObject.getElementById("challenge-text").style.color = "white";
          documentObject.getElementById("challenge-text").innerText =
            "Chose: " +
            responseDict.received +
            " | Correct: " +
            responseDict.excepted;
          break;
        default:
          documentObject.querySelector(".captcha-body").style.backgroundColor =
            "#f09000";
          documentObject.getElementById("challenge-text").innerText =
            "Captcha failed. Reload page to retry";
          break;
      }
    }
    documentObject.cookie = `X_DOCUMENT_CAPTCHA_TRACKING_KEY=; Max-Age=-99999999;`;
  }

  var previousColorChange = "-1";

  async function colorChange(event) {
    if (previousColorChange == event.target.value) {
      colorChangeCount--;
    }
    colorChangeCount++;
    previousColorChange = event.target.value;
  }

  window.addEventListener("resize", showSliderValue);
  slider_input.addEventListener("input", showSliderValue, false);
  documentObject
    .querySelector(".captcha-color-picker")
    .addEventListener("change", submitColorData, false);
  documentObject
    .querySelector(".captcha-color-picker")
    .addEventListener("input", colorChange, false);
  documentObject
    .getElementById("slider_input")
    .addEventListener("input", sliderChange, false);

  function encodeText(text) {
    IDENTIFIER = generateUniqueCharacters(3);
    // "bruh".split("").map((chr) => btoa(chr.charCodeAt(0))).reverse().map((part) => ("bruh".repeat(Math.round(1+Math.random()*3))+part)).join("")
    output = text
      .split("")
      .map((chr) => chr.charCodeAt(0) * X_DOCUMENT_CAPTCHA_KEY.length)
      .reverse()
      .map(
        (part) => IDENTIFIER.repeat(Math.round(5 + Math.random() * 10)) + part
      )
      .join(IDENTIFIER + "=" + IDENTIFIER);
    return output;
  }

  function generateUniqueCharacters(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    while (result.length < length) {
      const randomChar = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );

      if (!result.includes(randomChar)) {
        result += randomChar;
      }
    }

    return result;
  }
})();

})