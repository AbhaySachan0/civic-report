import React, { useState } from 'react';
import {
  Camera,
  MapPin,
  Upload,
  CheckCircle,
  Loader2,
  Navigation,
  FileText,
  AlertCircle,
} from 'lucide-react';

interface FormData {
  title: string;
  category: string;
  description: string;
  photo: File | null;
  location: {
    lat: number;
    lng: number;
    address: string;
  } | null;
}

export default function FileComplaint({ language }: { language: 'hi' | 'en' }) {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    category: '',
    description: '',
    photo: null,
    location: null,
  });

  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [complaintId, setComplaintId] = useState('');
  const [showMap, setShowMap] = useState(false);

  const categories = language === 'hi'
    ? [
        'सड़क और बुनियादी ढांचा',
        'स्ट्रीट लाइटिंग',
        'कचरा संग्रह',
        'जल आपूर्ति',
        'यातायात समस्याएँ',
        'सार्वजनिक सुरक्षा',
        'पार्क और मनोरंजन',
        'ध्वनि प्रदूषण',
        'अन्य',
      ]
    : [
        'Road & Infrastructure',
        'Street Lighting',
        'Garbage Collection',
        'Water Supply',
        'Traffic Issues',
        'Public Safety',
        'Parks & Recreation',
        'Noise Pollution',
        'Other',
      ];

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleInputChange('photo', file);
      const reader = new FileReader();
      reader.onload = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleInputChange('photo', file);
      const reader = new FileReader();
      reader.onload = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleLocationDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            address: `${position.coords.latitude.toFixed(
              4
            )}, ${position.coords.longitude.toFixed(4)}`,
          };
          handleInputChange('location', location);
        },
        () => {
          const mockLocation = {
            lat: 28.6139,
            lng: 77.209,
            address: language === 'hi' ? 'नई दिल्ली, भारत' : 'New Delhi, India',
          };
          handleInputChange('location', mockLocation);
        }
      );
    }
  };

  const handleMapClick = () => {
    setShowMap(!showMap);
    if (!formData.location) {
      const mockLocation = {
        lat: 28.6139,
        lng: 77.209,
        address:
          language === 'hi'
            ? 'चयनित स्थान, नई दिल्ली'
            : 'Selected Location, New Delhi',
      };
      handleInputChange('location', mockLocation);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const id = `CMP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setComplaintId(id);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleTrackComplaint = () => {
    alert(
      `${language === 'hi' ? 'शिकायत ट्रैक कर रहे हैं:' : 'Tracking complaint:'} ${
        complaintId
      }`
    );
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      description: '',
      photo: null,
      location: null,
    });
    setPhotoPreview('');
    setIsSubmitted(false);
    setComplaintId('');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        {/* Success Message */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {language === 'hi'
                ? 'शिकायत सफलतापूर्वक दर्ज की गई!'
                : 'Complaint Submitted Successfully!'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {language === 'hi'
                ? 'आपकी नागरिक समस्या दर्ज कर ली गई है और संबंधित विभाग द्वारा समीक्षा की जाएगी।'
                : 'Your civic issue has been logged and will be reviewed by the appropriate department.'}
            </p>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-8">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {language === 'hi' ? 'आपकी शिकायत आईडी' : 'Your Complaint ID'}
              </p>
              <p className="text-2xl font-mono font-bold text-blue-700 dark:text-blue-400">
                {complaintId}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleTrackComplaint}
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Navigation className="w-5 h-5" />
                <span>
                  {language === 'hi'
                    ? 'मेरी शिकायत ट्रैक करें'
                    : 'Track My Complaint'}
                </span>
              </button>
              <button
                onClick={resetForm}
                className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 border border-gray-200 dark:border-gray-600"
              >
                {language === 'hi'
                  ? 'नई शिकायत दर्ज करें'
                  : 'File Another Complaint'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            {language === 'hi' ? 'डिजिटल इंडिया पहल' : 'Digital India Initiative'}
          </div>
          <h1 className="text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-gray-100">
            <span className="text-blue-700 dark:text-blue-400">
              {language === 'hi' ? 'देखें।' : 'See.'}
            </span>{' '}
            <span className="text-orange-500 dark:text-orange-400">
              {language === 'hi' ? 'रिपोर्ट करें।' : 'Report.'}
            </span>
            <br />
            <span className="text-green-500 dark:text-green-400">
              {language === 'hi' ? 'समाधान पाएं।' : 'Resolve.'}
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            {language === 'hi'
              ? 'नागरिकों को सशक्त बनाना और नागरिक समस्याओं का समाधान करना। हजारों सामुदायिक सदस्यों के साथ जुड़ें जो वास्तविक बदलाव ला रहे हैं।'
              : 'Empowering citizens and resolving civic issues. Join thousands of community members driving real change.'}
          </p>
        </div>

        {/* Complaint Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 space-y-6"
        >
          {/* Complaint Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2"
            >
              {language === 'hi' ? 'शिकायत शीर्षक *' : 'Complaint Title *'}
            </label>
            <input
              type="text"
              id="title"
              required
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all duration-200"
              placeholder={
                language === 'hi'
                  ? 'संक्षेप में समस्या का वर्णन करें...'
                  : 'Briefly describe the issue...'
              }
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2"
            >
              {language === 'hi' ? 'श्रेणी *' : 'Category *'}
            </label>
            <select
              id="category"
              required
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all duration-200"
            >
              <option value="">
                {language === 'hi'
                  ? 'कृपया श्रेणी चुनें...'
                  : 'Select a category...'}
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2"
            >
              {language === 'hi' ? 'विवरण *' : 'Description *'}
            </label>
            <textarea
              id="description"
              required
              rows={4}
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all duration-200"
              placeholder={
                language === 'hi'
                  ? 'समस्या के बारे में विस्तृत जानकारी दें...'
                  : 'Provide detailed information about the issue...'
              }
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {language === 'hi' ? 'फोटो प्रमाण' : 'Photo Evidence'}
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200">
              {photoPreview ? (
                <div className="text-center">
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="max-h-48 mx-auto rounded-lg mb-4"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPhotoPreview('');
                      handleInputChange('photo', null);
                    }}
                    className="text-red-500 hover:text-red-600 text-sm font-medium"
                  >
                    {language === 'hi' ? 'फोटो हटाएँ' : 'Remove Photo'}
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <Camera className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <label
                        htmlFor="camera"
                        className="cursor-pointer bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <Camera className="w-4 h-4" />
                        <span>
                          {language === 'hi' ? 'फोटो खींचें' : 'Click Picture'}
                        </span>
                      </label>
                      <input
                        type="file"
                        id="camera"
                        accept="image/*"
                        capture="environment"
                        onChange={handleCameraCapture}
                        className="hidden"
                      />
                      <label
                        htmlFor="photo"
                        className="cursor-pointer bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 border border-gray-300 dark:border-gray-600"
                      >
                        <Upload className="w-4 h-4" />
                        <span>
                          {language === 'hi' ? 'फोटो अपलोड करें' : 'Upload Photo'}
                        </span>
                      </label>
                      <input
                        type="file"
                        id="photo"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      PNG, JPG {language === 'hi' ? '10MB तक' : 'up to 10MB'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Location Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {language === 'hi' ? 'स्थान *' : 'Location *'}
            </label>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleLocationDetect}
                  className="flex-1 bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 border border-blue-200 dark:border-blue-700"
                >
                  <Navigation className="w-5 h-5" />
                  <span>
                    {language === 'hi'
                      ? 'वर्तमान स्थान का उपयोग करें'
                      : 'Use Current Location'}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={handleMapClick}
                  className="flex-1 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 border border-gray-200 dark:border-gray-600"
                >
                  <MapPin className="w-5 h-5" />
                  <span>
                    {language === 'hi' ? 'मानचित्र पर चुनें' : 'Select on Map'}
                  </span>
                </button>
              </div>

              {formData.location && (
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-200 flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                  <span>{formData.location.address}</span>
                </div>
              )}

              {showMap && (
                <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                  [Map Placeholder]
                </div>
              )}
            </div>
          </div>

          {/* Transparency Notice */}
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg flex items-start space-x-3 border border-blue-200 dark:border-blue-700">
            <AlertCircle className="w-5 h-5 text-blue-700 dark:text-blue-300 mt-0.5" />
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {language === 'hi'
                ? 'आपकी शिकायत को पूर्ण पारदर्शिता के साथ ट्रैक किया जाएगा।'
                : 'Your complaint will be tracked with complete transparency.'}
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>
                    {language === 'hi' ? 'भेजा जा रहा है...' : 'Submitting...'}
                  </span>
                </>
              ) : (
                <span>
                  {language === 'hi'
                    ? 'शिकायत दर्ज करें'
                    : 'Submit Complaint'}
                </span>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
