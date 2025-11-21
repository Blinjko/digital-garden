## Components
1. Sign bit
2. Exponent
3. Mantissa


### Convert fractional part of a number to binary
If we have bits after the 0 bit, then they have values, $2^{-1},2^{-2}$ etc. So to convert the fractional part to binary we follow the steps.
1. Multply the decimal by 2, if the result is greater than 1, keep the fractional part, this position is a 1 in binary.
2. Repeat the above until you get 1 and there is no remainder or until you have reached the bit width of your mantissa (this is where the rounding error comes in).
3. Note that the bit position that we start at  is $2^{-1}$.
### How to Convert a decimal number to floating point.
1. Convert the non fractional part of the number into binary.
2. Convert the fractional part of the number into binary using the method noted in the relevant section.
3. Write the number complete in binary now, this is known as fixed point notation. Shift the decimal over until there is only 1 bit on the left hand side. Note down the amount of places you shifted the decimal place, this is the value of our exponent (for now).
4. Add $127$ or $1023$ to the value of the exponent and put this value into binary, this is our exponent value.
5. The bits from the converted fractional part is our mantissa, pad this with 0's until you reach full length of the mantissa section.
6. Set the sign bit accordingly.