interface ContentSectionProps {
  title: string; // The title of the content section
  children: React.ReactNode; // The content to be displayed within the section
}

// ContentSection component: A reusable component for displaying a section with a title and content.
export function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <div className="w-full px-4 py-5"> {/* Added padding for consistency */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {title}
      </h1>
      <div className="text-gray-600 leading-relaxed whitespace-pre-line">
        {children}
      </div>
    </div>
  );
}
