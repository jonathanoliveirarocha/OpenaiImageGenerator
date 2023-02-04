const {Configuration, OpenAIApi} = require('openai')
const configuration = new Configuration({
    apiKey: '<CHAVE-API-AQUI>'
})
const openai = new OpenAIApi(configuration)

const generateImage = async (req, res)=>{
    const {prompt, size} = req.body
    const imageSize = size==='Pequena'?'256x256': size==='Média'?'512x512': '1024x1024' 

    try{
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: imageSize 
        })
        const imageUrl = response.data.data[0].url
        res.status(200).json({
            success: true, 
            data: imageUrl
        })

    } catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
        res.status(200).json({
            success: false, 
            error: 'A imagem não pôde ser gerada!'
        })
    }
}
module.exports = {generateImage}