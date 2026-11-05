---
title: "The Unsampled Truth: Quantifying Prompt Artifacts in LM Psychometrics"
authors:
  - nils-schwager
  - christoph-hau
  - simon-münker
  - achim-rettinger
venue: "Findings of EMNLP"
year: 2026
link: "https://aclanthology.org/2026.findings-emnlp.1009/"
project: 2026--emosci
---

When prompting language models for psychometric assessment, researchers assume that the responses reflect the injected persona and the meaning of the survey item. We test this premise using a diagnostic design that crosses five semantically distinct baseline personas with five semantically equivalent variants of each of four prompt components (persona wording, task instruction, item wording, option symbol). Measuring the 1-Wasserstein distance between the resulting response distributions and partitioning the variation among the five components allows for the separation of target effects from prompt artifacts. We apply the framework to 13 open-weight small language models (0.6B–14B) on the Big Five Inventory and the Short Dark Triad. We find that in most models, the task instruction and option symbol displace response distributions further than paraphrasing the persona description or the item itself. For a substantial share of items, the artifact share of explained variation exceeds 50%; non-semantic changes of the prompt account for more response variation than the baseline personas. Our framework lets researchers quantify these prompt artifacts before interpreting psychometric output.
