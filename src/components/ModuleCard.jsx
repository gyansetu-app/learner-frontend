import { Image, Card, CardBody, CardHeader, Progress } from "@heroui/react";

function ModuleCard({ card }) {
  return (
    <Card className="relative min-w-[200px] max-w-[250px] overflow-hidden">
      {/* Overlay text (top area) */}
      <CardHeader className="absolute z-10 top-2 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          {card.title}
        </p>
        <h4 className="text-white font-medium text-large">{card.desc}</h4>
      </CardHeader>

      {/* Card background image */}
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={card.img}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />

      {/* Progress bar pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-2">
        <Progress
          classNames={{
            base: "w-full pb-2 px-2",
            track: "drop-shadow-md ",
            indicator: "bg-linear-to-r from-pink-500 to-yellow-500",
          }}
          value={card.progress}
        />
      </div>
    </Card>
  );
}

export default ModuleCard;
