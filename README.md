Hi Diana 👋

# Running the project
It's just Vite, so you can run the server using `npm run dev` and it will tell you the URL to go to. Then, `<THAT URL>/developer/` is where you can find the developer page.

# Story Editor Notes

## To make changes to the story permanent
After making changes on the developer page, export them using the "SAVE" button in on the global editor screen. This will download a file, replace the contents of `/src/game/tree.ts` with the contents of the downloaded file. Then, subsequent reloads of the developer pages will start from the state as of the "save"ing.

## To generate a graph of the screens.
Copy the code of a python script that generates the graph by pressing the "copy screen graph" button on the global edit page, then run that script. You'll probably need to do some environment setup first lol