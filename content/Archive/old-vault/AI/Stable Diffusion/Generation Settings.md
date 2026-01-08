Notes from [here](https://civitai.com/articles/904/settings-recommendations-for-novices-a-guide-for-understanding-the-settings-of-txt2img)

### Seed
- no effect on image qualtiy
- seed is a key to reproducing the same image - given same settings and whatnot
- -1 means random
- dice button means make seed random
- recycle button means re-use seed from previous image generated
- generally leave at -1 unless you are trying to reproduce specific image

### Sampling Method & Sampling Steps
[Link](https://stable-diffusion-art.com/samplers/) - info about how samplers work
- Samplers are just algorithms that chip away noise from the latent image.
- Euler a - rapid prototyping, fast, generally leaves out intricate details
- DPM++ 2M Karras - slow, but gives images a fuller feel and is more detailed
- Sampling steps - generally and simply speaking this is the amount of steps the AI is given to draw the image; more is not equal to better, ( over simplified explanation)
- Sampling methods perform differently depending on the # of steps, and it heavily depends on the sampler used, some need more, some need less, overall though too little = bad, and too much = bad, so there is a happy medium. Generally 35 is a guidance place to start and over 50 is generally not worthwhile. Recommended range is 20-50 but tune respectively

### Restore Faces / Tiling
##### Restore Faces
- Smaller pass at the end to airbrush faces
- More useful if you cannot run hires fix
- generally leave unchecked, but it can be played with
##### Tiling
- tiles images
- generally leave unchecked unless you are interested in using

#### Hires.  fix
Guide on upscalling ( how it works ) - [Link](https://stable-diffusion-art.com/ai-upscaler/)
- Probably the single best thing you can do to increase image quality
- Up scaling means increasing resolution, and adding more detail
- Things needed by the Hires. fix
	1. Upscaler  
		- Default ones in A1111 are ok, generally thought that they could be better though. 
		- Upscalers have a .pth file & are placed in your "stable-diffusion/modles/ESRGAN" & the RealESRGAN folder, needs restart
		- Upscaling models can be found [here](https://openmodeldb.info/)
		- Recommended ones; [4x-UltraSharp by Kim2091](https://mega.nz/folder/qZRBmaIY#nIG8KyWFcGNTuMX_XNbJ_g), [NMKD Siax ("CX") by Nmko](https://icedrive.net/s/43GNBihZyi), [Remacari by Foolhardy](https://drive.google.com/file/d/1lELx_WiA25_S8rYINm_DyMNpFOhfZAzt/view) ( Honorable mention )
		- Generally 4x-Ultrasharp makes cleaner pictures, and NMKD Siax is better with finer details - both were designed with anime in mind but still work nonetheless
	

	1. Upscale by
		-  the multiple of the starting resolution you wish to upscale by.
		- Depends on how much ram / vram you have
		- general advice is to do as much as you can / need
		- 512x512 = square
		- 512x768 = portrait
		- 768x512 = landscape
	1. Hires steps
		- Similar to sampling steps, dictates the number of steps the upscaler will go through.
		- Setting to 0 is = to setting to the # of sampling steps
		- Steps are slow but this is where the most detail comes from
		- 15 is generally good, lines up will with 35 sampling steps to get a 50 overall steps
		- Having too much steps can add excess detail ( can be good or bad depends on what you want, generally bad for realism)
	2. Denoising strength
		  -  Indicates to the upscaler how much of the image it can change as a percentage
		  - 0 = change nothing
		  - 1 = can change everything ( generally yeilds unexpecting results)
		  - default is 0.7 which is too much for UltraSharp and 4x_NMKD but good for Latent Upscalers.
		  - Once again a balace, too little can result in not enough change, and too much can result in extra unwanted change.
		  - General advisment is 0.3 - 0.5 with 0.4 being middle ground, sometimes playing around is needed
#### CFG Scale
- The amount of force you want to put behind the prompt to the AI
- 30 forces it to use only the words in the prompt, generally results in an overcooked look
- 0 says that the prompt doesn't matter and you will get whatever the AI wishes
- The default of 7 is pretty good, the safe range is considered 5-11
#### Batch count / Batch size
- Count = how much images to generate per generate button press
- size = how many images each cycle generates, uses alot of RAM / VRAM
- General advice is to leave at 1 & 1 while dialing in a prompt, and generally only change after you have the prompt dialed in and want to make a batch

#### Clip skip
- lots of debate on this setting
- AI digests the prompt in layers, if this is set to 2, its basically like saying "dont do the last layer", 3 = last 2 layers etc. ( very oversimplified )
- Can *potentially* yield better results, really hit or miss.
- General advice is to leave it on 1 or 2
- NOTE: is not displayed in A1111 by default, have to go into UI settings and add CLIP_stop_at_last_layers to  Quicksettings list.

#### Copying Generation Data
1. copy data from wherever
2. paste into prompt box
3. Click on blue arrow under generate box
4. settings should be set


#### Real time generation GIFS
Can help you see what STD is doing when its generating the images. The settings regarding the preview can be changed in the settings. If you see something you don't want that keeps appearing, you could put it in the negative prompt, and so on and so forth.