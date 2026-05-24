
# 🧠 CNN for CIFAR-10 Image Classification

![PyTorch](https://img.shields.io/badge/PyTorch-2.0+-red.svg?logo=pytorch)
![Python](https://img.shields.io/badge/Python-3.8+-blue.svg?logo=python)
![Accuracy](https://img.shields.io/badge/accuracy-74.7%25-brightgreen)
![CIFAR-10](https://img.shields.io/badge/dataset-CIFAR--10-orange)

> A clean, minimal Convolutional Neural Network (CNN) built with PyTorch to classify 32×32 color images into 10 classes.

---

## 📌 Overview

This project implements a **CNN from scratch** to solve the CIFAR-10 classification problem.  
It demonstrates:

- Data preprocessing & normalisation
- Building a CNN with `nn.Sequential`
- Training loop (forward/backward/optimise)
- Evaluation & accuracy reporting

**Real‑world applications:**  
Face recognition, medical image analysis, autonomous driving, product categorisation.

---

## 🧱 Model Architecture

```
Input: 3×32×32
   ↓
Conv2d(3→32, 3×3, padding=1) + ReLU + MaxPool2d(2,2)   → 32×16×16
Conv2d(32→64, 3×3, padding=1) + ReLU + MaxPool2d(2,2) → 64×8×8
Conv2d(64→128, 3×3, padding=1) + ReLU + MaxPool2d(2,2) → 128×4×4
   ↓ Flatten (2048)
Linear(2048 → 256) + ReLU
Linear(256 → 10)
   ↓
Output: logits for 10 classes
```

**Total parameters:** ~1.2 million

---

## 📂 Dataset: CIFAR-10

| Split      | Images | Classes                                    |
|------------|--------|--------------------------------------------|
| Training   | 50,000 | airplane, automobile, bird, cat, deer, dog, frog, horse, ship, truck |
| Test       | 10,000 |                                            |

**Preprocessing:**
- Convert PIL image → Tensor `[0,1]`
- Normalise with `mean=(0.5,0.5,0.5), std=(0.5,0.5,0.5)` → range `[-1,1]`

---

## ⚙️ Requirements

```bash
torch
torchvision
```

Install with:

```bash
pip install torch torchvision
```

---

## 🚀 Training & Evaluation

### Hyperparameters
- **Epochs:** 10
- **Batch size:** 64
- **Optimiser:** Adam (default lr=0.001)
- **Loss function:** CrossEntropyLoss

### Training loop (simplified)
```python
for epoch in range(epochs):
    for images, labels in trainloader:
        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
```

### Results
After 10 epochs:

```
epoch=1/10 & loss=0.7556
epoch=5/10 & loss=0.3469
epoch=10/10 & loss=0.1135

Test accuracy = 74.71%
```

---

## 🧪 How to Run

1. **Clone / download** the notebook or Python script.
2. **Install dependencies** (see above).
3. **Run the script** – the first execution will automatically download CIFAR-10 to `./data`.
4. Watch the training loss decrease and final accuracy.

To run as a standalone Python file:

```python
python cifar_cnn.py
```

---

## 📈 Possible Improvements

- ✅ Add **validation split** to monitor overfitting
- ✅ Use **data augmentation** (`RandomHorizontalFlip`, `RandomCrop`)
- ✅ Increase **model depth** (more Conv layers or residual connections)
- ✅ Add **BatchNormalisation** and **Dropout**
- ✅ Train on **GPU** (add `.cuda()` calls) for 5× faster training

---

## 🛠️ Code Structure (Key Components)

| Component               | Purpose                                        |
|-------------------------|------------------------------------------------|
| `transforms.Compose`    | Chain ToTensor + Normalise                     |
| `CIFAR10` dataset       | Load train/test sets with automatic download   |
| `DataLoader`            | Batch, shuffle, parallel loading               |
| `CNN` class (`nn.Module`) | Defines the network layers and forward pass   |
| `CrossEntropyLoss`      | Combines LogSoftmax + NLLLoss                  |
| `Adam` optimiser        | Adaptive learning rate, momentum               |
| Training loop           | Forward → loss → backward → step               |
| Evaluation block        | `torch.no_grad()`, argmax, accuracy calculation|

---

## 📖 Learnings from This Notebook

- How **convolution**, **padding**, **pooling** reduce spatial dimensions while extracting features.
- Why **flattening** is needed before fully‑connected layers.
- The role of **ReLU** in introducing non‑linearity.
- How **backpropagation** (`loss.backward()`) computes gradients automatically.
- The effect of batch size and number of epochs on loss convergence.

---

## 🤝 Contributing

Feel free to fork this repository, experiment with the architecture, and submit a PR with improvements (e.g., adding BatchNorm, higher accuracy, or visualisation of feature maps).

---

## 📃 License

MIT License – use for learning, teaching, or as a starter for your own projects.

---

## 🙏 Acknowledgements

- [CIFAR-10 dataset](https://www.cs.toronto.edu/~kriz/cifar.html) by Alex Krizhevsky
- [PyTorch](https://pytorch.org/) team for the amazing deep learning framework

---

⭐ **Star this repo** if you found it useful for understanding basic CNNs in PyTorch!
