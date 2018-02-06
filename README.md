# node-notebook
Using a notebook feature to demonstrate basic file Read-Write operations in Node.js

1. Navigate to the base-directory from node.
2. Run npm install.
3. Run node app.js "arg1" --title="book title" --body="book body"

   a. arg1 can be "add","read","list","remove" 
   
   b. Sample Argument
   
     1. node app.js add --title="Pro Git" --body="Amazon Kindle Free eBook"
      
      App Response:
      
        Note Added Successfully
        --
        Title:Pro Git 
        Body:Amazon Kindle Free eBook
        
     2.  node app.js list
     
     App Response:
     
        Printing 2 note(s).
        --
        Title:Pro Git
        Body:Amazon Kindle Free eBook
        --
        Title:Pro Git2 
        Body:Amazon Kindle Free eBook


   Update [02/06/2018]: After adding command function in yargs: Help is Available.

     a. Command : node app.js --help
        Result:

        Commands:
          add     Add a new note
          list    List of all notes
          read    Read a Note
          remove  Remove an existing note

        Options:
          --help  Show help

     b. Command: node app.js add --help
        Result:

        app.js add

        Options:
          --help       Show help                              [boolean]
          --title, -t  Title of note                         [required]
          --body, -b   Body of the new note                  [required]
