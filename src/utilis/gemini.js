// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
import { REACT_APP_GEMINI_API_KEY } from "./constants";


const GenerateResult = async () => {
    try {
        const genAI = new GoogleGenerativeAI(REACT_APP_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = "Write a story about a magic backpack.";
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    }
    catch(error){
        console.log("error generating message",error)
    }
}
const SearchResult = () => {
    return(
        <div>
            <button onClick={GenerateResult}>click me</button>
        </div>
    )
}
export default SearchResult

