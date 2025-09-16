import { writeFile } from "fs/promises";
import path from "path";
import { getAppUrl } from "@/lib/env";

const componentsConfig = {
  $schema: "https://ui.shadcn.com/schema.json",
  style: "new-york",
  rsc: true,
  tsx: true,
  tailwind: {
    config: "",
    css: "src/styles/globals.css",
    baseColor: "zinc",
    cssVariables: true,
    prefix: "",
  },
  aliases: {
    components: "@/components",
    utils: "@/lib/utils",
    ui: "@/components/ui",
    lib: "@/lib",
    hooks: "@/hooks",
  },
  iconLibrary: "lucide",
  registries: {
    "@pure-ui/components": `${getAppUrl()}/r/pure-ui/components/{name}.json`,
  },
};

async function generateComponentsJson() {
  const configPath = path.join(process.cwd(), "components.json");

  console.log(`🔧 Generating components.json for ${process.env.NODE_ENV}`);
  console.log(
    `📍 Registry URL: ${getAppUrl()}/r/pure-ui/components/{name}.json`
  );

  await writeFile(configPath, JSON.stringify(componentsConfig, null, 2));
  console.log("✅ components.json generated successfully");
}

generateComponentsJson().catch(console.error);
