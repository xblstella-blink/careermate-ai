import Card from "./components/Card";
import Coach from "./components/Coach";
import PoweredByAi from "./components/PoweredByAi";

const Advantages = () => (
  <div className="absolute bottom-0 left-0 right-0 flex *:flex-1 gap-4 ">
    <Card title="People find their own coach">
      <Coach />
    </Card>
    <Card title="Powered by AI">
      <PoweredByAi />
    </Card>
  </div>
);

export default Advantages;
