"use client";

import { useState, useEffect, useRef } from "react";
import auth from "@/app/apis/auth";
import { toast } from "sonner";

const ResumeSection = () => {
  const [resumes, setResumes] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef(null);

  const fetchResumes = async () => {
    const res = await auth.get("/resumes");
    setResumes(res.data.data);
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    e.target.value = "";

    setUploading(true);
    setProgress(0);
    try {
      const {
        data: { data: upload },
      } = await auth.post("/upload/presigned-url", {
        contentType: file.type,
        category: "resume",
      });

      await uploadToS3(upload.url, upload.fields, file, setProgress);

      await auth.post("/resumes", {
        fileKey: upload.fileKey,
        fileName: file.name,
      });
      await fetchResumes();
      toast.success("Resume uploaded");
    } catch (err) {
      toast.error(err.response?.data?.message ?? "Upload failed");
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  const handleDelete = async (id) => {
    try {
      await auth.delete(`/resumes/${id}`);
      await fetchResumes();
    } catch {
      toast.error("Failed to delete");
    }
  };

  const resume = resumes[0];

  return (
    <div className="px-3 pt-4">
      <p className="text-xs font-medium text-gray-400 mb-2">My Resume</p>

      {resume && (
        <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 text-sm mb-2">
          <span className="flex-1 truncate text-gray-700">{resume.fileName}</span>
          <button
            onClick={() => handleDelete(resume._id)}
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            🗑
          </button>
        </div>
      )}

      <button
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="w-full flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-gray-200 py-2 text-xs text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-colors disabled:opacity-50"
      >
        ↑ {resume ? "Upload other resume" : "Upload resume"}
      </button>

      {uploading && (
        <div className="mt-2 h-1 rounded-full bg-gray-100">
          <div
            className="h-1 rounded-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

function uploadToS3(url, fields, file, onProgress) {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    Object.entries(fields).forEach(([k, v]) => form.append(k, v));
    form.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable)
        onProgress(Math.round((e.loaded / e.total) * 100));
    };
    xhr.onload = () =>
      xhr.status < 300 ? resolve() : reject(new Error("S3 upload failed"));
    xhr.onerror = () => reject(new Error("Network error"));
    xhr.send(form);
  });
}

export default ResumeSection;
