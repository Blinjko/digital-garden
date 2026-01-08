---
created: 2025-12-15
tags:
---

## Outline
1. Conditional Probability
2. Multiplication Rule
3. Total Probability Theorem
4. Baye's rule

## Note on the Additivity Axiom
For reference the axiom is
Suppose we have a sequence of disjoint events $A_{1}, A_{2},\dots$, then 
$$
P(A_{1}\cup A_{2}\cup \dots)= P(A_{1})+P(A_{2})+\dots
$$
However this only works if the sequence of sets is countably infinite. It does not work if the sequence of sets is uncountable infinite. The integers is countably infinite, but the real numbers is uncountably infinite.

## Interpretation of Zero Probability
Having zero probability does not mean something cannot happen, it just means that it is very very unlikely to happen. This is apparent in the continuous case where the output of the experiment is a point, but a point has a probability of 0 yet you still got that output, hence zero probability doesn't necessarily mean it cannot happen (otherwise why would it be in the sample space?)

In a similar sense probability of 1 doesn't mean absolute certainty just that it is very very likely.

## Conditional Probabilities
When we are given information about the outcome of an experiment, we need to change the probability of the event in question because now we know that a certian other event has occurrent.

Symbolically $P(A|B)$ is the probability of event $A$ knowing that event $B$ has occurred. So, in essence we change our universe to $B$ now, because we know that everything outside of $B$ has not occurred. Since the universe changed, it makes sense that the probability of $A$ must also change.

Naturally $P(B|B) = 1$,

The definition of conditional probability. Assumes $P(B) \ne 0$
$$
P(A|B)=\frac{P(A\cap B)}{P(B)}
$$
We can rewrite this as
$$
P(A \cap B) = P(B)P(A|B) = P(A)P(B|A)
$$
Naturally conditional probabilty creates probability models that obey the probability axioms. The provided $A\cap B=\emptyset$
$$
P(A\cup B|C) = P(A|C)+P(B|C)
$$
It is also useful to know that
$$
P(A|B)=1-P(A^{c}|B)
$$
Which makes sense because we can just imagine that $B$ is are new sample space.

## Multiplication Rule
A derived rule from conditional probabilites.
$$
P(A\cap B \cap C) = P(A\cap B)P(C|A\cap B)
$$
Recursively we apply the same technique.
$$
P(A\cap B)=P(A)P(B|A)
$$
Thus
$$
P(A\cap B \cap C)=P(A)P(B|A)P(C|A\cap B)
$$
## Law of Total Probability
Suppose we partition the sample space into $n$ disjoint sets. Partition means that the union of these sets equals the sample space. If this is true we can write the probability of an event $B$ as the weighted sum of the probabilities of each partition and $B$ occurring.

EX: suppose we partition a sample space into 3 sets, $A_{1},A_{2},A_{3}$. Which are all disjoint, and $A_{1}\cup A_{2}\cup A_{3}=\Omega$
Then we can find the probability of $B$ by using
$$
P(B)=P(A_{1})P(B|A_{1})+P(A_{2})P(B|A_{2})
+P(A_{3})P(B|A_{3})

$$
This is the law of total probability.

It is derived from the following and using the multiplication rule.
$$
P(B)=P(A_{1}\cap B)+P(A_{2}\cap B)+P(A_{3}\cap B)
$$
Since $A_{1},A_{2}, A_{3}$, make up a partition of $\Omega$ then it makes sense if we take the probability of $B$ happening and each event happening, sum them up, we would get the probability of $B$.

The LOTP allows us to break the up the calculation of an event, and is quite useful for doing this.

## Bayes' Rule

First some terminology.
We call $P(A)$ the prior probability. Suppose we then observe that event $B$ happens. $P(A|B)$ is revised "belief" that event $A$ will occur, and thus is called the posterior probability.

We can derive Bayes' rule by using conditional probability and the multiplication rule.
$$
P(A|B)=\frac{P(A\cap B)}{P(B)}=\frac{P(A)P(B|A)}{P(B)}
$$
Usually we will use the LOTP to find $P(B)$.

Bayes' rule is useful because it allows us to reverse the order of conditioning.

If we think about cause and effect, we can view $P(B|A)$ as meaning, "given $A$ has happened (cause), what is the probability of a certain event $B$ (effect) happening?". If we know this, then we can make an inference on the inverse, "If $B$ happened (cause), then what is the probability of $A$ happening? (effect)"