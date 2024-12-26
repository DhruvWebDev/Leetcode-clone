import CodeTab from '@/components/code-about-tab';
import { EditorComponent } from '@/components/Code/editor';
import { TestTab } from '@/components/test-tab';

export default function App() {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto,1fr,auto] gap-4 h-screen p-4">
      {/* Description Section */}
      <div className="col-span-1 row-span-3 bg-gray-100 p-4 rounded-lg shadow overflow-y-auto">
       <CodeTab />
      </div>

      {/* Editor Section */}
      <div className="col-span-3 row-start-1 row-end-2 flex justify-end items-start">
        <div className="w-full h-[70vh] bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <EditorComponent />
        </div>
      </div>

      {/* Test Case Section */}
      <div className="col-span-3 row-start-2 bg-gray-100 p-4 rounded-lg shadow flex items-center justify-between">
       <TestTab />
      </div>
    </div>
  );
}
