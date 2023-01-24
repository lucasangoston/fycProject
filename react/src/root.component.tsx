import {ResponsiveAppBar} from "./component/navbar";
import {Content} from "./component/content";

export default function Root() {
  return (
      <div>
          <ResponsiveAppBar></ResponsiveAppBar>
          <Content></Content>
      </div>
  );
}
