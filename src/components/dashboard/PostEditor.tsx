import { Editor } from "../../pages/Editor";

interface PostEditorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PostEditor({ isOpen, onClose }: PostEditorProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        ×
      </button>
      <Editor />
    </div>
  );
}
