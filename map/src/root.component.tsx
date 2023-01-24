import {Content} from "./component/content";
import {ResponsiveAppBar} from "./component/navbar";

export default function Root() {
  return (
      <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Content></Content>
      </div>
  );
}

