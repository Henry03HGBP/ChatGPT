const API = process.DICCIONARY_API
export default async function handler(req, res) {
  // PUT, GET, POST, UPDATE, DELETE
   
   if (req.method === "DELETE"){
    return res.status(404).json({ error: "Method no allowed" })
   }

   if (req.method === "POST"){
    const { word } = req.body

    await fetch(`${API}/${word}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify({ word })
    })

   }


   if (req.method == 'GET') {
    res.status(200).json({ text: "Hello" })
   }
    try {
        
    } catch (err) {
       console.log(err)
       return res.status(500).json({ error: err.message }) 
    }
    res.status(200).json({ text: "Hola" })
  }