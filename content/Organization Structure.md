This note serves as a reference to how I organized this garden, mainly for myself but also for others should they peruse the site generated from these files.

## Goals
The organization structure I ended up using here took me awhile to come to, and it is kind of a hybrid between a few different structures. I wanted to share the goals of this organization structure because it might make help clarify why certain choices were made.

1. Be able to hold reference notes (mainly technical), personal notes (journals/reflections), and ideas / thinking notes (evergreen).
2. Make taking and managing notes / knowledge as easy as possible.
3. Keep the organization system as simple as possible.
4. Be as future proof and adaptable as it can be.

## Top Level Folder Structure
The top level folder structure is as follows
- Attachments
- Archive
- Evergreen
- Lab-Notebook
- Personal
- Reference
- Templates

Read the corresponding subsection for each to get an idea and the rules that govern it.

### Archive
Archive is for old notes, from my old vault setup, and any other notes that don't have a proper place in this new scheme. I will use it as a "trash can" for things that I don't want to permanently delete but also don't want polluting my main vault.

### Attachments
All attachment files, pdf, images, etc, will be put in here for the sake of cleanliness. The only exception that I have is for journal audio memos, and fleeting thought audio memos / videos. These specifically are localized to their own area so the clutter wont be a big deal, plus I want to be able to access them as a group without having to filter through the attachment folder.

### Evergreen
This folder will have a flat file structure as that serves the evergreen style best. I might make a folder for the fleeting thought audio memos just for easy access though. I will also use tags to identify note statuses. I.E seed, sapling, evergreen. The notes in here will be the evergreen style and will follow those principles.

1. All notes are atomic
2. Notes are densely linked
3. Notes are concept oriented
4. Write for yourself
5. Link by Associations & conceptually

### Lab Notebook
This folder is where project information is held. Inside this folder you will find 3 other files
- Active
- Archived
- Workbench

The Active folder contains folders of the currently active projects. 
The Archive folder contains folders for currently inactive / finished / completed projects. 
Workbench is like a project index page that links to the individual project pages.

Each project will have it's own folder named according to the project. Depending on the status of the project it will be either placed in Active or Archived. Inside the project folder there will be 2 files.
- Index
- Log

The Index file is the project index page. It will typically give a small synopsis on the project and other relevant information.

The Log file is like a digital lab notebook. It is a file that contains dated entries detailing the progress of the project as time goes on. It is ordered chronologically and has a very informal non-restrictive format. That is, simply just log what you did and the thoughts on the project today. The idea behind the log is that it allows you to distill your thoughts and progress so that if you or someone else wants to follow what you did they can just read you daily logs.

If I want to add other files inside each project folder I think it is all right, since every project is kind of like its own contained unit. For example it might be nice to include source code files for reference, or just to keep everything relevant in one place. This doesn't ruin the overall structure of the vault so I think it is ok. Restricting it anymore would lead to more friction than necessary.


### Personal
This folder contains personal notes in general. I will try to keep this folder as flat as possible, but the structure is flexible since I cannot really foresee what will go here. For now there are the following sub folders.
- Daily Notes

The Daily Notes folder will contain my daily notes / journal. Each note name will just be the date it corresponds to, this makes it easy to create daily notes, and sorting them should be easy enough since they are all dated. Each daily note will have whatever I felt like including that day inside the note. It could have an audio memo, a picture, video, whatever I feel like.

This folder will likely not be shared for obvious reasons.

### Reference
The reference folder, in general, is meant for notes that are meant to be referenced. Mainly technical material is housed here as you will see. Most of the thought that went into this organization scheme was put into how I would organize the technical information along with the non-technical notes like evergreen notes.

Here are the sub folders I decided on for the reference folder.
- Captures
- Glossary
- Guides
- Examples
- MOC
- Cheatsheets
- Snippets
- Specs

The last 2 I don't really remember the purpose of at the time of writing, so I wont talk about them, but they will exists should I come across the moment when I realize why I put them there.

First I would like to comment on the note taking process of technical notes.
1. Information is captured in a loose non-restrictive format, and is kept within the Captures folder.
2. A lazy evaluation technique is used to distill capture notes into the Glossary. I.E when information is repeatedly taken from a capture, an atomic Glossary note is created. Similarly if a guide or example is in a capture and keeps being referenced I will distill it into its own note and put it in its respective folder.
3. MOC (Mapping Of Contents), sort of like an index page, is created to gather relevant glossary notes, examples, and guides onto one page. This makes for easier navigation and allows for the grouping of information without a really restrictive organization scheme.

This process happens over time and naturally distillation will have to happen when I actually have time to do so. This processes makes it easy to take quick notes because you don't have to worry about formatting, linking, etc, you just write the information down. Then you distill it as you use it making sure to extract actually relevant parts into more polished discrete notes.

I touched on it in the process but I will explain what each sub folder will hold

**Captures** - this folder holds raw captures, i.e notes from a lecture, reading, talk, whatever. They don't have a restrictive format, they are essentially raw unprocessed information. The only restriction I have is that they are placed in a respective sub-folder corresponding to what the capture note is relevant to. I.E if I have a class, say MATH 2445, I would create a sub folder in the Captures folder and put my reading and lecture notes inside the class folder. This keeps relevant things together and doesn't add too much folder complexity. Ideally the sub folders I just mentioned would have a flat structure for simplicity, but it can go a layer or two deeper if it makes sense.

**Glossary** - This is the folder will contain distilled definitions. The folder will have a flat structure for simplicity. Also, in a similar spirit to evergreen notes I have guidelines for how a glossary note should be structured.

- Glossary contains definitions, make them as atomic as possible
- Link to other mentioned definitions when applicable
- Link to other related notes as applicable
- Glossaries are not guides, or examples, they are definitions. Link to a separate example note as necessary.

I think it is important to drive home that the Glossary folder is for definitions, i.e notes that define one thing and only one thing. They do not contain examples or information on how-to do something, there are separate places for that.

Yes the folder structure is flat, this is because it is simpler and easier than creating folder or tag rules to group notes in some way. Notes are grouped by MOC, Mapping of Contents, pages, which is better because it is more loose and flexible, plus it allows for adding context when referring to certain notes. Notes can also be part of multiple MOC pages without any added complexity, and the MOC style looks well on the graph view.

**MOC** - This folder will contain the MOC, Mapping of Contents, notes. It will also have a flat structure.

MOC allows me to link together technical notes with high flexibility. You can think of them as index pages, they collect groups of notes that are related in some context and allow for more context driven navigation.

**Guides** - The guides folder is also has a flat structure and will contain "guide" notes. In general, I define a "guide" note as any note that tells you "how-to" do something. This includes things like setup guides for software / applications, and solving techniques used in math / engineering. These notes are complementary to example notes and glossary notes.

**Examples** - Like the others, this folder also has a flat structure. Notes that go over examples of how to do something are what belong in here. Example notes are complementary to glossary notes and guide notes.

**Cheatsheets** - this folder holds notes that serve as cheatsheets or quick references, it also has a flat structure.

**Snippets** - Like I said before, I don't really remember what this folder was for when I created it, but I will keep it for now in case the day arrives that I remember or realize why I made it.

**Specs** - This folder is meant to hold notes on specifications, i.e documents that specify the structure or functioning details of something. As I'm writing this, it doesn't seem that useful so I might get rid of it at some point.