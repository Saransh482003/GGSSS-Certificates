import *  as fs from "fs"
import path from "path"
export default async function handler(req, res) {
  try{
    const { teacher } = req.query;
    const filePath = path.join(process.cwd(),"JSONs","GGSSS_Certificates.json")
    const data = await fs.promises.readFile(filePath,"utf-8")
    const jsonData = JSON.parse(data)
    if (teacher != "all"){
      let finalData = []
      for (let i of jsonData){
        if (i["Teacher_Name"]==teacher){
          finalData.push(i)
        }
      }
      res.status(200).json(finalData)
    }
    else{
      res.status(200).json(JSON.parse(data))
    }
    
  }
  catch (error){
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } 
}