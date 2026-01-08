Here are the notes based on lecture 1, and the readings 1.1, 1.2 of the textbook

## Set Theory Review
This is not talked about in the lecture, but there was a set theory review in chapter 1.1. I will not write it down here as I already know most of it and it is kind of a waste of time to note down things I already know.

## What is Probability
Probability is a mathematical framework to deal with uncertainty and randomness. In modern sciences and engineering events are so complicated they are essentially random, or there is large element of uncertainty. Probability gives us the tools to work with these things and reason about them in a structured manner.

## Sample Space, Event, Experiment
We have a few definitions to start with.

Experiment - An experiment is what you do, it has outcomes. An example of an experiment could be tossing a coin once. It could also be tossing a coin twice (this is still one experiment). Each experiment has only one outcome.

Sample Space, $\Omega$ - is the set of all possible outcomes of an experiment. The sample space is exhaustive and all outcomes are unique. A way to think about this is "all outcomes are mutually exclusive and collectively exhaustive". Sample spaces can be discrete (finite), or continuous.

Event - an event is a set of outcomes, which is also obviously a subset of the sample space for a given experiment. The power set of $\Omega$, the sample space is the set of all possible events if you think about it.


> [!NOTE] Sample Space Detail
> The amount of detail in the sample space is something you should think about. Some options make more sense than others and sometimes can make using / thinking about the probability model easier.

Probability Model - a probability model is defined by the sample space, and probability law you use to model the experiment.

Probability Law - a rule that assigns certain probability to events


## Probability Axioms
The main probability axioms are
1. Nonegativity $P(A)\ge 0$
2. Normalization, $P(\Omega)=1$
3. Additive, $P(A \cup B) = P(A)+P(B)$ if $A \cap B= \emptyset$

Any probability model that satisfies these axioms can have the methods of probability theory applied to it.


Some useful points derived from the axioms are
1. $P(A)\le 1$
2. If $A$ is an event, which is a set, that contains various outcomes, then the probability of $A$ is the same as the sum of the probability of the singleton sets that make up $A$, (which are also events because they are sets, just sets of 1 element. They are also disjoint, this much is obvious.)
3. If you have a sequence of events $A_{1}, A_{2}, \dots$, then $P(A_{1} \cup A_{2}\cup \dots)=P(A_{1})+P(A_{2})+\dots$. When I say sequence I mean events that have order. In essence, we can add each events probabilities to find the probability of the union.


> [!NOTE] Notation on $P()$
> Like I said, all events are sets, but to get a probability of a singular outcome, i.e a singleton set, or an event that encompasses only one outome, we would normally write $P(\{S_{1}\})$, where $S_1$ is the outcome in question. We usually shorthand this to $P(S_{1})$, even though $S_{1}$ is technically not a set.

## General Process
The professor gave the general sort of process we go through when solving questions about probability.

1. Assuming the experiment is defined, we need to create a sample space for model. Recall, the amount of detail here is a very important point. You don't want to have too much detail as this will complicate things, but you still need enough to capture what you want to know.
2. We have to make or determine a statement that defines the probability law over the sample space we just created. This is essentially assigns probabilities to the outcomes.
3. You will then have some questions, or be asked some questions, that you need to answer. E.X what is the probability of x happening. From this point we then use the methods that we learn to determine how to compute the probability of the event. I imagine that there are various methods to do this, but the way we go about it is likely situational.


## Discrete Uniform Law
If we are dealing with a discrete sample space where all the outputs are equally likely, then we can apply the discrete uniform law.
$$
P(A)= \frac{\text{number of elements in A}}{\text{total number of sample points}}
$$
Truthfully this is rather intuitive. If we have 16 possible outcomes and they are all equally likely, then the probability of a particular outcome occurring is $\frac{1}{16}$. Similarly if we have an event that encompasses 4 possible outcomes then we would have $\frac{4}{16}$ probability of that happening.

If we are in this case, the challenge usually becomes counting the the number of elements in a given event. Sometimes events are given as a description which has a mathematically meaning rather than a set.

So essentially computing probabilities in the discrete uniform case comes down to counting.

## Continuous and Discrete
Sometimes we have case where all the outcomes is finite (discrete), but there also exists cases where there are countably infinite many outcomes. These cases are called continuous. Note that in the continuous case the probability of any one given outcome is 0. Intuitively this makes sense, because it is essentially saying "what is the probability that 1 out of infinite outcomes happens.". Also, usually to compute the probability in the continuous case we use an integral as apposed to a sum, or simply just adding the probabilities. I guess then, the challenge then becomes, what is the integral in question, and what are the bounds?

## Continuous Uniform Law
In the continuous sense, if all events are equally likely (uniform), then we say that the probability is simply equal to the length / area / volume (depending on dimension) of the event (assuming we can visualize it as one of these). It makes sense then where the integral comes from here.

## Interpretation of $A \cup B$ and $A \cap B$
In the lecture, the professor mentioned that in problems, $A \cap B$ will usually show itself in words as $A$ and $B$ since the intersection requires that an element be in both. In a similar manner $A$ or $B$ will usually mean $A \cup B$ since it can be in either.