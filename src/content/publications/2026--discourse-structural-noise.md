---
title: "Discourse-Structural Noise in LLM-Generated Explanations"
authors:
  - raghvi-baloni
  - achim-rettinger
venue: "WNUT @ EMNLP"
year: 2026
link: "https://aclanthology.org/2026.wnut-1.5/"
#project: 
---
Large language models (LLMs) are increasingly utilized to generate explanations of complex phenomena, yet existing evaluation frameworks assess quality extensively through semantic similarity to human references, a measure blind to discourse organization. We conduct a computational study of 300 ELI5 question pairs, comparing Llama-3.1 8B, Gemma-2 9B, and Mistral-7B against human-written responses using PDTB-grounded connective analysis across five relation types. All three models exhibit elaborative dominance, i.e. Elaborative connectives account for 56-66% of discourse markers versus 38% in human writing, with Causal, Contrastive, and Conditional relations systematically suppressed. This 18-28 percentage point gap persists after connective sense disambiguation (11-20 pp), ruling out measurement artifact. Across three semantic similarity metrics, PDTB connective noise explains less than 8% of shared variance (r2<0.08), confirming it captures evaluation signal invisible to existing approaches. We establish discourse-structural noise as a distinct, measurable evaluation dimension for LLM-generated explanations.
