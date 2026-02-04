import Card from "./components/Card";
import Coach from "./components/Coach";
import PoweredByAi from "./components/PoweredByAi";

const Advantages = () => {
  return (
    <div className="absolute bottom-8 left-8 right-8 flex *:flex-1 gap-4 ">
      <Card title="People find their own coach">
        <Coach />
      </Card>
      <Card title="Powered by AI">
        <PoweredByAi />
      </Card>
    </div>
  );
};

export default Advantages;
