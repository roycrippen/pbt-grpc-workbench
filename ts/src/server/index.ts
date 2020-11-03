import { ExampleHandler } from "./ExampleHandler";

main().catch(async (e) => {
    console.error(e);
    process.exit(1);
});

async function main(): Promise<void> {
    new ExampleHandler('0.0.0.0', 50052);
}

