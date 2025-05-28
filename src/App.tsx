import './App.css'
// Component for creating resizable panel groups
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/molecules/resizable'
// import { Table, TableBody, TableCell, TableRow } from '@/components/molecules/table'; // No longer directly used
// import { Progress } from "@/components/atoms/progress" // No longer directly used
// import { FcCommandLine } from "react-icons/fc"; // No longer directly used
// import { Card, CardContent } from '@/components/molecules/card'; // No longer directly used
import { SortableDynamicOverlayDemo } from '@/extra_skills'; // Component for displaying a sortable list with dynamic overlay
import { AppSidebar } from '@/components/organisms/app-sidebar'; // Main application sidebar
import { SidebarProvider } from '@/components/molecules/sidebar'; // Context provider for sidebar state
import { PortfolioCarousel } from '@/components/organisms/PortfolioCarousel'; // Carousel for portfolio items
// import { DialogDemo } from '@/components/organisms/hireMe'; // No longer directly used, part of HeroCard
import { Toaster } from "@/components/molecules/sonner" // Component for displaying toast notifications
import { ProfileSidebar } from '@/components/organisms/ProfileSidebar'; // Sidebar displaying profile information
import { HeroCard } from '@/components/organisms/HeroCard'; // Card component for the hero section
import { ContentSection } from '@/components/molecules/ContentSection'; // Reusable content section component
import { EducationSection } from '@/components/organisms/EducationSection'; // Section displaying education details

// Main application component
function App() {

  return (
    <>
     {/* Toaster for displaying notifications */}
     <Toaster />
      {/* Resizable panel group for the main layout */}
      <ResizablePanelGroup direction="horizontal" className="rounded-lg border md:min-w-[450px] ">
        {/* Left resizable panel for the profile sidebar */}
        <ResizablePanel className="w-2" style={{backgroundColor: '#e8f8f5'}} defaultSize={25}>
            <ProfileSidebar />
        </ResizablePanel>
        
        {/* Handle for resizing panels */}
        <ResizableHandle withHandle />
        {/* Right resizable panel for the main content */}
        <ResizablePanel
          className="overflow-auto" // Ensures content scrolls if it overflows
          style={{backgroundColor: '#f0f3f4'}}
          defaultSize={75}
        >
          {/* Main content wrapper for the right panel */}
          <div className="flex flex-col items-center w-full gap-3"> {/* Removed justify-center and h-full */}
            <HeroCard />
            {/* Section for displaying knowledge and skills */}
            <ContentSection title="My Knowledge">
              {`Backend (Spring Boot, Go, FastAPI), frontend (React, Next.js), databases (MongoDB, Oracle), 
              and cloud tools (Vercel, Docker). Proficient in REST APIs, authentication systems (JWT), and 
              machine learning workflows. Actively exploring DevOps, serverless architectures, and agile 
              practices.`}
            </ContentSection>
          </div>
          {/* Section for sortable dynamic overlay demo */}
          <div className="py-5 px-4"> 
            <SortableDynamicOverlayDemo/>
          </div>
          {/* Section for displaying education */}
          <EducationSection /> 
          {/* Section for displaying portfolio */}
          <ContentSection title="Portfolio">
            <PortfolioCarousel/>
          </ContentSection>
        </ResizablePanel>
      </ResizablePanelGroup>
      {/* SidebarProvider for the collapsible application sidebar, initially hidden and not occupying space */}
              <SidebarProvider  
    className="h-0 w-0 overflow-hidden" // Correcto para que no ocupe espacio en el flujo
    style={{
      "--sidebar-width": "4rem" // This defines the width of the sidebar when collapsed (icon-only)
    } as React.CSSProperties & Record<string, any>}
>
      {/* The actual application sidebar component */}
      <AppSidebar />
    </SidebarProvider>

    </>
  )
}

export default App