---
title: "Cognitive Perspectives as Supervisory Signals for Argumentative Role Classification in Social Media"
authors:
  - raghvi-baloni
  - achim-rettinger
venue: "EACL"
year: 2026
#link: ""
#project: 
---
Argumentative discourse on social media encodes not only what users claim but how they epistemically frame those claims. Transformer‑based argument‑mining systems tend to rely on surface‑level linguistic cues and conversational structure. In doing so, they overlook a deeper layer of signals rooted in epistemic cognition, the ways individuals construct, justify, and communicate knowledge. We introduce a framework that operationalizes epistemic cognition theory as a multi-label perspective taxonomy and demonstrates that these labels function as effective supervisory signals for argumentative discourse classification. A structured LLM annotation pipeline enriches 1,734 tweets from the TACO argumentative role dataset with perspective annotations. We further adopt conversation-disjoint evaluation for TACO, since the tweet-level cross-validation used in prior work allows shared conversational context to inflate performance estimates. Under conversation-disjoint evaluation, perspective-enriched embeddings achieve 0.92 macro F1 on four-class argumentative role classification, 12.4pp above embeddings from a text-only fine-tuned encoder. A controlled comparison with sentiment, stance, and random auxiliary signals shows that no auxiliary signal, including perspectives, improves direct classification; the gain emerges only when perspective supervision shapes the encoder's representations. On PHEME rumour detection under leave-one-event-out evaluation, perspective enrichment improves macro F1 by 2.4pp and reduces cross-event variance by 40.6%.
