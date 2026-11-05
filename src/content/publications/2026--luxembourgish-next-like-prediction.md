---
title: "Evaluating Token Probabilities as Confidence Estimators in Human Behavior Simulations: A Case Study in Luxembourgish Next Like Prediction"
authors:
  - nils-schwager
  - achim-rettinger
venue: "W-NUT @ EMNLP"
year: 2026
link: "https://aclanthology.org/2026.wnut-1.7/"
project: 2026--emosci
---

As large language models (LLMs) are increasingly used to simulate human behavior, their operational validity is typically assessed through accuracy alone, implicitly treating human behavior as deterministic. We argue that on noisy digital trace data, a model’s performance depends not only on predicting the correct outcome but on its calibration. We present a case study testing whether the token probabilities of open-weight LLMs can serve as confidence estimates in a Next Like Prediction task: predicting how a user of the Luxembourgish news platform RTL.lu rates a comment, conditioned on their prior interactions. Evaluating Ministral 3 (3B, 8B), we find that, with in-context learning only, the tested models are overconfident and are outperformed on accuracy and calibration by a simple statistical baseline. Accuracy and calibration do not move together: scaling from 3B to 8B improves accuracy while degrading calibration, and longer behavioral histories raise accuracy while confidence declines. Task-specific supervised fine-tuning acts as an effective calibration intervention, reducing Expected Calibration Error from 0.2 to 0.006 while improving accuracy from 0.536 to 0.758. We conclude that confidence estimation should be evaluated alongside accuracy to improve validity when using LLM-based agents.
