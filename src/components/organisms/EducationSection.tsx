import { Card, CardContent } from "@/components/molecules/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/molecules/table";
import { ContentSection } from "@/components/molecules/ContentSection";

interface EducationEntry {
  institution: string; // Name of the educational institution
  degree: string; // Degree or certification obtained
  duration: string; // Duration of study or period of attendance
  description: string; // Brief description of the program or achievements
}

// Array of education entries to be displayed
const educationHistory: EducationEntry[] = [
  {
    institution: "University Of Antioquia",
    degree: "System Engineering Career",
    duration: "Feb 2019 - Dec 2025",
    description:
      "Currently serving as a Programming Assistant, developing backend solutions and automation tools to streamline workflows. Focused on applying software architecture principles and security best practices learned through coursework to deliver efficient, scalable systems.",
  },
];

// EducationSection component: Displays a list of educational qualifications.
export function EducationSection() {
  return (
    <ContentSection title="Education">
      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
        {`B.S. in Systems Engineering (2025 Expected)
University of Antioquia, Colombia`}
      </p>
      <Card className="mx-4 my-2 mt-6"> {/* Added mt-6 for spacing */}
        <CardContent>
          <Table>
            <TableBody>
              {educationHistory.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell> 
                    <h2 className="text-lg font-semibold text-gray-900">{entry.institution}</h2>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-gray-700">Student</span>
                      <span className="bg-yellow-400 text-white text-sm px-2 py-1 rounded-md">
                        {entry.duration}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="h-auto whitespace-normal">
                    <div className="w-full text-left">
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">
                        {entry.degree}
                      </h2>
                      <p className="text-sm text-gray-500 leading-relaxed break-words">
                        {entry.description}
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </ContentSection>
  );
}
