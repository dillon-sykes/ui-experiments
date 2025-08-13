"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { RiUploadLine, RiFileTextLine, RiCheckLine, RiErrorWarningLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

type UploadStatus = "idle" | "uploading" | "success" | "error";

export function ResumeUpload() {
  const [isOpen, setIsOpen] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile(file);
      setUploadStatus("uploading");
      setUploadProgress(0);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploadStatus("success");
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  const resetUpload = () => {
    setUploadStatus("idle");
    setUploadProgress(0);
    setUploadedFile(null);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (uploadStatus === "success") {
      setTimeout(resetUpload, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-sm">
          <RiUploadLine className="mr-2" size={16} />
          Upload Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Your Resume</DialogTitle>
          <DialogDescription>
            Upload your resume to enable AI-powered job matching. Supported formats: PDF, DOC, DOCX, TXT (max 10MB).
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {uploadStatus === "idle" && (
            <div
              {...getRootProps()}
              className={cn(
                "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                isDragActive
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50 hover:bg-accent/50"
              )}
            >
              <input {...getInputProps()} />
              <RiFileTextLine className="mx-auto mb-4 text-muted-foreground" size={48} />
              {isDragActive ? (
                <p className="text-sm text-muted-foreground">Drop your resume here...</p>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Drag & drop your resume here</p>
                  <p className="text-xs text-muted-foreground">or click to browse files</p>
                </div>
              )}
            </div>
          )}

          {uploadStatus === "uploading" && uploadedFile && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <RiFileTextLine className="text-primary" size={24} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{uploadedFile.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            </div>
          )}

          {uploadStatus === "success" && uploadedFile && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 border border-emerald-200 bg-emerald-50 rounded-lg">
                <RiCheckLine className="text-emerald-600" size={24} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-emerald-900 truncate">{uploadedFile.name}</p>
                  <p className="text-xs text-emerald-700">Successfully uploaded and processed</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleClose} className="flex-1">
                  Continue to Dashboard
                </Button>
                <Button variant="outline" onClick={resetUpload}>
                  Upload Another
                </Button>
              </div>
            </div>
          )}

          {uploadStatus === "error" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 border border-red-200 bg-red-50 rounded-lg">
                <RiErrorWarningLine className="text-red-600" size={24} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-900">Upload failed</p>
                  <p className="text-xs text-red-700">Please try again or contact support</p>
                </div>
              </div>
              <Button variant="outline" onClick={resetUpload} className="w-full">
                Try Again
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}