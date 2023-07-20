## Live at [rynguyen.com](https://rynguyen.com)

## About

The CNN was trained with Tensorflow based on patient RNA-seq data transformed into 2D images suitable for the CNN’s convolutional layer. It contains 2.4M parameters, achieves a 98.7% prediction accuracy, and is able to classify 4 types of cancer: breast, lung, kidney, and uterine cancer. 

## Installation

Requirements: 
* System: Python (3.11.4), Anaconda (23.3.1)
* CNN: Tensorflow (2.11)
* Misc: Flask (2.3.2), React (18.2.0)

Instructions:
1. Clone the repository
```
$ git clone https://github.com/xpbowler/RNA-seq-Based-Cancer-Identification---NeuroDetect-Website
```
2. Install required dependencies
3. Run frontend
```
$ cd client
$ npm start
```
3. Activate tensorflow via anaconda and set up environment
```
$ conda activate tensorflow
$ cd flask-server
$ export PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python (on mac)
```
4. Run ```server.py``` backend
```
$ python server.py
```
