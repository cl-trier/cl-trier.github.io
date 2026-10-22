---
title: "Learning from recorded games: A scoring policy for simulated soccer agents"
authors:
  - achim-rettinger
venue: "Fachberichte Informatik"
year: 2005
link: "https://www.uni-trier.de/fileadmin/fb2/LDV/Rettinger/publications/Rettinger04-Learning_from_Recorded_Games.pdf"
project: 2023--twon
---

This paper outlines the implementation of a new scoring policy for the agents of the Simulated Robot Soccer team from the University of Koblenz, called RoboLog. The applied technique is capable of acting in real time in the dynamic environment of the RoboCup Simulation League and uses data obtained from prerecorded soccer games for supervised neural network learning. The benchmark used for testing this approach is the Optimal Scoring Problem stated as finding the point in the goal where the probability of scoring is the highest when the ball is shot to this point in a given situation. Goalshot situations from numerous logfiles are extracted and employed for the training of two independent multi layered perceptrons. Beside the usage as training patterns the gained data is evaluated statistically and provides interesting general insights into goalshots carried out lately in Simulated Robot Soccer.