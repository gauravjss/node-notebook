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

