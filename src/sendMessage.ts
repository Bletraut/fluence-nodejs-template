import { sendEveryone } from './_aqua/export';
import { Fluence } from '@fluencelabs/fluence';
import { krasnodar } from '@fluencelabs/fluence-network-environment';

async function sendMessage(topic: string, msg: string) {
    await Fluence.start({
        connectTo: krasnodar[6],
    });

    await sendEveryone(topic, msg);

    await Fluence.stop();
}

const topic = "cellautomat";
const msg = process.argv[2];

sendMessage(topic, msg).catch(e=>console.log(e));