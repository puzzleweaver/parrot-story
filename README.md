Hi Diana! 👋

# Running the project
It's just Vite, so you can run the server using `npm run dev` and it will tell you the URL to go to. Then, `<THAT URL>/developer/` is where you can find the developer page.

# Story Editor Notes

## Query Parameters
You can add query parameters to the developer page url to get little quality of life improvements:
 - `<URL>/developer/?freeze=true` will freeze all animations except while you're pressing the `p` key.
 - `<URL>/developer/?nolow=true` will use a higher-resolution canvas everywhere, avoiding the possibility of reused-canvas-resolution weirdness.
 
(And of course, if you want to have multiple of these, use an `&`. Like `<URL>/developer/?freeze=true&nolow=true`)

## To make changes to the story permanent
After making changes on the developer page, export them using the "SAVE" button in on the global editor screen. This will download a file, replace the contents of `/src/game/tree.ts` with the contents of the downloaded file. Then, subsequent reloads of the developer pages will start from the state as of the "save"ing.

## To generate a graph of the screens.
Copy the code of a python script that generates the graph by pressing the "copy screen graph" button on the global edit page, then run that script. You'll probably need to do some environment setup first lol

## To update the tree of assets used in the developer pages
From the project root, run scripts/compile.py. This will print a long block of code, which you can paste over the two very long lines in src/game/asset.ts.