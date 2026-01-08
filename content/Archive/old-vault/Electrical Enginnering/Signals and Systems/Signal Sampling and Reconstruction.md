
For computers to process signals, we need to discretion the signal. We do this by sampling the signal at some interval $T$. That is every $T$ seconds we take a sample of the signal. We then have a discrete version of the signal that we can use our discrete processing techniques on.

So the question is now, how frequently do we need to sample our signal such that we can have enough resolution to operate on, and such that we can reconstruct the continuous signal. 

Well it turns out if we sample our signal is **band limited** that is, it spans only a certain set of frequencies, if we sample at a frequency greater than the Nyquist frequency than we can perfectly reconstruct the signal from it's discrete samples.

## Nyquist Frequency
The Nyquist frequency is defined as twice the maximum frequency seen in your band limited signal. So for audio this would be around 40000 Hz since humans cant hear above 20000 Hz and there is no useful information there. So
$$
\frac{1}{T}> 2f_{max}
$$
There is benefits for sampling the signal at a frequency higher than the Nyquist frequency as we will see.

## Reconstruction

To set the stage, imagine that we have our discretion signal and we run the Fourier Transform on it. What we will find is that there will be a repeating pattern in the frequency domain. And, as we increase our sampling frequency, they will grow farther apart. If we go below the nyquist frequency we will find that they actually begin to overlap and we will get interference and be unable to perfectly reconstruct the signal.

Since in the frequency domain we have these sections that are non overlapping, if we use a low pass filter on the signal, then we will be able to perfectly reconstruct the signal from the samples. This is because we can mathematically prove that at the nyquist frequency for a band limited signal, there can only exist 1 such signal that goes through all the discrete points. And in essence we can imagine the other repeating parts in the frequency domain as the other possibilities that could make up the signal, but notice that their frequency band is different, so if we use a low pas filter we can select the one we want and reconstruct our signal.

## Reality
So, in reality most of our signals are not band limited and we don't have ideal low pass filters. So we will have to do our best to band limit the signal before it is sampled. Also it would favor us to sample above the nyquist frequency so that our real low pass filter can have a bit of space to roll off.
