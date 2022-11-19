// É uma sdk com funcionalidades específicas do Stripe, poderia utilizar requisições HTTP
// Preciso desse serviço para consumir os dados na plataforma do stripe
import Stripe from "stripe";

// Posso pegar informações diretamente do package.json
import packageInfo from "../../package.json";

// Tive que fazer essa gambiarra pq o typescript identificava a env como undefined, mas deve ser string
const processEnv = (process.env.STRIPE_API_KEY ? process.env.STRIPE_API_KEY : "undefined")

export const stripe = new Stripe(

    processEnv,
    {
        apiVersion: "2022-11-15",
        appInfo: {
            name: packageInfo.name,
            version: packageInfo.version
        },
    }
);
