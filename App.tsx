import Home from "@src/components/Home";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <Home />
    </TamaguiProvider>
  );
}
