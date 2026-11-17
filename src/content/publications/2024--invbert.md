---
title: "InvBERT: Reconstructing Text from Contextualized Word Embeddings by inverting the BERT pipeline"
authors:
  - kai-kugler
  - simon-muenker
  - johannes-höhmann
  - achim-rettinger
venue: "JCLS"
year: 2024
link: "https://jcls.io/article/id/3572/"
---

Digital Humanities and Computational Literary Studies apply automated methods to enable research on large corpora which are not feasible by manual inspection alone. However, due to copyright restrictions, the availability of relevant digitized literary works is limited. Derived Text Formats (DTFs) have been proposed as a solution. Here, textual materials are transformed in such a way that copyright-critical features are removed, but that the use of certain analytical methods remains possible. Contextualized word embeddings produced by transformer-encoders are promising candidates for DTFs because they allow for state-of-the-art performance on analytical tasks. However, in this paper we demonstrate that under certain conditions the reconstruction of the original text from token representations becomes feasible. Our attempts to invert BERT suggest that publishing the encoder together with the contextualized embeddings is unsafe, since it allows to generate data to train a decoder with a reconstruction accuracy sufficient to violate copyright laws.
