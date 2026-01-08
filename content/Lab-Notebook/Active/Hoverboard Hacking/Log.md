---
created: 2025-12-24
tags:
aliases: []
---

## 2025-12-24
Created the project files. Hoverboard was bought and disassembled about a week ago, just haven't had much time to do any work, but finally I have a chance.

I will begin with hacking the microprocessor. So, there are 2 boards, and they have the [MM32SPIN05PF](https://www.lcsc.com/product-detail/C5182253.html) microprocessor. I also have the datasheet and user manual.
- [[UM_MM32SPIN05x_q_EN.pdf|User Manual]]
- [[C5182253.pdf|Datasheet]]

We can program the microprocessor through the SWD pins that are exposed on each board. To do this we need an intermediate board, a debugger board. This will allow us to program the microprocessor and debug the programs we write using a normal computer. To do this we need to use a firmware like DAPLink or J-Link. There are various others but [DAPLink](https://github.com/ARMmbed/DAPLink) is OSS and doesn't restrict what microprocessors we can use, other than being ARM Cortex I think.

To use DAPLink we need an intermediate MCU board, so they recommend some on the page and I have decided to use the [STM Nucleo 64](https://www.st.com/en/evaluation-tools/nucleo-f030r8.html) board. This board has 2 parts, 1 is just a regular microprocessor you can use for something, the other is the debug programmer for that microprocessor. It probably could also work for other processors but I heard that STM will make it so that the firmware that is on the debugger board only can program STM processors, hence we might need to use DAP-Link. Using DAP-Link means that we would need to re-program the STM debug MCU, but I haven't looked into that yet. Also the way to get the STM debug MCU to not program the processor on the adjacent board is to remove the jumper pieces labeled as "CN2" on the silkscreen, then the MCU will try to program through the SWD pins.

Okay so we get the board and plug it into our computer, our computer recognizes it as some device, so I've been told. With DAPLink it shows up as a USB file device so we can just do drag and drop programming, but with the STM firmware we might need to use their IDE, not sure yet.

To program we will need an IDE / debugger on our computer, there is[ ARM Keil](https://www.keil.arm.com/), but I've been told on linux it is better to use [OpenOCD](https://openocd.org/). I think with OpenOCD we use the GNU/LLVM cross compiler chain to compile the code, then we use OpenOCD to interface with the hardware. 

Okay so to wrap up what weve learned today, this is what I need to do.
1. Buy the STM board.
2. Probably practice programming the onboard MCU that comes with the Nucleo to get an idea of the workflow.
3. Attempt to access the current program and debug interface on the hoverboard microcontroller, preferably using OpenOCD.

That is probably enough for now, there is already plenty of work to do.

## 2025-12-28
Since I don't have the STM micro controller board to begin programming the microprocessor I was looking into making a circuit to charge the 6s lithium ion battery I have. It is a bit harder than I thought but I have learned quite a few things about how designing a circuit actually goes. I imagine there is more to learn to. Nonetheless to charge a lithium ion batter we need a CC / CV charger, which is a constant current / constant voltage charger. The way it works is, we charge the battery with a constant current until we reach the battery's charged voltage (or charging voltage?). Then we keep the voltage constant and let the current drop, once it drops below a certain threshold we are done charging the battery. 

So essentially if we are below the voltage limit we give are max current allowed (the charging current). Once we reach the voltage threshold, which happens because the batteries resistance changes while it chargers (so does it's voltage), we don't raise the voltage anymore and let the current drop. Once the current drops below a threshold we stop providing power.

So that is the gist of how we charge the battery but how do we make a circuit to do this? Well from what I understand we essentially use an adjustable voltage regulator, whose input is controlled by a controller circuit that monitors the current and voltage. I have been looking into using a adjustable buck converter IC's to do this. These IC's implement a control scheme so that the buck converter stays stable, they also have an integrated PWM generator along with a FET, all for 80 cents. I have to  look more into getting the model for one and testing in in LTSpice to see how it works.

That aside I have learned that usually we develop circuits in LTSpice first and get the simulated circuit good before actually ordering parts to build it. I also probably shouldn't use a breadboard since there is many more SMD IC's and components available, plus the breadboard adds significant complications to making prototype circuits. What I have decided then is to use perfboard and solder components to the board to make my prototype circuits. This is a nice happy medium between breadboard and making an actual PCB. Should I have a good design eventually I could also make a PCB and get it built as well. Lots to learn lots to do, but first we figure out the circuit in the simulator.

I also learned that there are breakout boards for common SMD IC packages, these can be used to ease the process of soldering SMD IC's to the perfboard. There is also the "dead bug" method that involves putting it on its back and soldering copper leads to the suspended feet. I have to try this to see how difficult it is in practice, but it seems plausible, definitely going to have to work on my soldering skills though.

For now what I need to do is, 1 order the STM microcontroller board for DAPLink, and 2 start simulating the charging circuit in LTSpice. I think I have picked out a good buck converter IC that should work. I have also find it's spice model and need to import it into LTSpice and read the datasheet to learn how to use it. So, learning to use this buck converter IC is next thing on the list.

Here is the[ IC](https://www.digikey.com/en/products/detail/diodes-incorporated/AP64100SP-13/14123507) in question. It seems to be able to handle the voltage requirements, but I could look for one that pushes more current. For now though I think this is a good start. The datasheet also seems to contain lots of relevant information for it's use so I should probably start there.

## 2025-12-31
Today I made some advancements and realizations on the battery charger. First I have realized that when trying to simulate buck converters with high switching frequencies LTSpice has a significant slow down. So, in the future I will have to adopt different strategies to simulate circuits so that I can do the simulations in a reasonable amount of time. I also found out that there is different model types for IC's, each with a certian level of detail. Obviously there is no point in using a high detail model if you don't need one, since it will slow down your simulation. Specifically I read about Transient and Average models, where transient is a full simulation, and average models give the average values during operation and thus are significantly more lightweight.

Nonetheless I think I have lead on how to actually make a CC/CV charger. So we can easily get an adjustable step down, buck converter IC. These IC's have control systems in them so that they can keep their output voltage constant and stable. The way that this works through feedback into the FB pin on the IC. We can take advantage of being able to insert things into the feedback look and add current sensing circuitry so as to make the control system also give constant current. I'm not going to get too into the details myself because I don't fully understand what is happening because I have yet to learn much about control systems. Essentially we insert components into the feedback loop of the control system to alter it's functionality. Specifically the control system in the chip does something based on the voltage on the FB pin, so we manipulate that voltage accordingly so that it behaves how we want. Fortunately Texas Instruments has made a [[snvaa85.pdf|document]] on this which has been very useful in understanding this. I am not finished reading it yet but I plan to read it more and learn how their circuit works so that I can create it myself.

I actually had found the document earlier but it didn't make sense to me at the time, but once I realized what I needed to do with the buck IC it started to make more sense, and in truth it doesn't seem that complicated so I think I can figure it out.

## 2026-01-01
Had a bit more time today to read over that TI document on making CC/CV. I understand the current sense amplifier circuit for the most part, and I even came up with some values to use in a test simulation.

I will list the values I came up with.
$$
R_{1}=R_{2}=10k
$$
$$
R_{3}=R_{4}=82k
$$
$$
C_{2}=C_{3}=10nF
$$
$$
C_{1}=100pF
$$
and
$$
R_{sense}=0.1
$$
Also
$$
R_{5}=1k
$$
$R_{5}$ is a current limiting resistor.

I calculated these using a desired max current of 1 Amp, and a reference voltage, $V_{ref}=0.8$. The values don't match up perfectly, but that is because I picked the resistor values to be standard decade 5% resistor values. 0.1 ohm for the sense resistor might seem high, but at 1 amp this will only me 0.1 watt's of dissipation which isn't much.

Here is a picture for reference.
![[Pasted image 20260101184450.png]]

When thinking about what op amp I was going to use I went off into a rabbit hole. I could use a regular op amp, or I could use an instrumentation amplifier which would likely be more precise. In this side tangent I found [[designers-guide-instrument-amps-chI.pdf|this]] document from Analogue Devices and it seems like a good read so I'll have to read that at some point. They also offer current sense op amp's as IC's which is exactly what I'm trying to build, so maybe I should consider one of those as well... Either way for simplicity let us just move forward with a typical op amp since that is what the TI document talks about. Also another consideration is the supply voltage of the op amp, and weather the sense resistor will be before the battery (high side) or after (low side). I have to do a bit more thinking and simulation to see what the difference would be, and how the values on the - and + inputs to the op amp can effect the operation as a differential amplifier; specifically because the values will probably be close to either rail and that could be problematic. 

Before I worry about that though I think I should spend some time making an effort to understand the current sense circuit, specifically what the capacitors are doing. I understand loosely that they help stabilize the circuit and can reduce noise but I probably should delve into the theory I know to make sense of why that is and what values make sense and what makes a difference.

## 2026-01-02
Made some progress today in making a CC/CV circuit simulation. I have successfully made a CC/CV circuit using Analogue Devices LT1933 buck converter. This one does not meet my specs but I chose it because it was already in the parts library and easy to work with. The CC/CV circuit I made based off the TI guide I mentioned previously works, the current is capped at a value and the voltage is capped at a certain value. However some more complexity and issues have made an appearance.

Essentially, what I think is happening, is the system is unstable in certain scenarios and we get large voltage ripple (and current) on the output. This is obviously not desirable and I need to figure out a way to resolve this problem. As for why it is happening, from what I understand, it is because we are modifying the loop back transfer function of the IC's control system and this is modifying the overall system transfer function likely introducing poles in unstable or marginally stable locations.

This problem seems to specifically come from the current sense circuit, I even spent a few hours just trying to get the current sense circuit to give a stable output in general. I think the main sources of the instability are, the gain of the differential amplifier in current sense circuit, the capacitors in the current sense circuit, and the response time of the current sense circuit. There are technical terms from control theory but I do not know them as I have yet to really learn control theory so I will not pretend like I know what I am talking about. However, what I have gathered through trial and error is, large gain on the differential amplifier makes the system closer to and unstable state. And, second, the value of the capacitors, C2 and C3 in the picture from yesterday, have to sort of match the value of the resistors they are in parallel with. From my very loose, and probably incorrect, understanding, these components form a low pass filter, and if the cutoff frequency they "make" is too low, it slows down the feedback transfer function of the system and it cant react in time. So the effect we see is overshooting, overcompensation, which leads to an oscillation loop that is rather significant (swinging multiple volts). It seems to make it "stable" the capacitor resistor combination needs to have a cutoff frequency in the 10's of kilo Hertz. I'm not sure if it is correct to think of higher cutoff frequency = faster reaction and adjustment, but that is how I currently understand it and it seems to correlate to what I've seen in the simulation to some extent. Also, from what I understand having a larger gain means that we need to react faster so maybe that cutoff should then be higher as well? I don't know, honestly I probably should learn more about controls to understand how to think about these things and get the results I desire.

Once I did seem to find a stable configuration for the differential amplifier my hopes were shattered when I did a simple test that scales the load resistance linearly with time (to see if the CC/CV behavior would occur / work ), and I noticed at lower load values (lower than 2 ohms), the system had once again become unstable...

This lead me to another though, how do I model the Li-ion battery? Oh boy another can of worms. It seems like that isn't such a simple task and it can get quite complicated. What I did, sort of, manage to learn is that the battery will likely have a low internal resistance, so I will have to find a solution to this system instability, or at least what is causing it. For now though I say we keep it simple and model the charging system as a large capacitor with some series resistance. And should I get something reasonably good enough to actually build a circuit after, when I test the circuit I should test it on charging a large capacitor with a series resistance, or a Lead-acid battery, before I test on the Li-ion. Since, if the system behaves in an unstable manner I won't light my battery on fire.

That's pretty much it for today. I've made decent progress I feel so we just gotta keep going along. Next up solve the stability issue at low loads.

## 2026-01-03
I made a further effort in trying to implement the CC / CV charger in an LTSpice simulation, but I've realized that any more effort I put in will give diminishing returns. This is because currently I simply lack a lot of required power electronics and control theory knowledge to make sense of the control scheme used and how to manipulate it. I will be learning these things soon, so I don't think there is much purpose in trying to understand so much in such a short time before school again, it will only serve to frustrate me more. It really is a gut punch to the ol ego but I think my effort is better focused elsewhere. 

That being said I have a new idea, one that will allow me to still charge the battery and possibly let me learn about how a real CC/CV circuit is made. My plan is to buy an already built CC/CV power module off ebay, see [this](https://www.ebay.com/itm/185640307601?_skw=cc+cv+power+supply&itmmeta=01KE2SPXSA78YJDGCZH096RNQ4&hash=item2b39064b91:g:7JkAAOSwALdjYRiS&itmprp=enc%3AAQAKAAAA0IUNi59bckQcV2ImusJGAkE8QaY%2FE%2FJnNwGMQ87T7B0GgsNzfGb3avNT7XaF%2FCFPj36Ym1N2y91v%2FkLXHFkhiL9e2bdwttDxKXxVowQiVI4w%2FLLvub8cnk4VrjGCZ35Gqwhn5dNut60t5CvYlmNTwEFpTcwOIkcjGiR8AziY8cO7NFW1YioyWL5VUqg5Wi5E6Lb5g%2Fz3%2BIHcSzEIhhvRl1Enrcl3XLnHGqLLJrjKZJ0KMR2DMGPLqTVljnxs27%2F4q7XHbQsuao5e6R8AsvpoVfw%3D%7Ctkp%3ABk9SR_Tc29nwZg). This saves me the headache of making the CC/CV circuit, and now I just have to set it to the values I desire and implement some circuitry to cutoff power when the battery is charged. It is also not that pricy so I think I will buy 2 of them and make an attempt to reverse engineer it. Maybe then I can gain some insight into how a functioning CC/CV circuit is actually made, and maybe I can re-create it myself. Either way this allows me to make progress on the battery charger project.

I was also thinking about ordering some of the buck converter IC's anyway to mess around and experiment with in the lab. I figure that maybe I could gain some insight into what actually happens and maybe could better grasp the situation. I also just want to try what I already built in the simulation to see if it really would work and how the simulation results differ from reality.