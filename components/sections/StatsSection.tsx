import { statsData } from "@/data";
import StatComponent from "../ui/StatComponent";
import Section from "../utils/Section";

export default function StatsSection() {
  const data = statsData;

  return (
    <Section className="p-0 lg:p-0">
      <div className="p-6 mb-14 rounded-3xl md:p-8 lg:p-12 bg-accent-600">
        <div className="flex flex-wrap gap-y-8">
          {data.map((stat, index) => (
            <StatComponent key={index} value={stat.value} text={stat.text} />
          ))}
        </div>
      </div>
    </Section>
  );
}
