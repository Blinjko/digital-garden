---
created: 2025-12-17
tags:
---

## Content
Section 1.6 in the book, we go over counting methods since counting has been coming up in probability.

## Motivation for counting
In probability when we have a sample space that is finite and uniform (discrete uniform), calculating some probabilities eventually just comes down to counting, hence we need a way to count. Recall the discrete uniform case
$$
P(A)=\frac{|A|}{|\Omega|}
$$
## Basic Counting Principle
A basic way to think about counting is to imagine an experiment as sequential stages where you have some number of discrete choices at each stage. The number of total outcomes is simply the product of the possible choices at each stage.

We will see that the number of choices at each stage can follow a pattern (in some cases), and we then can describe this in a formulaic way.

## Permutations
If we have some elements, a permutation of those elements is any way that you can order said elements. We cannot use the same element twice, but we might have 2 separate elements that are the same thing with some distinction (like position, time ,etc). So, then to compute the total permutations of a set of $n$ elements,
$$
\text{number of permutations } = n!
$$
since we have $n$ choices to start, but we cant reuse the one we just chose, so for the second iteration / sequence we have $(n-1)$ elements, 3rd, $(n-2)$, and so on, which is just the factorial.

## Combinations
A combination is like a permutation but the order doesn't matter, i.e permutations with the same elements but in different order are the same combination.

Before we think about how we deal with counting and order not mattering, let us go back to permutations. Before we showed how to get all possible permutations when the size of our list was equal to the number of elements. So, how do we find the number of permutations if the size of the list in question is less than the number of elements?

Intuitively we just follow the counting principle, we start with $n$, then $n-1$, $n-2$ and so on, until we reach the length of our list. Suppose the length of our list is $k$ and $k\leq n$. Then, we would stop multiplying when we reach the $k$'th iteration, at which we would be multiplying my $(n-k+1)$. So, we essentially just chop off the tail end of the factorial. The way we do this mathematically is by dividing by another factorial which starts right after where we end. Thus to count the number of $k$-length permutations out of $n$ elements
$$
\frac{n!}{(n-k)!}
$$
Now to think about the issue of order. If we have a group of $n$ elements and we want to choose $k$ out of them, but order doesn't matter, what is the unique number of ways I can do this? Well we already figured out how to determine the number of possible permutations we could get, but if we think about them as combinations there are duplicates. If you suppose we already has chose $k$ elements, we know that the total number of ways to arrange them (permutations) is $k!$, we can think of these as duplicates because here only the order differentiates them, not the elements. So, if we divide out the duplicates then we would have the number of ways (combinations) that we could choose $k$ elements out of $n$ elements. And thus
$$
{n \choose k }=\frac{n!}{k!(n-k)!} = \text{ binomial coefficients}
$$
Since sets by definition don't have order, we can think about combinations as, "how many subsets of size $k$ are there in a set of size $n$".

## Useful Identities Involving Binomial Coefficients

$$
\sum_{k=0}^{n}{n \choose k}=2^{n}
$$
Essentially above we are just counting the total number of subsets of $n$, which we know to be $2^n$.

## Binomial Probabilities & Bernoulli Trials
Bernoulli trials are independent consecutive trials that have 2 outcomes, one of probability $p$ and the other $(1-p)$. An example of this is tossing a coin some number of times.
So for example, suppose we are flipping a coin, what is the probability that we get a sequence with $k$ heads if we flip a coin $n$ times? 

To start we can think of the probability that we get $k$ heads, this is simply
$$
p^{k}(1-p)^{n-k}
$$
Because the trials are independent and can only have 2 outcomes. Note that this is the probability that we get one of the sequences with $k$ heads, there are multiple, so we need to count them all and multiply this probability by that number. The number ends up being the binomial coefficients, except here what we are choosing is not heads or tails, it is the position, i.e how man ways can I choose $k$ positions from $n$ possible positions. Each position chosen will get a head in this case. Thus we have the final probability that we get a sequence of $k$ heads after flipping a coin $n$ times.
$$
{n \choose k}p^{k}(1-p)^{n-k}
$$
If we sum over all possible values of $k$ then we actually collect the whole sample space. Think about it as asking, what is the probability we get 1 head, 2 heads, ... n heads. There is no options left thus
$$
\sum_{k=0}^{n}{n \choose k}p^{k}(1-p)^{n-k}=1
$$
Which turns out to be useful.

## Partitions
Suppose I have a set of $n$ elements and I want to partition it into some number of sets. What are the number of unique ways that I can do this? We have the formula
$$
\frac{n!}{n_{1}!n_{2}!\dots n_{i}!}
$$
Where $n_{i}$ is the number of elements in the $i$'th partition. We can simply derive this using the "n choose k", binomial coefficients.