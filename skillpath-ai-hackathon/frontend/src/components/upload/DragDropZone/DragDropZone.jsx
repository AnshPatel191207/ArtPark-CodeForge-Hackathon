import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, File as FileIcon, X, CheckCircle } from 'lucide-react';
import styles from './DragDropZone.module.css';

export const DragDropZone = ({ title, accept, onFileDrop, file, onRemove }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length > 0) {
      onFileDrop(acceptedFiles[0]);
    }
  }, [onFileDrop]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1,
    multiple: false
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      
      {!file ? (
        <div 
          {...getRootProps()} 
          className={`${styles.dropzone} ${isDragActive ? styles.active : ''} ${isDragReject ? styles.reject : ''}`}
        >
          <input {...getInputProps()} />
          <div className={styles.iconContainer}>
            <UploadCloud size={32} className={styles.icon} />
          </div>
          <p className={styles.textPrimary}>
            <span className={styles.linkText}>Click to upload</span> or drag and drop
          </p>
          <p className={styles.textSecondary}>PDF, DOCX, or JSON (max. 10MB)</p>
        </div>
      ) : (
        <div className={styles.filePreview}>
          <div className={styles.fileIcon}>
            <FileIcon size={24} />
          </div>
          <div className={styles.fileInfo}>
            <p className={styles.fileName}>{file.name}</p>
            <p className={styles.fileSize}>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
          <div className={styles.fileStatus}>
            <CheckCircle size={18} className={styles.successIcon} />
            <button className={styles.removeBtn} onClick={onRemove} aria-label="Remove file">
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
