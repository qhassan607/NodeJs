const {readFile, writeFile}=require('fs')

readFile('./GFather/first.txt','utf8',(err,result)=>
    {
        if(err)
        {
            console.log(err)
            return;
        }
        const first= result;

        readFile('./GFather/second.txt','utf8',(err,result)=>
                {
                    if(err)
                    {
                        console.log(err)
                        return;
                    }
                    const second= result;
                     writeFile(
                        './GFather/resultasync.txt',
                        `The async merged file contains:${first}, ${second}`,
                        (err,result)=>{
                            if(err){
                                console.log(err)
                                return;
                            }
                            console.log(result)
                        }
                     )   
                }
            )
    }
)