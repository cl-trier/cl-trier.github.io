---
title: "Towards Simulating Social Media Users with LLMs: Evaluating the Operational Validity of Conditioned Comment Prediction"
authors:
  - nils-schwager
  - achim-rettinger
venue: "WASSA @ EACL"
year: 2026
link: "https://aclanthology.org/2026.wassa-1.16/"
project: 2023--twon
---

The transition of Large Language Models (LLMs) from exploratory tools to active “silicon subjects” in social science lacks extensive validation of operational validity. This study introduces Conditioned Comment Prediction (CCP), a task in which a model predicts how a user would comment on a given stimulus by comparing generated outputs with authentic digital traces. This framework enables a rigorous evaluation of current LLM capabilities with respect to the simulation of social media user behavior. We evaluated open-weight 8B models (Llama-3.1, Qwen3, Ministral) in English, German, and Luxembourgish language scenarios. By systematically comparing prompting strategies (explicit vs. implicit) and the impact of Supervised Fine-Tuning (SFT), we identify a critical form vs. content decoupling in low-resource settings: while SFT aligns the surface structure of the text output (length and syntax), it degrades semantic grounding. Furthermore, we demonstrate that explicit conditioning (generated biographies) becomes redundant under fine-tuning, as models successfully perform latent inference directly from behavioral histories. Our findings challenge current “naive prompting” paradigms and offer operational guidelines prioritizing authentic behavioral traces over descriptive personas for high-fidelity simulation.
