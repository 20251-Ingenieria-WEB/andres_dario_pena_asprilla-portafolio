import { Card, CardContent } from "@/components/molecules/card";
import { DialogDemo } from "./hireMe"; // Dialog component for "Hire Me" functionality

// HeroCard component: Displays the main hero section with a profile picture, name, title, social links, and a "Hire Me" button.
export function HeroCard() {
  return (
    <Card className="mt-5 mx-4">
      <CardContent>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Sección de texto */}
          <div className="md:w-[55%] mb-8 md:mb-0 text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Andrés Peña
            </h1>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              Developer
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
              {`Analytical and motivated Systems Engineering student skilled in backend development, API design,
               and scalable solutions. Passionate about continuous learning and applying emerging technologies 
               to solve complex challenges. Maintain a disciplined mindset through sports and fitness, enhancing 
               focus in technical projects.`}
            </p>
            <DialogDemo />
          </div>

          <div className="md:w-[40%] flex justify-center">
            <img
              src="/img body.png"
              alt="Profile illustration"
              className="w-full max-w-[400px] h-auto"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
