
import json
import os
import subprocess
from typing import Callable

class File:
    def setImageHeight(newHeight):
        File.height = newHeight

    def hasExtension(filename, extension):
        """Checks whether a filename has a specified extension."""
        extensionLength = len(extension)
        if len(filename.split('.')) > 2: return False
        if len(filename) < extensionLength: return False
        return filename[-extensionLength-1:] == f".{extension}"
    
    def transformPath(path: str, transform: Callable[[list[str]], list[str]]) -> str:
        return "/".join(transform(path.split("/")))

    def exists(filename):
        return os.path.isfile(filename)

    def createDirectory(path):
        # print(f"Creating folder {path}...", end='')
        subprocess.Popen(f'mkdir -p {path}', shell=True).wait()
        # print("done.")

    def ensureFolderExists(filename):
        path = '/'.join(filename.split('/')[:-1])
        File.createDirectory(path)

    def deleteFile(filename):
        if not File.exists(filename): return
        print(f"Deleting '{filename}'...", end='')
        subprocess.Popen(f'rm {filename}', shell=True).wait()
        print('done.')

    def copyFile(file, destDir):
        subprocess.Popen(f"cp '{file}' '{destDir}'", shell=True).wait()
    
    def moveFile(file, destDir):
        subprocess.Popen(f"mv '{file}' '{destDir}'", shell=True).wait()

    def copyDirectory(source, dest):
        subprocess.Popen(f'cp -r {source} {dest}', shell=True).wait()
        
    def deleteDirectory(filename, recursive=True):
        if not recursive:
            subprocess.Popen(f"rmdir {filename}", shell=True).wait()
        else:
            print(f"Deleting directory '{filename}'...")
            subprocess.Popen(f'rm -r {filename}', shell=True).wait()

    def getNames(directory):
        """
        Returns relative names of all files under the given directory,
        passing the condition passed in.
        
        Parameters
        ----------
        directory: str
            Path of the directory to start from.
        extension: str, optional
            Only files with this string as a suffix are returned.
            If extension None is passed in, all file names will be returned.
        """
        ret = []
        for path, folders, files in os.walk(directory):
            for filename in files:
                ret.append(f"{path}/{filename}")
            for folder_name in folders:
                ret.extend(File.getNames(f"{path}/{folder_name}"))
            break
        return [
            filename for filename in ret
            if File.hasExtension(filename, "png") or File.hasExtension(filename, "gif")
        ]
    
    def getDirectories(directory):
        allNames = File.getNames(directory)
        ret = []
        for name in allNames:
            words = name.split("/")
            newDir = "/".join(words[:-1])
            if not newDir in ret:
                ret.append(newDir)
        return ret

    def getImage(filename):
        image = Image.open(filename)
        ret = image.copy()
        image.close()
        return ret

    def saveImage(filename, image):
        File.ensureFolderExists(filename)
        image.save(filename)
        
    def displayImageFile(filename):
        """Displays an image by filename. """
        subprocess.Popen(f'imgcat --height 50% "{filename}"', shell=True).wait()

    def displayImage(image):
        """Displays an image by saving it as a temporary file and then using displayImageFile."""
        filename = "temp/temp0.png"
        image.save(filename, "PNG")
        File.displayImageFile(filename)

    def getIndex(filename):
        return filename.split("/")[-1].replace(".png", "").replace(".json", "")

    def readText(filename, fallback):
        try:
            file = open(filename, 'r')
            return file.read()
        except:
            return fallback
        
    def writeText(filename, contents):
        File.ensureFolderExists(filename)
        file = open(filename, "w")
        file.write(contents)

    def writeJson(filename, data):
        File.writeText(filename, json.dumps(data))

    def readJson(filename, fallback=None):
        try:
            return json.loads(File.readText(filename, None))
        except:
            return fallback
        
    def getOutputDirectory(filename):
        dirs = filename.split("/")[1:]
        path = f"output/{"/".join(dirs[:-1])}"

        filename = dirs[-1]
        filenameWords = filename.split(".")
        name = filenameWords[0].replace(" ", "_")
        return f"{path}/{name}"
    
    def getOutputFiles(filename):
        return File.getNames(File.getOutputDirectory(filename))
    
    def hasUnpackingProgress(filename):
        return File.exists(File.getOutputDirectory(filename) + "/progress.json")
    
    def isUnpacked(filename):
        return len(File.getOutputFiles(filename)) != 0
