import React, { useState } from "react";
import { Camera, MapPin, Upload, X } from "lucide-react";
import { translations, SupportedLang } from "../language";

interface FileComplaintProps {
  language: SupportedLang;
}

export default function FileComplaint({ language }: FileComplaintProps) {
  const t = translations[language];

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [location, setLocation] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [complaintId, setComplaintId] = useState<string | null>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPhotos([...photos, ...Array.from(event.target.files)]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setComplaintId("CMP" + Math.floor(Math.random() * 1000000));
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="py-20 text-center px-4">
        <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
          {t.complaint.successTitle}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {t.complaint.successMessage}
        </p>
        {complaintId && (
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
            <p className="font-semibold dark:text-gray-200">{t.complaint.complaintId}:</p>
            <p className="text-lg font-mono dark:text-gray-100">{complaintId}</p>
          </div>
        )}
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          {t.common.fileAnother}
        </button>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
          {t.common.digitalIndia}
        </span>
        <h2 className="text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          {t.common.see} {t.common.report} {t.common.resolve}
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Complaint Title */}
        <div>
          <label className="block mb-2 font-medium text-gray-800 dark:text-gray-200">
            {t.complaint.title}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            placeholder={t.complaint.titlePlaceholder}
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 font-medium text-gray-800 dark:text-gray-200">
            {t.complaint.category}
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100"
            required
          >
            <option value="">{t.complaint.selectCategory}</option>
            {t.complaint.categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium text-gray-800 dark:text-gray-200">
            {t.complaint.description}
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            placeholder={t.complaint.descriptionPlaceholder}
            required
          />
        </div>

        {/* Photo Evidence */}
        <div>
          <label className="flex items-center gap-2 mb-2 font-medium text-gray-800 dark:text-gray-200">
            <Camera className="w-5 h-5" />
            {t.complaint.photoEvidence}
          </label>
          <div className="flex flex-wrap gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Uploaded"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            <label className="flex items-center gap-2 px-4 py-2 border rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
              <Upload className="w-5 h-5" />
              {t.complaint.uploadPhoto}
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t.complaint.photoLimit}</p>
        </div>

        {/* Location */}
        <div>
          <label className="flex items-center gap-2 mb-2 font-medium text-gray-800 dark:text-gray-200">
            <MapPin className="w-5 h-5" />
            {t.complaint.location}
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 mb-2"
            placeholder="Enter location manually..."
            required
          />
          <div className="flex gap-2">
            <button
              type="button"
              className="flex-1 px-4 py-2 border rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200"
            >
              {t.complaint.useCurrentLocation}
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-2 border rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200"
            >
              {t.complaint.selectOnMap}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? t.common.submitting : t.common.submitComplaint}
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
            {t.complaint.transparencyNote}
          </p>
        </div>
      </form>
    </section>
  );
}
