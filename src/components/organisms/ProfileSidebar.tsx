import { Table, TableBody, TableCell, TableRow } from '@/components/molecules/table';
import { Progress } from "@/components/atoms/progress";
import { FcCommandLine } from "react-icons/fc";

// ProfileSidebar component: Displays the profile information in the sidebar, including an image, name, title, and social links.
export function ProfileSidebar() {
  return (
    <div className="flex flex-col items-center w-full gap-5 pt-8">
      <div className="flex items-center justify-center">
        <img src="/img side bar.png" alt="Sidebar visual aid" />
      </div>
      <div>
        Andrés Peña
      </div>
      <div>
        Software engineer
      </div>
      <div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="left">Email:</TableCell>
              <TableCell align="right">andresdario.2001@gmail.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Phone:</TableCell>
              <TableCell align="right">+57 3126138758</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Residence:</TableCell>
              <TableCell align="right">Medellín, Colombia</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Freelance:</TableCell>
              <TableCell align="right">Available</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <span className="text-sm">Lenguages</span>
      </div>
      <div className="w-full px-4 py-2 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm mr-2">English</span>
          <div className="flex-grow">
            <Progress value={80} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm mr-2">Spanish</span>
          <div className="flex-grow">
            <Progress value={100} />
          </div>
        </div>
      </div>
      <div>
        <span className="text-sm">Programming Languages</span>
      </div>
      <div className="w-full px-4 py-2">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="text-sm pr-2 py-1 text-left">Java</td>
              <td className="w-full py-1 text-right"><Progress value={70} /></td>
            </tr>
            <tr>
              <td className="text-sm pr-2 py-1 text-left">TypeScript</td>
              <td className="w-full py-1 text-right"><Progress value={90} /></td>
            </tr>
            <tr>
              <td className="text-sm pr-2 py-1 text-left">JavaScript</td>
              <td className="w-full py-1 text-right"><Progress value={100} /></td>
            </tr>
            <tr>
              <td className="text-sm pr-2 py-1 text-left">Python</td>
              <td className="w-full py-1 text-right"><Progress value={90} /></td>
            </tr>
            <tr>
              <td className="text-sm pr-2 py-1 text-left">Go</td>
              <td className="w-full py-1 text-right"><Progress value={80} /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <span className="text-sm">Frameworks</span>
      </div>
      {/* Wrapper for all framework items to control spacing */}
      <div className="w-full px-4 flex flex-col space-y-1">
        <div className="flex items-center py-1">
          <FcCommandLine className="mr-1"/>
          <span className="text-sm">Flask, FastAPI,Django</span>
        </div>
        <div className="flex items-center py-1">
          <FcCommandLine className="mr-1"/>
          <span className="text-sm">Next,React, Express</span>
        </div>
        <div className="flex items-center py-1">
          <FcCommandLine className="mr-1"/>
          <span className="text-sm">Springboot</span>
        </div>
        <div className="flex items-center py-1">
          <FcCommandLine className="mr-1"/>
          <span className="text-sm">Golang</span>
        </div>
        <div className="flex items-center py-1">
          <FcCommandLine className="mr-1"/>
          <span className="text-sm">Mongoose, Prisma</span>
        </div>
      </div>
    </div>
  );
}
