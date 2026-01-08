---
created: 2025-12-16
tags:
---

## Outline
Today we covered lecture 3 video and section 1.5 in the book.

 
## Independence
Independence is when known that one event occurred doesn't change the probability of another event occurring. Mathematically this is written as
$$
P(A|B)=P(A)
$$
This can be verbalized as, "occurrence of $B$ provides no information about $A$'s occurrence." I.E knowing that $B$ happened doesn't give you any insight. This is not always the case as we know from conditional probability, but it is a special case.

We know from conditional probability that
$$
P(A\cap B)=P(A)P(B|A)=P(B)P(A|B)
$$
And if events $A$ and $B$ are independent then
$$
P(A\cap B) = P(A)P(B)
$$
This is the definition of independence of 2 events. A subtle point here is that if
$$
P(A|B)=P(A)
$$
then
$$
P(B|A)=P(B)
$$
Is also true.

So, in general to check if two events are independent we check to see if
$$
P(A\cap B)=P(A)P(B)
$$
is true, if it is not then they are not independent. Likewise if we know that they are independent then we can assume that this equation holds true and use it.

Also useful to know that, provided $P(B)>0$, the conditional probability still holds. However, the definition of independence holds even if  $P(A)=0$ or $P(B)=0$, because that would mean their intersection is the empty set, and the probability of the empty set is 0. And if we use the definition we find that 0 = 0, which is in fact true. A takeaway from this is that an event with probability of 0 is independent of all other events.

Independence usually arises when you get distinct physical phenomena that do not interact. In this sense independence is rather intuitive. EX: I flip a coin now and I flip one in 5 minutes, the events of the first toss are completely independent of what will happen in the second toss.

Independence can also arise due to numerical accidents, I.E you have events that are physically related but the math says they are independent due to your numbers being off (numerical error).


> [!Warning] Independence and Disjointness
> If we have 2 events that are disjoint, it might be intuitive to say they are independent, but this is simply not true. In fact it is a case of extreme dependence, if you know one happened you definitely know the other didn't happen. Independence is difficult (or impossible) to visualize in the sample space so I recommend not doing so as you will confuse yourself. Stick to the mathematical guns.

## Conditional Independence
If we are in a conditional universe, i.e we are conditioning on some event, independence still exists. It makes sense if you think about the conditioning as changing the sample space.

This gives the definition of conditional independence.
$$
P(A\cap B|C)=P(A|C)P(B|C)
$$
However, it is important to note that $A$ and $B$ might be conditionally independent, but this does not necessarily mean they are independent in the original universe. That is
- Conditional Independence does not imply independence.
- Independence does not imply conditional independence.

## Independence of Multiple Events
We know the definition of independence if we have 2 events, but what if we have 3 events or more? Well, suppose we have events $A_{1},A_{2},A_{3}$. All three events are independent of each other if all the following conditions are true
$$
P(A_{1}\cap A_{2})=P(A_{1})P(A_{2})
$$
$$
P(A_{1}\cap A_{3})=P(A_{1})P(A_{3})
$$
$$
P(A_{2}\cap A_{3})=P(A_{2})P(A_{3})
$$
$$
P(A_{1}\cap A_{2}\cap A_{3})=P(A_{1})P(A_{2})P(A_{3})
$$
The first 3 conditions tell us pairwise independence, i.e that each pair of events is independent of each other. The last condition is the condition for independence of the events. 

> [!NOTE] Pairwise Independence and Independence
> Pairwise independence does not imply independence and visa versa. 3 events can be independent and not pairwise independent.


## Note on solving problems
At the end of the lecture a problem is presented and it is essentially said, after some solving, that the answer depends on information that needs to be assumed. Depending on what you assume determines the probability model and therefore can directly change the result. I.E be careful about what you assume and what information is given so as to make the right probability model for the situation.