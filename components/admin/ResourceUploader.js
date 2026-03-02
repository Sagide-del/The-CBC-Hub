import { useState } from 'react';

export default function ResourceUploader({ onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    grade: '',
    subject: '',
    price: '',
    file: null,
    preview: null
  });
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Resource uploaded successfully!');
    onClose();
  };

  const grades = ['PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Form 1', 'Form 2', 'Form 3', 'Form 4', 'DIY', 'Teacher Resource'];
  const subjects = ['Mathematics', 'English', 'Kiswahili', 'Science', 'Biology', 'Chemistry', 'Physics', 'History', 'Geography', 'CRE', 'IRE', 'Business', 'Agriculture', 'Computer', 'Art & Craft', 'Music'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b sticky top-0 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Upload New Resource</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block font-medium mb-2">Resource Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full p-3 border rounded-lg"
              placeholder="e.g., Biology - Unconditional Reflex Actions"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2">Description</label>
            <textarea
              rows="3"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full p-3 border rounded-lg"
              placeholder="Brief description of the resource..."
            />
          </div>

          {/* Grade and Subject */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Grade/Level *</label>
              <select
                required
                value={formData.grade}
                onChange={(e) => setFormData({...formData, grade: e.target.value})}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select Grade</option>
                {grades.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2">Subject</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select Subject</option>
                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          {/* Price and Category */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Price (KSh) *</label>
              <input
                type="number"
                required
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full p-3 border rounded-lg"
                placeholder="0 = Free"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Category</label>
              <select className="w-full p-3 border rounded-lg">
                <option>Digital Resource</option>
                <option>DIY Kit Instructions</option>
                <option>Teacher Resource</option>
                <option>Past Paper</option>
              </select>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block font-medium mb-2">File Upload *</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
                accept=".pdf,.doc,.docx,.ppt,.pptx"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer block"
              >
                <span className="text-4xl block mb-3">📁</span>
                {formData.file ? (
                  <p className="text-green-600">Selected: {formData.file.name}</p>
                ) : (
                  <>
                    <p className="font-medium">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500 mt-1">PDF, DOC, PPT (Max 50MB)</p>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Preview Image */}
          <div>
            <label className="block font-medium mb-2">Preview Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Bloom's Taxonomy */}
          <div>
            <label className="block font-medium mb-2">Bloom's Taxonomy Levels</label>
            <div className="grid grid-cols-3 gap-2">
              {['Remember', 'Understand', 'Apply', 'Analyze', 'Evaluate', 'Create'].map(level => (
                <label key={level} className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-sm">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <button
              type="submit"
              disabled={uploading}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition disabled:bg-gray-400"
            >
              {uploading ? 'Uploading...' : 'Upload Resource'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
