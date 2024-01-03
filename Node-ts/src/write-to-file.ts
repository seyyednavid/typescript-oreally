import fs from "fs";

let text: string = "Hello from typeScript";


function doneWritingFile(err: NodeJS.ErrnoException | null): void{
    if(err) {
        console.log("There was an error");
    } else {
        console.log("Done");
    }
    

}

fs.writeFile("file.txt", text, doneWritingFile);
