# FC Plus Sensor Module

<p align="center">
  <img src="Images/preview.png" alt="preview">
</p>

**FC Plus** is a modular add-on board designed for UAV flight controllers, providing advanced telemetry, GPS, object avoidance (ToF, Sonar, IR), and LED indicators for status feedback. This repository contains the necessary documentation, hardware setup guides, sensor integration instructions, and communication protocols (LoRa/WiFi) to enhance UAV autonomy and safety.

# Board Designs Overview

This repository contains a collection of **FC Plus Sensor Modules Boards** categorized by their transmission modes. More details about the transmission modes can be found in the [Transmission Modes Classification](SensorFCPlus/README.md).

## 1. Antenna Diversity Boards

### FC Plus Sensor Modules Boards
| Name                                   | Features                                                      | Preview                                                       |
|----------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|
| V1-M10Q-HMC | GPS: SAM-M10Q, MAG: HMC5883L, ELRS:2.4GHz_RX | [![Preview](Images/AD/V3-M10Q-LSM.gif)](https://github.com/Paschalis/fc-plus-sensor-module/tree/development/SensorFCPlus/Antenna_Diversity/ExpressLRS_2.4GHz/Version_3_M10Q_LSM303AH/Version_3_M10Q_LSM303AH) <p align="center"> Click on the image to view the files </p>|
| V2-M10Q-QMC | GPS: SAM-M10Q, MAG: QMC5883L, ELRS:2.4GHz_RX | [![Preview](Images/Version_3_M10Q_LSM303AH_ELRS2.4GHz.png)](https://github.com/your-repo/FC-Plus-Sensor-Module/Version3) <p align="center"> Click on the image to view the files </p>| 
| V3-M10Q-LSM | GPS: SAM-M10Q, MAG: LSM303AH, ELRS:2.4GHz_RX | [![Preview](Images/Version_3_M10Q_LSM303AH_ELRS2.4GHz.png)](https://github.com/your-repo/FC-Plus-Sensor-Module/Version3) <p align="center"> Click on the image to view the files </p>|



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
