import { useState } from "react";
import { HfInference } from "@huggingface/inference";

const useImageGeneration = () => {
  const [imageBase64, setImageBase64] = useState('');

  const generateImage = async (promptText: string) => {
    try {
      const inference = new HfInference("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");
      const imageBlob = await inference.textToImage({
        model: "Yntec/HyperRealism",
        inputs: promptText,
        parameters: {
          negative_prompt: "blurry",

        },
      });

      const imageBuffer = await imageBlob.arrayBuffer();
      const newImageBase64 = Buffer.from(imageBuffer).toString("base64");
      setImageBase64(newImageBase64);
    } catch (error) {
      console.error("Error al generar la imagen:", error);
    }
  };

  return { imageBase64, generateImage };
};

export default useImageGeneration;
