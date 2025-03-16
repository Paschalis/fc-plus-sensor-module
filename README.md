# FC Plus Sensor Module
<p align="center">
  <img src="Images/preview1.png" alt="preview1">
</p>
<p align="center">
  <img src="Images/preview.png" alt="preview">
</p>

**FC Plus** is a modular add-on board designed for UAV flight controllers, providing advanced telemetry, GPS, object avoidance (ToF, Sonar, IR), and LED indicators for status feedback. This repository contains the necessary documentation, hardware setup guides, sensor integration instructions, and communication protocols (LoRa/WiFi) to enhance UAV autonomy and safety.

# Board Designs Overview

This repository contains a collection of **FC Plus Sensor Modules Boards** categorized by their transmission modes. More details about the transmission modes can be found in the [Transmission Modes Classification](SensorFCPlus/README.md).

> **Note:** The PCB colors are used to visually distinguish the boards. The **Antenna Diversity** boards feature **yellow** PCBs, while the **True Diversity** boards are **blue**. The **Gemini Mode** boards are marked with **red** PCBs, and the **Gemini Xrossband (GemX)** boards are designed with **purple** PCBs for easy identification.

<p align="center">
    <a href="https://paschalis.github.io/fc-plus-sensor-module/" target="_blank">
        <img src="https://img.shields.io/badge/View_FC_Plus_Sensor_Module_Site-Blue?style=for-the-badge&logo=github&logoColor=white" alt="View FC Plus Sensor Module Site">
    </a>
</p>

## 1. Antenna Diversity Boards (Yellow Boards)

### FC Plus Sensor Modules Boards at 2.4GHz

| Name            | Features                                                        | Preview                                                       |
|-----------------|-----------------------------------------------------------------|---------------------------------------------------------------|
| V1-M10Q-HMC     | GPS: SAM-M10Q, MAG: HMC5883L, ELRS: 2.4GHz RX                   | [![Preview](Images/AD/V1-M10Q-HMC.gif)](https://github.com/Paschalis/fc-plus-sensor-module/tree/development/SensorFCPlus/Antenna_Diversity/ExpressLRS_2.4GHz/Version_1_M10Q_HMC5883L/Version_1_M10Q_HMC5883L) <p align="center"> Click on the image to view the files </p>|
| V2-M10Q-QMC     | GPS: SAM-M10Q, MAG: QMC5883L, ELRS: 2.4GHz RX                   | [![Preview](Images/AD/V2-M10Q-QMC.gif)](https://github.com/Paschalis/fc-plus-sensor-module/tree/development/SensorFCPlus/Antenna_Diversity/ExpressLRS_2.4GHz/Version_2_M10Q_QMC5883L/Version_2_M10Q_QMC5883L) <p align="center"> Click on the image to view the files </p>|
| V3-M10Q-LSM     | GPS: SAM-M10Q, MAG: LSM303AH, ELRS: 2.4GHz RX                   | [![Preview](Images/AD/V3-M10Q-LSM.gif)](https://github.com/Paschalis/fc-plus-sensor-module/tree/development/SensorFCPlus/Antenna_Diversity/ExpressLRS_2.4GHz/Version_3_M10Q_LSM303AH/Version_3_M10Q_LSM303AH) <p align="center"> Click on the image to view the files </p> |

### FC Plus Sensor Modules Boards at 900MHz


<details>
<summary>Click to view Antenna Diversity Boards at 900MHz</summary>

| Name            | Features                                                        | Preview                                                       |
|-----------------|-----------------------------------------------------------------|---------------------------------------------------------------|
| V1-M10Q-HMC     | GPS: SAM-M10Q, MAG: HMC5883L, ELRS: 900MHz RX                   | ![Under Construction](https://img.shields.io/badge/status-under%20construction-orange) |
| V2-M10Q-QMC     | GPS: SAM-M10Q, MAG: QMC5883L, ELRS: 900MHz RX                   | ![Under Construction](https://img.shields.io/badge/status-under%20construction-orange) |
| V3-M10Q-LSM     | GPS: SAM-M10Q, MAG: LSM303AH, ELRS: 900MHz RX                   | ![Under Construction](https://img.shields.io/badge/status-under%20construction-orange) |

</details>

---
> **Note:** In the following boards, the **LSM303AH** magnetometer was selected over other options due to its **better overall performance**, offering improved accuracy and reliability in magnetic field sensing. The **MAX-M10S** GPS module was chosen instead of the SAM-M10Q for its **lower cost** while still providing good performance for navigation, making it a more economical choice for the boards.

## 2. True Diversity Boards (Blue Boards)

### FC Plus Sensor Modules Boards at 2.4GHz
| Name            | Features                                                        | Preview                                                       |
|-----------------|-----------------------------------------------------------------|---------------------------------------------------------------|
| TD-M10S-LSM     | GPS: MAX-M10S, MAG: LSM303AH, ELRS: 2.4GHz RX                   | [![Preview](Images/TD/TD-M10S-LSM.gif)](https://github.com/Paschalis/fc-plus-sensor-module/tree/development/SensorFCPlus/Antenna_Diversity/ExpressLRS_2.4GHz/Version_1_M10Q_HMC5883L/Version_1_M10Q_HMC5883L) <p align="center"> Click on the image to view the files </p>|

### FC Plus Sensor Modules Boards at 900MHz
<details>
<summary>Click to view True Diversity Boards at 900MHz</summary>

| Name            | Features                                                        | Preview                                                       |
|-----------------|-----------------------------------------------------------------|---------------------------------------------------------------|
| TD-M10S-LSM     | GPS: MAX-M10S, MAG: LSM303AH, ELRS: 900MHz RX                   | ![Under Construction](https://img.shields.io/badge/status-under%20construction-orange) |

</details>

## 3. Gemini Mode Boards

> **Note:**  
> - The **Gemini boards** are actually the **True Diversity boards** operating in **Gemini Mode**.  
> - To enable **Gemini Mode**, set the **RX Antenna Mode** to **Gemini** via Lua script.  
> - **Single Antenna RX boards** can also operate in Gemini Mode but must use **Model 5** in **Model Config Matching** via Lua script.  
> - **Gemini-capable receivers** should use **Model 6** in **Model Config Matching**.  
> - Click on [🔗 **Go to True Diversity Full Diversity Boards (Blue Boards)**](#2-true-diversity-boards-blue-boards) to view compatible receivers.  
>  
> 📖 **Reference:** [ExpressLRS Gemini Mode Documentation](https://www.expresslrs.org/software/gemini/#what-is-gemini)  

## 4. Gemini Xrossband (GemX) Boards (Purple Boards)

### FC Plus Sensor Modules Boards
| Name            | Features                                                        | Preview                                                       |
|-----------------|-----------------------------------------------------------------|---------------------------------------------------------------|
| GemX-M10S-LSM     | GPS: MAX-M10S, MAG: LSM303AH, ELRS: 2.4GHz and 900MHz RX      | ![Under Construction](https://img.shields.io/badge/status-under%20construction-orange) |


## Related Projects

### **Autonomous UAVs: MAVLink Communication Between FCs and SBCs**
This repository explores MAVLink communication between flight controllers and SBCs, enabling UAV autonomy with features like peripheral integration and real-time image processing.

<div align="center">

[![MAVLink-SBC-FC-Bridge](https://img.shields.io/badge/🔗%20MAVLink--SBC--FC--Bridge-Explore%20Now!-orange?style=for-the-badge)](https://github.com/Paschalis/mavlink-sbc-fc-bridge)             
[![Stars](https://img.shields.io/github/stars/Paschalis/mavlink-sbc-fc-bridge?label=🌟%20Stars&style=for-the-badge&color=yellow)](https://github.com/Paschalis/mavlink-sbc-fc-bridge/stargazers) [![Forks](https://img.shields.io/github/forks/Paschalis/mavlink-sbc-fc-bridge?label=🍴%20Forks&style=for-the-badge&color=blue)](https://github.com/Paschalis/mavlink-sbc-fc-bridge/network/members) [![Activity](https://img.shields.io/github/last-commit/Paschalis/mavlink-sbc-fc-bridge?label=⏳%20Last%20Update&style=for-the-badge&color=green)](https://github.com/Paschalis/mavlink-sbc-fc-bridge/commits/main)

</div>

Explore more about the **MAVLink Communication Between FCs and SBCs** project and its integration into autonomous UAVs by clicking on the badge above to access the full documentation and setup guide.

### **Custom RX/TX Board Designs for GCS Communication**
![Under Construction](https://img.shields.io/badge/status-under%20construction-orange)

This repository provides a receiver and transmitter solution for Ground Control Stations (GCS), designed to provide reliable telemetry and control using ELRS, mLRS, and MAVLink protocols. Featuring board designs optimized for long-range communication, minimal latency, and robust performance under varying conditions, these boards cater to diverse operational needs for UAV telemetry systems.

<div align="center">

[![Custom RX/TX Board Designs](https://img.shields.io/badge/🔗%20Custom--RX--TX--Board--Designs-Explore%20Now!-orange?style=for-the-badge)](https://github.com/TeodoraMiu/UAV-TelemetryLink)                              
[![Stars](https://img.shields.io/github/stars/TeodoraMiu/UAV-TelemetryLink?label=🌟%20Stars&style=for-the-badge&color=yellow)](https://github.com/TeodoraMiu/UAV-TelemetryLink/stargazers) [![Forks](https://img.shields.io/github/forks/TeodoraMiu/UAV-TelemetryLink?label=🍴%20Forks&style=for-the-badge&color=blue)](https://github.com/TeodoraMiu/UAV-TelemetryLink/network/members) [![Activity](https://img.shields.io/github/last-commit/TeodoraMiu/UAV-TelemetryLink?label=⏳%20Last%20Update&style=for-the-badge&color=green)](https://github.com/TeodoraMiu/UAV-TelemetryLink/commits/main)

</div>

Explore the **Custom RX/TX Board Designs for GCS Communication** project and its integration into UAV telemetry systems by clicking on the badge above.


## Contributing

Your contributions and suggestions are crucial for the improvement of this project!  Feel free to submit pull requests or open issues if you encounter any problems.

## License

This project is licensed under the [GPLv3 License](https://opensource.org/licenses/GPL-3.0) - see the [LICENSE](LICENSE) file for details.

---

**Thank you for visiting fc-plus-sensor-module!**
