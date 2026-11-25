---
title: "Measuring Narrative Behavior in LLMs: An Empirical Analysis of Instruction-Following Across Culturally Diverse Personas"
authors:
  - raghvi-baloni
  - rutvi-baloni
  - achim-rettinger
  - walter-laurito
venue: "WNUT @ EMNLP"
year: 2026
link: "https://www.aitj.org/index.php/journal/article/view/17"
---
When an AI system explains a decision, does it matter whether the conclusion comes first or whether evidence accumulates toward it? These two explanatory architectures can express identical content yet guide users’ reasoning in systematically different ways. We study whether AI systems can be reliably instructed to adopt each structure, top‑down explanations that begin with a general claim and justify it, and bottom‑up explanations that build from specific observations toward a conclusion. In a controlled empirical study, 30 culturally diverse AI personas (USA, India, Japan) respond to ethical dilemmas under top‑down, bottom‑up, and uninstructed baseline conditions. We evaluate compliance using four structural metrics that measure where the main claim appears, how the level of generality shifts across sentences, how much evidence precedes claims, and how responses open, none of which are captured by standard NLP similarity metrics. To isolate instruction effects from each scenario's natural default, we compute signed compliance deltas relative to uninstructed baseline responses. Bottom‑up compliance is robust and culturally invariant (mean Instruction Following Score = 0.91). In contrast, top‑down compliance is scenario‑dependent and fails specifically on sustaining a decreasing level of generality across the full response (IFS as low as 0.29), even when the main claim is correctly placed early. Outlier analysis reveals a culturally patterned resistance among Japan personas consistent with ki‑shō‑ten‑ketsu discourse conventions, showing that cultural defaults in text structure can override explicit instructions in ways invisible to content‑based evaluation. These results position explanatory structure as a measurable transparency signal and introduce a replicable framework for assessing whether AI systems can be steered at the level of explanatory architecture.
