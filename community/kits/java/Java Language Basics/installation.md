---
id: Installation
title: Installation
description: 'Java Installation Steps'
sidebar_position: 2
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## For Windows Machine

### 1. Navigate to the Oracle Java Download Page

Navigate to the [Java download](https://www.oracle.com/in/java/technologies/downloads/) page for the latest Java release.

### 2. Download the zip or Exe Package

Here you have two choices:

#### 2.1 Windows x64 Installer

An .exe file which installs Java in your 64-bit windows machine and makes all necessary environment entries.

```bash
For a normal user, it is the best approach.
```

#### 2.2 Windows x64 Compressed Archive

A .zip file distribution which you can copy to any location on the computer. In this case, you need to update all the required environment variables (e.g. PATH, JAVA_HOME, etc.) yourself.

It is best suited for Java developers who want to keep multiple versions of Java running on their computers.

After clicking any of the download links, a popup will appear to accept Oracle Technology Network License Agreement for Oracle Java SE in order to download this software. Click on the checkbox and then proceed to download it.

Login to the oracle website if prompted.

### 3. Installation with .exe File

If we are installing the Java software with the exe file downloaded in the previous section, follow the given steps.

- Step 1. Double-click on exe file to initiate the installation process
- Step 2. Select Java installation location
- Step 3. Begin Java Installation

### 4. Installation with .zip File

This process is more suited for the Java developers community. Using this process, you can have multiple versions of Java on your computer. So based on the project requirements, you can choose a different version of any of the projects.

- Step 1. Extract the zip archive in desired location
- Step 2. Add/Update the environment properties

## For Mac Machine

Follow these simple steps to install Java on your Mac using Homebrew:

### 1. Install Homebrew (if not already installed)

Homebrew is a package manager for macOS that simplifies the installation of software.

- Open your Terminal.
- Paste the following command and press Enter:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Follow the on-screen instructions to complete the installation.
- Verify Homebrew installation by running:

```bash
brew --version
```

### 2. Install Java Using Homebrew

- Update Homebrew to ensure you have the latest package list:

```bash
brew update
```

- Search for available Java versions:

```bash
brew search openjdk
```

This will list all OpenJDK versions. Pick the version you need (e.g., openjdk@17).

- Install the desired version of Java. For example, to install OpenJDK 21:

```bash
brew install openjdk@21
```

## Verify Java Installation

Open a new command prompt or for Mac user open terminal to verify that Java has been installed on your computer. Type the below command which will print the version of Java installed on your computer.

```bash
java -version
```

The command output.

```bash
java version "21.0.5" 2024-10-15 LTS
Java(TM) SE Runtime Environment (build 21.0.5+9-LTS-239)
Java HotSpot(TM) 64-Bit Server VM (build 21.0.5+9-LTS-239, mixed mode, sharing)
```
