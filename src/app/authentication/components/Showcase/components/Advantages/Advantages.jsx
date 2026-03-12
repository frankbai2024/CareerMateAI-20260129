import Coach from "./components/Coach";
import PoweredByAI from "./components/PoweredByAI";
import Card from "./components/Card";

const Advantages = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex *:flex-1 gap-4">
      <Card title="People have their own coach">
        <Coach />
      </Card>

      <Card title="Powered by AI">
        <PoweredByAI />
      </Card>
    </div>
  );
}

export default Advantages;